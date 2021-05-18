import RestauranListSource from '../../data/restaurantlist-source';
import {createCatalogueListTemplate} from '../templates/template-creator';

const CatalogueList = {
    async render(){
        return `
        <div class="hero">
            <div class="hero__inner">
                <h1 class="hero__title">Find Any Food & Beverages Restaurant</h1>
                <p class="hero__tagline">The Best Restaurant For You</p>
            </div>
        </div>
        <section class="content">
            <h1 class="catalouge__label">Restaurant Catalouge</h1>
            <div class="catalouge">         
                <div class="posts">

                </div>
            </div>
        </section>
        `;
    },

    async afterRender(){
        const restaurants = await RestauranListSource.restaurantList();
        const restaurantsContainer = document.querySelector('.posts');
        restaurants.restaurants.forEach((restaurant) => {
            restaurantsContainer.innerHTML += createCatalogueListTemplate(restaurant);
        });
    },

};

export default CatalogueList;