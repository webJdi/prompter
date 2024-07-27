from flask import Flask, request, jsonify
import nltk
from nltk.corpus import wordnet
from flask_cors import CORS
from textblob import TextBlob


app = Flask(__name__)
CORS(app)


nltk.download('wordnet')

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
    words = prompt.split()
    improved_words = []
    
    for word in words:
        synonyms = wordnet.synsets(word)
        if synonyms:
            lemmas = synonyms[0].lemmas()
            if lemmas:
                improved_words.append(lemmas[0].name())
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
