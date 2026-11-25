import json
from flask import Flask, request

app = Flask(__name__)


@app.route("/add")
def add_word():

    english = request.args.get("en")
    finnish = request.args.get("fi")

    if not english or not finnish:
        return {"error": "Missing English or Finnish word"}, 400

    with open("dictionary.json", encoding="utf-8") as file:
        dictionary = json.load(file)

    dictionary[english] = finnish

    with open("dictionary.json", "w", encoding="utf-8") as file:
        json.dump(dictionary, file, ensure_ascii=False, indent=2)

    return {
        "English": english,
        "Finnish": finnish,
        "message": "Word added successfully"
    }


if __name__ == "__main__":
    app.run(port=3000)
