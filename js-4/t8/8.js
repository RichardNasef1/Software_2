'use strict';

const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const operation = document.querySelector('#operation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function() {

    const number1 = Number(num1.value);
    const number2 = Number(num2.value);

    let answer;

    switch (operation.value) {
        case 'add':
            answer = number1 + number2;
            break;

        case 'sub':
            answer = number1 - number2;
            break;

        case 'multi':
            answer = number1 * number2;
            break;

        case 'div':
            answer = number1 / number2;
            break;
    }

    result.textContent = answer;
});