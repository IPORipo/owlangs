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
    var data_key = void 0;
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
                    handleChange(ed.getContent(), ed.id);
                });
            }
        });
        tinymce.init({ selector: "#poland-box", setup: function setup(ed) {
                ed.on('keyup', function (e) {
                    handleChange(ed.getContent(), ed.id);
                });
            } });
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

        var wrapper = $("#english-langs .message-widget");
        var table = $('<table><thead><tr></tr></thead></table>');
        var a = document.createElement('a');

        $(wrapper).append(table);
        $(table).append('<tbody></tbody>');
        var tbody = $(table).find('tbody');
        for (var i in lang_object['en_langs']) {
            $(tbody).append("<tr><td><a href='#' class='key'>" + lang_object['en_langs'][i] + "</td></tr>");
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
            data_key = e.target.innerHTML;

            tab_btn_1.removeClass('active');
            tab_btn_2.addClass('active');
            home_tab.removeClass('active show');
            editors_tab.addClass("active show");

            var editor_1 = tinymce.editors[0];
            var editor_2 = tinymce.editors[1];

            editor_1.setContent(lang_object['en_langs'][data_key], { format: "html" });
            editor_2.setContent(lang_object['pl_langs'][data_key], { format: "html" });
        });
    }
    function handleChange(data, id) {
        switch (id) {
            case 'english-box':
                lang_object['en_langs'][data_key] = data;
                break;
            case 'poland-box':
                lang_object['pl_langs'][data_key] = data;
                break;
        }
    };

    function saveData() {
        var token = $('input[name=_token]').val();
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open("POST", 'translations-save-translations');
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('X-CSRF-Token', token);
            xhr.onload = function () {
                resolve(xhr.responseText);
            };
            xhr.onerror = function () {
                reject(xhr.statusText, xhr.status);
            };
            xhr.send(JSON.stringify(lang_object));
        });
    }

    $('#save-btn').on('click', function (e) {
        saveData().then(function (data) {
            return console.log(data);
        });
    });

    init();
});

/***/ })

/******/ });