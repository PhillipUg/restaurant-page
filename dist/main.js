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
/*! exports provided: createFooter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFooter\", function() { return createFooter; });\nconst createFooter = () => {\n\n  let linksArr = [\"Advertise\", \"Career\", \"Privacy Policy\", \"Contact Us\"];\n\n\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(\"footer\");\n\n  const fb = document.createElement(\"i\");\n  fb.classList.add(\"fab\", \"fa-facebook-f\");\n  const tw = document.createElement(\"i\");\n  tw.classList.add(\"fab\", \"fa-twitter\");\n  const insta = document.createElement(\"i\");\n  insta.classList.add(\"fab\", \"fa-instagram\");\n  const ul = document.createElement(\"ul\");\n  ul.classList.add(\"links\");\n\n  for (let i = 0; i < 4; i++) {\n    const li = document.createElement(\"li\");\n    li.classList.add(\"links-items\");\n    li.innerText = `${linksArr[i]}`;\n    ul.appendChild(li);\n  }\n\n  footer.appendChild(fb);\n  footer.appendChild(tw);\n  footer.appendChild(insta);\n  footer.appendChild(ul);\n\n  return footer;\n}\n\n//# sourceURL=webpack:///./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.js */ \"./src/load.js\");\n\n\n\nwindow.onload = Object(_load_js__WEBPACK_IMPORTED_MODULE_0__[\"init\"])();\n\n\n\n\n\n\nconst tabz = document.querySelector(\".tabs\");\nconst tabzContent = document.querySelector(\".container\");\n\nlet tabsArray = [...tabz.children];\nlet panels = [...tabzContent.children];\n\npanels.forEach((panel, index) => {\n  panel.style.display = \"none\"\n  if (index == 0) {\n    panels[0].style.display = \"block\"\n  }\n});\n\ntabsArray.forEach((tab, index) => {\n  if (index === 0) {\n    tabsArray[0].classList.add(\"active\");\n  }\n  tab.addEventListener('click', (e) => {\n    if (e.currentTarget == tabsArray[0]) {\n      tabsArray[0].classList.add(\"active\");\n      panels[0].style.display = \"block\";\n      tabsArray[1].classList.remove(\"active\");\n      panels[1].style.display = \"none\";\n      tabsArray[2].classList.remove(\"active\");\n      panels[2].style.display = \"none\";\n    } else if (e.currentTarget == tabsArray[1]) {\n      tabsArray[1].classList.add(\"active\");\n      panels[1].style.display = \"block\";\n      tabsArray[0].classList.remove(\"active\");\n      panels[0].style.display = \"none\";\n      tabsArray[2].classList.remove(\"active\");\n      panels[2].style.display = \"none\";\n    } else if (e.currentTarget == tabsArray[2]) {\n      tabsArray[2].classList.add(\"active\");\n      panels[2].style.display = \"block\";\n      tabsArray[1].classList.remove(\"active\");\n      panels[1].style.display = \"none\";\n      tabsArray[0].classList.remove(\"active\");\n      panels[0].style.display = \"none\";\n    }\n  });\n\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/load.js":
/*!*********************!*\
  !*** ./src/load.js ***!
  \*********************/
