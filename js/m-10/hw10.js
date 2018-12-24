'use strict';


//let text = document.querySelector('[type="text"]');
// let form = document.querySelector('form');
// let ul = document.querySelector('ul');

const url = 'https://test-users-api.herokuapp.com/users/';
const newUser = {
   name: 'Ivan',
   age: 25,
};

const options = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(newUser),

};

const userToUpdate = {
    name: 'Karp',
};


function getAllUsers() {

    fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log(error));
};
    
    getAllUsers();
    
   
function getUserByID(id) {

    fetch(`https://test-users-api.herokuapp.com/users/${id}`)
    .then(response => { 
        const data = response.json();
        return data;})
    .then(x => console.log(x))
    .catch(error => console.log(error));
};

    getUserByID('5c0d2b0f2eba400014f349c0');

function removeUser(id) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'DELETE',
    })
    .then(() => console.log('success'))
    .catch(error => console.log('ERROR' + error));

};

removeUser('5c0cec8cbfed260014bcd5e2');

function addUser(name, age){
    fetch(url, options)
    .then(response => { 
        if(response.ok) return response.json();

        throw new Error('error');})
        //console.log(response))
    .then(data => console.log(data))    
    .catch(error => console.log('ERROR' + error))
};

addUser(newUser.name, newUser.age);

function updateUser(id, user) {
    fetch(`https://test-users-api.herokuapp.com/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userToUpdate),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        },
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('ERROR' + error))

};

updateUser('5c0d2a9b2eba400014f349bd', 'Rob' );





