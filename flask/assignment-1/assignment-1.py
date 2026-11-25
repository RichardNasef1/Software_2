"use strict"
from flask import Flask

app = Flask(__name__)


@app.route("/prime_number/<int:number>")
def prime_number(number):

    is_prime = True

    if number < 2:
        is_prime = False
    else:
        for i in range(2, number):
            if number % i == 0:
                is_prime = False
                break

    return {
        "Number": number,
        "isPrime": is_prime
    }


if __name__ == "__main__":
    app.run(port=3000)