"use strict";
const galleryItems = [
  { preview: 'img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];
/*<div class="fullview">
<!-- Если выбран первый элемент из preview -->
<img src="img/fullview-1.jpeg" alt="alt text 1">
</div>
<!-- li будет столько, сколько объектов в массиве картинок. Эти 3 для примера -->
<ul class="preview">
<li><img src="img/preview-1.jpeg" data-fullview="img/fullview-1.jpeg" alt="alt text 1"></li>
<li><img src="img/preview-2.jpeg" data-fullview="img/fullview-2.jpeg" alt="alt text 2"></li>
<li><img src="img/preview-3.jpeg" data-fullview="img/fullview-3.jpeg" alt="alt text 3"></li>
</ul>
</div>  */


const gallery = document.querySelector('div');
const fullview = document.createElement('div');
fullview.classList.add('fullview');
gallery.prepend(fullview);
const imgFullview = document.createElement('img');
imgFullview.classList.add('imgFull');
imgFullview.setAttribute('alt', 'alt text');
imgFullview.setAttribute('src', '')
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

gallery.addEventListener('click', onGalleryClick);
function onGalleryClick(event){
  const full = event
  

}

/*function showImgSrc(event){
  return event.target.src;
}*/






