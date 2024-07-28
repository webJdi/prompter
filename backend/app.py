from flask import Flask, request, jsonify
import nltk
from nltk.corpus import wordnet
from flask_cors import CORS
from textblob import TextBlob


app = Flask(__name__)
CORS(app)


nltk.download('wordnet')
nltk.download('punkt')

@app.route('/improve', methods=['POST'])
def improve_prompt():
    data = request.json
    prompt = data.get('prompt', '')

    # Improve vocabulary using NLTK
    improved_prompt = enhanceVocab(prompt)

    # Improve grammar and style using TextBlob
    improved_prompt = enhanceGramm(improved_prompt)

    return jsonify({'improved_prompt': improved_prompt})

def enhanceVocab(prompt):
    words = nltk.word_tokenize(prompt)
    improved_words = []

    for word in words:
        synonyms = wordnet.synsets(word)
        if synonyms:
            # Use the most common synonym that is not the original word
            lemma_names = synonyms[0].lemma_names()
            if lemma_names:
                best_synonym = next((syn for syn in lemma_names if syn != word), word)
                improved_words.append(best_synonym)
            else:
                improved_words.append(word)
        else:
            improved_words.append(word)

    return ' '.join(improved_words)

def enhanceGramm(prompt):
    blob = TextBlob(prompt)
    corrected_prompt = blob.correct()
    return str(corrected_prompt)

if __name__ == '__main__':
    app.run(debug=True)
