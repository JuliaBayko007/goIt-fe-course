'use strict';
let userInput;
const numbers = [];
let total = 0;
let number;
let newNumbers;

do {
    userInput = prompt('Введите число!', '');
    for(let i = 0, max = numbers.length; i < max; i += 1) {
        number = Number(userInput);
        newNumbers.push(numbers[i]);
        
      }
  } while(userInput !== null);

  



console.log(newNumbers);