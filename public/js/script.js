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
      cardHeading = document.querySelector('.card__heading');

const products = [
    {img: 'item_1.jpg', name: 'Shirt', price: 150},
    {img: 'item_2.jpg', name: 'Socks', price: 15},
    {img: 'item_3.jpg', name: 'Jacket', price: 50},
    {img: 'item_4.jpg', name: 'Shoes', price: 1500},
    {img: 'item_5.jpg', name: 'Black Shirt', price: 130},
    {img: 'item_6.jpg', name: 'Rad Socks', price: 20},
];

let cardProduct = [];
class Button {
    text = '';
    placeToRender = '';
    styleClass = '';

    constructor(text, placeToRender, styleClass) {
        this.text = text;
        this.placeToRender = placeToRender;
        this.styleClass = styleClass;
        this.render();
    }
    
    onBtnClick() {
        console.log('Clicked!');
    }

    getTemplate() {
        const btn = document.createElement('button');
        btn.classList.add(this.styleClass);
        btn.innerHTML = this.text;

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

// Кнопка корзины
class CardBtn extends Button {
    constructor(text, placeToRender, styleClass) {
        super(text, placeToRender, styleClass);
        this.card = document.querySelector('.card');
    }

    onBtnClick() {
        this.card.classList.toggle('card__display--none');
    }
}

// Кнопка изменениния колличества товара и удаления из корзины
class Quantity extends Button {

    constructor(text, placeToRender, styleClass, math, name) {
        super(text, placeToRender, styleClass);
        this._math = math;
        this._name = name;
    }

    onBtnClick() {

        const i = cardProduct.findIndex(item => item.name === this._name);
        if (this._math == 'plus') {
            cardProduct[i].quantity++;
            CardListInst.createArr();
        } else if (this._math == 'minus') {
            if (cardProduct[i].quantity > 1) {
                cardProduct[i].quantity--;
                CardListInst.createArr();
            }
        } else if (this._math == 'delete') {
            cardProduct.splice(i, 1);
            CardListInst.createArr();
        }
    }
}

// Кнопка добавления в корзину
class AddItemBtn extends Button {

    constructor(text, placeToRender, styleClass, name, price) {
        super(text, placeToRender, styleClass);
        this._name = name;
        this._price = price;
    }

    onBtnClick() {
        const i = cardProduct.findIndex(item => item.name === this._name);
        if (i != -1) {
            cardProduct[i].quantity++;
            CardListInst.createArr();
        } else {
            cardProduct.push({name: this._name, price: this._price, quantity: 1}); 
            CardListInst.createArr();
        }
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
            new AddItemBtn('Add to card', block, 'btn', this._name, this._price);
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
                this._name
            );
            quantityDiv.insertAdjacentHTML('beforeend', `${this._quantity}`);
            new Quantity(
                `<i class="far fa-plus-square"></i>`,
                quantityDiv,
                'card__item--plus',
                'plus',
                this._name
            );
            new Quantity(
                '(Delete item)',
                quantityDiv,
                'btn--delete',
                'delete',
                this._name
            );


            wrapper.insertAdjacentHTML("beforeend", `<p>Sum: ${this._quantity * this._price}$</p><hr>`);
        }
    }
}

class CardList extends AbstractList {
    
    constructor(arr, classItem) {
        super(arr, classItem);
    }

    render() {

        const placeToRender = document.querySelector('.card__list');
        if (placeToRender) {
            // Рендер карточек если есть товары в корзине 
            if(this._arr.length > 0) {
                placeToRender.innerHTML = '';
                this._items.forEach(good => {
                    good.render();
                });
                // Подсчёт суммы в корзине
                let sum = 0;
                this._arr.forEach(item => {
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


new AbstractList(products, GoodItem);

new CardBtn('Card', goods, 'btn');

const CardListInst = new CardList(cardProduct, CardItem);

new CardBtn(
    `<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />
    </svg>`,
    cardHeading,
    'card__link-close'
);

document.querySelector('.catalog').addEventListener('click', () => {
    const card = document.querySelector('.card');
    if (card.classList.contains != 'card__display--none') {
        card.classList.add('card__display--none');
    }
});