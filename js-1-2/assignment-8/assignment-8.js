'use strict';

const start = 100;
const end = 200;

function checkLeapYear(year){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
document.querySelector('#target').inne = `${year} is a leap year`;
} else{
    console.log('is not leap');
}
}