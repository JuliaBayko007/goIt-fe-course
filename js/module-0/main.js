'use strict';
let root = document.querySelector('#root');
let header = document.createElement('header');
root.append(header);
let h1 = document.createElement('h1');
h1.setAttribute('id', 'title');
h1.textContent = 'Albert Einstein';
header.append(h1);
let main = document.createElement('main');
root.append(main);
let firstRow = document.createElement('div');
firstRow.setAttribute('id', 'first-row');
main.append(firstRow);
let imgDiv = document.createElement('div');
imgDiv.setAttribute('id', 'img-div');
firstRow.append(imgDiv);
let figure = document.createElement('figure');
imgDiv.append(figure);
let img = document.createElement('img');
img.setAttribute('id', 'image');
img.setAttribute('src', 'http://jonivainio-kaila.fi/freecodecamp/tribute/assets/img/einstein-mobile.jpg');
img.setAttribute('alt', 'Profile picture of Albert Einstein.');
figure.append(img);
let figcaption = document.createElement('figcaption');
figcaption.setAttribute('id', 'img-caption');
figure.append(figcaption);
figcaption.textContent = 'Profile picture of Albert Einstein';
let divId = document.createElement('div');
divId.setAttribute('id', 'tribute-info');
firstRow.append(divId);
let par = document.createElement('p');
divId.append(par);
par.textContent = " was a German-born theoretical physicist. He developed the theory of relativity, one of the two pillars of modern physics. Einstein's work is also known for its influence on the philosophy of science. Einstein is best known in popular culture for his mass-energy equivalence formula. He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect, a pivotal step in the evolution of quantum theory."
let strong = document.createElement('strong');
strong.textContent = 'Albert Einstein';
par.prepend(strong);
let divIdQuote = document.createElement('div');
divIdQuote.setAttribute('id', 'quote');
main.append(divIdQuote);
let blockquote = document.createElement('blockquote');
blockquote.textContent = '"Anyone who has never made a mistake has never tried anything new"';
divIdQuote.append(blockquote);
let divIdTimeline = document.createElement('div');
divIdTimeline.setAttribute('id', 'timeline');
main.append(divIdTimeline);
let h2 = document.createElement('h2');
h2.textContent = "Timeline of Albert Einstein's life";
divIdTimeline.append(h2);
let divIdLink = document.createElement('div');
divIdLink.setAttribute('id', 'link');
main.append(divIdLink);
let a = document.createElement('a');
a.setAttribute('id', 'tribute-link');
a.setAttribute('href', 'http://www.shmoop.com/albert-einstein/timeline.html');
a.setAttribute('target', '_blank');
a.textContent = 'Full timeline at Shmoop!';

for(let el of sectionArr) {
    let section = document.createElement('section');
    let icon = document.createElement('div');
    let h3 = document.createElement('h3');
    let year = document.createElement('div');



    icon.classList.add('fa', el.classes);
    year.classList.add('year');

    h3.textContent = el.title;
    year.textContent = el.sectionYear;

    section.append(icon);
    h3.prepend(year);
    section.append(h3);
    section.append(p);
    root.append(section);
}
