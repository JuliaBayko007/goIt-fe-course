"use strict";

const posts = [
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 1",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-1.com'
    },
    {
      img: "https://placeimg.com/400/150/nature",
      title: "Post title 2",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-2.com'
    },
    {
      img: "https://placeimg.com/400/150/arch",
      title: "Post title 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
      link: 'link-3.com'
    }
  ];

function createPostCard (arr){
for (let el of arr){
let body = document.querySelector('body');
let div = document.createElement('div');
div.classList.add('post');
body.append(div);
let img = document.createElement('img');
img.setAttribute('src', el.img);
img.classList.add('post__image');
img.setAttribute('alt', 'post image');
div.append(img);
let h2 = document.createElement('h2');
h2.classList.add('post__title');
h2.textContent = `${el.title}`;
div.append(h2);
let par = document.createElement('p');
par.classList.add('post__text');
par.textContent = `${el.text}`;
div.append(par);
let a = document.createElement('a');
a.classList.add('button');
a.setAttribute('href', el.link);
a.textContent = 'Read More';
div.append(a);
};
return;
}
function createCards(arr) {
    createPostCard(arr);
return;
}

createCards(posts);

