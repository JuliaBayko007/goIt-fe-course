'use strict';

/*let arr = [1, 5, 6, 8, 10];
let arr2 = [8];
localStorage.setItem('array', JSON.stringify(arr) );
let result = localStorage.getItem('array');
console.log(JSON.parse(result));
localStorage.setItem('array', JSON.stringify(arr2));
localStorage.removeItem('array');
localStorage.clear();*/

/*let text = document.querySelector('[type="text"]');
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
ul.addEventListener('click', deleteLi);*/

// 10cw
/*
const source = document.querySelector('#address-template').innerHTML.trim();
const temp = Handlebars.compile(source);
const context = {
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
};

const markup = temp(context);
const container = document.querySelector('.content-placeholder')
console.log(markup);
container.innerHTML = markup;*/

// const data = {
//     people: [
//         {firstName: 'Homer', lastName: 'Simpson'},
//         {firstName: 'Peter', lastName: 'Griffin'},
//         {firstName: 'Eric', lastName: 'Cartman'},
//         {firstName: 'Kenny', lastName: 'McCormick'},
//         {firstName: 'Bart', lastName: 'Simpson'}
//     ]
// };
/*const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS']
};
// const source = document.querySelector('#example-template').innerHTML.trim();
// const templateFunc = Handlebars.compile(source);
// const markup = templateFunc(data);
// console.log(markup);
// const container = document.querySelector('.content-placeholder');
// container.innerHTML = markup;

const sorce = document.querySelector("#menu").innerHTML.trim();
console.log(sorce)
const nextTemp = Handlebars.compile(sorce);
const next = nextTemp(menuData);
const box = document.querySelector('.content-placeholder');
box.innerHTML = next;
*/
/*
const data = {
    animals: [
        {
            name: "cow",
            noise: "moooo"
        },
        {
            name: "cat",
            noise: "meow"
        },
        {
            name: "fish",
            noise: ""
        },
        {
            name: "farmer",
            noise: "Get off my property!"
        }
    ]
};

let source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
let tmp = Handlebars.compile(source);
let mark = tmp(data);
let container = document.querySelector('.content-placeholder');
container.innerHTML = mark;
*/
/*const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
};

let source = document.querySelector('#gal-temp').innerHTML.trim();
let tmp = Handlebars.co
*/

const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');
const clockface = document.querySelector('.clockface');

const timer = {
  id: null,
  startTime: null,
  deltaTime: 0,
  isActive: false,
  start() {
    if (this.isActive) return;

    this.isActive = true;
    this.startTime = Date.now();

    this.id = setInterval(() => {
      const currentTime = Date.now();
      this.deltaTime = currentTime - this.startTime;

      updateClockface(this.deltaTime);
    }, 100);
  },
  stop() {
    clearInterval(this.id);
    this.isActive = false;
  },
  reset() {
    this.stop();
    this.deltaTime = 0;
    updateClockface(this.deltaTime);
  },
};

startBtn.addEventListener('click', handleStartBtnClick);
stopBtn.addEventListener('click', handleStopBtnClick);

function handleStartBtnClick() {
  if (!timer.isActive) {
    timer.start();
    this.textContent = 'Pause';
  } else {
    timer.stop();
    this.textContent = 'Continue';
  }
}

function handleStopBtnClick() {
  timer.reset();
  startBtn.textContent = 'Start';
}

function updateClockface(time) {
  const formattedTime = formatTime(time);
  clockface.textContent = formattedTime;
}

function formatTime(ms) {
  const date = new Date(ms);

  let minutes = date.getMinutes();
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  let seconds = date.getSeconds();
  seconds = seconds < 10 ? `0${seconds}` : seconds;

  const mseconds = String(date.getMilliseconds()).slice(0, 1);

  return `${minutes}:${seconds}.${mseconds}`;
}

new Modal({
  openBtnEl: document.querySelector('.open-modal'),
});