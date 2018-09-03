"use strict";
const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
let userInput = prompt ("Введите логин!", "");

const isLoginValid = function(login) {
  
  if (login.length < 4 || login.length > 16) {
   alert ('Ошибка! Логин должен быть от 4 до 16 символов');
   return false;
  } else {
   return true;
 };
};

const isLoginUnique = function(allLogins, login) {
  
  if (logins.includes(userInput)) {
    alert("Такой логин уже используется!");
    return false;
    } else {
    return true;
  };

};


const addLogin = function(login) {
 if(isLoginValid(userInput) && isLoginUnique(logins, userInput)) { 
  logins.push(login);
  alert('Логин успешно добавлен!'); 
};
};

 addLogin(userInput);
