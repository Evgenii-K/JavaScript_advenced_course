'use strict';

import AbstractList from './AbstractList';
import AddItemBtn from './AddItemBtn';

const wrapper = document.querySelector('.wrapper');

 // Рендер товаров

export default class ProductsList extends AbstractList {

    _dataList = []; //Список url на json файлы
    _dataUrlPage = 0; //Номер текущей страницы

    constructor(classItem, CardListInst) {
        super(classItem, CardListInst);
        this.fetchDataList();
    }


    fetchGoods () {

        // Получем url json файла со списком товаров на текущей странице
        if (this._dataList.length > 0) {
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
            // Если список пуст, выводим сообщение "Каталог пуст"
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
                    if (wrapper.querySelector('.catalog')) {
                        new AddItemBtn('Show more', wrapper, 'btn__show-more', this.createArr.bind(this, 'jsonFile'));
                    }
                }
                this.createArr('jsonFile');
            })
            .catch((err) => {
                console.warn(err);
                // Если списка не существует, выводим сообщение "Каталог пуст"
                wrapper.querySelector('.catalog').innerHTML = '<div class="cart__empty">Catalog is empty</div>';
            });    
    }

    render () {
        this._items.forEach(good => {
            good.render();
        });
    }
}