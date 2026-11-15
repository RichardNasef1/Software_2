'use strict';

const target = document.querySelector('#target');

const firstItem = document.createElement('li');
firstItem.textContent = 'First item';

const secondItem = document.createElement('li');
secondItem.textContent = 'Second item';

const thirdItem = document.createElement('li');
thirdItem.textContent = 'Third item';

target.appendChild(firstItem);
target.appendChild(secondItem);
target.appendChild(thirdItem);

secondItem.classList.add('my-item');