'use strict';

export default class AbstractList {
    _items = [];
    _class = '';
    _CardListInst = null;

    constructor(classItem, CardListInst, cardProduct) {
        this._class = classItem;
        this._CardListInst = CardListInst;
        this._cardProduct = cardProduct;
    }

    createArr(typeOfFile) {
 
        if (typeOfFile == 'jsonFile') {
            this.fetchGoods()
            .then(res => {
                if (res.status == 200) {
                    return res.json();
                } else {
                    throw new Error('Json file not found!');
                }
            })
            .then(data =>{
                this.beforeRender(data.products);
            })
            .catch(err => {
                console.warn(err);
            });
        } else if (typeOfFile == 'arrFile') {
            this.beforeRender(this.fetchGoods());
        }
    }

    beforeRender (renderArr) {
        const goods = renderArr.map(cur => {
            return new this._class(cur, this._CardListInst);
        });
        this._items = [];
        this._items.push(...goods);
        this.render();
    }
}