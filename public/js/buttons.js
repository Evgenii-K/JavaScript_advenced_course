'use strict';

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