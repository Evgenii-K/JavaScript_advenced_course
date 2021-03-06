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
    
    constructor(text, placeToRender, styleClass, math, func) {
        super(text, placeToRender, styleClass);
        this._math = math;
        this._func = func;
    }
    
    onBtnClick() {
        this._func(this._math);
    }
}
    
    // Кнопка добавления в корзину
class AddItemBtn extends Button {
    
    constructor(text, placeToRender, styleClass, func) {
        super(text, placeToRender, styleClass);
        this._func = func;
    }
    
    onBtnClick() {
        this._func();
    }
}