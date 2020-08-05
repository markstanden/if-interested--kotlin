module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header.jsx":
/*!*******************************!*\
  !*** ./components/Header.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.module.scss */ \"./components/Header.module.scss\");\n/* harmony import */ var _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Header_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/mark/Documents/Coding/if-interested/components/Header.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Header() {\n  return __jsx(\"header\", {\n    className: _Header_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.header,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 4,\n      columnNumber: 10\n    }\n  }, \"HEADER SECTION\");\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5qc3g/MGEwOCJdLCJuYW1lcyI6WyJIZWFkZXIiLCJzdHlsZXMiLCJoZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUNoQixTQUFPO0FBQVEsYUFBUyxFQUFFQywwREFBTSxDQUFDQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFQO0FBQ0Q7O0FBRWNGLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlYWRlci5tb2R1bGUuc2NzcydcblxuZnVuY3Rpb24gSGVhZGVyKCkge1xuICByZXR1cm4gPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PkhFQURFUiBTRUNUSU9OPC9oZWFkZXI+XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.jsx\n");

/***/ }),

/***/ "./components/Header.module.scss":
/*!***************************************!*\
  !*** ./components/Header.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"header\": \"Header_header__3Z-q0\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlci5tb2R1bGUuc2Nzcz8wMmI0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZWFkZXIubW9kdWxlLnNjc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJIZWFkZXJfaGVhZGVyX18zWi1xMFwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Header.module.scss\n");

/***/ }),

