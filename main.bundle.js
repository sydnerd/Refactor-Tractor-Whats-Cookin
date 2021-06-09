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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/green-apples.jpg */ "./src/images/green-apples.jpg");
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_green_apples_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "@charset \"UTF-8\";\n/* 📇 Import directory */\n/* CSS variables, organized by category  */\n/* 🎨 Color Palette */\n/* Dark Slate Grey */\n/* used on the body, .search-input, .search-input::placeholder, #overlay */\n/* Light Slate Grey */\n/* .drop-menu */\n/* White */\n/* h1, #recipe-title, aside, .wrap, .recipe-card, .recipe-instructions, #exit-recipe-btn, .text, .show-pantry-recipes-btn, .show-all-btn, .filter-btn, .recipe-instructions h4 */\n/* Black */\n/* .pantry-list */\n/* Medium Apple Green */\n/* h2, .filter-btn:hover */\n/* Dark Apple Green */\n/* h3, h4, .text, .show-pantry-recipes-btn, .show-all-btn, .filter-btn, .drop-menu h2, .recipe-instructions h4 */\n/* Light Apple Green  */\n/* h4, span, .nav-btn:hover, #exit-recipe-btn:hover */\n/* Mint Green  */\n/* .search-input */\n/* ↗️ Cursor Styles  */\n/* Pointer! */\n/* 📲 Media Query Screen Sizes */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/*  */\n/* 📱 Mobile  */\n@media screen and (min-width: 250px) and (max-width: 539px) {\n  .body {\n    display: flex;\n    flex-direction: column; }\n  .header {\n    flex-flow: column;\n    align-items: center; }\n    .header h1 {\n      display: flex;\n      flex-direction: row;\n      align-self: center;\n      font-size: 40px;\n      margin: .3em; }\n    .header .search-form {\n      width: 75%;\n      margin: 1%;\n      align-self: center; } }\n\n/* Fonts  */\n/*  */\nh1 {\n  align-self: center;\n  color: #ffffff;\n  font-family: \"Sulphur Point\", sans-serif;\n  font-size: 50px;\n  margin: 0%;\n  padding: 0% 0.7% 0%;\n  width: 70%;\n  cursor: pointer; }\n\nh2 {\n  color: #84c8a4;\n  margin: 10px 0px 10px 0px; }\n\nh3 {\n  color: #359567;\n  cursor: pointer;\n  height: 17%;\n  margin: 5px 5px 10px 0px;\n  transition: .8s ease; }\n\nh4 {\n  color: #359567;\n  background-color: #c4eb67;\n  border-radius: 3px;\n  margin: 10px 0px 0px 0px;\n  padding: 1px 4px 1px 4px;\n  width: max-content; }\n\nheader {\n  grid-area: header;\n  display: flex;\n  flex-direction: row;\n  padding: 0% 0%;\n  width: 100%; }\n\nspan {\n  color: #c4eb67;\n  font-weight: 400; }\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  grid-area: image;\n  height: 150px;\n  overflow: hidden;\n  width: 100%; }\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%; }\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: #ffffff;\n  width: 100%; }\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px; }\n\n.welcome-msg {\n  margin-top: 50px; }\n\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0; }\n\n/* Remove default margin */\nbody,\nh1,\nh2,\np,\nul[class],\nol[class],\nli {\n  margin: 0; }\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5; }\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none; }\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: inline; }\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit; }\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important; } }\n\nbody {\n  background-color: #3e5265;\n  display: grid;\n  font-family: \"Quicksand\", sans-serif;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas: \"header header\" \"image image\" \"aside main\";\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto; }\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px; }\n\n.search-form {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset #c4eb67;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex;\n  flex-direction: row;\n  font-family: \"Quicksand\", sans-serif;\n  justify-content: center;\n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%; }\n\n.search-input {\n  background-color: #b6dcca;\n  background: -webkit-gradient(linear, left top, left bottom, color-stop(0, white), color-stop(1, #e1e1e1));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: #3e5265;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 42px;\n  height: 100%;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%; }\n\n.search-input:hover {\n  box-shadow: inset 0px 0px 0px 0px #ffffff;\n  transition: .8s ease; }\n\n.search-input:focus {\n  box-shadow: inset 0px 0px 0px 0px #ffffff; }\n\n.search-input::placeholder {\n  color: #3e5265;\n  font-size: 20px;\n  text-align: right;\n  text-shadow: none; }\n\n.search-input:focus::placeholder {\n  font-size: 0px;\n  transition: .8s ease; }\n\n.search-label {\n  display: none; }\n\n.search-btn {\n  border-left: 3px outset #c4eb67;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%; }\n\n.nav-btn {\n  align-items: center;\n  background: #3e5265 no-repeat;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  margin: 0%;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%; }\n\n.nav-btn:hover {\n  color: #c4eb67;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  transition: .4s ease; }\n\n.nav-btn img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px; }\n\n.saved-ingredients-btn {\n  border-left: 3px solid #c4eb67; }\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px; }\n\n/* FILTER SIDEBAR */\naside {\n  background-color: #ffffff;\n  display: flex;\n  justify-content: center;\n  height: auto;\n  text-align: center; }\n\n.wrap {\n  background-color: #ffffff;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px; }\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px; }\n\nli {\n  margin: 2px; }\n\n/* RECIPE CARD SECTION */\nmain {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.recipe-card {\n  background-color: #ffffff;\n  border: 2px solid #c4eb67;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 270px;\n  margin: 20px;\n  padding: 15px;\n  width: 250px; }\n\n.recipe-card:hover .card-photo-preview {\n  opacity: 50%;\n  transition: .8s ease; }\n\n.recipe-card:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  transition: .5s ease;\n  width: 100%; }\n\n.recipe-card:hover h3 {\n  text-shadow: 0px 0px 4px #c4eb67;\n  transition: .8s ease; }\n\n.card-apple-icon {\n  cursor: pointer;\n  float: right;\n  height: 50px;\n  padding-bottom: 10px;\n  width: 45px; }\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: pointer;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%; }\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  height: 130px;\n  justify-content: center;\n  position: relative; }\n\n.text {\n  background: #359567;\n  color: #ffffff;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease; }\n\n/* BUTTONS */\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn {\n  background-color: #359567;\n  border: 0;\n  border-radius: 3px;\n  color: #ffffff;\n  cursor: pointer;\n  font-family: \"Quicksand\", sans-serif;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px; }\n\n.show-pantry-recipes-btn {\n  margin-top: 10px; }\n\n.show-all-btn {\n  height: 40px;\n  width: 200px; }\n\n.filter-btn:hover {\n  background-color: #84c8a4; }\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: #dae4ee;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3; }\n\n.drop-menu h2 {\n  color: #359567;\n  margin: 0px; }\n\n.pantry-list {\n  color: #000000;\n  padding-left: 15px;\n  text-align: left; }\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: #ffffff;\n  border: 3px solid #c4eb67;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000; }\n\n#exit-recipe-btn {\n  background: #ffffff;\n  border: 2px double #359567;\n  border-radius: 5px;\n  color: #359567;\n  cursor: pointer;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease; }\n\n#exit-recipe-btn:hover {\n  background: #c4eb67;\n  transition: .3s ease; }\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: #ffffff;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black; }\n\n.recipe-instructions h4 {\n  background: #ffffff;\n  color: #359567; }\n\n.recipe-instructions p {\n  margin-left: 2%; }\n\n.recipe-instructions ol {\n  margin-right: 2%; }\n\n#overlay {\n  filter: alpha(opacity=50);\n  background-color: #3e5265;\n  height: 100%;\n  left: 0;\n  opacity: 0.5;\n  position: fixed;\n  top: 0;\n  width: 100%;\n  z-index: 100; }\n", "",{"version":3,"sources":["webpack://./src/css/base.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_media-queries.scss","webpack://./src/css/_typography.scss","webpack://./src/css/_headers-banners.scss","webpack://./src/css/_reset.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB,wBAAA;ACAA,0CAAA;AAGA,qBAAA;AACA,oBAAA;AACA,0EAAA;AAGA,qBAAA;AACA,eAAA;AAGA,UAAA;AACA,gLAAA;AAGA,UAAA;AACA,iBAAA;AAGA,uBAAA;AACA,0BAAA;AAGA,qBAAA;AACA,gHAAA;AAGA,uBAAA;AACA,qDAAA;AAGA,gBAAA;AACA,kBAAA;AAIA,sBAAA;AACA,aAAA;AAIA,gCAAA;AAQA,KAAA;AACA,KAAA;AAGA,KAAA;AACA,KAAA;AAGA,KAAA;AACA,KAAA;AAGA,KAAA;AACA,KAAA;AAGA,KAAA;AACA,KAAA;AAGA,KAAA;AACA,KAAA;ACvEA,eAAA;AACA;EAEE;IACE,aAAa;IACb,sBAAsB,EAAA;EAGxB;IACE,iBAAiB;IACjB,mBAAmB,EAAA;IAFrB;MAKI,aAAa;MACb,mBAAmB;MACnB,kBAAkB;MAClB,eAAe;MACf,YAAY,EAAA;IAThB;MAaI,UAAU;MACV,UAAU;MACV,kBAAkB,EAAA,EACnB;;ACxBL,WAAA;AAGA,KAAA;ACHA;EACE,kBAAkB;EAClB,cHYa;EGXb,wCAAwC;EACxC,eAAe;EACf,UAAU;EACV,mBAAmB;EACnB,UAAU;EACV,eH+Ba,EAAA;;AG5Bf;EACE,cHUuB;EGTvB,yBAAyB,EAAA;;AAG3B;EACE,cHSwB;EGRxB,eHqBa;EGpBb,WAAW;EACX,wBAAwB;EACxB,oBAAoB,EAAA;;AAGtB;EACE,cHCwB;EGAxB,yBHIyB;EGHzB,kBAAkB;EAClB,wBAAwB;EACxB,wBAAwB;EACxB,kBAAkB,EAAA;;AAGpB;EACE,iBAAiB;EACjB,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,WAAW,EAAA;;AAGb;EACE,cHZyB;EGazB,gBAAgB,EAAA;;AAGlB,gBAAA;AACA;EACE,4GAA6F;EAC7F,gBAAgB;EAChB,aAAa;EACb,gBAAgB;EAChB,WAAW,EAAA;;AAGb;;EAEE,kBAAkB;EAClB,UAAU,EAAA;;AAGZ;;EAEE,cHjDa;EGkDb,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,gBAAgB,EAAA;;AAGlB;EACE,gBAAgB,EAAA;;ACxElB,2BAAA;AACA;;EAEE,UAAU,EAAA;;AAGZ,0BAAA;AACA;;;;;;;EAQE,SAAS,EAAA;;AAGX,2BAAA;AACA;EACE,iBAAiB;EACjB,uBAAuB;EACvB,6BAA6B;EAC7B,gBAAgB,EAAA;;AAGlB,iEAAA;AACA;;EAEE,gBAAgB,EAAA;;AAGlB,oCAAA;AACA;EACE,eAAe;EACf,eAAe,EAAA;;AAGjB,yCAAA;AACA;;;;EAIE,aAAa,EAAA;;AAGf,iFAAA;AACA;EACE;IACE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC,EAAA,EACjC;;AL/CH;EACE,yBCFiB;EDGjB,aAAa;EACb,oCGTiC;EHUjC,8BAA8B;EAC9B,+DAGc;EACd,SAAS;EACT,UAAU;EACV,4BAA4B,EAAA;;AAG9B;EACE,YAAY;EACZ,gBAAgB;EAChB,WAAW,EAAA;;AAGb;EACE,kCAAkC;EAClC,0BCCyB;EDAzB,mCAAmC;EACnC,aAAa;EACb,mBAAmB;EACnB,oCGhCiC;EHiCjC,uBAAuB;EACvB,yBAAyB;EACzB,WAAW,EAAA;;AAGb;EACE,yBCNkB;EDOlB,yGAA+H;EAC/H,gCAAgC;EAChC,YAAY;EACZ,4CAA4C;EAC5C,cCvCiB;EDwCjB,oCG7CiC;EH8CjC,eAAe;EACf,YAAY;EACZ,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;EACpB,WAAW,EAAA;;AAGb;EACE,yCC1Ca;ED2Cb,oBAAoB,EAAA;;AAGtB;EACE,yCC/Ca,EAAA;;ADkDf;EACE,cC3DiB;ED4DjB,eAAe;EACf,iBAAiB;EACjB,iBAAiB,EAAA;;AAGnB;EACE,cAAc;EACd,oBAAoB,EAAA;;AAGtB;EACE,aAAa,EAAA;;AAGf;EACE,+BCnDyB;EDoDzB,gCAAgC;EAChC,WAAW,EAAA;;AAGb;EACE,mBAAmB;EACnB,6BAAgC;EAChC,YAAY;EACZ,eCnDa;EDoDb,aAAa;EACb,sBAAsB;EACtB,cAAc;EACd,gBAAgB;EAChB,uBAAuB;EACvB,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,oBAAoB;EACpB,UAAU,EAAA;;AAGZ;EACE,cC1EyB;ED2EzB,eAAe;EACf,8BAA8B;EAC9B,oBAAoB,EAAA;;AAGtB;EACE,gBAAgB;EAChB,eAAe;EACf,gBAAgB,EAAA;;AAGlB;EACE,8BCvFyB,EAAA;;AD0F3B;EACE,aAAa;EACb,wBAAwB,EAAA;;AAG1B,mBAAA;AACA;EACE,yBCjHa;EDkHb,aAAa;EACb,uBAAuB;EACvB,YAAY;EACZ,kBAAkB,EAAA;;AAGpB;EACE,yBCzHa;ED0Hb,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,YAAY,EAAA;;AAGd;EACE,qBAAqB;EACrB,gBAAgB;EAChB,kBAAkB,EAAA;;AAGpB;EACE,WAAW,EAAA;;AAGb,wBAAA;AACA;EACE,eAAe;EACf,aAAa;EACb,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;EACnB,eAAe,EAAA;;AAGjB;EACE,yBCrJa;EDsJb,yBCtIyB;EDuIzB,kBAAkB;EAClB,eC/Ha;EDgIb,aAAa;EACb,YAAY;EACZ,aAAa;EACb,YAAY,EAAA;;AAGd;EACE,YAAY;EACZ,oBAAoB,EAAA;;AAGtB;EACE,eAAe;EACf,aAAa;EACb,oBAAoB;EACpB,WAAW,EAAA;;AAGb;EACE,gCC5JyB;ED6JzB,oBAAoB,EAAA;;AAGtB;EACE,eCxJa;EDyJb,YAAY;EACZ,YAAY;EACZ,oBAAoB;EACpB,WAAW,EAAA;;AAGb;EACE,4BAA4B;EAC5B,4BAA4B;EAC5B,sBAAsB;EACtB,kBAAkB;EAClB,eCpKa;EDqKb,aAAa;EACb,oBAAoB;EACpB,WAAW,EAAA;;AAGb;EACE,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,uBAAuB;EACvB,kBAAkB,EAAA;;AAGpB;EACE,mBChMwB;EDiMxB,cC7Ma;ED8Mb,gBAAgB;EAChB,cAAc;EACd,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,oBAAoB,EAAA;;AAItB,YAAA;AACA;;;EAGE,yBCjNwB;EDkNxB,SAAS;EACT,kBAAkB;EAClB,cChOa;EDiOb,eCxMa;EDyMb,oCG/OiC;EHgPjC,eAAe;EACf,iBAAiB;EACjB,0BAA0B,EAAA;;AAG5B;EACE,gBAAgB,EAAA;;AAGlB;EACE,YAAY;EACZ,YAAY,EAAA;;AAGd;EACE,yBC1OuB,EAAA;;AD8OzB,gBAAA;AACA;EACE,mBAAmB;EACnB,yBC7PkB;ED8PlB,aAAa;EACb,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,UAAU,EAAA;;AAGZ;EACE,cC3PwB;ED4PxB,WAAW,EAAA;;AAGb;EACE,cCxQa;EDyQb,kBAAkB;EAClB,gBAAgB,EAAA;;AAIlB,wBAAA;AACA;EACE,mBCpRa;EDqRb,yBCrQyB;EDsQzB,mBAAmB;EACnB,+BAA+B;EAC/B,aAAa;EACb,WAAW;EACX,SAAS;EACT,kBAAkB;EAClB,oBAAoB;EACpB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,UAAU;EACV,aAAa,EAAA;;AAGf;EACE,mBCrSa;EDsSb,0BC1RwB;ED2RxB,kBAAkB;EAClB,cC5RwB;ED6RxB,eChRa;EDiRb,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,eAAe;EACf,oBAAoB,EAAA;;AAGtB;EACE,mBClSyB;EDmSzB,oBAAoB,EAAA;;AAGtB;EACE,4BAA4B;EAC5B,sBAAsB;EACtB,8BAA8B;EAC9B,cC1Ta;ED2Tb,eAAe;EACf,SAAS;EACT,WAAW;EACX,kBAAkB;EAClB,8BAA8B,EAAA;;AAGhC;EACE,mBCnUa;EDoUb,cCxTwB,EAAA;;AD2T1B;EACE,eAAe,EAAA;;AAGjB;EACE,gBAAgB,EAAA;;AAGlB;EACE,yBAAwB;EACxB,yBCzViB;ED0VjB,YAAW;EACX,OAAM;EACN,YAAW;EACX,eAAc;EACd,MAAK;EACL,WAAU;EACV,YAAW,EAAA","sourcesContent":["/* 📇 Import directory */\n@import 'variables';\n@import 'media-queries';\n@import 'typography';\n@import 'headers-banners';\n@import 'reset';\n\nbody {\n  background-color: $dark-grey;\n  display: grid;\n  font-family: $quicksand;\n  grid-template-columns: 1fr 5fr;\n  grid-template-areas:\n    \"header header\"\n    \"image image\"\n    \"aside main\";\n  margin: 0;\n  padding: 0;\n  -webkit-font-smoothing: auto;\n}\n\n.header-apple-icon {\n  height: 40px;\n  margin-left: 5px;\n  width: 35px;\n}\n\n.search-form {\n  border-radius: 15px 15px 15px 15px;\n  border: 3px outset $light-apple-green;\n  box-shadow: 0px 0px 7px 0px #475d74;\n  display: flex; \n  flex-direction: row; \n  font-family: $quicksand;\n  justify-content: center; \n  margin: 1.2% 0.5% 1.2% 0%;\n  width: 100%;\n}\n\n.search-input {\n  background-color: $mint-green;\n  background: -webkit-gradient( linear,left top, left bottom, color-stop(0, rgb(255, 255, 255)), color-stop(1, rgb(225,225,225)));\n  border-radius: 10px 0px 0px 10px;\n  border: none;\n  box-shadow: inset -3px -1px 20px 1px #5c7894;\n  color: $dark-grey;\n  font-family: $quicksand;\n  font-size: 42px;\n  height: 100%;\n  padding: 0% 2% 0% 0%;\n  text-align: right;\n  transition: .8s ease;\n  width: 100%;\n}\n\n.search-input:hover {\n  box-shadow: inset 0px 0px 0px 0px $white;\n  transition: .8s ease;\n}\n\n.search-input:focus {\n  box-shadow: inset 0px 0px 0px 0px $white;\n}\n\n.search-input::placeholder {\n  color: $dark-grey;\n  font-size: 20px;\n  text-align: right;\n  text-shadow: none;\n}\n\n.search-input:focus::placeholder {\n  font-size: 0px;\n  transition: .8s ease;\n}\n\n.search-label {\n  display: none;\n}\n\n.search-btn {\n  border-left: 3px outset $light-apple-green;\n  border-radius: 0px 15px 15px 0px;\n  padding: 1%;\n}\n\n.nav-btn {\n  align-items: center;\n  background: $dark-grey no-repeat;\n  border: none;\n  cursor: $point;\n  display: flex;\n  flex-direction: column;\n  font-size: 0px;\n  font-weight: 700;\n  justify-content: center;\n  margin: 0%;\n  overflow: hidden;\n  text-align: center;\n  transition: .4s ease;\n  width: 15%;\n}\n\n.nav-btn:hover {\n  color: $light-apple-green;\n  font-size: 14px;\n  text-shadow: 0px 2px 4px black;\n  transition: .4s ease;\n}\n\n.nav-btn img {\n  max-height: 40px;\n  max-width: 40px;\n  padding: 2px 0px;\n}\n\n.saved-ingredients-btn {\n  border-left: 3px solid $light-apple-green;\n}\n\n.ing-pan-btn {\n  margin: 1% 0%;\n  padding: 1px 6px 5px 0px;\n}\n\n/* FILTER SIDEBAR */\naside {\n  background-color: $white;\n  display: flex;\n  justify-content: center;\n  height: auto;\n  text-align: center;\n}\n\n.wrap {\n  background-color: $white;\n  height: 100vh;\n  padding: 10px;\n  position: relative;\n  width: 200px;\n}\n\nul {\n  list-style-type: none;\n  text-align: left;\n  padding-left: 35px;\n}\n\nli {\n  margin: 2px;\n}\n\n/* RECIPE CARD SECTION */\nmain {\n  grid-area: main;\n  display: flex;\n  justify-content: center;\n  align-content: flex-start;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.recipe-card {\n  background-color: $white;\n  border: 2px solid $light-apple-green;\n  border-radius: 7px;\n  cursor: $point;\n  height: 270px;\n  margin: 20px;\n  padding: 15px;\n  width: 250px;\n}\n\n.recipe-card:hover .card-photo-preview {\n  opacity: 50%;\n  transition: .8s ease;\n}\n\n.recipe-card:hover .text {\n  font-size: 20px;\n  opacity: 100%;\n  transition: .5s ease;\n  width: 100%;\n}\n\n.recipe-card:hover h3 {\n  text-shadow: 0px 0px 4px $light-apple-green;\n  transition: .8s ease;\n}\n\n.card-apple-icon {\n  cursor: $point;\n  float: right;\n  height: 50px;\n  padding-bottom: 10px;\n  width: 45px;\n}\n\n.card-photo-preview {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px;\n  cursor: $point;\n  height: 130px;\n  transition: .8s ease;\n  width: 100%;\n}\n\n.card-photo-container {\n  align-items: center;\n  display: flex;\n  height: 130px;\n  justify-content: center;\n  position: relative;\n}\n\n.text {\n  background: $dark-apple-green;\n  color: $white;\n  font-weight: 700;\n  font-size: 0px;\n  opacity: 0%;\n  padding: 0%;\n  position: absolute;\n  text-align: center;\n  width: 0%;\n  transition: .5s ease;\n}\n\n\n/* BUTTONS */\n.show-pantry-recipes-btn,\n.show-all-btn,\n.filter-btn {\n  background-color: $dark-apple-green;\n  border: 0;\n  border-radius: 3px;\n  color: $white;\n  cursor: $point;\n  font-family: $quicksand;\n  font-size: 12pt;\n  font-weight: bold;\n  padding: 5px 10px 5px 10px;\n}\n\n.show-pantry-recipes-btn {\n  margin-top: 10px;\n}\n\n.show-all-btn {\n  height: 40px;\n  width: 200px;\n}\n\n.filter-btn:hover {\n  background-color: $med-apple-green;\n}\n\n\n/* PANTRY LIST */\n.drop-menu {\n  align-items: center;\n  background-color: $light-grey;\n  display: none;\n  height: 600px;\n  margin-left: 81%;\n  margin-top: 92px;\n  overflow: scroll;\n  padding: 12px;\n  position: absolute;\n  text-align: center;\n  width: 250px;\n  z-index: 3;\n}\n\n.drop-menu h2 {\n  color: $dark-apple-green;\n  margin: 0px;\n}\n\n.pantry-list {\n  color: $black;\n  padding-left: 15px;\n  text-align: left;\n}\n\n\n/* RECIPE INSTRUCTIONS */\n.recipe-instructions {\n  background: $white;\n  border: 3px solid $light-apple-green;\n  border-radius: 10px;\n  box-shadow: 1px 1px 115px black;\n  display: none;\n  height: 70%;\n  margin: 0;\n  overflow-x: scroll;\n  padding: 1% 1% 1% 1%;\n  position: fixed;\n  right: 15%;\n  top: 15%;\n  width: 70%;\n  z-index: 1000;\n}\n\n#exit-recipe-btn {\n  background: $white;\n  border: 2px double $dark-apple-green;\n  border-radius: 5px;\n  color: $dark-apple-green;\n  cursor: $point;\n  font-size: 20px;\n  font-weight: 700;\n  margin: -4% -3% 2% -1%;\n  position: fixed;\n  transition: .3s ease;\n}\n\n#exit-recipe-btn:hover {\n  background: $light-apple-green;\n  transition: .3s ease;\n}\n\n#recipe-title {\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 7px 7px 0px 0px;\n  color: $white;\n  font-size: 30px;\n  margin: 0;\n  padding: 5%;\n  text-align: center;\n  text-shadow: 0px 0px 6px black;\n}\n\n.recipe-instructions h4 {\n  background: $white;\n  color: $dark-apple-green;\n}\n\n.recipe-instructions p {\n  margin-left: 2%;\n}\n\n.recipe-instructions ol {\n  margin-right: 2%;\n}\n\n#overlay {\n  filter:alpha(opacity=50);\n  background-color: $dark-grey;\n  height:100%;\n  left:0;\n  opacity:0.5;\n  position:fixed;\n  top:0;\n  width:100%;\n  z-index:100;\n}\n","/* CSS variables, organized by category  */\n\n\n/* 🎨 Color Palette */\n/* Dark Slate Grey */\n/* used on the body, .search-input, .search-input::placeholder, #overlay */\n$dark-grey: #3e5265;\n\n/* Light Slate Grey */\n/* .drop-menu */\n$light-grey: #dae4ee;\n\n/* White */\n/* h1, #recipe-title, aside, .wrap, .recipe-card, .recipe-instructions, #exit-recipe-btn, .text, .show-pantry-recipes-btn, .show-all-btn, .filter-btn, .recipe-instructions h4 */\n$white: #ffffff;\n\n/* Black */\n/* .pantry-list */\n$black: #000000;\n\n/* Medium Apple Green */\n/* h2, .filter-btn:hover */\n$med-apple-green: #84c8a4;\n\n/* Dark Apple Green */\n/* h3, h4, .text, .show-pantry-recipes-btn, .show-all-btn, .filter-btn, .drop-menu h2, .recipe-instructions h4 */\n$dark-apple-green: #359567;\n\n/* Light Apple Green  */\n/* h4, span, .nav-btn:hover, #exit-recipe-btn:hover */\n$light-apple-green: #c4eb67;\n\n/* Mint Green  */\n/* .search-input */\n$mint-green: #b6dcca;\n\n\n/* ↗️ Cursor Styles  */\n/* Pointer! */\n$point: pointer;\n\n\n/* 📲 Media Query Screen Sizes */\n$mobile: 250px;\n$tablet: 540px;\n$laptop: 1024px;\n$desktop: 1200px;\n$jumbo-screen: 1450px;\n\n\n/*  */\n/*  */\n\n\n/*  */\n/*  */\n\n\n/*  */\n/*  */\n\n\n/*  */\n/*  */\n\n\n/*  */\n/*  */\n\n\n/*  */\n/*  */\n","/* 📱 Mobile  */\n@media screen and (min-width: $mobile) and (max-width: $tablet - 1) {\n\n  .body {\n    display: flex;\n    flex-direction: column;\n  }\n\n  .header {\n    flex-flow: column;\n    align-items: center;\n\n    h1 {\n      display: flex;\n      flex-direction: row;\n      align-self: center;\n      font-size: 40px;\n      margin: .3em;\n    }\n\n    .search-form {\n      width: 75%;\n      margin: 1%;\n      align-self: center;\n    }\n  }\n}\n","/* Fonts  */\n$quicksand: \"Quicksand\", sans-serif;\n$sulphurPoint: \"Sulphur Point\", sans-serif;\n/*  */\n","h1 {\n  align-self: center;\n  color: $white;\n  font-family: \"Sulphur Point\", sans-serif; // typography\n  font-size: 50px; // typography\n  margin: 0%; // mixins\n  padding: 0% 0.7% 0%; // mixins\n  width: 70%;\n  cursor: $point; // mixins\n}\n\nh2 {\n  color: $med-apple-green;\n  margin: 10px 0px 10px 0px; // mixins\n}\n\nh3 {\n  color: $dark-apple-green;\n  cursor: $point;\n  height: 17%; // mixins\n  margin: 5px 5px 10px 0px; // mixins\n  transition: .8s ease; // transitions\n}\n\nh4 {\n  color: $dark-apple-green;\n  background-color: $light-apple-green;\n  border-radius: 3px; // mixins\n  margin: 10px 0px 0px 0px; // mixins\n  padding: 1px 4px 1px 4px; // mixins\n  width: max-content; // mixins\n}\n\nheader {\n  grid-area: header; // grids\n  display: flex; // flex\n  flex-direction: row; // flex\n  padding: 0% 0%; // mixins\n  width: 100%; // mixins\n}\n\nspan {\n  color: $light-apple-green;\n  font-weight: 400; // typography\n}\n\n/* BANNER IMAGE*/\n.banner-image {\n  background: linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)),url(\"../images/green-apples.jpg\"); // variables? mixins?\n  grid-area: image; // grids\n  height: 150px; // mixins\n  overflow: hidden; // mixins\n  width: 100%; // mixins\n}\n\n.my-recipes-banner,\n.welcome-msg {\n  text-align: center;\n  width: 95%; // mixins\n}\n\n.my-recipes-banner h1,\n.welcome-msg h1 {\n  color: $white;\n  width: 100%; // mixins\n}\n\n.my-recipes-banner {\n  display: none;\n  margin-top: 25px; // mixins\n}\n\n.welcome-msg {\n  margin-top: 50px; // mixins\n}\n","\n/* Remove default padding */\nul[class],\nol[class] {\n  padding: 0;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\np,\nul[class],\nol[class],\nli,\n {\n  margin: 0;\n}\n\n/* Set core body defaults */\nbody {\n  min-height: 100vh;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n  line-height: 1.5;\n}\n\n/* Remove list styles on ul, ol elements with a class attribute */\nul[class],\nol[class] {\n  list-style: none;\n}\n\n/* Make images easier to work with */\nimg {\n  max-width: 100%;\n  display: inline;\n}\n\n/* Inherit fonts for inputs and buttons */\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove all animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "", "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: fetchAllData, fetchIngredientsData, fetchRecipeData, fetchUserData, postIng */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAllData", function() { return fetchAllData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchIngredientsData", function() { return fetchIngredientsData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecipeData", function() { return fetchRecipeData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUserData", function() { return fetchUserData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postIng", function() { return postIng; });
const fetchAllData = () => {
    const promises = [fetchIngredientsData(), fetchRecipeData(), fetchUserData()]
    return Promise.all(promises)
        .catch(error => console.log("ERROR"))
}

const fetchIngredientsData = () => {
    return fetch("http://localhost:3001/api/v1/ingredients")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
}

const fetchRecipeData = () => {
    return fetch("http://localhost:3001/api/v1/recipes")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
}

const fetchUserData = () => {
    let userPromise = fetch("http://localhost:3001/api/v1/users")
        .then(response => response.json())
        .catch(err => console.log("ERROR"))
    return userPromise
}

const postIng = (data, userId) => {
  const initObj = { userID: userId, ingredientID: data.id, ingredientModification: data.ingredientModification }
  const init = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(initObj)
  }
  return fetch("http://localhost:3001/api/v1/users", init)
  .then(response => response.json())
  .catch(err => console.log(err.message))
}




/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/base.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/css/styles.scss":
/*!*****************************!*\
  !*** ./src/css/styles.scss ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/css/styles.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/dom-updates.js":
/*!****************************!*\
  !*** ./src/dom-updates.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let domUpdates = {

  menuOpen: false,

  addWelcomeMessage(firstName) {
    let welcomeMsg = `
      <div class="welcome-msg">
        <h1>Welcome ${firstName}!</h1>
      </div>`;
    document.querySelector(".banner-image").insertAdjacentHTML("afterbegin",
      welcomeMsg);
  },

  addToDom(recipeInfo, shortRecipeName) {

    let cardHtml = `
      <article class="recipe-card" id=${recipeInfo.id} tabindex="0">
        <h3 maxlength="40">${shortRecipeName}</h3>
        <div class="card-photo-container">
          <img src=${recipeInfo.image} class="card-photo-preview" alt="${recipeInfo.name} recipe" title="${recipeInfo.name} recipe">
          <div class="text">
            <div>Click for Instructions</div>
          </div>
        </div>
        <h4>${recipeInfo.tags[0]}</h4>
        <img src="../images/apple-logo-outline.png" alt="unfilled apple icon" class="card-apple-icon">
      </article>`
    document.querySelector("main").insertAdjacentHTML("beforeend", cardHtml);
  },

  listTags(allTags) {
    allTags.forEach(tag => {
      let tagHtml = `<li><input type="checkbox" class="checked-tag" id="${tag}">
        <label for="${tag}">${this.capitalize(tag)}</label></li>`;
      tagList.insertAdjacentHTML("beforeend", tagHtml);
    });
  },

  capitalize(words) {
    return words.split(" ").map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  },

  generateRecipeTitle(recipe, ingredients) {
    let recipeTitle = `
      <button id="exit-recipe-btn">X</button>
      <h3 id="recipe-title">${recipe.name}</h3>
      <h4>Ingredients</h4>
      <p>${ingredients}</p>`
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", recipeTitle);
  },

  addRecipeImage(recipe) {
    document.getElementById("recipe-title").style.backgroundImage = `url(${recipe.image})`;
  },

  generateInstructions(recipe) {
    let instructionsList = "";
    let instructions = recipe.instructions.map(i => {
      return i.instruction
    });
    instructions.forEach(i => {
      instructionsList += `<li>${i}</li>`
    });
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", "<h4>Instructions</h4>");
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", `<ol>${instructionsList}</ol>`);
  },

  generateCost(recipe, pantry) {
    let recipeCost = recipe.calculateIngredientsCost(pantry).toFixed(2);
    document.querySelector("#recipeInstructions").insertAdjacentHTML("beforeend", `<h4>Recipe Cost: $${recipeCost}</h4>`)
  },

  exitRecipe() {
    let fullRecipeInfo = document.querySelector("#recipeInstructions");
    while (fullRecipeInfo.firstChild &&
      fullRecipeInfo.removeChild(fullRecipeInfo.firstChild));
    fullRecipeInfo.style.display = "none";
    document.getElementById("overlay").remove();
  },

  showMyRecipesBanner() {
    document.querySelector(".welcome-msg").style.display = "none";
    document.querySelector(".my-recipes-banner").style.display = "block";
  },

  showWelcomeBanner() {
    document.querySelector(".welcome-msg").style.display = "flex";
    document.querySelector(".my-recipes-banner").style.display = "none";
  },

  toggleMenu() {
    var menuDropdown = document.querySelector(".drop-menu");
    this.menuOpen = !this.menuOpen;
    if (this.menuOpen) {
      menuDropdown.style.display = "block";
    } else {
      menuDropdown.style.display = "none";
    }
  },

  displayPantryInfo(userPantryInfo) {
    let pantryList = document.querySelector(".pantry-list");
    pantryList.innerHTML = "";
    userPantryInfo.forEach(ingredient => {
      let ingredientHtml = `<li><input type="checkbox" class="pantry-checkbox" id="${ingredient.name}">
        <label for="${ingredient.name}">${ingredient.name}, ${ingredient.count}</label>
        <button type="button" class="add-ing" id="addIng" data-id="${ingredient.id}">+</button>
        <button type="button" class="remove-ing" id="removeIng" data-id="${ingredient.id}">-</button></li>`;
      pantryList.insertAdjacentHTML("beforeend",
        ingredientHtml);
    });
  }
}

/* harmony default export */ __webpack_exports__["default"] = (domUpdates);


/***/ }),

/***/ "./src/images/apple-logo-outline.png":
/*!*******************************************!*\
  !*** ./src/images/apple-logo-outline.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo-outline.png");

/***/ }),

