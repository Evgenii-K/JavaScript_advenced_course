'use strict';

import Button from './Button';

    // Кнопка изменениния колличества товара и удаления из корзины

export default class Quantity extends Button {
    
    constructor(text, placeToRender, styleClass, math, func) {
        super(text, placeToRender, styleClass);
        this._math = math;
        this._func = func;
    }
    
    onBtnClick() {
        this._func(this._math);
    }
}