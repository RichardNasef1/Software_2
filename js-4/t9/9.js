'use strict';

const calculation = document.querySelector('#calculation');
const button = document.querySelector('#start');
const result = document.querySelector('#result');

button.addEventListener('click', function() {

    const input = calculation.value;
    let answer;

    if (input.includes('+')) {
        const numbers = input.split('+');
        answer = Number(numbers[0]) + Number(numbers[1]);
    }

    else if (input.includes('-')) {
        const numbers = input.split('-');
        answer = Number(numbers[0]) - Number(numbers[1]);
    }

    else if (input.includes('*')) {
        const numbers = input.split('*');
        answer = Number(numbers[0]) * Number(numbers[1]);
    }

    else if (input.includes('/')) {
        const numbers = input.split('/');
        answer = Number(numbers[0]) / Number(numbers[1]);
    }

    result.textContent = answer;
});