/***/ "./src/images/apple-logo.png":
/*!***********************************!*\
  !*** ./src/images/apple-logo.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/apple-logo.png");

/***/ }),

/***/ "./src/images/cookbook.png":
/*!*********************************!*\
  !*** ./src/images/cookbook.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookbook.png");

/***/ }),

/***/ "./src/images/green-apples.jpg":
/*!*************************************!*\
  !*** ./src/images/green-apples.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/green-apples.jpg");

/***/ }),

/***/ "./src/images/search.png":
/*!*******************************!*\
  !*** ./src/images/search.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/search.png");

/***/ }),

/***/ "./src/images/seasoning.png":
/*!**********************************!*\
  !*** ./src/images/seasoning.png ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/seasoning.png");

/***/ }),

/***/ "./src/ingredient.js":
/*!***************************!*\
  !*** ./src/ingredient.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class Ingredient {
  constructor(ingredient, amount) {
    this.id = ingredient.id;
    this.name = ingredient.name;
    this.estimatedCostInCents = ingredient.estimatedCostInCents;
    this.count = amount || 0;
    this.ingredientModification = 0;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Ingredient);


/***/ }),

/***/ "./src/recipe.js":
/*!***********************!*\
  !*** ./src/recipe.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

class Recipe {
  constructor(recipe) {
    this.id = recipe.id;
    this.name = recipe.name;
    this.image = recipe.image;
    this.tags = recipe.tags;
    this.ingredients = recipe.ingredients;
  }


  calculateIngredientsCost(ingredientDataset) {
    const totalCost = this.ingredients.reduce((acc, currentIngredient) => {
      let foundIngredient = ingredientDataset.find(ingredient => ingredient.id === currentIngredient.id);
      acc += currentIngredient.quantity.amount * foundIngredient.estimatedCostInCents;
      return acc;
    }, 0);
    return totalCost / 100;
  }
}

module.exports = Recipe;


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _images_search_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/search.png */ "./src/images/search.png");
/* harmony import */ var _images_apple_logo_outline_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/apple-logo-outline.png */ "./src/images/apple-logo-outline.png");
/* harmony import */ var _images_apple_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/apple-logo.png */ "./src/images/apple-logo.png");
/* harmony import */ var _images_cookbook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/cookbook.png */ "./src/images/cookbook.png");
/* harmony import */ var _images_seasoning_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/seasoning.png */ "./src/images/seasoning.png");
/* harmony import */ var _css_styles_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/styles.scss */ "./src/css/styles.scss");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user */ "./src/user.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./recipe */ "./src/recipe.js");
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_recipe__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ingredient__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ingredient */ "./src/ingredient.js");
/* harmony import */ var _dom_updates__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dom-updates */ "./src/dom-updates.js");















