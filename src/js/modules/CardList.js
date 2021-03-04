'use strict';

import AbstractList from './AbstractList';

 // Рендер корзины

export default class CardList extends AbstractList {

    _cardProduct = [];
    
    constructor(classItem, cardProduct) {
        super(classItem);
        this._CardListInst = this;
        this._cardProduct = cardProduct;
        this.createArr('arrFile');
    }

    add (math, name, price) {
        this._name = name;
        this._price = price;
        const i = this._cardProduct.findIndex(item => item.name === this._name);
        if (math == 'plus') {
            // Если товар есть в корзине -> увеличиваем количество
            if (i != -1) {
                this._cardProduct[i].quantity++;
            } else { // Если ещё нет, добавляем в корзину
                this._cardProduct.push({name: this._name, price: this._price, quantity: 1}); 
            }
        } else if (math == 'minus') {
            if (this._cardProduct[i].quantity > 1) {
                this._cardProduct[i].quantity--;
            }
        } else if (math == 'delete') {
            this._cardProduct.splice(i, 1);
        }
        this.createArr('arrFile');
    }

    fetchGoods () {
        return this._cardProduct;
    }

    render() {

        const placeToRender = document.querySelector('.card__list');
        if (placeToRender) {
            // Рендер карточек если есть товары в корзине 
            if(this._items.length > 0) {
                placeToRender.innerHTML = '';
                this._items.forEach(good => {
                    good.render();
                });
                // Подсчёт суммы в корзине
                let sum = 0;
                const totalItems = this.fetchGoods();
                totalItems.forEach(item => {
                    sum += (item.price * item.quantity); 
                });
                placeToRender.insertAdjacentHTML('beforeend', `<h3>Total sum: ${sum}</h3>`);
            // Если корзины пустая редерим сообщение об этом
            } else {
                placeToRender.innerHTML = '<div class="cart__empty">Cart is empty</div>';
            }
        }
    }
}