'use strict';

import AddItemBtn from './AddItemBtn';

 // Рендер карточек товаров

export default class GoodItem {

    _img = '';
    _name = '';
    _price = 0;
    _CardListInst = null;

    constructor({img, name, price}, CardListInst) {
        this._img = img;
        this._name = name;
        this._price = price;
        this._CardListInst = CardListInst;
    }

    add() {
        this._CardListInst.add('plus', this._name, this._price);
    }

    render() {
        const placeToRender = document.querySelector('.catalog');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('catalog__item');
            block.innerHTML = `<img src="${this._img}" alt="img-item">
                               <h3>${this._name}</h3>
                               <p>Price: ${this._price}$</p>`;
            placeToRender.appendChild(block);
            new AddItemBtn('Add to card', block, 'btn', this.add.bind(this));
        }
    }
}