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

/***/ "./src/dark_light.js":
/*!***************************!*\
  !*** ./src/dark_light.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ darkLightMode)\n/* harmony export */ });\nconst toggleBtn = document.getElementById('toggle-btn');\r\nconst moon = document.getElementById('moon');\r\nconst sun = document.getElementById('sun');\r\nconst html = document.getElementsByTagName('html')[0];\r\n\r\n\r\nfunction darkLightMode() {\r\n\r\n    if(html.classList == 'dark-mode') {\r\n\r\n        html.classList.remove('dark-mode');\r\n        html.classList.add('light-mode');\r\n        sun.classList.add('hide');\r\n        moon.classList.remove('hide');\r\n        toggleBtn.children[0].innerText = 'Dark';\r\n   }else {\r\n\r\n       html.classList.remove('light-mode');\r\n       html.classList.add('dark-mode');\r\n       moon.classList.add('hide');\r\n       sun.classList.remove('hide');\r\n       toggleBtn.children[0].innerText = 'Light';\r\n   }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://github-user-search-app/./src/dark_light.js?");

/***/ }),

/***/ "./src/domRender.js":
/*!**************************!*\
  !*** ./src/domRender.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderData\": () => (/* binding */ renderData)\n/* harmony export */ });\n\r\n\r\nconst renderData = (data) => {\r\n    const { avatar_url, bio, company, created_at, followers, following, location, login, public_repos, twitter_username } = data;\r\n\r\n    document.getElementById('avatar').src = avatar_url;\r\n    //document.getElementById('bio').innerText = bio;\r\n    //document.getElementById('date').innerText = created_at;\r\n    document.getElementById('login').innerText = login;\r\n    document.getElementById('repo').innerText = public_repos;\r\n    document.getElementById('follower').innerText = followers;\r\n    document.getElementById('following').innerText = following;\r\n\r\n   \r\n\r\n}   \r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://github-user-search-app/./src/domRender.js?");

/***/ }),

/***/ "./src/fetchData.js":
/*!**************************!*\
  !*** ./src/fetchData.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getData)\n/* harmony export */ });\n/* harmony import */ var _domRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domRender */ \"./src/domRender.js\");\n\r\n\r\nasync function getData(user) {\r\n\r\n    try{\r\n        const userData = await fetch(`https://api.github.com/users/${user}`);\r\n        const data = await userData.json();\r\n        (0,_domRender__WEBPACK_IMPORTED_MODULE_0__.renderData)(data);\r\n    }catch (error) {\r\n        \r\n        console.log(error);\r\n    }\r\n}\n\n//# sourceURL=webpack://github-user-search-app/./src/fetchData.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dark_light__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dark_light */ \"./src/dark_light.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fetchData */ \"./src/fetchData.js\");\n\r\n\r\n\r\nconst toggleBtn = document.getElementById('toggle-btn');\r\nconst searchBtn = document.getElementById('search_btn');\r\n\r\nconsole.log(avatar);\r\n\r\n\r\n\r\n\r\n\r\nsearchBtn.addEventListener('click', () =>{\r\n    (0,_fetchData__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(document.getElementById('search_bar').value);\r\n})\r\n\r\ntoggleBtn.addEventListener('click', _dark_light__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://github-user-search-app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;