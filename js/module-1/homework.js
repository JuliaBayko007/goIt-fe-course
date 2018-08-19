'use strict';
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
const userLogin = prompt ('Введите логин!');
const denied = 'Доступ запрещен!';
const canceled = 'Отменено пользователем!';
const welcome = 'Добро пожаловать!';

if (userLogin === null) {
   alert (canceled);
} else if (userLogin !== adminLogin) {
    alert (denied);
} else {
    const userPassword = prompt ('Введите пароль!');

    if (userPassword === null) {
        alert (canceled);
    } else if (userPassword === adminPassword) {
       alert (welcome);
    } else if (userPassword !== adminPassword) {
       alert (denied);
    };
}


const sharm = 15;
const hurgada = 25;
const taba = 6;
const max = Math.max(sharm, hurgada, taba);
//const placeNumber = Number.parseInt(prompt ('Введите количество мест!'));
const placeNumber = prompt ('Введите количество мест!');
const intPlaceNumber = Math.abs(parseInt(placeNumber));
let isConfirm;
console.log(placeNumber, intPlaceNumber, isNaN(placeNumber), isNaN(intPlaceNumber));

if (isNaN(intPlaceNumber)) {
    alert ('Ошибка ввода!');
};


switch (true) {
    case taba >= intPlaceNumber:
        isConfirm = confirm('Вы согласны быть в группе taba?') ? 'taba': null;
        break;

    case sharm >= intPlaceNumber:
        isConfirm = confirm('Вы согласны быть в группе sharm?') ? 'sharm': null;
        break; 

    case hurgada >= intPlaceNumber:
        isConfirm = confirm('Вы согласны быть в группе hurgada?') ? 'hurgada': null;
        break;  

    default:
    alert('Извините, столько местнет ни в одной группе!');

    if (isConfirm) {
        alert (`Приятного путешествия в группе ${isConfirm}`);
    } else {
        alert ('Нам очень жаль, приходите еще!')
    };

}
