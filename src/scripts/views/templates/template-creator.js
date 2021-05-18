import CONFIG from '../../globals/config';

const createDetailCatalogueTemplate = (restaurant) => `
<h2 class="detail-title">${restaurant.restaurant.name}</h2>
<div class="detail-card">
    <img src="${CONFIG.BASE_IMAGE_URL + restaurant.restaurant.pictureId}" alt="${restaurant.restaurant.name}" class="detail-image">
    <div class="detail__info">
        <h3 class="detail-text">Information</h3>
        <p class="detail-text">${restaurant.restaurant.city}</p>
        <p class="detail-text">${restaurant.restaurant.address}</p>
        <p class="detail-text">⭐️${restaurant.restaurant.rating}</p>
        <p >${restaurant.restaurant.description}</p>
    </div>
</div>
<h1 class="detail__menu__label">${restaurant.restaurant.name} Menu</h1>

`;

const createFoodMenuTemplate = (restaurant) => `
<p class="food-list">${restaurant.name}</p>
`;

const createDrinkMenuTemplate = (restaurant) => `
<p class="drink-list">${restaurant.name}</p>
`;

const createCatalogueListTemplate = (restaurant) =>`
        <article class="post-item">
            <img class="post-item__thumbnail"
            src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
            alt="${restaurant.name}">
            <div class="post-item__content">
                <h1 class="post-item__title"><a href="${`#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
                <p>City : ${restaurant.city}</p>
                <p>⭐️${restaurant.rating}</p>
                <p class="post-item__description">${restaurant.description}</p>
            </div>
        </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;


export {
    createDetailCatalogueTemplate, 
    createCatalogueListTemplate,
    createFoodMenuTemplate,
    createDrinkMenuTemplate,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
};