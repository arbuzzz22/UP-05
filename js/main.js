import products from "./products.js";
import { renderProductCards } from "./modules/productsCard.js";

window.addEventListener('DOMContentLoaded', () => {
    const productContainer = document.querySelector('.js-products-list');
    renderProductCards(products, productContainer);
});
