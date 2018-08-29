'use strict';
/*let userInput = prompt('Number', '');
while(number !== null){
number = Number(userInput); 
number = prompt('Number', '');
console.log(number);
}
for(let i = 0; i < numbers.length; i += 1) {
    total = total+numbers[i];
}
console.log(total);
////////////////////////////////////////////////////////////////////////
/*do {
 userInput = prompt("Введите число!", "");
 number = Number(userInput);
 numbers.push(number);
} while (userInput !== null);

console.log(numbers);

for(let i = 0; i < numbers.length; i += 1) {
    total = total+numbers[i];
}
console.log(total);*/

const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
let attempts = 3;
let userPassword = 1;

while (userPassword !== null && attempts >= 0) {
    if (passwords.includes(userPassword)) {
        alert ('Добро пожаловать!');
        break;
    } else {
        userPassword++;
        attempts--;
        alert (`Неверный пароль, у вас осталось ${n} попыток`);
    }
    alert ("У вас закончились попытки, аккаунт заблокирован!");
}
