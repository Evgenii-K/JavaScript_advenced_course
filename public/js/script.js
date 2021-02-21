/* Начинаем работу с интернет магазином
1) Добавить классы товара, списка товаров (как мы это сделали на уроке). Вы можете использовать какую-то свою архитектуру приложения (делать не так как на вебинаре), главное, чтобы это было реализовано через классы.
2) Добавить класс корзины и (возможно) класс элемента корзины (добавленного товара). Можно сделать товар в корзине и товар в главном списке одним объектом.
3) В карточке товара основного списка добавить метод добавления в коризну. После вызова этого метода (например, по нажатии на кнопку), товар должен отображаться в списке корзины.
4) На + (со звездочкой) - дополнительно - хочется, чтобы класс корзины и класс списка наследовался от одного родителя - AbstractList.
5) На + (вторая звездочка) - реализовать кнопки "+" и "-", которые будут увеличивать счетчик товара в корзине или уменьшать его. Соответственно, при добавлении одинаковых товаров в корзину, дублирование блоков быть не должно.
6) На + (третья звездочка) - добавить кнопку "Удалить все" у каждого блока в корзине + вывести суммарную стоимость всех товаров в корзине

При сдаче прислать ссылку на пулл-реквест + ссылку на хероку.
Если я зааппрувил предыдущий пулл-реквест (вам поставили "Отлично"), то просьба старый пулл-реквест смержить

Если возникают сложности при работе с дз - пишите, помогу, натолкну */

'use strict';

const goods = document.querySelector('.goods'),
      card = document.querySelector('.card'),
      linkClose = card.querySelector('.card__link-close');

const products = [
    {img: 'item_1.jpg', name: 'Shirt', price: 150},
    {img: 'item_2.jpg', name: 'Socks', price: 15},
    {img: 'item_3.jpg', name: 'Jacket', price: 50},
    {img: 'item_4.jpg', name: 'Shoes', price: 1500},
    {img: 'item_5.jpg', name: 'Black Shirt', price: 130},
    {img: 'item_6.jpg', name: 'Rad Socks', price: 20},
];

let cardProduct = [];

linkClose.addEventListener('click', () => {
    card.classList.toggle('card__display--none');
});

class Button {
    text = '';
    placeToRender = '';

    constructor(text, placeToRender) {
        this.text = text;
        this.placeToRender = placeToRender;
        this.render();
    }
    
    onBtnClick() {
        console.log('Clicked!');
    }

    getTemplate() {
        const btn = document.createElement('button');
        btn.classList.add('btn');
        btn.innerText = this.text;

        return btn;
    }

    render() {
        if(this.placeToRender) {
            const btn = this.getTemplate();
            this.placeToRender.appendChild(btn);

            btn.addEventListener('click', () => {
                this.onBtnClick();
            });
        }
    }

}

class AddItemBtn extends Button {

    constructor(text, placeToRender, name, price) {
        super(text, placeToRender);
        this._name = name;
        this._price = price;
    }

    fetchGoods () {
        return [
            {img: 'item_1.jpg', name: 'Shirt', price: 150},
            {img: 'item_2.jpg', name: 'Socks', price: 15},
            {img: 'item_3.jpg', name: 'Jacket', price: 50},
            {img: 'item_4.jpg', name: 'Shoes', price: 1500},
            {img: 'item_5.jpg', name: 'Black Shirt', price: 130},
            {img: 'item_6.jpg', name: 'Rad Socks', price: 20},
        ];
    }

    onBtnClick() {
        const i = cardProduct.findIndex(item => item.name === this._name);
        if (i != -1) {
            cardProduct[i].quantity++;
        } else {
            cardProduct.push({name: this._name, price: this._price, quantity: 1}); 
        }

        console.log(cardProduct);
    }
}

class CardBtn extends Button {

    constructor(text, placeToRender) {
        super(text, placeToRender);
    }

    onBtnClick() {
        CardListInst.createArr();
        card.classList.toggle('card__display--none');
    }
}

class AbstractList {
    _items = [];
    _arr = [];
    _class = '';

    constructor(arr, classItem) {

        this._arr = arr;
        this._class = classItem;
        this.createArr();
    }

    createArr() {
        this._items = [];

        let goods = this._arr;

        goods = goods.map(cur => {
            return new this._class(cur);
        });

        this._items.push(...goods);

        this.render();
    }

    render() {
        this._items.forEach(good => {
            good.render();
        });
    }
}

class GoodItem {

    _img = '';
    _name = '';
    _price = 0;

    constructor({img, name, price}) {
        this._img = img;
        this._name = name;
        this._price = price;
    }

    render() {
        const placeToRender = document.querySelector('.catalog');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('catalog__item');
            block.innerHTML = `<img src="img/${this._img}" alt="img-item">
                               <h3>${this._name}</h3>
                               <p>Price: ${this._price}$</p>`;
            placeToRender.appendChild(block);
            const ButtonInstabce = new AddItemBtn('Add to card', block, this._name, this._price);
        }
    }
}

class CardItem {

    _name = '';
    _price = 0;
    _quantity = 0;

    constructor({name, price, quantity}) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    render() {
        const placeToRender = document.querySelector('.card__list');
        if (placeToRender) {
            const block = document.createElement('div');
            block.classList.add('card__item');
            block.innerHTML = `<h3>${this._name}</h3>
                               <p>Price: ${this._price}$</p>
                               <p>Quantity: ${this._quantity}</p>
                               <br>`;
            placeToRender.appendChild(block);
        }
    }
}

const ListInstance = new AbstractList(products, GoodItem);

const CardBtnInst = new CardBtn('Card', goods);

class CardList extends AbstractList {
    
    constructor(arr, classItem) {
        super(arr, classItem);
    }

    render() {
        if(this._arr.length > 0) {
            const placeToRender = document.querySelector('.card__list');
            if (placeToRender) {
                placeToRender.innerHTML = '';
                this._items.forEach(good => {
                    good.render();
                });
            }
        }
    }
}

const CardListInst = new CardList(cardProduct, CardItem);