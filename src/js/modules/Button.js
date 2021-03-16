'use strict';

export default class Button {
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