let allRecipesBtn = document.querySelector("#showAllBtn");
let filterBtn = document.querySelector("#filterBtn");
let fullRecipeInfo = document.querySelector("#recipeInstructions");
let freshPicks = document.querySelector("#freshPicks")
let main = document.querySelector("main");
let pantryBtn = document.querySelector("#myPantryBtn");
let savedRecipesBtn = document.querySelector("#savedRecipesBtn");
let searchBtn = document.querySelector("#searchBtn");
let searchForm = document.querySelector("#searchForm");
let searchInput = document.querySelector("#search-input");
let showPantryRecipes = document.querySelector("#showPantryRecipesBtn");
let pantryList = document.querySelector("#pantryList");
let userPantryInfo = [];
let recipes = [];
let cookbook = [];
let pantry = [];
let user;
let userInfo = [];

window.addEventListener("load", loadData)
allRecipesBtn.addEventListener("click", showAllRecipes);
filterBtn.addEventListener("click", findCheckedBoxes);
freshPicks.addEventListener("click", showAllRecipes);
main.addEventListener("click", addToMyRecipes);
pantryBtn.addEventListener("click", _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].toggleMenu);
savedRecipesBtn.addEventListener("click", showSavedRecipes);
searchBtn.addEventListener("click", searchRecipes);
showPantryRecipes.addEventListener("click", findCheckedPantryBoxes);
searchForm.addEventListener("submit", pressEnterSearch);
pantryList.addEventListener("click", separateAPIfromChecklist)

// WINDOW LOADING FUNCTION

function loadData() {
  Object(_apiCalls__WEBPACK_IMPORTED_MODULE_0__["fetchAllData"])()
    .then(function(data) {
      fillCookbook(data[1])
      fillPantry(data[0])
      createCards(data[1])
      findTags(data[1])
      generateUser(data[2])
      findPantryInfo(data[0])
    })
}

function fillCookbook(recipeData) {
  recipeData.forEach(recipe => cookbook.push(recipe))
}

function fillPantry(ingredientData) {
  ingredientData.forEach(ingredient => pantry.push(ingredient))
}

// CONTENT LOADING FUNCTIONS
function generateUser(userData) {
  user = new _user__WEBPACK_IMPORTED_MODULE_8__["default"](userData[Math.floor(Math.random() * userData.length)]);
  let firstName = user.name.split(" ")[0];
  userInfo.push(userData)
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].addWelcomeMessage(firstName);
}

function createCards(recipeData) {
  recipeData.forEach(recipe => {
    let recipeInfo = new _recipe__WEBPACK_IMPORTED_MODULE_9___default.a(recipe);
    let shortRecipeName = recipeInfo.name;
    recipes.push(recipeInfo);
    if (recipeInfo.name.length > 40) {
      shortRecipeName = recipeInfo.name.substring(0, 40) + "...";
    }
    _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].addToDom(recipeInfo, shortRecipeName)
  });
}

// FILTER BY RECIPE TAGS
function findTags(recipeData) {
  let tags = [];
  recipeData.forEach(recipe => {
    recipe.tags.forEach(tag => {
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });
  tags.sort();
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].listTags(tags);
}

function findCheckedBoxes() {
  let tagCheckboxes = document.querySelectorAll(".checked-tag");
  let checkboxInfo = Array.from(tagCheckboxes)
  let selectedTags = checkboxInfo.filter(box => {
    return box.checked;
  })
  findTaggedRecipes(selectedTags);
}

function findTaggedRecipes(selected) {
  let filteredResults = [];
  selected.forEach(tag => {
    let allRecipes = recipes.filter(recipe => {
      return recipe.tags.includes(tag.id);
    });
    allRecipes.forEach(recipe => {
      if (!filteredResults.includes(recipe)) {
        filteredResults.push(recipe);
      }
    })
  });
  showAllRecipes();
  if (filteredResults.length > 0) {
    filterRecipes(filteredResults);
  }
}

function filterRecipes(filtered) {
  let foundRecipes = recipes.filter(recipe => {
    return !filtered.includes(recipe);
  });
  hideUnselectedRecipes(foundRecipes)
}

function hideUnselectedRecipes(foundRecipes) {
  foundRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
}

// FAVORITE RECIPE FUNCTIONALITY
function addToMyRecipes(event) {
  if (event.target.className === "card-apple-icon") {
    let cardId = parseInt(event.target.closest(".recipe-card").id)
    if (!user.favoriteRecipes.includes(cardId)) {
      event.target.src = "../images/apple-logo.png";
      user.saveRecipe(cardId);
    } else {
      event.target.src = "../images/apple-logo-outline.png";
      user.removeRecipe(cardId);
    }
  } else if (event.target.id === "exit-recipe-btn") {
    _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].exitRecipe();
  } else if (isDescendant(event.target.closest(".recipe-card"), event.target)) {
    openRecipeInfo(event);
  }
}

function isDescendant(parent, child) {
  let node = child;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
}

function showSavedRecipes() {
  let unsavedRecipes = recipes.filter(recipe => {
    return !user.favoriteRecipes.includes(recipe.id);
  });
  unsavedRecipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "none";
  });
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].showMyRecipesBanner();

}

// CREATE RECIPE INSTRUCTIONS
function openRecipeInfo(event) {
  fullRecipeInfo.style.display = "inline";
  let recipeId = event.path.find(e => e.id).id;
  let matchedRecipe = cookbook.find(recipe => recipe.id === Number(recipeId));
  let instantiatedRecipe = new _recipe__WEBPACK_IMPORTED_MODULE_9___default.a(matchedRecipe)
  let matchedIngredients = generateIngredients(matchedRecipe)
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].generateRecipeTitle(matchedRecipe, matchedIngredients);
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].addRecipeImage(matchedRecipe);
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].generateInstructions(matchedRecipe);
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].generateCost(instantiatedRecipe, pantry);
  fullRecipeInfo.insertAdjacentHTML("beforebegin", "<section id='overlay'></div>");
}

function getIngredientName(id) {
  let match = pantry.find(ingredient => id === ingredient.id)
  if (match) {
    return match.name
  }
}

function generateIngredients(recipe) {
  return recipe.ingredients.map(i => {
    const ingredient = getIngredientName(i.id);
    let ingredientAmount = parseFloat(i.quantity.amount.toFixed(2))
    return `${_dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].capitalize(ingredient)} (${ingredientAmount} ${i.quantity.unit})`
  }).join(", ");
}

// SEARCH RECIPES
function pressEnterSearch(event) {
  event.preventDefault();
  searchRecipes();
}

function searchRecipes() {
  showAllRecipes();
  let searchedRecipes = cookbook.filter(recipe => {
    return recipe.name.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  filterNonSearched(createRecipeObject(searchedRecipes));
}

function filterNonSearched(filtered) {
  let found = recipes.filter(recipe => {
    let ids = filtered.map(f => f.id);
    return !ids.includes(recipe.id)
  })
  hideUnselectedRecipes(found);
}

function createRecipeObject(recipes) {
  recipes = recipes.map(recipe => new _recipe__WEBPACK_IMPORTED_MODULE_9___default.a(recipe));
  return recipes
}

function showAllRecipes() {
  recipes.forEach(recipe => {
    let domRecipe = document.getElementById(`${recipe.id}`);
    domRecipe.style.display = "block";
  });
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].showWelcomeBanner();
}

// CREATE AND USE PANTRY
function findPantryInfo(ingredientsData) {
  user.pantry.forEach(item => {
    let itemInfo = ingredientsData.find(ingredient => {
      return ingredient.id === item.ingredient;
    });
    let originalIngredient = userPantryInfo.find(ingredient => {
      if (itemInfo) {
        return ingredient.name === itemInfo.name;
      }
    });
    if (itemInfo && originalIngredient) {
      originalIngredient.amount = item.amount;
    } else if (itemInfo) {
      userPantryInfo.push(new _ingredient__WEBPACK_IMPORTED_MODULE_10__["default"](itemInfo, item.amount));
    }
  });
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].displayPantryInfo(userPantryInfo.sort((a, b) => a.name.localeCompare(b.name)));
}

