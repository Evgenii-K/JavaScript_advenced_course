'use strict';

const svg = document.querySelectorAll('.cart__link-svg'),
      linkClose = document.querySelector('.hamburger-menu__link-close'),
      menuLink = document.querySelector('.header__label'),
      svgColor = document.querySelector('.header__menu--checked-svg'),
      checkbox = document.querySelector('.header__checkbox'),
      promo = document.querySelector('.promo'),
      divBackground = document.createElement('div'),
      divEmpty = document.createElement('div'),
      carts = document.querySelectorAll('.cart');

divBackground.classList.add('promo__hidden');
divEmpty.classList.add('cart', 'cart__empty');
divEmpty.innerHTML = '<h2 class="cart__title">Cart is empty</h2>';

//Изменяем цвет иконки бургер меню в открытом положении
// и убираеме затемнение promo

svgColor.setAttribute('fill', '#E8E8E8');

linkClose.addEventListener('click', () => {
    checkbox.checked = false;
    svgColor.setAttribute('fill', '#E8E8E8');
    divBackground.remove();
});

//Затемняем promo

menuLink.addEventListener('click', () => {
    if (checkbox.checked == false) {
        promo.append(divBackground);
    } else {
        divBackground.remove();
    }
});

//Удаляем нарточку из корзины

// svg.forEach(item => {
//     item.addEventListener('click', (e) => {
//         if (e.path[0].nodeName == 'svg') {
//             if (document.querySelectorAll('.cart').length == 1) {
//                 e.path[3].replaceWith(divEmpty);
//             } else {
//                 e.path[3].remove();
//             }
//         } else if (e.path[0].nodeName == 'path') {
//             if (document.querySelectorAll('.cart').length == 1) {
//                 e.path[4].replaceWith(divEmpty);
//             } else {
//                 e.path[4].remove();
//             }
//         }
//     });
// });

// svg.forEach(item => {
//     item.addEventListener('click', (e) => {
//         if (e.composedPath()[0].nodeName == 'svg') {
//             if (document.querySelectorAll('.cart').length == 1) {
//                 e.composedPath()[3].replaceWith(divEmpty);
//             } else {
//                 e.composedPath()[3].remove();
//             }
//         } else if (e.composedPath()[0].nodeName == 'path') {
//             if (document.querySelectorAll('.cart').length == 1) {
//                 e.composedPath()[4].replaceWith(divEmpty);
//             } else {
//                 e.composedPath()[4].remove();
//             }
//         }
//     });
// });

carts.forEach(item =>{
    item.addEventListener('click', (e) => {
        if (e.target && (e.target.tagName == 'svg' || e.target.tagName == 'path')) {
            if (document.querySelectorAll('.cart').length == 1) {
                item.replaceWith(divEmpty);
            } else {
                item.remove();
            }
        } 
    });
});