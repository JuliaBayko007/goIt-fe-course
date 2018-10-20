'use strict';
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
  };

const entries = Object.entries(user);
const keys = Object.keys(user);
  user.mood = 'happy';
  user.hobby = 'js';
  delete user.premium;

  for(const key in user) {
    console.log('value: ', user[key]); 
  }
console.log('entries',entries)
 for(const entry of entries) {
     const key = entry[0];
     const value = entry[1];

     console.log(`${key}: ${value}`); //?//
 }

 /////////////

 const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99
  };

  let max = 0;
  let maxName;
 for(const name in tasksCompleted) {
     if(max < tasksCompleted[name]){
         max = tasksCompleted[name];
        maxName = name;
     }
 }
 console.log(maxName);
 //?//

 ////

 function countProps(obj) {
    //  let counter = 0;
    //  for (let key in obj){
    //     counter += 1;  //++ не работает
    //  }
    //  return counter;
    let result = Object.keys(obj).length;
    return result;
 }
 console.log(countProps({}));

 console.log(countProps({a: 1, b: 3, c: 'hello'}));

  /////

  function isObjectEmpty(obj) {
    //   for(let key in obj){
    //       if(Object.keys(obj).length !== 0) {
    //           return false;
    //       }
    //       return true;
    //   }
    if (Object.keys(obj).length === 0) {
        return false;
    } else {
        return true;
    }

  }

  console.log(isObjectEmpty({})); //?//
  console.log(
    isObjectEmpty({a: 1})
  );
  console.log(
    isObjectEmpty({a: 1, b: 2})
  );

  //////////

  function countTotalSalary(salaries) {
      let sum = 0;
      for(let key in salaries){
        sum += salaries[key];
      }
      return sum;
  }

  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80
    })
  );
  //////////

  const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
  ];

  function getAllPropValues(arr, prop) {
      let emptyArr = [];
      for (let el of arr) {
          emptyArr.push(el[prop])
      }
     return emptyArr;
  }



  console.log(getAllPropValues(users, 'name')); // ['Poly', 'Mango', 'Ajax']
  
  console.log(getAllPropValues(users, 'mood')); // ['happy', 'blissful', 'tired']
  
  console.log(getAllPropValues(users, 'active')); 