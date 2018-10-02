'use strict';

/*const findGreaterThan = (num, arr) => {
    const result = [];
  
    for (let i = 0, max = arr.length; i < max; i += 1) {
      if (arr[i] > num) {
        result.push(arr[i]);
      }
    }
  
    return result;
  };*/

  const findGreaterThan = (num, arr) => arr.filter(item => num < item);



  
  console.log( findGreaterThan(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
  console.log( findGreaterThan(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
  console.log( findGreaterThan(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]
  

 /* const multiplyBy = (num, arr) => {
    let result = [];
  
    for (let i = 0, max = arr.length; i < max; i += 1) {
      result.push(arr[i] * num);
    }
  
    return result;
  };
  */

  const multiplyBy = (num, arr) => arr.map(item => item * num);

  console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
  console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
  console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

  /*function summAllNumbers(...args) {
    let accumulator = 0;
  
    for (let i = 0, max = args.length; i < max; i += 1) {
      accumulator += args[i];
    }
  
    return accumulator;
  }*/

  const summAllNumbers = (...args) => args.reduce((acc, item) => acc + item, 0);

  console.log( summAllNumbers(1, 2, 3) ); // 6
  console.log( summAllNumbers(1, 2, 3, 4) ); // 10
  console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

  /*const findEvery = (num, arr) => {
    for (let i = 0, max = arr.length; i < max; i += 1) {
      if (arr[i] < num) {
        return false;
      }
    }
  
    return true;
  };*/

  const findEvery = (num, arr) => arr.every(item => item >= num);
  
  console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
  console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
  console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true

 /* const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];

  const getPropValues = (arr, prop) => arr.map(item => item.prop);
 // const getPropValues = (arr, prop) => arr.map(item => item.age);
 //const getPropValues = (arr, prop) => arr.map(item => item.isActive);
 

  
  // Вызовы функции для проверки
  console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']
  
  console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]
  
  console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
*/
  
/*const guests = [
    { name: 'Mango', inactiveDays: 15, isActive: true },
    { name: 'Poly', inactiveDays: 8, isActive: false },
    { name: 'Ajax', inactiveDays: 32, isActive: false },
    { name: 'Chelsey', inactiveDays: 85, isActive: true }
  ];
  const setGuestState = (arr, period) => arr.map(item => ({...item, isActive: item.inactiveDays < period}));
  
  // Вызовы функции для проверки
  console.log(
    setGuestState(guests, 10)
  ); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true
  
  console.log(
    setGuestState(guests, 20)
  ); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true
  
  console.log(
    setGuestState(guests, 50)
  ); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true*/

  /*const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];

  const getActiveGuests = (arr) => arr.filter(item => item.isActive);
  
  // Вызовы функции для проверки
  console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax*/

 /* const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
  ];
  
  const getGuestsOlderThan = (arr, age) => arr.filter(item => item.age > age);
  // Вызовы функции для проверки
  console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey
  
  console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]
  
  console.log(getGuestsOlderThan(guests, 55)); // []*/


  const guests = [
    { id: 1, name: 'Mango', age: 20 },
    { id: 2, name: 'Poly', age: 18 },
    { id: 3, name: 'Ajax', age: 30 },
    { id: 4, name: 'Chelsey', age: 45 }
  ];

  const getGuestById = (arr, id) => arr.find(item => item.id === id);
// Вызовы функции для проверки
console.log(
    getGuestById(guests, 3)
  ); // {id: 3, name: 'Ajax', age: 30}
  
  console.log(
    getGuestById(guests, 1)
  ); // {id: 1, name: 'Mango', age: 20}
  
  console.log(
    getGuestById(guests, 5)
  ); // undefined  

  const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
  };
  const summ = (object) => Object.values(object).reduce((acc, item) => acc + item, 0);
  console.log(summ(order)); // 150


  function User (name, isActive, age, friends) {
    this.name = name,
     this.isActive = isActive,
     this.age = age,
     this.friends = friends,
      this.getUserInfo = function () {
      console.log( `User ${this.name} is ${this.age} years old and has ${this.friends} friends`)
    }
 };
 
 const Mango = new User ("Mango", true, 24, 5);
 Mango.getUserInfo();
 console.log(Mango);
 console.log(Mango.friends);