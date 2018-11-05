'use strict';

/*let arr = [1, 5, 6, 8, 10];
let arr2 = [8];
localStorage.setItem('array', JSON.stringify(arr) );
let result = localStorage.getItem('array');
console.log(JSON.parse(result));
localStorage.setItem('array', JSON.stringify(arr2));
localStorage.removeItem('array');
localStorage.clear();*/

let text = document.querySelector('[type="text"]');
let form = document.querySelector('form');
let ul = document.querySelector('ul');
let taskArr = [];

function readValue() {
    event.preventDefault();
    let value = text.value;
    let obj = {
        id: Date.now(),
        content: text,
    }
    createLi(obj);
    saveToStorage(obj);
    //console.log(value);
    text.value = '';
}

function createLi(text) {
    let li = document.createElement('li');
    li.textContent = text;
    li.setAttribute('data-id')
    ul.appendChild(li);
}

function saveToStorage(text) {
    let result = JSON.parse(localStorage.getItem())
    taskArr.push(obj);
    localStorage.setItem('task', JSON.stringify(result));

}

function paintFromStorage() {
    let result = JSON.parse(localStorage.getItem('task'));
    if(result) {
        for(let el of result) {
            createLi(el);
        };
    }else {
        localStorage.setItem('task', JSON.stringify([]));
    }
}
function deleteLi() {
    let id = event.target.dataset.id;
    event.target.remove();
    console.log(id);
    let result = JSON.parse(localStorage.getItem('task'));
    arrForSave.filter(el => el.id !== Number(id));
    localStorage.setItem('task', JSON.stringify(arrForSave))
}

window.addEventListener('DOMContentLoaded', paintFromStorage);
form.addEventListener('submit', readValue);
ul.addEventListener('click', deleteLi);



 
