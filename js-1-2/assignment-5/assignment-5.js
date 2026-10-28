'use strict';

const year = prompt('Give the year?');
if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
document.querySelector('#target').innerText = `${year} is a leap year`;
} else{
    console.log('is not leap');
}