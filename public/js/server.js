/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/modules/AbstractList.js":
/*!****************************************!*\
  !*** ./src/js/modules/AbstractList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AbstractList)\n/* harmony export */ });\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass AbstractList {\n  constructor(classItem, CardListInst, cardProduct) {\n    _defineProperty(this, \"_items\", []);\n\n    _defineProperty(this, \"_class\", '');\n\n    _defineProperty(this, \"_CardListInst\", null);\n\n    this._class = classItem;\n    this._CardListInst = CardListInst;\n    this._cardProduct = cardProduct;\n  }\n\n  createArr(typeOfFile) {\n    if (typeOfFile == 'jsonFile') {\n      this.fetchGoods().then(res => {\n        if (res.status == 200) {\n          return res.json();\n        } else {\n          throw new Error('Json file not found!');\n        }\n      }).then(data => {\n        this.beforeRender(data.products);\n      }).catch(err => {\n        console.warn(err);\n      });\n    } else if (typeOfFile == 'arrFile') {\n      this.beforeRender(this.fetchGoods());\n    }\n  }\n\n  beforeRender(renderArr) {\n    const goods = renderArr.map(cur => {\n      return new this._class(cur, this._CardListInst);\n    });\n    this._items = [];\n\n    this._items.push(...goods);\n\n    this.render();\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/AbstractList.js?");

/***/ }),

/***/ "./src/js/modules/AddItemBtn.js":
/*!**************************************!*\
  !*** ./src/js/modules/AddItemBtn.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddItemBtn)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/js/modules/Button.js\");\n\n\n // Кнопка добавления в корзину\n\nclass AddItemBtn extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(text, placeToRender, styleClass, func) {\n    super(text, placeToRender, styleClass);\n    this._func = func;\n  }\n\n  onBtnClick() {\n    this._func();\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/AddItemBtn.js?");

/***/ }),

/***/ "./src/js/modules/Button.js":
/*!**********************************!*\
  !*** ./src/js/modules/Button.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Button)\n/* harmony export */ });\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Button {\n  constructor(text, placeToRender, styleClass) {\n    _defineProperty(this, \"text\", '');\n\n    _defineProperty(this, \"placeToRender\", '');\n\n    _defineProperty(this, \"styleClass\", '');\n\n    this.text = text;\n    this.placeToRender = placeToRender;\n    this.styleClass = styleClass;\n    this.render();\n  }\n\n  onBtnClick() {\n    console.log('Clicked!');\n  }\n\n  getTemplate() {\n    const btn = document.createElement('button');\n    btn.classList.add(this.styleClass);\n    btn.innerHTML = this.text;\n    return btn;\n  }\n\n  render() {\n    if (this.placeToRender) {\n      const btn = this.getTemplate();\n      this.placeToRender.appendChild(btn);\n      btn.addEventListener('click', () => {\n        this.onBtnClick();\n      });\n    }\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/Button.js?");

/***/ }),

/***/ "./src/js/modules/CardBtn.js":
/*!***********************************!*\
  !*** ./src/js/modules/CardBtn.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardBtn)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/js/modules/Button.js\");\n\n\n // Кнопка корзины\n\nclass CardBtn extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(text, placeToRender, styleClass) {\n    super(text, placeToRender, styleClass);\n    this.card = document.querySelector('.card');\n  }\n\n  onBtnClick() {\n    this.card.classList.toggle('card__display--none');\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/CardBtn.js?");

/***/ }),