/*! exports provided: init */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"init\", function() { return init; });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.js */ \"./src/footer.js\");\n/* harmony import */ var _nav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.js */ \"./src/nav.js\");\n\n\n\n\nfunction init(){\nconst content = document.querySelector(\".content\");\ncontent.classList.add(\"pop7\");\n\nconst footer = Object(_footer_js__WEBPACK_IMPORTED_MODULE_1__[\"createFooter\"])();\nconst container = Object(_menu_js__WEBPACK_IMPORTED_MODULE_0__[\"createMenu\"])();\nconst navbar = Object(_nav_js__WEBPACK_IMPORTED_MODULE_2__[\"createNav\"])();\n\ncontent.appendChild(navbar);\ncontent.appendChild(container);\ncontent.appendChild(footer);\n};\n\n//# sourceURL=webpack:///./src/load.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: createMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMenu\", function() { return createMenu; });\nconst createMenu = () => {\n  const container = document.createElement(\"main\");\n  container.classList.add(\"container\");\n\n  const popUp1 = document.createElement(\"div\");\n  popUp1.classList.add(\"pop\", \"pop-up1\");\n  popUp1.innerHTML = \"<h1>WELCOME!</h1><h2>Phil's Cave,<br>Fast Foods<br>Done Right.</h2><p>Join us for your next meal, we get the juices flowing!</p>\";\n  const popUp2 = document.createElement(\"div\");\n  popUp2.classList.add(\"pop\", \"pop-up2\");\n  const popUp3 = document.createElement(\"div\");\n  popUp3.classList.add(\"pop\", \"pop-up3\");\n  const addressTitle = document.createElement(\"h1\");\n  addressTitle.classList.add(\"address-title\");\n  addressTitle.innerHTML = \"Come and visit Us\";\n  const address = document.createElement(\"div\");\n  address.classList.add(\"address\");\n  address.innerHTML = \"<p>plot 99,</p><p>Kampala Street,</p><p>Kampala road.</p><p>Kampala, Uganda.</p><p>Tel: +256780056784</p>\";\n\n  const map = document.createElement(\"div\");\n  map.id = \"map\";\n  const popUp = document.createElement(\"div\");\n  popUp.classList.add('pop-up');\n  const h1 = document.createElement(\"h1\");\n  h1.innerText = \"WHAT WE SERVE\";\n\n\n  let meals = [\"Burger King\", \"Street Nugget\", \"Pompus Pirate\", \"Homeless Piper\", \"Julius Ceasorous\", \"Coder's Paradise\"];\n\n  for (let i = 1; i < 7; i++) {\n    const popItems = document.createElement(\"div\");\n    popItems.classList.add(\"pop-items\")\n    const popTitle = document.createElement(\"div\");\n    popTitle.classList.add(\"pop-title\", `pop${i}`);\n    const popInfo = document.createElement(\"div\");\n    popInfo.classList.add(\"pop-info\");\n    const meal = document.createElement(\"h3\");\n    meal.innerText = `${meals[i - 1]}`\n    const price = document.createElement(\"p\");\n    price.innerText = `$${Math.floor(Math.random() * (40 - 20) + 20)}`\n    popInfo.appendChild(meal);\n    popInfo.appendChild(price);\n    popItems.appendChild(popTitle);\n    popItems.appendChild(popInfo);\n    popUp.appendChild(popItems);\n  }\n\n  popUp3.appendChild(addressTitle);\n  popUp3.appendChild(address);\n  popUp3.appendChild(map);\n  popUp2.appendChild(h1);\n  popUp2.appendChild(popUp);\n  container.appendChild(popUp1);\n  container.appendChild(popUp2);\n  container.appendChild(popUp3);\n  return container;\n}\n\n\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/*! exports provided: createNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNav\", function() { return createNav; });\nconst createNav = () => {\n  const navbar = document.createElement(\"nav\");\n  navbar.classList.add(\"navbar\");\n\n  const logo = document.createElement(\"div\");\n  logo.classList.add(\"logo\");\n\n  const logoText = document.createElement(\"div\");\n  logoText.classList.add(\"logo-text\");\n  logoText.innerHTML = \"PHIL'S<br>CAVE\";\n\n  const tabs = document.createElement(\"div\");\n  tabs.classList.add(\"tabs\");\n\n  const tab1 = document.createElement(\"button\");\n  tab1.classList.add(\"tab\")\n  tab1.innerText = \"HOME\";\n\n  const tab2 = document.createElement(\"button\");\n  tab2.classList.add(\"tab\");\n  tab2.innerText = \"MENU\";\n\n  const tab3 = document.createElement(\"button\");\n  tab3.classList.add(\"tab\");\n  tab3.innerHTML = \"CONTACT &nbsp;&nbsp;&nbsp; US\";\n\n  tabs.appendChild(tab1);\n  tabs.appendChild(tab2);\n  tabs.appendChild(tab3);\n  navbar.appendChild(logo);\n  navbar.appendChild(logoText);\n  navbar.appendChild(tabs);\n\n  return navbar;\n}\n\n//# sourceURL=webpack:///./src/nav.js?");

/***/ })

/******/ });