function findCheckedPantryBoxes() {
  let pantryCheckboxes = document.querySelectorAll(".pantry-checkbox");
  let pantryCheckboxInfo = Array.from(pantryCheckboxes)
  let selectedIngredients = pantryCheckboxInfo.filter(box => {
    return box.checked;
  })
  showAllRecipes();
  if (selectedIngredients.length > 0) {
    findRecipesWithCheckedIngredients(selectedIngredients);
  }
  _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].showMyRecipesBanner()
}

function findRecipesWithCheckedIngredients(selected) {
  let recipeChecker = (arr, target) => target.every(v => arr.includes(v));
  let ingredientNames = selected.map(item => {
    return item.id;
  })
  recipes.forEach(recipe => {
    let allRecipeIngredients = [];
    recipe.ingredients.forEach(ingredient => {
      let ingredientName = getIngredientName(ingredient.id)
      allRecipeIngredients.push(ingredientName);
    });
    if (!recipeChecker(allRecipeIngredients, ingredientNames)) {
      let domRecipe = document.getElementById(`${recipe.id}`);
      domRecipe.style.display = "none";
    }
  })
}

function separateAPIfromChecklist(event) {
  if (event.target.id === "addIng") {
    updatePantry(event)
  } else if (event.target.id === "removeIng") {
    updatePantry(event)
  }
}

  function updatePantry(event) {
    userPantryInfo.forEach(ingredient => {
      if (+event.target.dataset.id === ingredient.id) {
        event.target.id === "addIng" ? ingredient.count++ && ingredient.ingredientModification++ : ingredient.count-- && ingredient.ingredientModification--
        Object(_apiCalls__WEBPACK_IMPORTED_MODULE_0__["postIng"])(ingredient, user.id);
        ingredient.ingredientModification = 0;
      }
    })
    _dom_updates__WEBPACK_IMPORTED_MODULE_11__["default"].displayPantryInfo(userPantryInfo)
}


/***/ }),