/***/ "./src/js/modules/CardItem.js":
/*!************************************!*\
  !*** ./src/js/modules/CardItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardItem)\n/* harmony export */ });\n/* harmony import */ var _Quantity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quantity */ \"./src/js/modules/Quantity.js\");\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Рендер карточки товара в корзине\n\nclass CardItem {\n  constructor({\n    name,\n    price,\n    quantity\n  }, CardListInst) {\n    _defineProperty(this, \"_name\", '');\n\n    _defineProperty(this, \"_price\", 0);\n\n    _defineProperty(this, \"_quantity\", 0);\n\n    _defineProperty(this, \"_CardListInst\", null);\n\n    this._name = name;\n    this._price = price;\n    this._quantity = quantity;\n    this._CardListInst = CardListInst;\n  }\n\n  add(math) {\n    this._CardListInst.add(math, this._name, this._price);\n  }\n\n  render() {\n    const placeToRender = document.querySelector('.card__list');\n\n    if (placeToRender) {\n      const wrapper = document.createElement('div');\n      wrapper.classList.add('card__item--wrapper');\n      placeToRender.appendChild(wrapper);\n      const item = document.createElement('div');\n      item.classList.add('card__item');\n      item.innerHTML = `<h3>${this._name}</h3>\n                               <p>Price: ${this._price}$</p>\n                               `;\n      wrapper.appendChild(item);\n      const quantityDiv = document.createElement('div');\n      quantityDiv.classList.add('card__item--quantity');\n      quantityDiv.innerHTML = `<p>Quantity:</p>`;\n      wrapper.appendChild(quantityDiv);\n      new _Quantity__WEBPACK_IMPORTED_MODULE_0__.default(`<i class=\"far fa-minus-square\"></i>`, quantityDiv, 'card__item--minus', 'minus', this.add.bind(this));\n      quantityDiv.insertAdjacentHTML('beforeend', `${this._quantity}`);\n      new _Quantity__WEBPACK_IMPORTED_MODULE_0__.default(`<i class=\"far fa-plus-square\"></i>`, quantityDiv, 'card__item--plus', 'plus', this.add.bind(this));\n      new _Quantity__WEBPACK_IMPORTED_MODULE_0__.default('(Delete item)', quantityDiv, 'btn--delete', 'delete', this.add.bind(this));\n      wrapper.insertAdjacentHTML(\"beforeend\", `<p>Sum: ${this._quantity * this._price}$</p><hr>`);\n    }\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/CardItem.js?");

/***/ }),

/***/ "./src/js/modules/CardList.js":
/*!************************************!*\
  !*** ./src/js/modules/CardList.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CardList)\n/* harmony export */ });\n/* harmony import */ var _AbstractList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractList */ \"./src/js/modules/AbstractList.js\");\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Рендер корзины\n\nclass CardList extends _AbstractList__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(classItem, cardProduct) {\n    super(classItem);\n\n    _defineProperty(this, \"_cardProduct\", []);\n\n    this._CardListInst = this;\n    this._cardProduct = cardProduct;\n    this.createArr('arrFile');\n  }\n\n  add(math, name, price) {\n    this._name = name;\n    this._price = price;\n\n    const i = this._cardProduct.findIndex(item => item.name === this._name);\n\n    if (math == 'plus') {\n      // Если товар есть в корзине -> увеличиваем количество\n      if (i != -1) {\n        this._cardProduct[i].quantity++;\n      } else {\n        // Если ещё нет, добавляем в корзину\n        this._cardProduct.push({\n          name: this._name,\n          price: this._price,\n          quantity: 1\n        });\n      }\n    } else if (math == 'minus') {\n      if (this._cardProduct[i].quantity > 1) {\n        this._cardProduct[i].quantity--;\n      }\n    } else if (math == 'delete') {\n      this._cardProduct.splice(i, 1);\n    }\n\n    this.createArr('arrFile');\n  }\n\n  fetchGoods() {\n    return this._cardProduct;\n  }\n\n  render() {\n    const placeToRender = document.querySelector('.card__list');\n\n    if (placeToRender) {\n      // Рендер карточек если есть товары в корзине \n      if (this._items.length > 0) {\n        placeToRender.innerHTML = '';\n\n        this._items.forEach(good => {\n          good.render();\n        }); // Подсчёт суммы в корзине\n\n\n        let sum = 0;\n        const totalItems = this.fetchGoods();\n        totalItems.forEach(item => {\n          sum += item.price * item.quantity;\n        });\n        placeToRender.insertAdjacentHTML('beforeend', `<h3>Total sum: ${sum}</h3>`); // Если корзины пустая редерим сообщение об этом\n      } else {\n        placeToRender.innerHTML = '<div class=\"cart__empty\">Cart is empty</div>';\n      }\n    }\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/CardList.js?");

/***/ }),

/***/ "./src/js/modules/GoodItem.js":
/*!************************************!*\
  !*** ./src/js/modules/GoodItem.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GoodItem)\n/* harmony export */ });\n/* harmony import */ var _AddItemBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddItemBtn */ \"./src/js/modules/AddItemBtn.js\");\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n // Рендер карточек товаров\n\nclass GoodItem {\n  constructor({\n    img,\n    name,\n    price\n  }, CardListInst) {\n    _defineProperty(this, \"_img\", '');\n\n    _defineProperty(this, \"_name\", '');\n\n    _defineProperty(this, \"_price\", 0);\n\n    _defineProperty(this, \"_CardListInst\", null);\n\n    this._img = img;\n    this._name = name;\n    this._price = price;\n    this._CardListInst = CardListInst;\n  }\n\n  add() {\n    this._CardListInst.add('plus', this._name, this._price);\n  }\n\n  render() {\n    const placeToRender = document.querySelector('.catalog');\n\n    if (placeToRender) {\n      const block = document.createElement('div');\n      block.classList.add('catalog__item');\n      block.innerHTML = `<img src=\"${this._img}\" alt=\"img-item\">\n                               <h3>${this._name}</h3>\n                               <p>Price: ${this._price}$</p>`;\n      placeToRender.appendChild(block);\n      new _AddItemBtn__WEBPACK_IMPORTED_MODULE_0__.default('Add to card', block, 'btn', this.add.bind(this));\n    }\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/GoodItem.js?");

