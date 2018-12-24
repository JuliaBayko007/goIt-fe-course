"use strict";
//https://test-users-api.herokuapp.com/users/
const url = 'https://test-users-api.herokuapp.com/users/';
const idInp = document.querySelector('.inpId');

const newUser = {
  name: 'Ben',
 age: 25,
};

function readValue (){
  event.preventDefault();
  let value = text.value;
  console.log(value);
  text.value = '';
  
  sendRequest(value);
  }

const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'aplication/json',
  },
  body: JSON.stringify(newUser),
};

function getAllUsers() {



fetch(url)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
};

getAllUsers();

let users = getAllUsers();
function getValue(event){
  const id = idInp.event.target.value;
}



function getUserById(id) {
  

  const urlId = `https://test-users-api.herokuapp.com/users/${id}`;
  fetch(urlId)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.log(error));
};

getUserById();
idInp.addEventListener('Submit', getValue );
//id.addEventListener('click', getUserById);


/*function addUser(obj) {
  let name = 'Martin';
  //let age = 28;
  fetch(url, options)
  .then( response => {
    if(response.ok) return response.json();

    throw new Error('error');
  })
  .then(post => console.log(post));
  }

addUser(newUser);

console.log(users);*/