/***/ "./src/user.js":
/*!*********************!*\
  !*** ./src/user.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class User {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.pantry = user.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
  }

  saveRecipe(recipe) {
    this.favoriteRecipes.push(recipe);
  }

  removeRecipe(recipe) {
    let i = this.favoriteRecipes.indexOf(recipe);
    this.favoriteRecipes.splice(i, 1);
  }

  decideToCook(recipe) {
    this.recipesToCook.push(recipe);
  }

  filterRecipes(type) {
    return this.favoriteRecipes.filter(recipe => recipe.tags.includes(type));
  }

  searchForRecipe(keyword) {
    return this.favoriteRecipes.filter(recipe => recipe.name.includes(keyword) || recipe.ingredients.includes(keyword));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9hcGlDYWxscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz8xMTA3Iiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGVzLnNjc3M/N2IyZiIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLXVwZGF0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvYXBwbGUtbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9jb29rYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvc2VhcmNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3NlYXNvbmluZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZ3JlZGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2NyaXB0cy5qcyIsIndlYnBhY2s6Ly8v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QixNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsZUFBZSxNQUFNLFVBQVUsVUFBVSx3QkFBd0IsV0FBVyxVQUFVLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxpQkFBaUIsTUFBTSxXQUFXLG1CQUFtQixNQUFNLFdBQVcsWUFBWSxXQUFXLFlBQVksbUJBQW1CLE1BQU0sV0FBVyxhQUFhLGFBQWEsYUFBYSxhQUFhLG1CQUFtQixNQUFNLFlBQVksV0FBVyxZQUFZLFdBQVcsZ0JBQWdCLEtBQUssV0FBVyxtQkFBbUIsWUFBWSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksaUJBQWlCLE1BQU0sWUFBWSxpQkFBaUIsTUFBTSxXQUFXLGlCQUFpQixLQUFLLFVBQVUsa0JBQWtCLE1BQU0sa0JBQWtCLGFBQWEsTUFBTSxnQkFBZ0IsV0FBVyxXQUFXLGdCQUFnQixXQUFXLEtBQUssWUFBWSxhQUFhLGFBQWEsbUJBQW1CLFlBQVksTUFBTSxrQkFBa0IsWUFBWSxLQUFLLFVBQVUsZ0JBQWdCLFlBQVksUUFBUSxnQkFBZ0IsV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEseUJBQXlCLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxZQUFZLFVBQVUsVUFBVSxrQkFBa0IsTUFBTSxVQUFVLFlBQVksaUJBQWlCLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGNBQWMsY0FBYyxhQUFhLGlCQUFpQixLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGVBQWUsWUFBWSxVQUFVLFlBQVksYUFBYSxhQUFhLGlCQUFpQixLQUFLLFlBQVksbUJBQW1CLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxZQUFZLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxhQUFhLGNBQWMsaUJBQWlCLEtBQUssWUFBWSxhQUFhLFdBQVcsV0FBVyxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxpQkFBaUIsS0FBSyxZQUFZLFlBQVksWUFB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlEQUFpRCxVQUFVO0FBQzNEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQU87QUFDZjtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUkscURBQVU7QUFDZDs7Ozs7Ozs7Ozs7OztBQzVUQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsbUVBQUksRUFBQyIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4uL2ltYWdlcy9ncmVlbi1hcHBsZXMuanBnXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4vKiDwn5OHIEltcG9ydCBkaXJlY3RvcnkgKi9cXG4vKiBDU1MgdmFyaWFibGVzLCBvcmdhbml6ZWQgYnkgY2F0ZWdvcnkgICovXFxuLyog8J+OqCBDb2xvciBQYWxldHRlICovXFxuLyogRGFyayBTbGF0ZSBHcmV5ICovXFxuLyogdXNlZCBvbiB0aGUgYm9keSwgLnNlYXJjaC1pbnB1dCwgLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIsICNvdmVybGF5ICovXFxuLyogTGlnaHQgU2xhdGUgR3JleSAqL1xcbi8qIC5kcm9wLW1lbnUgKi9cXG4vKiBXaGl0ZSAqL1xcbi8qIGgxLCAjcmVjaXBlLXRpdGxlLCBhc2lkZSwgLndyYXAsIC5yZWNpcGUtY2FyZCwgLnJlY2lwZS1pbnN0cnVjdGlvbnMsICNleGl0LXJlY2lwZS1idG4sIC50ZXh0LCAuc2hvdy1wYW50cnktcmVjaXBlcy1idG4sIC5zaG93LWFsbC1idG4sIC5maWx0ZXItYnRuLCAucmVjaXBlLWluc3RydWN0aW9ucyBoNCAqL1xcbi8qIEJsYWNrICovXFxuLyogLnBhbnRyeS1saXN0ICovXFxuLyogTWVkaXVtIEFwcGxlIEdyZWVuICovXFxuLyogaDIsIC5maWx0ZXItYnRuOmhvdmVyICovXFxuLyogRGFyayBBcHBsZSBHcmVlbiAqL1xcbi8qIGgzLCBoNCwgLnRleHQsIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biwgLnNob3ctYWxsLWJ0biwgLmZpbHRlci1idG4sIC5kcm9wLW1lbnUgaDIsIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0ICovXFxuLyogTGlnaHQgQXBwbGUgR3JlZW4gICovXFxuLyogaDQsIHNwYW4sIC5uYXYtYnRuOmhvdmVyLCAjZXhpdC1yZWNpcGUtYnRuOmhvdmVyICovXFxuLyogTWludCBHcmVlbiAgKi9cXG4vKiAuc2VhcmNoLWlucHV0ICovXFxuLyog4oaX77iPIEN1cnNvciBTdHlsZXMgICovXFxuLyogUG9pbnRlciEgKi9cXG4vKiDwn5OyIE1lZGlhIFF1ZXJ5IFNjcmVlbiBTaXplcyAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qICAqL1xcbi8qIPCfk7EgTW9iaWxlICAqL1xcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDI1MHB4KSBhbmQgKG1heC13aWR0aDogNTM5cHgpIHtcXG4gIC5ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgLmhlYWRlciB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5oZWFkZXIgaDEge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiA0MHB4O1xcbiAgICAgIG1hcmdpbjogLjNlbTsgfVxcbiAgICAuaGVhZGVyIC5zZWFyY2gtZm9ybSB7XFxuICAgICAgd2lkdGg6IDc1JTtcXG4gICAgICBtYXJnaW46IDElO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfSB9XFxuXFxuLyogRm9udHMgICovXFxuLyogICovXFxuaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LWZhbWlseTogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA1MHB4O1xcbiAgbWFyZ2luOiAwJTtcXG4gIHBhZGRpbmc6IDAlIDAuNyUgMCU7XFxuICB3aWR0aDogNzAlO1xcbiAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuaDIge1xcbiAgY29sb3I6ICM4NGM4YTQ7XFxuICBtYXJnaW46IDEwcHggMHB4IDEwcHggMHB4OyB9XFxuXFxuaDMge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBoZWlnaHQ6IDE3JTtcXG4gIG1hcmdpbjogNXB4IDVweCAxMHB4IDBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyB9XFxuXFxuaDQge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzRlYjY3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4O1xcbiAgcGFkZGluZzogMXB4IDRweCAxcHggNHB4O1xcbiAgd2lkdGg6IG1heC1jb250ZW50OyB9XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAwJSAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuc3BhbiB7XFxuICBjb2xvcjogI2M0ZWI2NztcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IH1cXG5cXG4vKiBCQU5ORVIgSU1BR0UqL1xcbi5iYW5uZXItaW1hZ2Uge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwLjUpKSwgdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGdyaWQtYXJlYTogaW1hZ2U7XFxuICBoZWlnaHQ6IDE1MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogI2ZmZmZmZjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAyNXB4OyB9XFxuXFxuLndlbGNvbWUtbXNnIHtcXG4gIG1hcmdpbi10b3A6IDUwcHg7IH1cXG5cXG4vKiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBwYWRkaW5nOiAwOyB9XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5wLFxcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10sXFxubGkge1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgfVxcblxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGNsYXNzIGF0dHJpYnV0ZSAqL1xcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10ge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXG5pbWcge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogaW5saW5lOyB9XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0OyB9XFxuXFxuLyogUmVtb3ZlIGFsbCBhbmltYXRpb25zIGFuZCB0cmFuc2l0aW9ucyBmb3IgcGVvcGxlIHRoYXQgcHJlZmVyIG5vdCB0byBzZWUgdGhlbSAqL1xcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbjogcmVkdWNlKSB7XFxuICAqIHtcXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMSAhaW1wb3J0YW50O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjAxbXMgIWltcG9ydGFudDtcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBhdXRvICFpbXBvcnRhbnQ7IH0gfVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNTI2NTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBmb250LWZhbWlseTogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA1ZnI7XFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXFwiaGVhZGVyIGhlYWRlclxcXCIgXFxcImltYWdlIGltYWdlXFxcIiBcXFwiYXNpZGUgbWFpblxcXCI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYXV0bzsgfVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7IH1cXG5cXG4uc2VhcmNoLWZvcm0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcXG4gIGJvcmRlcjogM3B4IG91dHNldCAjYzRlYjY3O1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA3cHggMHB4ICM0NzVkNzQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUXVpY2tzYW5kXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuLnNlYXJjaC1pbnB1dCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZkY2NhO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCB3aGl0ZSksIGNvbG9yLXN0b3AoMSwgI2UxZTFlMSkpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3gtc2hhZG93OiBpbnNldCAtM3B4IC0xcHggMjBweCAxcHggIzVjNzg5NDtcXG4gIGNvbG9yOiAjM2U1MjY1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uc2VhcmNoLWlucHV0OmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmZmZmO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCAjZmZmZmZmOyB9XFxuXFxuLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6ICMzZTUyNjU7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRleHQtc2hhZG93OiBub25lOyB9XFxuXFxuLnNlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5zZWFyY2gtbGFiZWwge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5zZWFyY2gtYnRuIHtcXG4gIGJvcmRlci1sZWZ0OiAzcHggb3V0c2V0ICNjNGViNjc7XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElOyB9XFxuXFxuLm5hdi1idG4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQ6ICMzZTUyNjUgbm8tcmVwZWF0O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBmb250LXNpemU6IDBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogLjRzIGVhc2U7XFxuICB3aWR0aDogMTUlOyB9XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY29sb3I6ICNjNGViNjc7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDJweCA0cHggYmxhY2s7XFxuICB0cmFuc2l0aW9uOiAuNHMgZWFzZTsgfVxcblxcbi5uYXYtYnRuIGltZyB7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LXdpZHRoOiA0MHB4O1xcbiAgcGFkZGluZzogMnB4IDBweDsgfVxcblxcbi5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYzRlYjY3OyB9XFxuXFxuLmluZy1wYW4tYnRuIHtcXG4gIG1hcmdpbjogMSUgMCU7XFxuICBwYWRkaW5nOiAxcHggNnB4IDVweCAwcHg7IH1cXG5cXG4vKiBGSUxURVIgU0lERUJBUiAqL1xcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBoZWlnaHQ6IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ud3JhcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG51bCB7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgcGFkZGluZy1sZWZ0OiAzNXB4OyB9XFxuXFxubGkge1xcbiAgbWFyZ2luOiAycHg7IH1cXG5cXG4vKiBSRUNJUEUgQ0FSRCBTRUNUSU9OICovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDsgfVxcblxcbi5yZWNpcGUtY2FyZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xcbiAgYm9yZGVyOiAycHggc29saWQgI2M0ZWI2NztcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGhlaWdodDogMjcwcHg7XFxuICBtYXJnaW46IDIwcHg7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgd2lkdGg6IDI1MHB4OyB9XFxuXFxuLnJlY2lwZS1jYXJkOmhvdmVyIC5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgb3BhY2l0eTogNTAlO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7IH1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgaDMge1xcbiAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4ICNjNGViNjc7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTsgfVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XFxuICB3aWR0aDogNDVweDsgfVxcblxcbi5jYXJkLXBob3RvLXByZXZpZXcge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4uY2FyZC1waG90by1jb250YWluZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBoZWlnaHQ6IDEzMHB4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cXG5cXG4udGV4dCB7XFxuICBiYWNrZ3JvdW5kOiAjMzU5NTY3O1xcbiAgY29sb3I6ICNmZmZmZmY7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBvcGFjaXR5OiAwJTtcXG4gIHBhZGRpbmc6IDAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDAlO1xcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7IH1cXG5cXG4vKiBCVVRUT05TICovXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuLFxcbi5zaG93LWFsbC1idG4sXFxuLmZpbHRlci1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM1OTU2NztcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJRdWlja3NhbmRcXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMnB0O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwYWRkaW5nOiA1cHggMTBweCA1cHggMTBweDsgfVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4OyB9XFxuXFxuLnNob3ctYWxsLWJ0biB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogMjAwcHg7IH1cXG5cXG4uZmlsdGVyLWJ0bjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODRjOGE0OyB9XFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGFlNGVlO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNjAwcHg7XFxuICBtYXJnaW4tbGVmdDogODElO1xcbiAgbWFyZ2luLXRvcDogOTJweDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxuICBwYWRkaW5nOiAxMnB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgei1pbmRleDogMzsgfVxcblxcbi5kcm9wLW1lbnUgaDIge1xcbiAgY29sb3I6ICMzNTk1Njc7XFxuICBtYXJnaW46IDBweDsgfVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogIzAwMDAwMDtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cXG5cXG4vKiBSRUNJUEUgSU5TVFJVQ1RJT05TICovXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMge1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICNjNGViNjc7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAxMTVweCBibGFjaztcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDcwJTtcXG4gIG1hcmdpbjogMDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmc6IDElIDElIDElIDElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgcmlnaHQ6IDE1JTtcXG4gIHRvcDogMTUlO1xcbiAgd2lkdGg6IDcwJTtcXG4gIHotaW5kZXg6IDEwMDA7IH1cXG5cXG4jZXhpdC1yZWNpcGUtYnRuIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXI6IDJweCBkb3VibGUgIzM1OTU2NztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGNvbG9yOiAjMzU5NTY3O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIG1hcmdpbjogLTQlIC0zJSAyJSAtMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0cmFuc2l0aW9uOiAuM3MgZWFzZTsgfVxcblxcbiNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2M0ZWI2NztcXG4gIHRyYW5zaXRpb246IC4zcyBlYXNlOyB9XFxuXFxuI3JlY2lwZS10aXRsZSB7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweCA3cHggMHB4IDBweDtcXG4gIGNvbG9yOiAjZmZmZmZmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7IH1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyBoNCB7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgY29sb3I6ICMzNTk1Njc7IH1cXG5cXG4ucmVjaXBlLWluc3RydWN0aW9ucyBwIHtcXG4gIG1hcmdpbi1sZWZ0OiAyJTsgfVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gIG1hcmdpbi1yaWdodDogMiU7IH1cXG5cXG4jb3ZlcmxheSB7XFxuICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NTApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlNTI2NTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IDA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDsgfVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL192YXJpYWJsZXMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy9fbWVkaWEtcXVlcmllcy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL190eXBvZ3JhcGh5LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvX2hlYWRlcnMtYmFubmVycy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL19yZXNldC5zY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGdCQUFnQjtBQUFoQix3QkFBQTtBQ0FBLDBDQUFBO0FBR0EscUJBQUE7QUFDQSxvQkFBQTtBQUNBLDBFQUFBO0FBR0EscUJBQUE7QUFDQSxlQUFBO0FBR0EsVUFBQTtBQUNBLGdMQUFBO0FBR0EsVUFBQTtBQUNBLGlCQUFBO0FBR0EsdUJBQUE7QUFDQSwwQkFBQTtBQUdBLHFCQUFBO0FBQ0EsZ0hBQUE7QUFHQSx1QkFBQTtBQUNBLHFEQUFBO0FBR0EsZ0JBQUE7QUFDQSxrQkFBQTtBQUlBLHNCQUFBO0FBQ0EsYUFBQTtBQUlBLGdDQUFBO0FBUUEsS0FBQTtBQUNBLEtBQUE7QUFHQSxLQUFBO0FBQ0EsS0FBQTtBQUdBLEtBQUE7QUFDQSxLQUFBO0FBR0EsS0FBQTtBQUNBLEtBQUE7QUFHQSxLQUFBO0FBQ0EsS0FBQTtBQUdBLEtBQUE7QUFDQSxLQUFBO0FDdkVBLGVBQUE7QUFDQTtFQUVFO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQixFQUFBO0VBR3hCO0lBQ0UsaUJBQWlCO0lBQ2pCLG1CQUFtQixFQUFBO0lBRnJCO01BS0ksYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLFlBQVksRUFBQTtJQVRoQjtNQWFJLFVBQVU7TUFDVixVQUFVO01BQ1Ysa0JBQWtCLEVBQUEsRUFDbkI7O0FDeEJMLFdBQUE7QUFHQSxLQUFBO0FDSEE7RUFD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ZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLG1CQ2xTeUI7RURtU3pCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLDRCQUE0QjtFQUM1QixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGNDMVRhO0VEMlRiLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw4QkFBOEIsRUFBQTs7QUFHaEM7RUFDRSxtQkNuVWE7RURvVWIsY0N4VHdCLEVBQUE7O0FEMlQxQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSx5QkFBd0I7RUFDeEIseUJDelZpQjtFRDBWakIsWUFBVztFQUNYLE9BQU07RUFDTixZQUFXO0VBQ1gsZUFBYztFQUNkLE1BQUs7RUFDTCxXQUFVO0VBQ1YsWUFBVyxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIPCfk4cgSW1wb3J0IGRpcmVjdG9yeSAqL1xcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XFxuQGltcG9ydCAnbWVkaWEtcXVlcmllcyc7XFxuQGltcG9ydCAndHlwb2dyYXBoeSc7XFxuQGltcG9ydCAnaGVhZGVycy1iYW5uZXJzJztcXG5AaW1wb3J0ICdyZXNldCc7XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1ncmV5O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtZmFtaWx5OiAkcXVpY2tzYW5kO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImhlYWRlciBoZWFkZXJcXFwiXFxuICAgIFxcXCJpbWFnZSBpbWFnZVxcXCJcXG4gICAgXFxcImFzaWRlIG1haW5cXFwiO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGF1dG87XFxufVxcblxcbi5oZWFkZXItYXBwbGUtaWNvbiB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDM1cHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSB7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xcbiAgYm9yZGVyOiAzcHggb3V0c2V0ICRsaWdodC1hcHBsZS1ncmVlbjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggN3B4IDBweCAjNDc1ZDc0O1xcbiAgZGlzcGxheTogZmxleDsgXFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyBcXG4gIGZvbnQtZmFtaWx5OiAkcXVpY2tzYW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxcbiAgbWFyZ2luOiAxLjIlIDAuNSUgMS4yJSAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRtaW50LWdyZWVuO1xcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudCggbGluZWFyLGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwLCByZ2IoMjU1LCAyNTUsIDI1NSkpLCBjb2xvci1zdG9wKDEsIHJnYigyMjUsMjI1LDIyNSkpKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMHB4IDBweCAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm94LXNoYWRvdzogaW5zZXQgLTNweCAtMXB4IDIwcHggMXB4ICM1Yzc4OTQ7XFxuICBjb2xvcjogJGRhcmstZ3JleTtcXG4gIGZvbnQtZmFtaWx5OiAkcXVpY2tzYW5kO1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCUgMiUgMCUgMCU7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6aG92ZXIge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCAwcHggMHB4ICR3aGl0ZTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG4uc2VhcmNoLWlucHV0OmZvY3VzIHtcXG4gIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggMHB4IDBweCAkd2hpdGU7XFxufVxcblxcbi5zZWFyY2gtaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiAkZGFyay1ncmV5O1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICB0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLnNlYXJjaC1pbnB1dDpmb2N1czo6cGxhY2Vob2xkZXIge1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICB0cmFuc2l0aW9uOiAuOHMgZWFzZTtcXG59XFxuXFxuLnNlYXJjaC1sYWJlbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICBib3JkZXItbGVmdDogM3B4IG91dHNldCAkbGlnaHQtYXBwbGUtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAwcHggMTVweCAxNXB4IDBweDtcXG4gIHBhZGRpbmc6IDElO1xcbn1cXG5cXG4ubmF2LWJ0biB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogJGRhcmstZ3JleSBuby1yZXBlYXQ7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6ICRwb2ludDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZm9udC1zaXplOiAwcHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbiAgd2lkdGg6IDE1JTtcXG59XFxuXFxuLm5hdi1idG46aG92ZXIge1xcbiAgY29sb3I6ICRsaWdodC1hcHBsZS1ncmVlbjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtc2hhZG93OiAwcHggMnB4IDRweCBibGFjaztcXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xcbn1cXG5cXG4ubmF2LWJ0biBpbWcge1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIG1heC13aWR0aDogNDBweDtcXG4gIHBhZGRpbmc6IDJweCAwcHg7XFxufVxcblxcbi5zYXZlZC1pbmdyZWRpZW50cy1idG4ge1xcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAkbGlnaHQtYXBwbGUtZ3JlZW47XFxufVxcblxcbi5pbmctcGFuLWJ0biB7XFxuICBtYXJnaW46IDElIDAlO1xcbiAgcGFkZGluZzogMXB4IDZweCA1cHggMHB4O1xcbn1cXG5cXG4vKiBGSUxURVIgU0lERUJBUiAqL1xcbmFzaWRlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGhlaWdodDogYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLndyYXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB3aWR0aDogMjAwcHg7XFxufVxcblxcbnVsIHtcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxufVxcblxcbmxpIHtcXG4gIG1hcmdpbjogMnB4O1xcbn1cXG5cXG4vKiBSRUNJUEUgQ0FSRCBTRUNUSU9OICovXFxubWFpbiB7XFxuICBncmlkLWFyZWE6IG1haW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLnJlY2lwZS1jYXJkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICR3aGl0ZTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICRsaWdodC1hcHBsZS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogJHBvaW50O1xcbiAgaGVpZ2h0OiAyNzBweDtcXG4gIG1hcmdpbjogMjBweDtcXG4gIHBhZGRpbmc6IDE1cHg7XFxuICB3aWR0aDogMjUwcHg7XFxufVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciAuY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIG9wYWNpdHk6IDUwJTtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQ6aG92ZXIgLnRleHQge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgb3BhY2l0eTogMTAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5yZWNpcGUtY2FyZDpob3ZlciBoMyB7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA0cHggJGxpZ2h0LWFwcGxlLWdyZWVuO1xcbiAgdHJhbnNpdGlvbjogLjhzIGVhc2U7XFxufVxcblxcbi5jYXJkLWFwcGxlLWljb24ge1xcbiAgY3Vyc29yOiAkcG9pbnQ7XFxuICBmbG9hdDogcmlnaHQ7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG4gIHdpZHRoOiA0NXB4O1xcbn1cXG5cXG4uY2FyZC1waG90by1wcmV2aWV3IHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGN1cnNvcjogJHBvaW50O1xcbiAgaGVpZ2h0OiAxMzBweDtcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5jYXJkLXBob3RvLWNvbnRhaW5lciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTMwcHg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRleHQge1xcbiAgYmFja2dyb3VuZDogJGRhcmstYXBwbGUtZ3JlZW47XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGZvbnQtc2l6ZTogMHB4O1xcbiAgb3BhY2l0eTogMCU7XFxuICBwYWRkaW5nOiAwJTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAwJTtcXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xcbn1cXG5cXG5cXG4vKiBCVVRUT05TICovXFxuLnNob3ctcGFudHJ5LXJlY2lwZXMtYnRuLFxcbi5zaG93LWFsbC1idG4sXFxuLmZpbHRlci1idG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstYXBwbGUtZ3JlZW47XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgY3Vyc29yOiAkcG9pbnQ7XFxuICBmb250LWZhbWlseTogJHF1aWNrc2FuZDtcXG4gIGZvbnQtc2l6ZTogMTJwdDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEwcHg7XFxufVxcblxcbi5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uc2hvdy1hbGwtYnRuIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLmZpbHRlci1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogJG1lZC1hcHBsZS1ncmVlbjtcXG59XFxuXFxuXFxuLyogUEFOVFJZIExJU1QgKi9cXG4uZHJvcC1tZW51IHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtZ3JleTtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBoZWlnaHQ6IDYwMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDgxJTtcXG4gIG1hcmdpbi10b3A6IDkycHg7XFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgcGFkZGluZzogMTJweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAyNTBweDtcXG4gIHotaW5kZXg6IDM7XFxufVxcblxcbi5kcm9wLW1lbnUgaDIge1xcbiAgY29sb3I6ICRkYXJrLWFwcGxlLWdyZWVuO1xcbiAgbWFyZ2luOiAwcHg7XFxufVxcblxcbi5wYW50cnktbGlzdCB7XFxuICBjb2xvcjogJGJsYWNrO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuXFxuXFxuLyogUkVDSVBFIElOU1RSVUNUSU9OUyAqL1xcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIHtcXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkICRsaWdodC1hcHBsZS1ncmVlbjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDExNXB4IGJsYWNrO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGhlaWdodDogNzAlO1xcbiAgbWFyZ2luOiAwO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZzogMSUgMSUgMSUgMSU7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICByaWdodDogMTUlO1xcbiAgdG9wOiAxNSU7XFxuICB3aWR0aDogNzAlO1xcbiAgei1pbmRleDogMTAwMDtcXG59XFxuXFxuI2V4aXQtcmVjaXBlLWJ0biB7XFxuICBiYWNrZ3JvdW5kOiAkd2hpdGU7XFxuICBib3JkZXI6IDJweCBkb3VibGUgJGRhcmstYXBwbGUtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjb2xvcjogJGRhcmstYXBwbGUtZ3JlZW47XFxuICBjdXJzb3I6ICRwb2ludDtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBtYXJnaW46IC00JSAtMyUgMiUgLTElO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxufVxcblxcbiNleGl0LXJlY2lwZS1idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogJGxpZ2h0LWFwcGxlLWdyZWVuO1xcbiAgdHJhbnNpdGlvbjogLjNzIGVhc2U7XFxufVxcblxcbiNyZWNpcGUtdGl0bGUge1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBib3JkZXItcmFkaXVzOiA3cHggN3B4IDBweCAwcHg7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LXNoYWRvdzogMHB4IDBweCA2cHggYmxhY2s7XFxufVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0IHtcXG4gIGJhY2tncm91bmQ6ICR3aGl0ZTtcXG4gIGNvbG9yOiAkZGFyay1hcHBsZS1ncmVlbjtcXG59XFxuXFxuLnJlY2lwZS1pbnN0cnVjdGlvbnMgcCB7XFxuICBtYXJnaW4tbGVmdDogMiU7XFxufVxcblxcbi5yZWNpcGUtaW5zdHJ1Y3Rpb25zIG9sIHtcXG4gIG1hcmdpbi1yaWdodDogMiU7XFxufVxcblxcbiNvdmVybGF5IHtcXG4gIGZpbHRlcjphbHBoYShvcGFjaXR5PTUwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWdyZXk7XFxuICBoZWlnaHQ6MTAwJTtcXG4gIGxlZnQ6MDtcXG4gIG9wYWNpdHk6MC41O1xcbiAgcG9zaXRpb246Zml4ZWQ7XFxuICB0b3A6MDtcXG4gIHdpZHRoOjEwMCU7XFxuICB6LWluZGV4OjEwMDtcXG59XFxuXCIsXCIvKiBDU1MgdmFyaWFibGVzLCBvcmdhbml6ZWQgYnkgY2F0ZWdvcnkgICovXFxuXFxuXFxuLyog8J+OqCBDb2xvciBQYWxldHRlICovXFxuLyogRGFyayBTbGF0ZSBHcmV5ICovXFxuLyogdXNlZCBvbiB0aGUgYm9keSwgLnNlYXJjaC1pbnB1dCwgLnNlYXJjaC1pbnB1dDo6cGxhY2Vob2xkZXIsICNvdmVybGF5ICovXFxuJGRhcmstZ3JleTogIzNlNTI2NTtcXG5cXG4vKiBMaWdodCBTbGF0ZSBHcmV5ICovXFxuLyogLmRyb3AtbWVudSAqL1xcbiRsaWdodC1ncmV5OiAjZGFlNGVlO1xcblxcbi8qIFdoaXRlICovXFxuLyogaDEsICNyZWNpcGUtdGl0bGUsIGFzaWRlLCAud3JhcCwgLnJlY2lwZS1jYXJkLCAucmVjaXBlLWluc3RydWN0aW9ucywgI2V4aXQtcmVjaXBlLWJ0biwgLnRleHQsIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biwgLnNob3ctYWxsLWJ0biwgLmZpbHRlci1idG4sIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0ICovXFxuJHdoaXRlOiAjZmZmZmZmO1xcblxcbi8qIEJsYWNrICovXFxuLyogLnBhbnRyeS1saXN0ICovXFxuJGJsYWNrOiAjMDAwMDAwO1xcblxcbi8qIE1lZGl1bSBBcHBsZSBHcmVlbiAqL1xcbi8qIGgyLCAuZmlsdGVyLWJ0bjpob3ZlciAqL1xcbiRtZWQtYXBwbGUtZ3JlZW46ICM4NGM4YTQ7XFxuXFxuLyogRGFyayBBcHBsZSBHcmVlbiAqL1xcbi8qIGgzLCBoNCwgLnRleHQsIC5zaG93LXBhbnRyeS1yZWNpcGVzLWJ0biwgLnNob3ctYWxsLWJ0biwgLmZpbHRlci1idG4sIC5kcm9wLW1lbnUgaDIsIC5yZWNpcGUtaW5zdHJ1Y3Rpb25zIGg0ICovXFxuJGRhcmstYXBwbGUtZ3JlZW46ICMzNTk1Njc7XFxuXFxuLyogTGlnaHQgQXBwbGUgR3JlZW4gICovXFxuLyogaDQsIHNwYW4sIC5uYXYtYnRuOmhvdmVyLCAjZXhpdC1yZWNpcGUtYnRuOmhvdmVyICovXFxuJGxpZ2h0LWFwcGxlLWdyZWVuOiAjYzRlYjY3O1xcblxcbi8qIE1pbnQgR3JlZW4gICovXFxuLyogLnNlYXJjaC1pbnB1dCAqL1xcbiRtaW50LWdyZWVuOiAjYjZkY2NhO1xcblxcblxcbi8qIOKGl++4jyBDdXJzb3IgU3R5bGVzICAqL1xcbi8qIFBvaW50ZXIhICovXFxuJHBvaW50OiBwb2ludGVyO1xcblxcblxcbi8qIPCfk7IgTWVkaWEgUXVlcnkgU2NyZWVuIFNpemVzICovXFxuJG1vYmlsZTogMjUwcHg7XFxuJHRhYmxldDogNTQwcHg7XFxuJGxhcHRvcDogMTAyNHB4O1xcbiRkZXNrdG9wOiAxMjAwcHg7XFxuJGp1bWJvLXNjcmVlbjogMTQ1MHB4O1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblxcblxcbi8qICAqL1xcbi8qICAqL1xcblwiLFwiLyog8J+TsSBNb2JpbGUgICovXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJG1vYmlsZSkgYW5kIChtYXgtd2lkdGg6ICR0YWJsZXQgLSAxKSB7XFxuXFxuICAuYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAuaGVhZGVyIHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGgxIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogNDBweDtcXG4gICAgICBtYXJnaW46IC4zZW07XFxuICAgIH1cXG5cXG4gICAgLnNlYXJjaC1mb3JtIHtcXG4gICAgICB3aWR0aDogNzUlO1xcbiAgICAgIG1hcmdpbjogMSU7XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLyogRm9udHMgICovXFxuJHF1aWNrc2FuZDogXFxcIlF1aWNrc2FuZFxcXCIsIHNhbnMtc2VyaWY7XFxuJHN1bHBodXJQb2ludDogXFxcIlN1bHBodXIgUG9pbnRcXFwiLCBzYW5zLXNlcmlmO1xcbi8qICAqL1xcblwiLFwiaDEge1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgY29sb3I6ICR3aGl0ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiU3VscGh1ciBQb2ludFxcXCIsIHNhbnMtc2VyaWY7IC8vIHR5cG9ncmFwaHlcXG4gIGZvbnQtc2l6ZTogNTBweDsgLy8gdHlwb2dyYXBoeVxcbiAgbWFyZ2luOiAwJTsgLy8gbWl4aW5zXFxuICBwYWRkaW5nOiAwJSAwLjclIDAlOyAvLyBtaXhpbnNcXG4gIHdpZHRoOiA3MCU7XFxuICBjdXJzb3I6ICRwb2ludDsgLy8gbWl4aW5zXFxufVxcblxcbmgyIHtcXG4gIGNvbG9yOiAkbWVkLWFwcGxlLWdyZWVuO1xcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDsgLy8gbWl4aW5zXFxufVxcblxcbmgzIHtcXG4gIGNvbG9yOiAkZGFyay1hcHBsZS1ncmVlbjtcXG4gIGN1cnNvcjogJHBvaW50O1xcbiAgaGVpZ2h0OiAxNyU7IC8vIG1peGluc1xcbiAgbWFyZ2luOiA1cHggNXB4IDEwcHggMHB4OyAvLyBtaXhpbnNcXG4gIHRyYW5zaXRpb246IC44cyBlYXNlOyAvLyB0cmFuc2l0aW9uc1xcbn1cXG5cXG5oNCB7XFxuICBjb2xvcjogJGRhcmstYXBwbGUtZ3JlZW47XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHQtYXBwbGUtZ3JlZW47XFxuICBib3JkZXItcmFkaXVzOiAzcHg7IC8vIG1peGluc1xcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHggMHB4OyAvLyBtaXhpbnNcXG4gIHBhZGRpbmc6IDFweCA0cHggMXB4IDRweDsgLy8gbWl4aW5zXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7IC8vIG1peGluc1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7IC8vIGdyaWRzXFxuICBkaXNwbGF5OiBmbGV4OyAvLyBmbGV4XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyAvLyBmbGV4XFxuICBwYWRkaW5nOiAwJSAwJTsgLy8gbWl4aW5zXFxuICB3aWR0aDogMTAwJTsgLy8gbWl4aW5zXFxufVxcblxcbnNwYW4ge1xcbiAgY29sb3I6ICRsaWdodC1hcHBsZS1ncmVlbjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7IC8vIHR5cG9ncmFwaHlcXG59XFxuXFxuLyogQkFOTkVSIElNQUdFKi9cXG4uYmFubmVyLWltYWdlIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC41KSwgcmdiYSgwLDAsMCwuNSkpLHVybChcXFwiLi4vaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcXFwiKTsgLy8gdmFyaWFibGVzPyBtaXhpbnM/XFxuICBncmlkLWFyZWE6IGltYWdlOyAvLyBncmlkc1xcbiAgaGVpZ2h0OiAxNTBweDsgLy8gbWl4aW5zXFxuICBvdmVyZmxvdzogaGlkZGVuOyAvLyBtaXhpbnNcXG4gIHdpZHRoOiAxMDAlOyAvLyBtaXhpbnNcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyLFxcbi53ZWxjb21lLW1zZyB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogOTUlOyAvLyBtaXhpbnNcXG59XFxuXFxuLm15LXJlY2lwZXMtYmFubmVyIGgxLFxcbi53ZWxjb21lLW1zZyBoMSB7XFxuICBjb2xvcjogJHdoaXRlO1xcbiAgd2lkdGg6IDEwMCU7IC8vIG1peGluc1xcbn1cXG5cXG4ubXktcmVjaXBlcy1iYW5uZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDI1cHg7IC8vIG1peGluc1xcbn1cXG5cXG4ud2VsY29tZS1tc2cge1xcbiAgbWFyZ2luLXRvcDogNTBweDsgLy8gbWl4aW5zXFxufVxcblwiLFwiXFxuLyogUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyAqL1xcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10ge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogUmVtb3ZlIGRlZmF1bHQgbWFyZ2luICovXFxuYm9keSxcXG5oMSxcXG5oMixcXG5wLFxcbnVsW2NsYXNzXSxcXG5vbFtjbGFzc10sXFxubGksXFxuIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcbmJvZHkge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZVNwZWVkO1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG59XFxuXFxuLyogUmVtb3ZlIGxpc3Qgc3R5bGVzIG9uIHVsLCBvbCBlbGVtZW50cyB3aXRoIGEgY2xhc3MgYXR0cmlidXRlICovXFxudWxbY2xhc3NdLFxcbm9sW2NsYXNzXSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXFxuaW1nIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5cXG4vKiBSZW1vdmUgYWxsIGFuaW1hdGlvbnMgYW5kIHRyYW5zaXRpb25zIGZvciBwZW9wbGUgdGhhdCBwcmVmZXIgbm90IHRvIHNlZSB0aGVtICovXFxuQG1lZGlhIChwcmVmZXJzLXJlZHVjZWQtbW90aW9uOiByZWR1Y2UpIHtcXG4gICoge1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciAmJiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdKTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY29uc3QgZmV0Y2hBbGxEYXRhID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb21pc2VzID0gW2ZldGNoSW5ncmVkaWVudHNEYXRhKCksIGZldGNoUmVjaXBlRGF0YSgpLCBmZXRjaFVzZXJEYXRhKCldXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKVxuICAgICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJFUlJPUlwiKSlcbn1cblxuY29uc3QgZmV0Y2hJbmdyZWRpZW50c0RhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9pbmdyZWRpZW50c1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJFUlJPUlwiKSlcbn1cblxuY29uc3QgZmV0Y2hSZWNpcGVEYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvcmVjaXBlc1wiKVxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coXCJFUlJPUlwiKSlcbn1cblxuY29uc3QgZmV0Y2hVc2VyRGF0YSA9ICgpID0+IHtcbiAgICBsZXQgdXNlclByb21pc2UgPSBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvdXNlcnNcIilcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKFwiRVJST1JcIikpXG4gICAgcmV0dXJuIHVzZXJQcm9taXNlXG59XG5cbmNvbnN0IHBvc3RJbmcgPSAoZGF0YSwgdXNlcklkKSA9PiB7XG4gIGNvbnN0IGluaXRPYmogPSB7IHVzZXJJRDogdXNlcklkLCBpbmdyZWRpZW50SUQ6IGRhdGEuaWQsIGluZ3JlZGllbnRNb2RpZmljYXRpb246IGRhdGEuaW5ncmVkaWVudE1vZGlmaWNhdGlvbiB9XG4gIGNvbnN0IGluaXQgPSB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIlxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoaW5pdE9iailcbiAgfVxuICByZXR1cm4gZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3YxL3VzZXJzXCIsIGluaXQpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIubWVzc2FnZSkpXG59XG5cbmV4cG9ydCB7XG4gICAgZmV0Y2hBbGxEYXRhLFxuICAgIGZldGNoSW5ncmVkaWVudHNEYXRhLFxuICAgIGZldGNoUmVjaXBlRGF0YSxcbiAgICBmZXRjaFVzZXJEYXRhLFxuICAgIHBvc3RJbmdcbn07XG4iLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9iYXNlLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImxldCBkb21VcGRhdGVzID0ge1xuXG4gIG1lbnVPcGVuOiBmYWxzZSxcblxuICBhZGRXZWxjb21lTWVzc2FnZShmaXJzdE5hbWUpIHtcbiAgICBsZXQgd2VsY29tZU1zZyA9IGBcbiAgICAgIDxkaXYgY2xhc3M9XCJ3ZWxjb21lLW1zZ1wiPlxuICAgICAgICA8aDE+V2VsY29tZSAke2ZpcnN0TmFtZX0hPC9oMT5cbiAgICAgIDwvZGl2PmA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5iYW5uZXItaW1hZ2VcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYWZ0ZXJiZWdpblwiLFxuICAgICAgd2VsY29tZU1zZyk7XG4gIH0sXG5cbiAgYWRkVG9Eb20ocmVjaXBlSW5mbywgc2hvcnRSZWNpcGVOYW1lKSB7XG5cbiAgICBsZXQgY2FyZEh0bWwgPSBgXG4gICAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1jYXJkXCIgaWQ9JHtyZWNpcGVJbmZvLmlkfSB0YWJpbmRleD1cIjBcIj5cbiAgICAgICAgPGgzIG1heGxlbmd0aD1cIjQwXCI+JHtzaG9ydFJlY2lwZU5hbWV9PC9oMz5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtcGhvdG8tY29udGFpbmVyXCI+XG4gICAgICAgICAgPGltZyBzcmM9JHtyZWNpcGVJbmZvLmltYWdlfSBjbGFzcz1cImNhcmQtcGhvdG8tcHJldmlld1wiIGFsdD1cIiR7cmVjaXBlSW5mby5uYW1lfSByZWNpcGVcIiB0aXRsZT1cIiR7cmVjaXBlSW5mby5uYW1lfSByZWNpcGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGV4dFwiPlxuICAgICAgICAgICAgPGRpdj5DbGljayBmb3IgSW5zdHJ1Y3Rpb25zPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8aDQ+JHtyZWNpcGVJbmZvLnRhZ3NbMF19PC9oND5cbiAgICAgICAgPGltZyBzcmM9XCIuLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZ1wiIGFsdD1cInVuZmlsbGVkIGFwcGxlIGljb25cIiBjbGFzcz1cImNhcmQtYXBwbGUtaWNvblwiPlxuICAgICAgPC9hcnRpY2xlPmBcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgY2FyZEh0bWwpO1xuICB9LFxuXG4gIGxpc3RUYWdzKGFsbFRhZ3MpIHtcbiAgICBhbGxUYWdzLmZvckVhY2godGFnID0+IHtcbiAgICAgIGxldCB0YWdIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJjaGVja2VkLXRhZ1wiIGlkPVwiJHt0YWd9XCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCIke3RhZ31cIj4ke3RoaXMuY2FwaXRhbGl6ZSh0YWcpfTwvbGFiZWw+PC9saT5gO1xuICAgICAgdGFnTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgdGFnSHRtbCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgY2FwaXRhbGl6ZSh3b3Jkcykge1xuICAgIHJldHVybiB3b3Jkcy5zcGxpdChcIiBcIikubWFwKHdvcmQgPT4ge1xuICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpO1xuICAgIH0pLmpvaW4oXCIgXCIpO1xuICB9LFxuXG4gIGdlbmVyYXRlUmVjaXBlVGl0bGUocmVjaXBlLCBpbmdyZWRpZW50cykge1xuICAgIGxldCByZWNpcGVUaXRsZSA9IGBcbiAgICAgIDxidXR0b24gaWQ9XCJleGl0LXJlY2lwZS1idG5cIj5YPC9idXR0b24+XG4gICAgICA8aDMgaWQ9XCJyZWNpcGUtdGl0bGVcIj4ke3JlY2lwZS5uYW1lfTwvaDM+XG4gICAgICA8aDQ+SW5ncmVkaWVudHM8L2g0PlxuICAgICAgPHA+JHtpbmdyZWRpZW50c308L3A+YFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlSW5zdHJ1Y3Rpb25zXCIpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCByZWNpcGVUaXRsZSk7XG4gIH0sXG5cbiAgYWRkUmVjaXBlSW1hZ2UocmVjaXBlKSB7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWNpcGUtdGl0bGVcIikuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JlY2lwZS5pbWFnZX0pYDtcbiAgfSxcblxuICBnZW5lcmF0ZUluc3RydWN0aW9ucyhyZWNpcGUpIHtcbiAgICBsZXQgaW5zdHJ1Y3Rpb25zTGlzdCA9IFwiXCI7XG4gICAgbGV0IGluc3RydWN0aW9ucyA9IHJlY2lwZS5pbnN0cnVjdGlvbnMubWFwKGkgPT4ge1xuICAgICAgcmV0dXJuIGkuaW5zdHJ1Y3Rpb25cbiAgICB9KTtcbiAgICBpbnN0cnVjdGlvbnMuZm9yRWFjaChpID0+IHtcbiAgICAgIGluc3RydWN0aW9uc0xpc3QgKz0gYDxsaT4ke2l9PC9saT5gXG4gICAgfSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWNpcGVJbnN0cnVjdGlvbnNcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFwiPGg0Pkluc3RydWN0aW9uczwvaDQ+XCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcmVjaXBlSW5zdHJ1Y3Rpb25zXCIpLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgPG9sPiR7aW5zdHJ1Y3Rpb25zTGlzdH08L29sPmApO1xuICB9LFxuXG4gIGdlbmVyYXRlQ29zdChyZWNpcGUsIHBhbnRyeSkge1xuICAgIGxldCByZWNpcGVDb3N0ID0gcmVjaXBlLmNhbGN1bGF0ZUluZ3JlZGllbnRzQ29zdChwYW50cnkpLnRvRml4ZWQoMik7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWNpcGVJbnN0cnVjdGlvbnNcIikuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGA8aDQ+UmVjaXBlIENvc3Q6ICQke3JlY2lwZUNvc3R9PC9oND5gKVxuICB9LFxuXG4gIGV4aXRSZWNpcGUoKSB7XG4gICAgbGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWNpcGVJbnN0cnVjdGlvbnNcIik7XG4gICAgd2hpbGUgKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQgJiZcbiAgICAgIGZ1bGxSZWNpcGVJbmZvLnJlbW92ZUNoaWxkKGZ1bGxSZWNpcGVJbmZvLmZpcnN0Q2hpbGQpKTtcbiAgICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJvdmVybGF5XCIpLnJlbW92ZSgpO1xuICB9LFxuXG4gIHNob3dNeVJlY2lwZXNCYW5uZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWxjb21lLW1zZ1wiKS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5teS1yZWNpcGVzLWJhbm5lclwiKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9LFxuXG4gIHNob3dXZWxjb21lQmFubmVyKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VsY29tZS1tc2dcIikuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubXktcmVjaXBlcy1iYW5uZXJcIikuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9LFxuXG4gIHRvZ2dsZU1lbnUoKSB7XG4gICAgdmFyIG1lbnVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZHJvcC1tZW51XCIpO1xuICAgIHRoaXMubWVudU9wZW4gPSAhdGhpcy5tZW51T3BlbjtcbiAgICBpZiAodGhpcy5tZW51T3Blbikge1xuICAgICAgbWVudURyb3Bkb3duLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lbnVEcm9wZG93bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9LFxuXG4gIGRpc3BsYXlQYW50cnlJbmZvKHVzZXJQYW50cnlJbmZvKSB7XG4gICAgbGV0IHBhbnRyeUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBhbnRyeS1saXN0XCIpO1xuICAgIHBhbnRyeUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgICB1c2VyUGFudHJ5SW5mby5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnRIdG1sID0gYDxsaT48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJwYW50cnktY2hlY2tib3hcIiBpZD1cIiR7aW5ncmVkaWVudC5uYW1lfVwiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtpbmdyZWRpZW50Lm5hbWV9XCI+JHtpbmdyZWRpZW50Lm5hbWV9LCAke2luZ3JlZGllbnQuY291bnR9PC9sYWJlbD5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGQtaW5nXCIgaWQ9XCJhZGRJbmdcIiBkYXRhLWlkPVwiJHtpbmdyZWRpZW50LmlkfVwiPis8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJyZW1vdmUtaW5nXCIgaWQ9XCJyZW1vdmVJbmdcIiBkYXRhLWlkPVwiJHtpbmdyZWRpZW50LmlkfVwiPi08L2J1dHRvbj48L2xpPmA7XG4gICAgICBwYW50cnlMaXN0Lmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLFxuICAgICAgICBpbmdyZWRpZW50SHRtbCk7XG4gICAgfSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZG9tVXBkYXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2FwcGxlLWxvZ28tb3V0bGluZS5wbmdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9hcHBsZS1sb2dvLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Nvb2tib29rLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2dyZWVuLWFwcGxlcy5qcGdcIjsiLCJleHBvcnQgZGVmYXVsdCBcImltYWdlcy9zZWFyY2gucG5nXCI7IiwiZXhwb3J0IGRlZmF1bHQgXCJpbWFnZXMvc2Vhc29uaW5nLnBuZ1wiOyIsImNsYXNzIEluZ3JlZGllbnQge1xuICBjb25zdHJ1Y3RvcihpbmdyZWRpZW50LCBhbW91bnQpIHtcbiAgICB0aGlzLmlkID0gaW5ncmVkaWVudC5pZDtcbiAgICB0aGlzLm5hbWUgPSBpbmdyZWRpZW50Lm5hbWU7XG4gICAgdGhpcy5lc3RpbWF0ZWRDb3N0SW5DZW50cyA9IGluZ3JlZGllbnQuZXN0aW1hdGVkQ29zdEluQ2VudHM7XG4gICAgdGhpcy5jb3VudCA9IGFtb3VudCB8fCAwO1xuICAgIHRoaXMuaW5ncmVkaWVudE1vZGlmaWNhdGlvbiA9IDA7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5ncmVkaWVudDtcbiIsImNsYXNzIFJlY2lwZSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGUuaWQ7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlLm5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IHJlY2lwZS5pbWFnZTtcbiAgICB0aGlzLnRhZ3MgPSByZWNpcGUudGFncztcbiAgICB0aGlzLmluZ3JlZGllbnRzID0gcmVjaXBlLmluZ3JlZGllbnRzO1xuICB9XG5cblxuICBjYWxjdWxhdGVJbmdyZWRpZW50c0Nvc3QoaW5ncmVkaWVudERhdGFzZXQpIHtcbiAgICBjb25zdCB0b3RhbENvc3QgPSB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgoYWNjLCBjdXJyZW50SW5ncmVkaWVudCkgPT4ge1xuICAgICAgbGV0IGZvdW5kSW5ncmVkaWVudCA9IGluZ3JlZGllbnREYXRhc2V0LmZpbmQoaW5ncmVkaWVudCA9PiBpbmdyZWRpZW50LmlkID09PSBjdXJyZW50SW5ncmVkaWVudC5pZCk7XG4gICAgICBhY2MgKz0gY3VycmVudEluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50ICogZm91bmRJbmdyZWRpZW50LmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gdG90YWxDb3N0IC8gMTAwO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjaXBlO1xuIiwiaW1wb3J0IHsgZmV0Y2hBbGxEYXRhLCBwb3N0SW5nIH0gZnJvbSAnLi9hcGlDYWxscyc7XG5cbmltcG9ydCAnLi9jc3MvYmFzZS5zY3NzJztcblxuaW1wb3J0ICcuL2ltYWdlcy9zZWFyY2gucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvYXBwbGUtbG9nby1vdXRsaW5lLnBuZyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2FwcGxlLWxvZ28ucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvY29va2Jvb2sucG5nJztcbmltcG9ydCAnLi9pbWFnZXMvc2Vhc29uaW5nLnBuZyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlcy5zY3NzJztcbmltcG9ydCBVc2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vcmVjaXBlJztcbmltcG9ydCBJbmdyZWRpZW50IGZyb20gJy4vaW5ncmVkaWVudCdcbmltcG9ydCBkb21VcGRhdGVzIGZyb20gJy4vZG9tLXVwZGF0ZXMnXG5cbmxldCBhbGxSZWNpcGVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzaG93QWxsQnRuXCIpO1xubGV0IGZpbHRlckJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmlsdGVyQnRuXCIpO1xubGV0IGZ1bGxSZWNpcGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNyZWNpcGVJbnN0cnVjdGlvbnNcIik7XG5sZXQgZnJlc2hQaWNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZnJlc2hQaWNrc1wiKVxubGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmxldCBwYW50cnlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI215UGFudHJ5QnRuXCIpO1xubGV0IHNhdmVkUmVjaXBlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2F2ZWRSZWNpcGVzQnRuXCIpO1xubGV0IHNlYXJjaEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoQnRuXCIpO1xubGV0IHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaEZvcm1cIik7XG5sZXQgc2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1pbnB1dFwiKTtcbmxldCBzaG93UGFudHJ5UmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2hvd1BhbnRyeVJlY2lwZXNCdG5cIik7XG5sZXQgcGFudHJ5TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGFudHJ5TGlzdFwiKTtcbmxldCB1c2VyUGFudHJ5SW5mbyA9IFtdO1xubGV0IHJlY2lwZXMgPSBbXTtcbmxldCBjb29rYm9vayA9IFtdO1xubGV0IHBhbnRyeSA9IFtdO1xubGV0IHVzZXI7XG5sZXQgdXNlckluZm8gPSBbXTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWREYXRhKVxuYWxsUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFJlY2lwZXMpO1xuZmlsdGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmaW5kQ2hlY2tlZEJveGVzKTtcbmZyZXNoUGlja3MuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxSZWNpcGVzKTtcbm1haW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvTXlSZWNpcGVzKTtcbnBhbnRyeUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZG9tVXBkYXRlcy50b2dnbGVNZW51KTtcbnNhdmVkUmVjaXBlc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1NhdmVkUmVjaXBlcyk7XG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNlYXJjaFJlY2lwZXMpO1xuc2hvd1BhbnRyeVJlY2lwZXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMpO1xuc2VhcmNoRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHByZXNzRW50ZXJTZWFyY2gpO1xucGFudHJ5TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2VwYXJhdGVBUElmcm9tQ2hlY2tsaXN0KVxuXG4vLyBXSU5ET1cgTE9BRElORyBGVU5DVElPTlxuXG5mdW5jdGlvbiBsb2FkRGF0YSgpIHtcbiAgZmV0Y2hBbGxEYXRhKClcbiAgICAudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgICBmaWxsQ29va2Jvb2soZGF0YVsxXSlcbiAgICAgIGZpbGxQYW50cnkoZGF0YVswXSlcbiAgICAgIGNyZWF0ZUNhcmRzKGRhdGFbMV0pXG4gICAgICBmaW5kVGFncyhkYXRhWzFdKVxuICAgICAgZ2VuZXJhdGVVc2VyKGRhdGFbMl0pXG4gICAgICBmaW5kUGFudHJ5SW5mbyhkYXRhWzBdKVxuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGZpbGxDb29rYm9vayhyZWNpcGVEYXRhKSB7XG4gIHJlY2lwZURhdGEuZm9yRWFjaChyZWNpcGUgPT4gY29va2Jvb2sucHVzaChyZWNpcGUpKVxufVxuXG5mdW5jdGlvbiBmaWxsUGFudHJ5KGluZ3JlZGllbnREYXRhKSB7XG4gIGluZ3JlZGllbnREYXRhLmZvckVhY2goaW5ncmVkaWVudCA9PiBwYW50cnkucHVzaChpbmdyZWRpZW50KSlcbn1cblxuLy8gQ09OVEVOVCBMT0FESU5HIEZVTkNUSU9OU1xuZnVuY3Rpb24gZ2VuZXJhdGVVc2VyKHVzZXJEYXRhKSB7XG4gIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YVtNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB1c2VyRGF0YS5sZW5ndGgpXSk7XG4gIGxldCBmaXJzdE5hbWUgPSB1c2VyLm5hbWUuc3BsaXQoXCIgXCIpWzBdO1xuICB1c2VySW5mby5wdXNoKHVzZXJEYXRhKVxuICBkb21VcGRhdGVzLmFkZFdlbGNvbWVNZXNzYWdlKGZpcnN0TmFtZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNhcmRzKHJlY2lwZURhdGEpIHtcbiAgcmVjaXBlRGF0YS5mb3JFYWNoKHJlY2lwZSA9PiB7XG4gICAgbGV0IHJlY2lwZUluZm8gPSBuZXcgUmVjaXBlKHJlY2lwZSk7XG4gICAgbGV0IHNob3J0UmVjaXBlTmFtZSA9IHJlY2lwZUluZm8ubmFtZTtcbiAgICByZWNpcGVzLnB1c2gocmVjaXBlSW5mbyk7XG4gICAgaWYgKHJlY2lwZUluZm8ubmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgc2hvcnRSZWNpcGVOYW1lID0gcmVjaXBlSW5mby5uYW1lLnN1YnN0cmluZygwLCA0MCkgKyBcIi4uLlwiO1xuICAgIH1cbiAgICBkb21VcGRhdGVzLmFkZFRvRG9tKHJlY2lwZUluZm8sIHNob3J0UmVjaXBlTmFtZSlcbiAgfSk7XG59XG5cbi8vIEZJTFRFUiBCWSBSRUNJUEUgVEFHU1xuZnVuY3Rpb24gZmluZFRhZ3MocmVjaXBlRGF0YSkge1xuICBsZXQgdGFncyA9IFtdO1xuICByZWNpcGVEYXRhLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICByZWNpcGUudGFncy5mb3JFYWNoKHRhZyA9PiB7XG4gICAgICBpZiAoIXRhZ3MuaW5jbHVkZXModGFnKSkge1xuICAgICAgICB0YWdzLnB1c2godGFnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG4gIHRhZ3Muc29ydCgpO1xuICBkb21VcGRhdGVzLmxpc3RUYWdzKHRhZ3MpO1xufVxuXG5mdW5jdGlvbiBmaW5kQ2hlY2tlZEJveGVzKCkge1xuICBsZXQgdGFnQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY2hlY2tlZC10YWdcIik7XG4gIGxldCBjaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHRhZ0NoZWNrYm94ZXMpXG4gIGxldCBzZWxlY3RlZFRhZ3MgPSBjaGVja2JveEluZm8uZmlsdGVyKGJveCA9PiB7XG4gICAgcmV0dXJuIGJveC5jaGVja2VkO1xuICB9KVxuICBmaW5kVGFnZ2VkUmVjaXBlcyhzZWxlY3RlZFRhZ3MpO1xufVxuXG5mdW5jdGlvbiBmaW5kVGFnZ2VkUmVjaXBlcyhzZWxlY3RlZCkge1xuICBsZXQgZmlsdGVyZWRSZXN1bHRzID0gW107XG4gIHNlbGVjdGVkLmZvckVhY2godGFnID0+IHtcbiAgICBsZXQgYWxsUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLnRhZ3MuaW5jbHVkZXModGFnLmlkKTtcbiAgICB9KTtcbiAgICBhbGxSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGlmICghZmlsdGVyZWRSZXN1bHRzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgICAgZmlsdGVyZWRSZXN1bHRzLnB1c2gocmVjaXBlKTtcbiAgICAgIH1cbiAgICB9KVxuICB9KTtcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgaWYgKGZpbHRlcmVkUmVzdWx0cy5sZW5ndGggPiAwKSB7XG4gICAgZmlsdGVyUmVjaXBlcyhmaWx0ZXJlZFJlc3VsdHMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclJlY2lwZXMoZmlsdGVyZWQpIHtcbiAgbGV0IGZvdW5kUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgcmV0dXJuICFmaWx0ZXJlZC5pbmNsdWRlcyhyZWNpcGUpO1xuICB9KTtcbiAgaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcylcbn1cblxuZnVuY3Rpb24gaGlkZVVuc2VsZWN0ZWRSZWNpcGVzKGZvdW5kUmVjaXBlcykge1xuICBmb3VuZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG59XG5cbi8vIEZBVk9SSVRFIFJFQ0lQRSBGVU5DVElPTkFMSVRZXG5mdW5jdGlvbiBhZGRUb015UmVjaXBlcyhldmVudCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJjYXJkLWFwcGxlLWljb25cIikge1xuICAgIGxldCBjYXJkSWQgPSBwYXJzZUludChldmVudC50YXJnZXQuY2xvc2VzdChcIi5yZWNpcGUtY2FyZFwiKS5pZClcbiAgICBpZiAoIXVzZXIuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKGNhcmRJZCkpIHtcbiAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSBcIi4uL2ltYWdlcy9hcHBsZS1sb2dvLnBuZ1wiO1xuICAgICAgdXNlci5zYXZlUmVjaXBlKGNhcmRJZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV2ZW50LnRhcmdldC5zcmMgPSBcIi4uL2ltYWdlcy9hcHBsZS1sb2dvLW91dGxpbmUucG5nXCI7XG4gICAgICB1c2VyLnJlbW92ZVJlY2lwZShjYXJkSWQpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwiZXhpdC1yZWNpcGUtYnRuXCIpIHtcbiAgICBkb21VcGRhdGVzLmV4aXRSZWNpcGUoKTtcbiAgfSBlbHNlIGlmIChpc0Rlc2NlbmRhbnQoZXZlbnQudGFyZ2V0LmNsb3Nlc3QoXCIucmVjaXBlLWNhcmRcIiksIGV2ZW50LnRhcmdldCkpIHtcbiAgICBvcGVuUmVjaXBlSW5mbyhldmVudCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNEZXNjZW5kYW50KHBhcmVudCwgY2hpbGQpIHtcbiAgbGV0IG5vZGUgPSBjaGlsZDtcbiAgd2hpbGUgKG5vZGUgIT09IG51bGwpIHtcbiAgICBpZiAobm9kZSA9PT0gcGFyZW50KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgbm9kZSA9IG5vZGUucGFyZW50Tm9kZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNob3dTYXZlZFJlY2lwZXMoKSB7XG4gIGxldCB1bnNhdmVkUmVjaXBlcyA9IHJlY2lwZXMuZmlsdGVyKHJlY2lwZSA9PiB7XG4gICAgcmV0dXJuICF1c2VyLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUuaWQpO1xuICB9KTtcbiAgdW5zYXZlZFJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSk7XG4gIGRvbVVwZGF0ZXMuc2hvd015UmVjaXBlc0Jhbm5lcigpO1xuXG59XG5cbi8vIENSRUFURSBSRUNJUEUgSU5TVFJVQ1RJT05TXG5mdW5jdGlvbiBvcGVuUmVjaXBlSW5mbyhldmVudCkge1xuICBmdWxsUmVjaXBlSW5mby5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcbiAgbGV0IHJlY2lwZUlkID0gZXZlbnQucGF0aC5maW5kKGUgPT4gZS5pZCkuaWQ7XG4gIGxldCBtYXRjaGVkUmVjaXBlID0gY29va2Jvb2suZmluZChyZWNpcGUgPT4gcmVjaXBlLmlkID09PSBOdW1iZXIocmVjaXBlSWQpKTtcbiAgbGV0IGluc3RhbnRpYXRlZFJlY2lwZSA9IG5ldyBSZWNpcGUobWF0Y2hlZFJlY2lwZSlcbiAgbGV0IG1hdGNoZWRJbmdyZWRpZW50cyA9IGdlbmVyYXRlSW5ncmVkaWVudHMobWF0Y2hlZFJlY2lwZSlcbiAgZG9tVXBkYXRlcy5nZW5lcmF0ZVJlY2lwZVRpdGxlKG1hdGNoZWRSZWNpcGUsIG1hdGNoZWRJbmdyZWRpZW50cyk7XG4gIGRvbVVwZGF0ZXMuYWRkUmVjaXBlSW1hZ2UobWF0Y2hlZFJlY2lwZSk7XG4gIGRvbVVwZGF0ZXMuZ2VuZXJhdGVJbnN0cnVjdGlvbnMobWF0Y2hlZFJlY2lwZSk7XG4gIGRvbVVwZGF0ZXMuZ2VuZXJhdGVDb3N0KGluc3RhbnRpYXRlZFJlY2lwZSwgcGFudHJ5KTtcbiAgZnVsbFJlY2lwZUluZm8uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlYmVnaW5cIiwgXCI8c2VjdGlvbiBpZD0nb3ZlcmxheSc+PC9kaXY+XCIpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmdyZWRpZW50TmFtZShpZCkge1xuICBsZXQgbWF0Y2ggPSBwYW50cnkuZmluZChpbmdyZWRpZW50ID0+IGlkID09PSBpbmdyZWRpZW50LmlkKVxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gbWF0Y2gubmFtZVxuICB9XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlSW5ncmVkaWVudHMocmVjaXBlKSB7XG4gIHJldHVybiByZWNpcGUuaW5ncmVkaWVudHMubWFwKGkgPT4ge1xuICAgIGNvbnN0IGluZ3JlZGllbnQgPSBnZXRJbmdyZWRpZW50TmFtZShpLmlkKTtcbiAgICBsZXQgaW5ncmVkaWVudEFtb3VudCA9IHBhcnNlRmxvYXQoaS5xdWFudGl0eS5hbW91bnQudG9GaXhlZCgyKSlcbiAgICByZXR1cm4gYCR7ZG9tVXBkYXRlcy5jYXBpdGFsaXplKGluZ3JlZGllbnQpfSAoJHtpbmdyZWRpZW50QW1vdW50fSAke2kucXVhbnRpdHkudW5pdH0pYFxuICB9KS5qb2luKFwiLCBcIik7XG59XG5cbi8vIFNFQVJDSCBSRUNJUEVTXG5mdW5jdGlvbiBwcmVzc0VudGVyU2VhcmNoKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHNlYXJjaFJlY2lwZXMoKTtcbn1cblxuZnVuY3Rpb24gc2VhcmNoUmVjaXBlcygpIHtcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgbGV0IHNlYXJjaGVkUmVjaXBlcyA9IGNvb2tib29rLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIHJldHVybiByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaElucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkpO1xuICB9KTtcbiAgZmlsdGVyTm9uU2VhcmNoZWQoY3JlYXRlUmVjaXBlT2JqZWN0KHNlYXJjaGVkUmVjaXBlcykpO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJOb25TZWFyY2hlZChmaWx0ZXJlZCkge1xuICBsZXQgZm91bmQgPSByZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4ge1xuICAgIGxldCBpZHMgPSBmaWx0ZXJlZC5tYXAoZiA9PiBmLmlkKTtcbiAgICByZXR1cm4gIWlkcy5pbmNsdWRlcyhyZWNpcGUuaWQpXG4gIH0pXG4gIGhpZGVVbnNlbGVjdGVkUmVjaXBlcyhmb3VuZCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlY2lwZU9iamVjdChyZWNpcGVzKSB7XG4gIHJlY2lwZXMgPSByZWNpcGVzLm1hcChyZWNpcGUgPT4gbmV3IFJlY2lwZShyZWNpcGUpKTtcbiAgcmV0dXJuIHJlY2lwZXNcbn1cblxuZnVuY3Rpb24gc2hvd0FsbFJlY2lwZXMoKSB7XG4gIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBkb21SZWNpcGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtyZWNpcGUuaWR9YCk7XG4gICAgZG9tUmVjaXBlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH0pO1xuICBkb21VcGRhdGVzLnNob3dXZWxjb21lQmFubmVyKCk7XG59XG5cbi8vIENSRUFURSBBTkQgVVNFIFBBTlRSWVxuZnVuY3Rpb24gZmluZFBhbnRyeUluZm8oaW5ncmVkaWVudHNEYXRhKSB7XG4gIHVzZXIucGFudHJ5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGl0ZW1JbmZvID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudCA9PiB7XG4gICAgICByZXR1cm4gaW5ncmVkaWVudC5pZCA9PT0gaXRlbS5pbmdyZWRpZW50O1xuICAgIH0pO1xuICAgIGxldCBvcmlnaW5hbEluZ3JlZGllbnQgPSB1c2VyUGFudHJ5SW5mby5maW5kKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKGl0ZW1JbmZvKSB7XG4gICAgICAgIHJldHVybiBpbmdyZWRpZW50Lm5hbWUgPT09IGl0ZW1JbmZvLm5hbWU7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKGl0ZW1JbmZvICYmIG9yaWdpbmFsSW5ncmVkaWVudCkge1xuICAgICAgb3JpZ2luYWxJbmdyZWRpZW50LmFtb3VudCA9IGl0ZW0uYW1vdW50O1xuICAgIH0gZWxzZSBpZiAoaXRlbUluZm8pIHtcbiAgICAgIHVzZXJQYW50cnlJbmZvLnB1c2gobmV3IEluZ3JlZGllbnQoaXRlbUluZm8sIGl0ZW0uYW1vdW50KSk7XG4gICAgfVxuICB9KTtcbiAgZG9tVXBkYXRlcy5kaXNwbGF5UGFudHJ5SW5mbyh1c2VyUGFudHJ5SW5mby5zb3J0KChhLCBiKSA9PiBhLm5hbWUubG9jYWxlQ29tcGFyZShiLm5hbWUpKSk7XG59XG5cbmZ1bmN0aW9uIGZpbmRDaGVja2VkUGFudHJ5Qm94ZXMoKSB7XG4gIGxldCBwYW50cnlDaGVja2JveGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYW50cnktY2hlY2tib3hcIik7XG4gIGxldCBwYW50cnlDaGVja2JveEluZm8gPSBBcnJheS5mcm9tKHBhbnRyeUNoZWNrYm94ZXMpXG4gIGxldCBzZWxlY3RlZEluZ3JlZGllbnRzID0gcGFudHJ5Q2hlY2tib3hJbmZvLmZpbHRlcihib3ggPT4ge1xuICAgIHJldHVybiBib3guY2hlY2tlZDtcbiAgfSlcbiAgc2hvd0FsbFJlY2lwZXMoKTtcbiAgaWYgKHNlbGVjdGVkSW5ncmVkaWVudHMubGVuZ3RoID4gMCkge1xuICAgIGZpbmRSZWNpcGVzV2l0aENoZWNrZWRJbmdyZWRpZW50cyhzZWxlY3RlZEluZ3JlZGllbnRzKTtcbiAgfVxuICBkb21VcGRhdGVzLnNob3dNeVJlY2lwZXNCYW5uZXIoKVxufVxuXG5mdW5jdGlvbiBmaW5kUmVjaXBlc1dpdGhDaGVja2VkSW5ncmVkaWVudHMoc2VsZWN0ZWQpIHtcbiAgbGV0IHJlY2lwZUNoZWNrZXIgPSAoYXJyLCB0YXJnZXQpID0+IHRhcmdldC5ldmVyeSh2ID0+IGFyci5pbmNsdWRlcyh2KSk7XG4gIGxldCBpbmdyZWRpZW50TmFtZXMgPSBzZWxlY3RlZC5tYXAoaXRlbSA9PiB7XG4gICAgcmV0dXJuIGl0ZW0uaWQ7XG4gIH0pXG4gIHJlY2lwZXMuZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgIGxldCBhbGxSZWNpcGVJbmdyZWRpZW50cyA9IFtdO1xuICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgbGV0IGluZ3JlZGllbnROYW1lID0gZ2V0SW5ncmVkaWVudE5hbWUoaW5ncmVkaWVudC5pZClcbiAgICAgIGFsbFJlY2lwZUluZ3JlZGllbnRzLnB1c2goaW5ncmVkaWVudE5hbWUpO1xuICAgIH0pO1xuICAgIGlmICghcmVjaXBlQ2hlY2tlcihhbGxSZWNpcGVJbmdyZWRpZW50cywgaW5ncmVkaWVudE5hbWVzKSkge1xuICAgICAgbGV0IGRvbVJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3JlY2lwZS5pZH1gKTtcbiAgICAgIGRvbVJlY2lwZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBzZXBhcmF0ZUFQSWZyb21DaGVja2xpc3QoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gXCJhZGRJbmdcIikge1xuICAgIHVwZGF0ZVBhbnRyeShldmVudClcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09IFwicmVtb3ZlSW5nXCIpIHtcbiAgICB1cGRhdGVQYW50cnkoZXZlbnQpXG4gIH1cbn1cblxuICBmdW5jdGlvbiB1cGRhdGVQYW50cnkoZXZlbnQpIHtcbiAgICB1c2VyUGFudHJ5SW5mby5mb3JFYWNoKGluZ3JlZGllbnQgPT4ge1xuICAgICAgaWYgKCtldmVudC50YXJnZXQuZGF0YXNldC5pZCA9PT0gaW5ncmVkaWVudC5pZCkge1xuICAgICAgICBldmVudC50YXJnZXQuaWQgPT09IFwiYWRkSW5nXCIgPyBpbmdyZWRpZW50LmNvdW50KysgJiYgaW5ncmVkaWVudC5pbmdyZWRpZW50TW9kaWZpY2F0aW9uKysgOiBpbmdyZWRpZW50LmNvdW50LS0gJiYgaW5ncmVkaWVudC5pbmdyZWRpZW50TW9kaWZpY2F0aW9uLS1cbiAgICAgICAgcG9zdEluZyhpbmdyZWRpZW50LCB1c2VyLmlkKTtcbiAgICAgICAgaW5ncmVkaWVudC5pbmdyZWRpZW50TW9kaWZpY2F0aW9uID0gMDtcbiAgICAgIH1cbiAgICB9KVxuICAgIGRvbVVwZGF0ZXMuZGlzcGxheVBhbnRyeUluZm8odXNlclBhbnRyeUluZm8pXG59XG4iLCJjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlcikge1xuICAgIHRoaXMuaWQgPSB1c2VyLmlkO1xuICAgIHRoaXMubmFtZSA9IHVzZXIubmFtZTtcbiAgICB0aGlzLnBhbnRyeSA9IHVzZXIucGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gIH1cblxuICBzYXZlUmVjaXBlKHJlY2lwZSkge1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKTtcbiAgfVxuXG4gIHJlbW92ZVJlY2lwZShyZWNpcGUpIHtcbiAgICBsZXQgaSA9IHRoaXMuZmF2b3JpdGVSZWNpcGVzLmluZGV4T2YocmVjaXBlKTtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5zcGxpY2UoaSwgMSk7XG4gIH1cblxuICBkZWNpZGVUb0Nvb2socmVjaXBlKSB7XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rLnB1c2gocmVjaXBlKTtcbiAgfVxuXG4gIGZpbHRlclJlY2lwZXModHlwZSkge1xuICAgIHJldHVybiB0aGlzLmZhdm9yaXRlUmVjaXBlcy5maWx0ZXIocmVjaXBlID0+IHJlY2lwZS50YWdzLmluY2x1ZGVzKHR5cGUpKTtcbiAgfVxuXG4gIHNlYXJjaEZvclJlY2lwZShrZXl3b3JkKSB7XG4gICAgcmV0dXJuIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZpbHRlcihyZWNpcGUgPT4gcmVjaXBlLm5hbWUuaW5jbHVkZXMoa2V5d29yZCkgfHwgcmVjaXBlLmluZ3JlZGllbnRzLmluY2x1ZGVzKGtleXdvcmQpKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==