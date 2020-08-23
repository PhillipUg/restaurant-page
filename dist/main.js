/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createFooter = () => {\n  const linksArr = ['Advertise', 'Career', 'Privacy Policy', 'Contact Us'];\n\n  const footer = document.createElement('footer');\n  footer.classList.add('footer');\n\n  const fb = document.createElement('i');\n  fb.classList.add('fab', 'fa-facebook-f');\n  const tw = document.createElement('i');\n  tw.classList.add('fab', 'fa-twitter');\n  const insta = document.createElement('i');\n  insta.classList.add('fab', 'fa-instagram');\n  const ul = document.createElement('ul');\n  ul.classList.add('links');\n\n  linksArr.forEach((link) => {\n    const li = document.createElement('li');\n    li.classList.add('links-items');\n    li.innerText = link;\n    ul.appendChild(li);\n  })\n\n  footer.appendChild(fb);\n  footer.appendChild(tw);\n  footer.appendChild(insta);\n  footer.appendChild(ul);\n\n  return footer;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createFooter);\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load */ \"./src/load.js\");\n\n\n\nwindow.onload = Object(_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst deactivate = (item1, item2) => {\n  item1.classList.remove(\"active\");\n  item2.style.display = 'none';\n}\n\nconst activate = (item1, item2) => {\n  item1.classList.add(\"active\");\n  item2.style.display = 'block';\n}\n\nconst tabz = document.querySelector('.tabs');\nconst tabzContent = document.querySelector('.container');\n\nconst tabsArray = [...tabz.children];\nconst panels = [...tabzContent.children];\n\npanels.forEach((panel,index) => {\n  panel.style.display = \"none\";\n  if (index === 0) {\n    panels[0].style.display = \"block\";\n  }\n});\n\n\n\n\ntabsArray.forEach((tab, index) => {\n  if (index === 0) {\n    tabsArray[0].classList.add(\"active\");\n  }\n  tab.addEventListener('click', (e) => {\n    if (e.currentTarget === tabsArray[0]) {\n      activate(tabsArray[0], panels[0])\n      deactivate(tabsArray[1], panels[1]);\n      deactivate(tabsArray[2], panels[2]);\n    } else if (e.currentTarget === tabsArray[1]) {\n      activate(tabsArray[1], panels[1])\n      deactivate(tabsArray[0], panels[0]);\n      deactivate(tabsArray[2], panels[2]);\n    } else if (e.currentTarget === tabsArray[2]) {\n      activate(tabsArray[2], panels[2])\n      deactivate(tabsArray[1], panels[1]);\n      deactivate(tabsArray[0], panels[0]);\n    }\n  });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav */ \"./src/nav.js\");\n\n\n\n\nfunction init() {\n  const content = document.querySelector('.content');\n  content.classList.add('pop7');\n\n  const footer = Object(_footer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const container = Object(_menu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const navbar = Object(_nav__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n\n  content.appendChild(navbar);\n  content.appendChild(container);\n  content.appendChild(footer);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (init);\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createMenu = () => {\n  const container = document.createElement('main');\n  container.classList.add('container');\n\n  const popUp1 = document.createElement('div');\n  popUp1.classList.add('pop', 'pop-up1');\n  popUp1.innerHTML = \"<h1>WELCOME!</h1><h2>Phil's Cave,<br>Fast Foods<br>Done Right.</h2><p>Join us for your next meal, we get the juices flowing!</p>\";\n  const popUp2 = document.createElement('div');\n  popUp2.classList.add('pop', 'pop-up2');\n  const popUp3 = document.createElement('div');\n  popUp3.classList.add('pop', 'pop-up3');\n  const addressTitle = document.createElement('h1');\n  addressTitle.classList.add('address-title');\n  addressTitle.innerHTML = 'Come and visit Us';\n  const address = document.createElement('div');\n  address.classList.add('address');\n  address.innerHTML = '<p>plot 99,</p><p>Kampala Street,</p><p>Kampala road.</p><p>Kampala, Uganda.</p><p>Tel: +256780056784</p>';\n\n  const map = document.createElement('div');\n  map.id = 'map';\n  const popUp = document.createElement('div');\n  popUp.classList.add('pop-up');\n  const h1 = document.createElement('h1');\n  h1.innerText = 'WHAT WE SERVE';\n\n\n  const meals = ['Burger King', 'Street Nugget', 'Pompus Pirate', 'Homeless Piper', 'Julius Ceasorous', \"Coder's Paradise\"];\n\n  meals.forEach((item, index) => {\n    const popItems = document.createElement('div');\n    popItems.classList.add('pop-items');\n    const popTitle = document.createElement('div');\n    popTitle.classList.add('pop-title', `pop${index}`);\n    const popInfo = document.createElement('div');\n    popInfo.classList.add('pop-info');\n    const meal = document.createElement('h3');\n    meal.innerText = item;\n    const price = document.createElement('p');\n    price.innerText = `$${Math.floor(Math.random() * (40 - 20) + 20)}`;\n    popInfo.appendChild(meal);\n    popInfo.appendChild(price);\n    popItems.appendChild(popTitle);\n    popItems.appendChild(popInfo);\n    popUp.appendChild(popItems);\n  })\n\n  popUp3.appendChild(addressTitle);\n  popUp3.appendChild(address);\n  popUp3.appendChild(map);\n  popUp2.appendChild(h1);\n  popUp2.appendChild(popUp);\n  container.appendChild(popUp1);\n  container.appendChild(popUp2);\n  container.appendChild(popUp3);\n  return container;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createMenu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst createNav = () => {\n  const tabsArr = ['HOME', 'MENU', 'CONTACT &nbsp;&nbsp;&nbsp; US'];\n\n  const navbar = document.createElement('nav');\n  navbar.classList.add('navbar');\n\n  const logoText = document.createElement('div');\n  logoText.classList.add('logo-text');\n  logoText.innerHTML = \"PHIL'S<br>CAVE\";\n\n  const tabs = document.createElement('div');\n  tabs.classList.add('tabs');\n\n  tabsArr.forEach((item) => {\n    const tab = document.createElement('button');\n    tab.classList.add('tab');\n    tab.innerHTML = item;\n    tabs.appendChild(tab);\n  })\n\n  navbar.appendChild(logoText);\n  navbar.appendChild(tabs);\n\n  return navbar;\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (createNav);\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ })

/******/ });