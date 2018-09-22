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

/*const passwords = ['qwerty', '111qwe', '123123', 'r4nd0mp4zzw0rd'];
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
}*/
/*
const scientist = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];
// 1) отримати масив вчених що народилися в 19 ст
const getScientistCentury = scientist.filter(el => el.year >= 1800);
console.log('getScientistCentury: ', getScientistCentury);

// 2) знайти суму років скільки прожили всі вченні
const sumYear = scientist

.reduce((acc, el) => acc + (el.passed - el.year), 0);
console.log(sumYear);
// 3) Відсортувати вчених по алфавіту
const sortScientist = scientist.sort((a, b) => a.first > b.first ? 1 : -1);
console.log(sortScientist);

// 4) Відсортувати вчених по даті народження
const birthdayDate = scientist.sort((a, b) => a.year - b.year);
console.log(birthdayDate);
// 5) Відсортувати вчених по кількості прожитих років
const year = scientist
.map(el => el.passed - el.year)
.sort((a, b) => a - b);
console.log(year);

let result = scientist.sort((a, b) => ((a.passed - a.year) - (b.passed - b.year)));
console.log(result);
// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті
const century = scientist.filter(el => el.year < 1400 || el.year >= 1700);
console.log(century);

// 7) Знайти вченого який народився найпізніше.
const late = scientist.sort((a, b) => b.year - a.year);
console.log(late[0]);
// 8) Знайти рік народження Albert Einstein
const albert = scientist.find(el => el.first === 'Albert' && el.last === 'Einstein');
console.log(albert.year)
// 9) Знайти вчених прізвище яких починається на літеру С
const letter = scientist.filter(el => el.last.includes('C'))
console.log(letter)

let resultL = scientist.filter(el => el.last[0] === 'C');
console.log(result);
// 10) Видалити з масива всіх вчених імя яких починається на A
const nonA = scientist.filter(el => el.first)


reallyUniqueArr = arr.filter((item, pos, ar) => ar.indexOf(item) === pos)
*/

/*let animal = {
    canSleep: true,
    canEat: true,
    canBreathe: true,
}

let dog = {
    canBark: true,
    canBite: true,
    canJump: true,
}

let doberman = {
    canFind: true,
    canRun: true
}

let dog = Object.create(animal);
dog.canBark = true;
dog.canJump = true;
dog.canBite = true;

*/

function Tank(x, y, name, hp, armor, amunition, speed) {

     this.x = x;
       this.y = y;
       this.name = name;
       this.hp = hp;
       this.armor = armor;
       this.amunition = amunition;
       this.speed = speed;
       this.fire = function () {
         this.canFire() ? this.amunition -= 1 : prompt('Enter card number');
       };
       this.move = function (a, b) {
         this.x = a;
         this.y = b;
       };
       this.repair = function (size) {
         if (this.canRepair()) {
           if (this.hp + size > 100) {
             this.hp = 100;
           } else {
             this.hp += size;
           }
         } else {
           alert('you are have full hp')
         }
       };
       this.canFire = function () {
         return this.amunition > 0;
       };
       this.canRepair = function () {
         return this.hp < 100;
       };
     }
     let tiger = new Tank(10, 10, 'Tiger', 100, 100, 10, 50);
     let panzar = new Tank(20, 20, 'Panzar', 150, 50, 8, 80);
     let leopard = new Tank(30, 48, 'Leopard', 120, 30, 10, 100);
     console.log(tiger);
    console.log(panzar);
    console.log(leopard);


// homework5


 /*   const getAllSkills = (arr) => arr.reduce((acc, user) => acc + user.skills,[]);
//.filter((user, index,array) => array.indexOf(user) === index)
//.sort((a, b) => a.skills > b.skills)

console.log(getAllSkills(users));

const getUserNames = (arr) => arr.map( user => user.name);
const friendsCount = (arr) =>  
console.log(getUserNames(users));*/