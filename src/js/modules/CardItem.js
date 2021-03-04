'use strict';

import Quantity from './Quantity';

 // Рендер карточки товара в корзине

export default class CardItem {

    _name = '';
    _price = 0;
    _quantity = 0;
    _CardListInst = null;

    constructor({name, price, quantity}, CardListInst) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
        this._CardListInst = CardListInst;
    }

    add(math) {
        this._CardListInst.add(math, this._name, this._price);
    }

    render() {
        const placeToRender = document.querySelector('.card__list');
        if (placeToRender) {

            const wrapper = document.createElement('div');
            wrapper.classList.add('card__item--wrapper');
            placeToRender.appendChild(wrapper);

            const item = document.createElement('div');
            item.classList.add('card__item');
            item.innerHTML = `<h3>${this._name}</h3>
                               <p>Price: ${this._price}$</p>
                               `;
            wrapper.appendChild(item);

            const quantityDiv = document.createElement('div');
            quantityDiv.classList.add('card__item--quantity');
            quantityDiv.innerHTML = `<p>Quantity:</p>`;
            wrapper.appendChild(quantityDiv);

            new Quantity(
                `<i class="far fa-minus-square"></i>`,
                quantityDiv,
                'card__item--minus',
                'minus',
                this.add.bind(this)
            );
            quantityDiv.insertAdjacentHTML('beforeend', `${this._quantity}`);
            new Quantity(
                `<i class="far fa-plus-square"></i>`,
                quantityDiv,
                'card__item--plus',
                'plus',
                this.add.bind(this)
            );
            new Quantity(
                '(Delete item)',
                quantityDiv,
                'btn--delete',
                'delete',
                this.add.bind(this)
            );


            wrapper.insertAdjacentHTML("beforeend", `<p>Sum: ${this._quantity * this._price}$</p><hr>`);
        }
    }
}