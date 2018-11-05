"use strict";
const galleryItems = [
  { preview: '../img/preview-1.jpg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
  { preview: '../img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
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
imgFullview.setAttribute('src', galleryItems.fullview); // ?????
imgFullview.setAttribute('alt', 'alt text 1');
fullview.append(imgFullview);
let bigImg = document.querySelector('.imgFull');



const preview = document.createElement('ul');

preview.classList.add('preview');
gallery.append(preview);
function createGallery (arr, idx, el){

const imgPreview = document.createElement('li');
imgPreview.setAttribute('src', el.preview );
imgPreview.setAttribute('data-fullview', el.fullview);
imgPreview.setAttribute('alt', 'alt text 1');
preview.append(imgPreview);

let target = event.target;

return ;
}









