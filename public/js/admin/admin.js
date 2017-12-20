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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.onload = function () {
    //send xhr request onload
    var lang_object = void 0;
    // let data_key;
    function init() {
        $("#profile-tab").on('click', function (e) {
            e.preventDefault();
        });
        initTinyMce();
    }

    function initTinyMce() {
        tinymce.init({
            selector: "#english-box",
            setup: function setup(ed) {
                ed.on('keyup', function (e) {
                    handleChange(ed.getContent(), lang_object);
                });
            }
        });
        tinymce.init({ selector: "#poland-box" });
    }

    function loadData(url) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("GET", url);
            xhr.onload = function () {
                resolve(xhr.responseText);
            };
            xhr.onerror = function () {
                reject(xhr.statusText, xhr.status);
            };
            xhr.send();
        });
    }
    $(window).bind("storage", function (e) {
        console.log("storage changed");
    });
    loadData("/admin/translations-get-translations").then(function (data) {
        lang_object = JSON.parse(data);
        localStorage.setItem('data', data);

        var tableData = JSON.parse(localStorage.getItem('data'));
        var wrapper = $("#english-langs .message-widget");
        var table = $('<table><thead><tr></tr></thead></table>');
        var a = document.createElement('a');

        $(wrapper).append(table);
        $(table).append('<tbody></tbody>');
        var tbody = $(table).find('tbody');
        for (var i in tableData) {
            $(tbody).append("<tr><td><a href='#' class='key'>" + tableData[i] + "</td></tr>").add('a');
        }
        handleClick(tbody);
    });

    function handleClick(tbody) {
        var a = $(tbody).find('a');
        var home_tab = $("#home");
        var tab_btn_1 = $("#home-tab");
        var tab_btn_2 = $("#profile-tab");
        var editors_tab = $("#translate");
        $(a).css('cursor', 'pointer');

        $(a).on('click', function (e) {
            e.preventDefault();
            var data_key = JSON.stringify(e.target.innerHTML);
            localStorage.setItem('data_key', data_key);
            tab_btn_1.removeClass('active');
            tab_btn_2.addClass('active');
            home_tab.removeClass('active show');
            editors_tab.addClass("active show");

            var editor_1 = tinymce.editors[0];
            var editor_2 = tinymce.editors[1];

            editor_1.setContent("[b]some[/b] html", { format: "bbcode" });
            editor_2.setContent("[b]some[/b] html", { format: "bbcode" });
        });
    }
    function handleChange(data) {
        var data_key = JSON.parse(localStorage.getItem("data_key"));
        lang_object[data_key] = data;
        console.log(lang_object[data_key]);
    };

    function saveData() {}

    init();
}();

/***/ })

/******/ });