/***/ }),

/***/ "./src/js/modules/ProductsList.js":
/*!****************************************!*\
  !*** ./src/js/modules/ProductsList.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductsList)\n/* harmony export */ });\n/* harmony import */ var _AbstractList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbstractList */ \"./src/js/modules/AbstractList.js\");\n/* harmony import */ var _AddItemBtn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddItemBtn */ \"./src/js/modules/AddItemBtn.js\");\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nconst wrapper = document.querySelector('.wrapper'); // Рендер товаров\n\nclass ProductsList extends _AbstractList__WEBPACK_IMPORTED_MODULE_0__.default {\n  //Список url на json файлы\n  //Номер текущей страницы\n  constructor(classItem, CardListInst) {\n    super(classItem, CardListInst);\n\n    _defineProperty(this, \"_dataList\", []);\n\n    _defineProperty(this, \"_dataUrlPage\", 0);\n\n    this.fetchDataList();\n  }\n\n  fetchGoods() {\n    // Получем url json файла со списком товаров на текущей странице\n    if (this._dataList.length > 0) {\n      // let url = this._dataList[this._dataUrlPage].url;\n      let url = `${document.location.protocol}//${document.location.host}/${this._dataList[this._dataUrlPage].url}`;\n      this._dataUrlPage++; // Если больше страниц нет, убираем кнопку \"Показать ещё\"\n\n      if (this._dataUrlPage == this._dataList.length) {\n        let button = wrapper.querySelector('.btn__show-more');\n\n        if (button) {\n          button.remove();\n        }\n      }\n\n      return fetch(url);\n    } else {\n      // Если список пуст, выводим сообщение \"Каталог пуст\"\n      wrapper.querySelector('.catalog').innerHTML = '<div class=\"cart__empty\">Catalog is empty</div>';\n    }\n  } // Получаем список страниц товара из dataList.json и рендерим кнопку \"Показать больше\" если страниц > 1\n\n\n  fetchDataList() {\n    // let urlDataList = \"http://localhost:3000/database/dataList.json\";\n    let urlDataList = `${document.location.protocol}//${document.location.host}/database/dataList.json`;\n    fetch(urlDataList).then(res => {\n      if (res.status == 200) {\n        return res.json();\n      } else {\n        throw new Error('Json file not found!');\n      }\n    }).then(data => {\n      const dataUrl = data.dataUrl;\n\n      this._dataList.push(...dataUrl);\n\n      if (this._dataList.length > 1) {\n        if (wrapper.querySelector('.catalog')) {\n          new _AddItemBtn__WEBPACK_IMPORTED_MODULE_1__.default('Show more', wrapper, 'btn__show-more', this.createArr.bind(this, 'jsonFile'));\n        }\n      }\n\n      this.createArr('jsonFile');\n    }).catch(err => {\n      console.warn(err); // Если списка не существует, выводим сообщение \"Каталог пуст\"\n\n      wrapper.querySelector('.catalog').innerHTML = '<div class=\"cart__empty\">Catalog is empty</div>';\n    });\n  }\n\n  render() {\n    this._items.forEach(good => {\n      good.render();\n    });\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/ProductsList.js?");

/***/ }),

/***/ "./src/js/modules/Quantity.js":
/*!************************************!*\
  !*** ./src/js/modules/Quantity.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Quantity)\n/* harmony export */ });\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ \"./src/js/modules/Button.js\");\n\n\n // Кнопка изменениния колличества товара и удаления из корзины\n\nclass Quantity extends _Button__WEBPACK_IMPORTED_MODULE_0__.default {\n  constructor(text, placeToRender, styleClass, math, func) {\n    super(text, placeToRender, styleClass);\n    this._math = math;\n    this._func = func;\n  }\n\n  onBtnClick() {\n    this._func(this._math);\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/Quantity.js?");