/***/ "./components/Hero.jsx":
/*!*****************************!*\
  !*** ./components/Hero.jsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.module.scss */ \"./components/Hero.module.scss\");\n/* harmony import */ var _Hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Hero_module_scss__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/mark/Documents/Coding/if-interested/components/Hero.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Hero(props) {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(\"h1\", {\n    className: `${_Hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hero__title}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, \"if(interested) \", '{'), __jsx(\"p\", {\n    className: _Hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hero__subtitle,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, \"plug me back into the matrix.\"), __jsx(\"h1\", {\n    className: `${_Hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hero__title} ${_Hero_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.hero__title_closing}`,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, '}'));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm8uanN4PzBjMTQiXSwibmFtZXMiOlsiSGVybyIsInByb3BzIiwic3R5bGVzIiwiaGVyb19fdGl0bGUiLCJoZXJvX19zdWJ0aXRsZSIsImhlcm9fX3RpdGxlX2Nsb3NpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFNBQ0UsbUVBQ0U7QUFBSSxhQUFTLEVBQUcsR0FBRUMsd0RBQU0sQ0FBQ0MsV0FBWSxFQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQUF3RCxHQUF4RCxDQURGLEVBR0U7QUFBRyxhQUFTLEVBQUVELHdEQUFNLENBQUNFLGNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBSEYsRUFJRTtBQUFJLGFBQVMsRUFBRyxHQUFFRix3REFBTSxDQUFDQyxXQUFZLElBQUdELHdEQUFNLENBQUNHLG1CQUFvQixFQUFuRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQXVFLEdBQXZFLENBSkYsQ0FERjtBQW9DRDs7QUFFY0wsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlcm8uanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hlcm8ubW9kdWxlLnNjc3MnXG5cbmZ1bmN0aW9uIEhlcm8ocHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlcm9fX3RpdGxlfWB9PmlmKGludGVyZXN0ZWQpIHsneyd9PC9oMT5cblxuICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuaGVyb19fc3VidGl0bGV9PnBsdWcgbWUgYmFjayBpbnRvIHRoZSBtYXRyaXguPC9wPlxuICAgICAgPGgxIGNsYXNzTmFtZT17YCR7c3R5bGVzLmhlcm9fX3RpdGxlfSAke3N0eWxlcy5oZXJvX190aXRsZV9jbG9zaW5nfWB9PnsnfSd9PC9oMT5cbiAgICAgIHsvKiA8cGljdHVyZT5cbiAgICAgICAgPCEtLSAxMzgwcHggLyAxNiAtLT5cbiAgICAgICAgPHNvdXJjZVxuICAgICAgICAgIHNyY3NldD1cImFzc2V0cy9pbWFnZXMvaGVyby0tbGFyZ2UuanBnIDE5MjB3LCBhc3NldHMvaW1hZ2VzL2hlcm8tLWxhcmdlLWhpLWRwaS5qcGcgMzg0MHdcIlxuICAgICAgICAgIG1lZGlhPVwiKG1pbi13aWR0aDogODYuMjVlbSlcIlxuICAgICAgICAvPlxuICAgICAgICA8IS0tIDk5MHB4IC8xNiAtLT5cbiAgICAgICAgPHNvdXJjZVxuICAgICAgICAgIHNyY3NldD1cImFzc2V0cy9pbWFnZXMvaGVyby0tbWVkaXVtLmpwZyAxMzgwdywgYXNzZXRzL2ltYWdlcy9oZXJvLS1tZWRpdW0taGktZHBpLmpwZyAyNzYwd1wiXG4gICAgICAgICAgbWVkaWE9XCIobWluLXdpZHRoOiA2MS44NzVlbSlcIlxuICAgICAgICAvPlxuICAgICAgICA8IS0tIDY0MHB4LzE2IC0tPlxuICAgICAgICA8c291cmNlXG4gICAgICAgICAgc3Jjc2V0PVwiYXNzZXRzL2ltYWdlcy9oZXJvLS1zbWFsbC5qcGcgOTkwdywgYXNzZXRzL2ltYWdlcy9oZXJvLS1zbWFsbC1oaS1kcGkuanBnIDE5ODB3XCJcbiAgICAgICAgICBtZWRpYT1cIihtaW4td2lkdGg6IDQwZW0pXCJcbiAgICAgICAgLz5cbiAgICAgICAgPCEtLSBzbWFsbGVyIHRoYW4gNjQwIHB4IC0tPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3Jjc2V0PVwiXG4gICAgICAgICAgICBhc3NldHMvaW1hZ2VzL2hlcm8tLXNtYWxsZXIuanBnICAgICAgICAgNjQwdyxcbiAgICAgICAgICAgIGFzc2V0cy9pbWFnZXMvaGVyby0tc21hbGxlci1oaS1kcGkuanBnIDEyODB3XG4gICAgICAgICAgXCJcbiAgICAgICAgICAsXG4gICAgICAgICAgYWx0PVwiQ29hc3RhbCBWaWV3IG9mIG9jZWFuIGFuZCBjbGlmZnNcIlxuICAgICAgICAgIGNsYXNzPVwibGFyZ2UtaGVyb19faW1hZ2VcIlxuICAgICAgICAvPlxuICAgICAgPC9waWN0dXJlPlxuICAgICovfVxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.jsx\n");

/***/ }),

/***/ "./components/Hero.module.scss":
/*!*************************************!*\
  !*** ./components/Hero.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"hero__subtitle\": \"Hero_hero__subtitle__1MWmG\",\n\t\"hero__title\": \"Hero_hero__title__1zXzr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlcm8ubW9kdWxlLnNjc3M/N2U5MCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9IZXJvLm1vZHVsZS5zY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVyb19fc3VidGl0bGVcIjogXCJIZXJvX2hlcm9fX3N1YnRpdGxlX18xTVdtR1wiLFxuXHRcImhlcm9fX3RpdGxlXCI6IFwiSGVyb19oZXJvX190aXRsZV9fMXpYenJcIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Hero.module.scss\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header.jsx */ \"./components/Header.jsx\");\n/* harmony import */ var _components_Hero_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero.jsx */ \"./components/Hero.jsx\");\nvar _jsxFileName = \"/home/mark/Documents/Coding/if-interested/pages/index.jsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nfunction HomePage() {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Header_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }), __jsx(_components_Hero_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/NzBjNSJdLCJuYW1lcyI6WyJIb21lUGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsU0FDRSxtRUFDRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFLE1BQUMsNERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREY7QUFNRDs7QUFFY0EsdUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvSGVhZGVyLmpzeCdcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby5qc3gnXG5cbmZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZGVyIC8+XG4gICAgICA8SGVybyAvPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });