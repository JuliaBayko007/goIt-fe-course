"use strict";
const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

const gallery = document.querySelector('.js-image-gallery');
const fullview = document.createElement('div');
fullview.classList.add('fullview');
gallery.prepend(fullview);
const imgFullview = document.createElement('img');
imgFullview.classList.add('imgFull');
fullview.append(imgFullview);

const ul = document.createElement('ul');

ul.classList.add('preview');
gallery.append(ul);

function createGallery (arr){

for(let el of arr) {
const li = document.createElement('li');
let img = document.createElement('img');
li.classList.add('prev');
img.setAttribute('src', el.preview );
img.setAttribute('data-fullview', el.fullview);
img.setAttribute('alt', 'alt text');
li.append(img)
ul.append(li);
}
return;
}
createGallery(galleryItems);

ul.addEventListener('click', getImage);

function getImage (event) {
  const target = event.target;
  const name = target.nodeName;
  if(name !== 'IMG') {
    return;
  } getThisImg(target);
}

function getThisImg (pointedImg) {
const src = pointedImg.getAttribute('data-fullview');
const previousImg = ul.querySelector('li img.focused');
if (previousImg) {
  previousImg.classList.remove('focused');
}
pointedImg.classList.add('focused');
imgFullview.setAttribute('src', src);
}
const itemArr = document.querySelectorAll('li');
itemArr[0].classList.add('focused');
imgFullview.setAttribute('src', galleryItems[0].fullview);



