/* 
1. Прочитать про работу с промисами: https://habr.com/ru/company/mailru/blog/269465
2. Избавиться от хардкода при получении данных каталога в семестровом проекте. 
   Вынести данные в файлик data.json и брать их оттуда с помощью запроса по сети.
3. Задание на звездочку, дополнительно: разбить данные на 3 файла: data1.json, data2.json, data3.json. 
   Пр загрузке страницы запрашивать файл data1.json и выводить данные из него. Реализовать кнопку "Показать еще", 
   по нажатию на которую будут запрашиваться дополнительные товары из других файлов. После окончания запроса выводить 
   дополненный список товаров 
*/

'use strict';

const wrapper  = document.querySelector('.wrapper'),
      goods = wrapper.querySelector('.goods'),
      cardHeading = wrapper.querySelector('.card__heading');

class AbstractList {
    _items = [];
    _class = '';

    constructor(classItem) {
        this._class = classItem;
    }

    createArr(typeOfFile) {
 
        if (typeOfFile == 'jsonFile') {
            this.fetchGoods()
            .then(res => {
                return res.json();
            })
            .then(data =>{
                this.runRender(data.products);
            })
            .catch(err => {
                console.warn(err);
            });
        } else if (typeOfFile == 'arrFile') {
            this.runRender(this.fetchGoods());
        }
    }

    runRender (renderArr) {
        const goods = renderArr.map(cur => {
            return new this._class(cur);
        });
        this._items = [];
        this._items.push(...goods);
        this.render();
    }

    fetchGoods () {
        return [];
    }

    render() {
        this._items.forEach(good => {
            good.render();
        });
    }
}

 // Рендер товаров

class ProductsList extends AbstractList {

    _dataList = []; //Список url на json файлы
    _dataUrlPage = 0; //Номер текущей страницы

    constructor(classItem) {
        super(classItem);
        this.fetchDataList();
    }


    fetchGoods () {

        // Получем url json файла со списком товаров на текущей странице
        if (this._dataList && this._dataList.length > 0) {
            // let url = this._dataList[this._dataUrlPage].url;
            let url = `${document.location.protocol}//${document.location.host}/${this._dataList[this._dataUrlPage].url}`;
            this._dataUrlPage++;
            // Если больше страниц нет, убираем кнопку "Показать ещё"
            if (this._dataUrlPage == this._dataList.length) {
                let button = wrapper.querySelector('.btn__show-more');
                if (button) {
                    button.remove();
                }
            }
            return fetch(url);
        } else {
            // Если списка не существует или он пуст, выводим сообщение "Каталог пуст"
            wrapper.querySelector('.catalog').innerHTML = '<div class="cart__empty">Catalog is empty</div>';
        }
    }

    // Получаем список страниц товара из dataList.json и рендерим кнопку "Показать больше" если страниц > 1
    fetchDataList() {

        // let urlDataList = "http://localhost:3000/database/dataList.json";
        let urlDataList = `${document.location.protocol}//${document.location.host}/database/dataList.json`;
        fetch(urlDataList)
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                } else {
                    throw new Error('Json file not found!');
                }
            })
            .then(data => {
                const dataUrl = data.dataUrl;
                this._dataList.push(...dataUrl);
                if (this._dataList.length > 1) {
                    new AddItemBtn('Show more', wrapper, 'btn__show-more', this.createArr.bind(this, 'jsonFile'));
                }
                this.createArr('jsonFile');
            })
            .catch((err) => {
                console.warn(err);
                this.createArr('jsonFile');
            });    
    }
}

 // Рендер корзины
class CardList extends AbstractList {
    
    constructor(classItem) {
        super(classItem);
        this.createArr('arrFile');
    }

    fetchGoods () {
        return cardProduct;
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

 // Рендер карточек товаров
class GoodItem {

    _img = '';
    _name = '';
    _price = 0;

    constructor({img, name, price}) {
        this._img = img;
        this._name = name;
        this._price = price;
    }

    add() {
        const i = cardProduct.findIndex(item => item.name === this._name);
        if (i != -1) {
            cardProduct[i].quantity++;
            CardListInst.createArr('arrFile');
        } else {
            cardProduct.push({name: this._name, price: this._price, quantity: 1}); 
            CardListInst.createArr('arrFile');
        }
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

 // Рендер товаров в корзине
class CardItem {

    _name = '';
    _price = 0;
    _quantity = 0;

    constructor({name, price, quantity}) {
        this._name = name;
        this._price = price;
        this._quantity = quantity;
    }

    add(math) {
        
        const i = cardProduct.findIndex(item => item.name === this._name);
        if (math == 'plus') {
            cardProduct[i].quantity++;
            CardListInst.createArr('arrFile');
        } else if (math == 'minus') {
            if (cardProduct[i].quantity > 1) {
                cardProduct[i].quantity--;
                CardListInst.createArr('arrFile');
            }
        } else if (math == 'delete') {
            cardProduct.splice(i, 1);
            CardListInst.createArr('arrFile');
        }
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

new ProductsList(GoodItem);

new CardBtn('Card', goods, 'btn');

const CardListInst = new CardList(CardItem);

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