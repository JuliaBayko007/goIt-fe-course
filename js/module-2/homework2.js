"use strict";
const numbers = [];
let total = 0;
let number;



while (number !== null) {
    
    number = prompt("Введите число! ", "");
    if (number === null) break;
    number = parseFloat(number);
   
    if (!Number.isNaN(number)) {
    numbers.push(number);
  } else {
    alert ('Было введено не число, попробуйте еще раз');
  };
}
  if (numbers.length !== 0) {
     for (let item of numbers) { 
        total = total + item;
        };
    }
  alert(`Общая сумма чисел равна ${total}`);







const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userInput;
let n;
do {
 userInput = prompt("Введите пароль!", ""); 
 n = attempts-=1; 
 if (userInput === null) break;
if (userInput = passwords.includes(userInput)) {
    alert ('Добро пожаловать!');
    break;
} else if (n === 0) {
    alert ("У вас закончились попытки, аккаунт заблокирован!");
} else {
   alert (`Неверный пароль, у вас осталось ${n} попыток`);
};

} while (userInput !== null && attempts !== 0);



