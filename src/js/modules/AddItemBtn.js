'use strict';

import Button from './Button';

    // Кнопка добавления в корзину

export default class AddItemBtn extends Button {
    
    constructor(text, placeToRender, styleClass, func) {
        super(text, placeToRender, styleClass);
        this._func = func;
    }
    
    onBtnClick() {
        this._func();
    }
}