/***/ }),

/***/ "./src/js/modules/RegExp.js":
/*!**********************************!*\
  !*** ./src/js/modules/RegExp.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Valid)\n/* harmony export */ });\n\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nclass Valid {\n  constructor(regexp, flag, id) {\n    _defineProperty(this, \"_regexp\", '');\n\n    _defineProperty(this, \"_flag\", '');\n\n    _defineProperty(this, \"_id\", '');\n\n    this._regexp = regexp;\n    this._flag = flag;\n    this._id = id;\n    this.check();\n  }\n\n  check() {\n    const newRegexp = new RegExp(this._regexp, this._flag);\n    console.log(newRegexp);\n    const test = newRegexp.test(this._id.value);\n    console.log(`Input id = '${this._id.id}' - ${test}`);\n\n    if (!test) {\n      this._id.classList.add('feedback__form-input--attention');\n    } else {\n      this._id.classList.remove('feedback__form-input--attention');\n    }\n  }\n\n}\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/RegExp.js?");

/***/ }),

/***/ "./src/js/modules/fetchItem.js":
/*!*************************************!*\
  !*** ./src/js/modules/fetchItem.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardProduct\": () => (/* binding */ cardProduct)\n/* harmony export */ });\nlet cardProduct = [];\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/modules/fetchItem.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_CardBtn__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/CardBtn */ \"./src/js/modules/CardBtn.js\");\n/* harmony import */ var _modules_ProductsList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ProductsList */ \"./src/js/modules/ProductsList.js\");\n/* harmony import */ var _modules_CardList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/CardList */ \"./src/js/modules/CardList.js\");\n/* harmony import */ var _modules_GoodItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/GoodItem */ \"./src/js/modules/GoodItem.js\");\n/* harmony import */ var _modules_CardItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/CardItem */ \"./src/js/modules/CardItem.js\");\n/* harmony import */ var _modules_RegExp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/RegExp */ \"./src/js/modules/RegExp.js\");\n/* harmony import */ var _modules_fetchItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/fetchItem */ \"./src/js/modules/fetchItem.js\");\n\n\n\n\n\n\n\n\n\nconst wrapper = document.querySelector('.wrapper'),\n      goods = wrapper.querySelector('.goods'),\n      cardHeading = wrapper.querySelector('.card__heading'),\n      catalog = document.querySelector('.catalog');\nconst CardListInst = new _modules_CardList__WEBPACK_IMPORTED_MODULE_2__.default(_modules_CardItem__WEBPACK_IMPORTED_MODULE_4__.default, _modules_fetchItem__WEBPACK_IMPORTED_MODULE_6__.cardProduct);\nnew _modules_ProductsList__WEBPACK_IMPORTED_MODULE_1__.default(_modules_GoodItem__WEBPACK_IMPORTED_MODULE_3__.default, CardListInst);\nnew _modules_CardBtn__WEBPACK_IMPORTED_MODULE_0__.default('Card', goods, 'btn');\nnew _modules_CardBtn__WEBPACK_IMPORTED_MODULE_0__.default(`<svg viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path d=\"M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z\" />\n    </svg>`, cardHeading, 'card__link-close');\n\nif (catalog) {\n  catalog.addEventListener('click', () => {\n    const card = document.querySelector('.card');\n\n    if (card.classList.contains != 'card__display--none') {\n      card.classList.add('card__display--none');\n    }\n  });\n}\n\nconst feedbackForm = document.querySelector('form'),\n      inputFirst = feedbackForm.querySelector('#First'),\n      inputTel = feedbackForm.querySelector('#tel'),\n      inputEmail = feedbackForm.querySelector('#email'),\n      formBtn = feedbackForm.querySelector('.btn');\nformBtn.addEventListener('click', e => {\n  e.preventDefault();\n  new _modules_RegExp__WEBPACK_IMPORTED_MODULE_5__.default(/^[A-Z][a-z]+$/, 'g', inputFirst);\n  new _modules_RegExp__WEBPACK_IMPORTED_MODULE_5__.default(/^\\+7\\(\\d{3}\\)\\d{3}-\\d{4}$/, 'g', inputTel);\n  new _modules_RegExp__WEBPACK_IMPORTED_MODULE_5__.default(/^([a-z0-9_\\.-]+)@([a-z0-9_\\.-]+)\\.([a-z\\.]{2,6})$/, 'gi', inputEmail);\n});\n\n//# sourceURL=webpack://javascript_advenced_course/./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/script.js");
/******/ 	
/******/ })()
;