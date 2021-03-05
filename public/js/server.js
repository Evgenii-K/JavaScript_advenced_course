(()=>{"use strict";var e={705:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=e(t);return t[2]?"@media ".concat(t[2]," {").concat(i,"}"):i})).join("")},t.i=function(e,i,n){"string"==typeof e&&(e=[[null,e,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&r[c[0]]||(i&&(c[2]?c[2]="".concat(i," and ").concat(c[2]):c[2]=i),t.push(c))}},t}},44:(e,t,i)=>{i.d(t,{Z:()=>a});var n=i(705),r=i.n(n)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;1,100&display=swap);"]),r.push([e.id,'*{margin:0;padding:0;border:0}*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}:focus,:active{outline:none}a:focus,a:active{outline:none}nav,footer,header,aside{display:block}html,body{font-family:"lato",sans-serif;height:100%;width:100%;font-weight:300;font-size:14px;-ms-text-size-adjust:100%;-moz-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased}input,button,textarea{font-family:inherit}input::-ms-clear{display:none}button{cursor:pointer}button::-moz-focus-inner{padding:0;border:0}a,a:visited{text-decoration:none}a:hover{text-decoration:none}ul li{list-style:none}h1,h2,h3,h4,h5,h6{font-weight:900}p{line-height:17px;color:#5d5d5d}*{color:#444343}.wrapper{margin:0 5px;min-height:calc(100% - 50px);display:flex;flex-direction:column;position:relative;overflow-x:hidden}.wrapper .btn__show-more{align-self:center}.top{flex-grow:1}.center{padding:0 calc(50% - 700px) 0 calc(50% - 700px)}.header{display:flex;justify-content:space-between;align-items:center;min-height:50px;border:2px solid #a9a9a9;position:relative;margin-bottom:30px}.footer{display:flex;justify-content:flex-end;align-items:center;min-height:50px;border:2px solid #a9a9a9;position:relative}.card{background-color:#fff;border:2px solid #a9a9a9;width:300px;position:absolute;right:calc(50% - 700px);top:50px}.card__heading{margin:10px;display:flex;justify-content:space-between;align-items:center}.card__link-close{background-color:#fff}.card__link-close svg{width:16px;height:16px;fill:#a9a9a9}.card__link-close svg:hover{fill:red}.card__item--plus,.card__item--minus{background-color:#fff;width:16px;height:16px}.card__display--none{display:none}.card__list{margin:10px}.card__item--quantity{display:flex;justify-content:space-between}.card__item--wrapper{margin:10px}.card__item--wrapper hr{margin-top:10px;border:none;background-color:#a9a9a9;color:#a9a9a9;height:2px}.catalog{display:flex;flex-wrap:wrap;justify-content:space-between}.catalog__item{width:220px;padding:10px;margin-bottom:30px;border:2px solid #a9a9a9;display:flex;flex-direction:column;align-items:left;justify-content:space-between}.catalog__item img{width:200px;height:200px;border:2px solid #a9a9a9;align-self:center;margin-bottom:5px}.catalog__item h3{padding-bottom:5px}.catalog__item p{padding-bottom:10px}.catalog__item .btn{align-self:flex-end}.btn,.btn__show-more,.footer__btn{background-color:#fff;border-radius:15px;border:2px solid #a9a9a9;width:100px;height:30px}.btn:hover,.btn__show-more:hover,.footer__btn:hover{color:red}.btn__show-more{margin-bottom:30px}.btn--delete{background-color:#fff;width:100px;height:16px}.btn--delete:hover{color:red}.feedback__form-input{display:block;max-width:300px;padding:14px 16px;border:1px solid #a9a9a9;font-size:13px;line-height:16px;color:#222;margin:20px 0}.feedback__form-input::placeholder{font-size:13px;line-height:16px;color:#b1b1b1}.feedback__form-input--attention{border-color:red}',""]);const a=r},379:(e,t,i)=>{var n,r=function(){var e={};return function(t){if(void 0===e[t]){var i=document.querySelector(t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}e[t]=i}return e[t]}}(),a=[];function o(e){for(var t=-1,i=0;i<a.length;i++)if(a[i].identifier===e){t=i;break}return t}function s(e,t){for(var i={},n=[],r=0;r<e.length;r++){var s=e[r],c=t.base?s[0]+t.base:s[0],d=i[c]||0,l="".concat(c," ").concat(d);i[c]=d+1;var h=o(l),u={css:s[1],media:s[2],sourceMap:s[3]};-1!==h?(a[h].references++,a[h].updater(u)):a.push({identifier:l,updater:m(u,t),references:1}),n.push(l)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var a=i.nc;a&&(n.nonce=a)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var o=r(e.insert||"head");if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}return t}var d,l=(d=[],function(e,t){return d[e]=t,d.filter(Boolean).join("\n")});function h(e,t,i,n){var r=i?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=l(t,r);else{var a=document.createTextNode(r),o=e.childNodes;o[t]&&e.removeChild(o[t]),o.length?e.insertBefore(a,o[t]):e.appendChild(a)}}function u(e,t,i){var n=i.css,r=i.media,a=i.sourceMap;if(r?e.setAttribute("media",r):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p=null,f=0;function m(e,t){var i,n,r;if(t.singleton){var a=f++;i=p||(p=c(t)),n=h.bind(null,i,a,!1),r=h.bind(null,i,a,!0)}else i=c(t),n=u.bind(null,i,t),r=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(i)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var i=s(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<i.length;n++){var r=o(i[n]);a[r].references--}for(var c=s(e,t),d=0;d<i.length;d++){var l=o(i[d]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}i=c}}}}},t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={id:n,exports:{}};return e[n](r,r.exports,i),r.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e=i(379),t=i.n(e),n=i(44);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}t()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;class a{constructor(e,t,i){r(this,"text",""),r(this,"placeToRender",""),r(this,"styleClass",""),this.text=e,this.placeToRender=t,this.styleClass=i,this.render()}onBtnClick(){console.log("Clicked!")}getTemplate(){const e=document.createElement("button");return e.classList.add(this.styleClass),e.innerHTML=this.text,e}render(){if(this.placeToRender){const e=this.getTemplate();this.placeToRender.appendChild(e),e.addEventListener("click",(()=>{this.onBtnClick()}))}}}class o extends a{constructor(e,t,i){super(e,t,i),this.card=document.querySelector(".card")}onBtnClick(){this.card.classList.toggle("card__display--none")}}function s(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class c{constructor(e,t,i){s(this,"_items",[]),s(this,"_class",""),s(this,"_CardListInst",null),this._class=e,this._CardListInst=t,this._cardProduct=i}createArr(e){"jsonFile"==e?this.fetchGoods().then((e=>{if(200==e.status)return e.json();throw new Error("Json file not found!")})).then((e=>{this.beforeRender(e.products)})).catch((e=>{console.warn(e)})):"arrFile"==e&&this.beforeRender(this.fetchGoods())}beforeRender(e){const t=e.map((e=>new this._class(e,this._CardListInst)));this._items=[],this._items.push(...t),this.render()}}class d extends a{constructor(e,t,i,n){super(e,t,i),this._func=n}onBtnClick(){this._func()}}function l(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}const h=document.querySelector(".wrapper");class u extends c{constructor(e,t){super(e,t),l(this,"_dataList",[]),l(this,"_dataUrlPage",0),this.fetchDataList()}fetchGoods(){if(this._dataList.length>0){let e=`${document.location.protocol}//${document.location.host}/${this._dataList[this._dataUrlPage].url}`;if(this._dataUrlPage++,this._dataUrlPage==this._dataList.length){let e=h.querySelector(".btn__show-more");e&&e.remove()}return fetch(e)}h.querySelector(".catalog").innerHTML='<div class="cart__empty">Catalog is empty</div>'}fetchDataList(){let e=`${document.location.protocol}//${document.location.host}/database/dataList.json`;fetch(e).then((e=>{if(200==e.status)return e.json();throw new Error("Json file not found!")})).then((e=>{const t=e.dataUrl;this._dataList.push(...t),this._dataList.length>1&&h.querySelector(".catalog")&&new d("Show more",h,"btn__show-more",this.createArr.bind(this,"jsonFile")),this.createArr("jsonFile")})).catch((e=>{console.warn(e),h.querySelector(".catalog").innerHTML='<div class="cart__empty">Catalog is empty</div>'}))}render(){this._items.forEach((e=>{e.render()}))}}class p extends c{constructor(e,t){var i,n;super(e),n=[],(i="_cardProduct")in this?Object.defineProperty(this,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):this[i]=n,this._CardListInst=this,this._cardProduct=t,this.createArr("arrFile")}add(e,t,i){this._name=t,this._price=i;const n=this._cardProduct.findIndex((e=>e.name===this._name));"plus"==e?-1!=n?this._cardProduct[n].quantity++:this._cardProduct.push({name:this._name,price:this._price,quantity:1}):"minus"==e?this._cardProduct[n].quantity>1&&this._cardProduct[n].quantity--:"delete"==e&&this._cardProduct.splice(n,1),this.createArr("arrFile")}fetchGoods(){return this._cardProduct}render(){const e=document.querySelector(".card__list");if(e)if(this._items.length>0){e.innerHTML="",this._items.forEach((e=>{e.render()}));let t=0;this.fetchGoods().forEach((e=>{t+=e.price*e.quantity})),e.insertAdjacentHTML("beforeend",`<h3>Total sum: ${t}</h3>`)}else e.innerHTML='<div class="cart__empty">Cart is empty</div>'}}function f(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class m{constructor({img:e,name:t,price:i},n){f(this,"_img",""),f(this,"_name",""),f(this,"_price",0),f(this,"_CardListInst",null),this._img=e,this._name=t,this._price=i,this._CardListInst=n}add(){this._CardListInst.add("plus",this._name,this._price)}render(){const e=document.querySelector(".catalog");if(e){const t=document.createElement("div");t.classList.add("catalog__item"),t.innerHTML=`<img src="${this._img}" alt="img-item">\n                               <h3>${this._name}</h3>\n                               <p>Price: ${this._price}$</p>`,e.appendChild(t),new d("Add to card",t,"btn",this.add.bind(this))}}}class _ extends a{constructor(e,t,i,n,r){super(e,t,i),this._math=n,this._func=r}onBtnClick(){this._func(this._math)}}function b(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g{constructor({name:e,price:t,quantity:i},n){b(this,"_name",""),b(this,"_price",0),b(this,"_quantity",0),b(this,"_CardListInst",null),this._name=e,this._price=t,this._quantity=i,this._CardListInst=n}add(e){this._CardListInst.add(e,this._name,this._price)}render(){const e=document.querySelector(".card__list");if(e){const t=document.createElement("div");t.classList.add("card__item--wrapper"),e.appendChild(t);const i=document.createElement("div");i.classList.add("card__item"),i.innerHTML=`<h3>${this._name}</h3>\n                               <p>Price: ${this._price}$</p>\n                               `,t.appendChild(i);const n=document.createElement("div");n.classList.add("card__item--quantity"),n.innerHTML="<p>Quantity:</p>",t.appendChild(n),new _('<i class="far fa-minus-square"></i>',n,"card__item--minus","minus",this.add.bind(this)),n.insertAdjacentHTML("beforeend",`${this._quantity}`),new _('<i class="far fa-plus-square"></i>',n,"card__item--plus","plus",this.add.bind(this)),new _("(Delete item)",n,"btn--delete","delete",this.add.bind(this)),t.insertAdjacentHTML("beforeend",`<p>Sum: ${this._quantity*this._price}$</p><hr>`)}}}function x(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class y{constructor(e,t,i){x(this,"_regexp",""),x(this,"_flag",""),x(this,"_id",""),this._regexp=e,this._flag=t,this._id=i,this.check()}check(){const e=new RegExp(this._regexp,this._flag);console.log(e);const t=e.test(this._id.value);console.log(`Input id = '${this._id.id}' - ${t}`),t?this._id.classList.remove("feedback__form-input--attention"):this._id.classList.add("feedback__form-input--attention")}}let v=[];if(document.querySelector(".wrapper")){const e=document.querySelector(".wrapper"),t=e.querySelector(".goods"),i=e.querySelector(".card__heading"),n=document.querySelector(".catalog");new u(m,new p(g,v)),new o("Card",t,"btn"),new o('<svg viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" />\n        </svg>',i,"card__link-close"),n&&n.addEventListener("click",(()=>{const e=document.querySelector(".card");"card__display--none"!=e.classList.contains&&e.classList.add("card__display--none")}))}if(document.querySelector("form")){const e=document.querySelector("form"),t=e.querySelector("#First"),i=e.querySelector("#tel"),n=e.querySelector("#email");e.querySelector(".btn").addEventListener("click",(e=>{e.preventDefault(),new y(/^[A-Z][a-z]+$/,"g",t),new y(/^\+7\(\d{3}\)\d{3}-\d{4}$/,"g",i),new y(/^([a-z0-9_\.-]+)@([a-z0-9_\.-]+)\.([a-z\.]{2,6})$/,"gi",n)}))}})()})();