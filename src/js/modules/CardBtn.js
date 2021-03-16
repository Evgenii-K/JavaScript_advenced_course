'use strict';

import Button from './Button';

// Кнопка корзины

export default class CardBtn extends Button {
    constructor(text, placeToRender, styleClass) {
        super(text, placeToRender, styleClass);
        this.card = document.querySelector('.card');
    }
    
    onBtnClick() {
        this.card.classList.toggle('card__display--none');
    }
}