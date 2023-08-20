'use strict';

import {productCard} from '../modules/product-card/productCard.js';

class ViemeBuilder {
    constructor(element, config) {
        this.element = element;
        this.config = config;
    };
    productCard = () => {
        const elementProductCard = document.createElement('div');
        elementProductCard.innerHTML = productCard();
        this.element.appendChild(elementProductCard);
    }
};

export default ViemeBuilder;