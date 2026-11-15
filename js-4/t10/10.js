'use strict';

const form = document.querySelector('form');
const firstName = document.querySelector('input[name="firstname"]');
const lastName = document.querySelector('input[name="lastname"]');
const target = document.querySelector('#target');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    target.textContent = `Your name is ${firstName.value} ${lastName.value}`;
});