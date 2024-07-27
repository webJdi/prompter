from flask import Flask, request, jsonify
import nltk
from nltk.corpus import wordnet
from flask_cors import CORS


app = Flask(__name__)
CORS(app)

nltk.download('wordnet')

@app.route('/improve', methods=['POST'])
def improve_prompt():
    data = request.json
    prompt = data.get('prompt', '')

    # Simple NLTK operation
    words = prompt.split()
    if words:
        synonyms = wordnet.synsets(words[0])
        if synonyms:
            lemmas = synonyms[0].lemmas()
            if lemmas:
                improved_prompt = prompt.replace(words[0], lemmas[0].name())
                return jsonify({'improved_prompt': improved_prompt})

    return jsonify({'improved_prompt': prompt})

if __name__ == '__main__':
    app.run(debug=True)
