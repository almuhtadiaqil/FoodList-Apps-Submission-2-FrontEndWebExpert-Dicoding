import UrlParser from '../../routes/url-parser';
import RestauranListSource from '../../data/restaurantlist-source';
import {
    createDetailCatalogueTemplate, 
    createFoodMenuTemplate,
    createDrinkMenuTemplate,
    createLikeButtonTemplate,
} from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-initiator';
const Detail = {
    async render(){
        return `
        <h1 class="detail__label">Catalogue Detail</h1>
        <section class="content">
        </section>
        <div class="card-menu">         
            <div class="posts-detail">
                <article class="post-item">
                    <h1 class="menu-item__title"><b>Foods Menu</b></h1>
                    <div class="post-item__content food_menu">
                        <food-item></food-item>
                    </div>
                </article>
                <article class="post-item">
                    <h1 class="menu-item__title"><b>Drinks Menu</b></h1>
                    <div class="post-item__content drink_menu">
                    <drink-item></drink-item>
                    </div>
                </article>
            </div>
        </div>
        <div id="likeButtonContainer"></div>
        `;
    },

    async afterRender(){
        const url = UrlParser.parseActiveWithoutCombiner();
        const restaurant = await RestauranListSource.detailCatalogue(url.id);
        const menu = restaurant.restaurant.menus;
        console.log(menu);
        const restauranContainer = document.querySelector('.content');
        const foodItem = document.querySelector('food-item');
        const drinkItem = document.querySelector('drink-item');
        restauranContainer.innerHTML = createDetailCatalogueTemplate(restaurant);
        menu.foods.forEach((restaurant) => {
            foodItem.innerHTML += createFoodMenuTemplate(restaurant);
        });
        menu.drinks.forEach((restaurant) => {
            drinkItem.innerHTML += createDrinkMenuTemplate(restaurant);
        });

        LikeButtonInitiator.init({
            LikeButtonContainer: document.querySelector('#likeButtonContainer'),
            restaurant: {
                id: restaurant.restaurant.id,
                name: restaurant.restaurant.name,
                description: restaurant.restaurant.description,
                city: restaurant.restaurant.city,
                address: restaurant.restaurant.address,
                pictureId: restaurant.restaurant.id,
                foods: menu.foods,
                drinks: menu.drinks,
                rating: restaurant.restaurant.rating,
            },
        })
    },

};

export default Detail;