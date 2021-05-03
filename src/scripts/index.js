import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector("main");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
})


mainElement.addEventListener("click", event =>{
    drawerElement.classList.remove("open");
    event.stopPropagation
})

const postElement = document.querySelector('post-list');
postElement.setAttribute("class", "posts");
data.restaurants.forEach(item => {
    const article = document.createElement('article');
    article.setAttribute("class", "post-item");
    article.innerHTML = `
    <img class="post-item__thumbnail"
         src="${item.pictureId}"
         alt="${item.name}">
    <div class="post-item__content">
        <h1 class="post-item__title"><a href="#">${item.name}</a></h1>
        <p>City : ${item.city}</p>
        <p>Rating : ${item.rating}</p>
        <p class="post-item__description">${item.description}</p>
    </div>
    `;
    postElement.appendChild(article);
})