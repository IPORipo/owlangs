webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__word_word_module__ = __webpack_require__("../../../../../src/app/word/word.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__excercices_excercices_module__ = __webpack_require__("../../../../../src/app/excercices/excercices.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__partials_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__jobs_jobs_module__ = __webpack_require__("../../../../../src/app/jobs/jobs.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_module__["a" /* HomeModule */],
                __WEBPACK_IMPORTED_MODULE_7__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_8__word_word_module__["a" /* WordModule */],
                __WEBPACK_IMPORTED_MODULE_9__excercices_excercices_module__["a" /* ExcercicesModule */],
                __WEBPACK_IMPORTED_MODULE_10__partials_navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_11__jobs_jobs_module__["a" /* JobsModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* appRouting */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_3__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_3__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__word_word_component__ = __webpack_require__("../../../../../src/app/word/word.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__excercices_excercices_component__ = __webpack_require__("../../../../../src/app/excercices/excercices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__jobs_jobs_component__ = __webpack_require__("../../../../../src/app/jobs/jobs.component.ts");






var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'user-name', component: __WEBPACK_IMPORTED_MODULE_2__user_user_component__["a" /* UserComponent */] },
    { path: 'words', component: __WEBPACK_IMPORTED_MODULE_3__word_word_component__["a" /* WordComponent */] },
    { path: 'excercices', component: __WEBPACK_IMPORTED_MODULE_4__excercices_excercices_component__["a" /* ExcercicesComponent */] },
    { path: 'jobs', component: __WEBPACK_IMPORTED_MODULE_5__jobs_jobs_component__["a" /* JobsComponent */] },
];
var appRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/excercices/excercices.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\" id=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-user-block></app-user-block>\n        <app-navigation></app-navigation>\n      </div>\n      <div class=\"col-md-6\">\n        <app-make-post></app-make-post>\n        <app-post></app-post>\n      </div>\n      <div class=\"col-md-3\">\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/excercices/excercices.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/excercices/excercices.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcercicesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ExcercicesComponent = (function () {
    function ExcercicesComponent() {
    }
    ExcercicesComponent.prototype.ngOnInit = function () {
    };
    ExcercicesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-excercices',
            template: __webpack_require__("../../../../../src/app/excercices/excercices.component.html"),
            styles: [__webpack_require__("../../../../../src/app/excercices/excercices.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ExcercicesComponent);
    return ExcercicesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/excercices/excercices.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcercicesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__excercices_component__ = __webpack_require__("../../../../../src/app/excercices/excercices.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__ = __webpack_require__("../../../../../src/app/partials/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_user_block_user_block_module__ = __webpack_require__("../../../../../src/app/partials/user-block/user-block.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_make_post_make_post_module__ = __webpack_require__("../../../../../src/app/partials/make-post/make-post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partials_post_post_module__ = __webpack_require__("../../../../../src/app/partials/post/post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partials_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ExcercicesModule = (function () {
    function ExcercicesModule() {
    }
    ExcercicesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__partials_user_block_user_block_module__["a" /* UserBlockModule */],
                __WEBPACK_IMPORTED_MODULE_5__partials_make_post_make_post_module__["a" /* MakePostModule */],
                __WEBPACK_IMPORTED_MODULE_7__partials_navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_6__partials_post_post_module__["a" /* PostModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__excercices_component__["a" /* ExcercicesComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__excercices_component__["a" /* ExcercicesComponent */]]
        })
    ], ExcercicesModule);
    return ExcercicesModule;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\" id=\"main\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-3\">\r\n        <app-user-block></app-user-block>\r\n        <app-navigation></app-navigation>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <app-make-post></app-make-post>\r\n        <app-post></app-post>\r\n      </div>\r\n      <div class=\"col-md-3\">\r\n        <app-friends-box></app-friends-box>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#main {\n  padding-top: 20px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__ = __webpack_require__("../../../../../src/app/partials/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_friends_box_friends_box_component__ = __webpack_require__("../../../../../src/app/partials/friends-box/friends-box.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_post_post_module__ = __webpack_require__("../../../../../src/app/partials/post/post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partials_make_post_make_post_module__ = __webpack_require__("../../../../../src/app/partials/make-post/make-post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__partials_user_block_user_block_module__ = __webpack_require__("../../../../../src/app/partials/user-block/user-block.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__partials_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var HomeModule = (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_5__partials_post_post_module__["a" /* PostModule */],
                __WEBPACK_IMPORTED_MODULE_7__partials_make_post_make_post_module__["a" /* MakePostModule */],
                __WEBPACK_IMPORTED_MODULE_8__partials_user_block_user_block_module__["a" /* UserBlockModule */],
                __WEBPACK_IMPORTED_MODULE_9__partials_navigation_navigation_module__["a" /* NavigationModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_4__partials_friends_box_friends_box_component__["a" /* FriendsBoxComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container-fluid\" id=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-user-block></app-user-block>\n        <app-navigation></app-navigation>\n      </div>\n      <div class=\"col-md-6\">\n        <app-make-post></app-make-post>\n        <div class=\"search-box\">\n          <form action=\"\">\n            <div class=\"form-group d-flex justify-content-start\">\n              <input type=\"text\" class=\"form-control\">\n              <button>Search</button>\n            </div>\n          </form>\n        </div>\n        <div class=\"jobs-box\">\n          <div class=\"job d-flex\">\n            <div class=\"job-img\">\n                <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"job-content\">\n              <div class=\"job-header\">\n                <h3>This is a job</h3>\n                <div class=\"meta\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    17 DEC 14:44 <span class=\"del\">|</span> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>  21 DEC, 14:44\n                </div>\n              </div>\n              <div class=\"job-body\">\n                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorum rem excepturi dolorem eos officiis incidunt, ad facilis, alias, aspernatur fugit neque. Consectetur accusantium dolores enim dolorem possimus pariatur maxime?</p>\n              </div>\n              <div class=\"job-footer d-flex justify-content-between\">\n                <div class=\"job-duration\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Job Duration: 1 week\n                </div>\n                <div class=\"job-bids-count\">\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                    Bids:12\n                </div>\n                <div class=\"job-budget\">\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n                    120$\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"jobs-box\">\n          <div class=\"job d-flex\">\n            <div class=\"job-img\">\n                <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"job-content\">\n              <div class=\"job-header\">\n                <h3>This is a job</h3>\n                <div class=\"meta\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    17 DEC 14:44 <span class=\"del\">|</span> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>  21 DEC, 14:44\n                </div>\n              </div>\n              <div class=\"job-body\">\n                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorum rem excepturi dolorem eos officiis incidunt, ad facilis, alias, aspernatur fugit neque. Consectetur accusantium dolores enim dolorem possimus pariatur maxime?</p>\n              </div>\n              <div class=\"job-footer d-flex justify-content-between\">\n                <div class=\"job-duration\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Job Duration: 1 week\n                </div>\n                <div class=\"job-bids-count\">\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                    Bids:12\n                </div>\n                <div class=\"job-budget\">\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n                    120$\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"jobs-box\">\n          <div class=\"job d-flex\">\n            <div class=\"job-img\">\n                <i class=\"fa fa-file-text-o\" aria-hidden=\"true\"></i>\n            </div>\n            <div class=\"job-content\">\n              <div class=\"job-header\">\n                <h3>This is a job</h3>\n                <div class=\"meta\">\n                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\"></i>\n                    17 DEC 14:44 <span class=\"del\">|</span> <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>  21 DEC, 14:44\n                </div>\n              </div>\n              <div class=\"job-body\">\n                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam dolorum rem excepturi dolorem eos officiis incidunt, ad facilis, alias, aspernatur fugit neque. Consectetur accusantium dolores enim dolorem possimus pariatur maxime?</p>\n              </div>\n              <div class=\"job-footer d-flex justify-content-between\">\n                <div class=\"job-duration\">\n                  <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Job Duration: 1 week\n                </div>\n                <div class=\"job-bids-count\">\n                    <i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\n                    Bids:12\n                </div>\n                <div class=\"job-budget\">\n                    <i class=\"fa fa-money\" aria-hidden=\"true\"></i>\n                    120$\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"sort-sidebar\">\n          <h3>Sort</h3>\n          <div class=\"sort clearfix\">\n            <a href=\"#\">My Jobs</a>\n            <select name=\"\" id=\"\" class=\"cat-sort\">\n              <option value=\"cat\">category</option>\n              <option value=\"cat\">excercise</option>\n              <option value=\"cat\">translate</option>\n            </select>\n            <div class=\"sort-opts\">\n              <input type=\"number\" placeholder=\"from\">\n              <input type=\"number\" placeholder=\"till\">\n            </div>\n            <div class=\"sort-opts\">\n              <input type=\"number\" placeholder=\"budget from\">\n              <input type=\"number\" placeholder=\"budget till\">\n            </div>\n            <button>Sort</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".search-box {\n  margin: 20px 0; }\n  .search-box .form-control {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    background: #fff;\n    border: none;\n    border-radius: 2px;\n    font-size: 12px; }\n  .search-box .form-control:focus {\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n  .search-box button:hover {\n    background: #f0d43473;\n    color: #fff; }\n  .search-box button {\n    border: 1px solid #efd125;\n    border-radius: 20px;\n    margin-left: 5px;\n    color: #efd125;\n    font-size: 12px;\n    padding: 5px 20px;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n  .search-box button:hover {\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n\n.jobs-box:hover {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  cursor: pointer; }\n\n.jobs-box {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  margin-bottom: 10px;\n  transition: all 0.2s ease-in-out;\n  padding: 10px; }\n  .jobs-box .job .job-content .job-header {\n    padding-left: 10px; }\n    .jobs-box .job .job-content .job-header h3 {\n      font-family: 'Lato', sans-serif;\n      font-weight: 500;\n      font-size: 18px; }\n    .jobs-box .job .job-content .job-header .meta {\n      padding: 5px 0;\n      font-family: 'Lato', sans-serif;\n      font-weight: 400;\n      font-size: 12px;\n      color: #73828e; }\n      .jobs-box .job .job-content .job-header .meta i {\n        margin-right: 5px; }\n      .jobs-box .job .job-content .job-header .meta .del {\n        margin: 0 5px; }\n  .jobs-box .job .job-content .job-body {\n    padding-left: 10px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 14px;\n    color: #73828e; }\n  .jobs-box .job .job-content .job-footer {\n    padding-left: 10px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    font-size: 12px;\n    color: #73828e; }\n    .jobs-box .job .job-content .job-footer .job-duration i, .jobs-box .job .job-content .job-footer .job-bids-count i, .jobs-box .job .job-content .job-footer .job-budget i {\n      margin-right: 5px; }\n\n.sort-sidebar {\n  background: #fff;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  padding: 10px;\n  border-radius: 2px; }\n  .sort-sidebar h3 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400; }\n  .sort-sidebar .sort * {\n    float: left;\n    width: 100%; }\n  .sort-sidebar .sort a {\n    font-size: 14px;\n    text-transform: lowercase;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    color: #276fab; }\n  .sort-sidebar .sort select, .sort-sidebar .sort input {\n    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n    background: #fff;\n    border: none;\n    border-radius: 2px;\n    font-size: 14px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 300;\n    color: #276fab;\n    margin: 10px 0;\n    transition: all 0.2s ease-in-out;\n    height: 30px; }\n    .sort-sidebar .sort select option, .sort-sidebar .sort input option {\n      padding: 10px 0; }\n  .sort-sidebar .sort input {\n    padding: 10px; }\n  .sort-sidebar .sort select:focus, .sort-sidebar .sort input:focus {\n    outline: none; }\n  .sort-sidebar .sort .sort-opts input {\n    width: 47.5%;\n    float: left; }\n  .sort-sidebar .sort .sort-opts input:focus {\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n  .sort-sidebar .sort .sort-opts input:first-child {\n    margin-right: 10px; }\n  .sort-sidebar button {\n    border: 1px solid #efd125;\n    border-radius: 20px;\n    margin-left: 5px;\n    color: #efd125;\n    font-size: 12px;\n    padding: 5px 20px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400;\n    margin-top: 20px;\n    transition: all 0.2s ease-in-out;\n    cursor: pointer; }\n  .sort-sidebar button:hover {\n    background: #f0d43473;\n    color: #fff;\n    box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/jobs/jobs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JobsComponent = (function () {
    function JobsComponent() {
    }
    JobsComponent.prototype.ngOnInit = function () {
    };
    JobsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-jobs',
            template: __webpack_require__("../../../../../src/app/jobs/jobs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/jobs/jobs.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], JobsComponent);
    return JobsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/jobs/jobs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jobs_component__ = __webpack_require__("../../../../../src/app/jobs/jobs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_user_block_user_block_module__ = __webpack_require__("../../../../../src/app/partials/user-block/user-block.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_header_header_module__ = __webpack_require__("../../../../../src/app/partials/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partials_make_post_make_post_module__ = __webpack_require__("../../../../../src/app/partials/make-post/make-post.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var JobsModule = (function () {
    function JobsModule() {
    }
    JobsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__partials_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_3__partials_navigation_navigation_module__["a" /* NavigationModule */],
                __WEBPACK_IMPORTED_MODULE_6__partials_make_post_make_post_module__["a" /* MakePostModule */],
                __WEBPACK_IMPORTED_MODULE_4__partials_user_block_user_block_module__["a" /* UserBlockModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__jobs_component__["a" /* JobsComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__jobs_component__["a" /* JobsComponent */]]
        })
    ], JobsModule);
    return JobsModule;
}());



/***/ }),

/***/ "../../../../../src/app/partials/friends-box/friends-box.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"friends-online\">\r\n  <h3>Friends online</h3>\r\n  <div class=\"friends-list\">\r\n    <div class=\"friend\">\r\n     <div class=\"header\">\r\n        <img src=\"https://pbs.twimg.com/profile_images/897379868014411777/xpJaG4a5_bigger.jpg\" alt=\"\">\r\n        <div class=\"details\">\r\n          <h4>BBC Sport</h4>\r\n          <button class=\"btn\" >Message</button>\r\n        </div>\r\n     </div>\r\n    </div>\r\n    <div class=\"friend\">\r\n     <div class=\"header\">\r\n        <img src=\"https://pbs.twimg.com/profile_images/918856427380211713/tZX3DB2h_bigger.jpg\" alt=\"\">\r\n        <div class=\"details\">\r\n          <h4>Barnacules Nerdgasm</h4>\r\n          <button class=\"btn\" >Message</button>\r\n        </div>\r\n     </div>\r\n    </div>\r\n    <div class=\"friend\">\r\n     <div class=\"header\">\r\n        <img src=\"https://pbs.twimg.com/profile_images/664516834301898752/5yEyTA0E_bigger.jpg\" alt=\"\">\r\n        <div class=\"details\">\r\n          <h4>Josh Nerdgasm</h4>\r\n          <button class=\"btn\" >Message</button>\r\n        </div>\r\n     </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/friends-box/friends-box.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".friends-online {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px; }\n  .friends-online h3 {\n    font-size: 18px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 500;\n    padding: 10px;\n    padding-bottom: 0; }\n  .friends-online .friends-list .friend {\n    padding-bottom: 10px;\n    border-bottom: 1px solid #eee;\n    padding-top: 10px; }\n    .friends-online .friends-list .friend .header {\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex; }\n      .friends-online .friends-list .friend .header img {\n        border-radius: 50%;\n        margin: 0 10px;\n        width: 18%;\n        height: 100%; }\n      .friends-online .friends-list .friend .header h4 {\n        font-size: 14px;\n        font-family: 'Lato', sans-serif;\n        font-weight: 700; }\n      .friends-online .friends-list .friend .header button {\n        border: 1px solid #efd125;\n        border-radius: 20px;\n        margin-left: -5px;\n        color: #efd125;\n        font-size: 12px;\n        padding: 5px 20px;\n        cursor: pointer; }\n      .friends-online .friends-list .friend .header button:hover {\n        background: #f0d43473;\n        color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/friends-box/friends-box.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FriendsBoxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FriendsBoxComponent = (function () {
    function FriendsBoxComponent() {
    }
    FriendsBoxComponent.prototype.ngOnInit = function () {
    };
    FriendsBoxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-friends-box',
            template: __webpack_require__("../../../../../src/app/partials/friends-box/friends-box.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/friends-box/friends-box.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FriendsBoxComponent);
    return FriendsBoxComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <nav class=\"navbar navbar-expand-lg\">\r\n    <a class=\"navbar-logo\" href=\"#\"><img src=\"../images/user/logo_menu.png\" alt=\"\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n            <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n            <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i>\r\n            </button>\r\n          </form>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"['user-name']\"><i class=\"fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n            username\r\n            <i class=\"help-tip\">lore ipsum</i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-signal\" aria-hidden=\"true\"></i>\r\n            ranking\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-telegram\" aria-hidden=\"true\"></i>\r\n            <span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <i class=\"fa fa-sliders\" aria-hidden=\"true\"></i>\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n\r\n    </div>\r\n  </nav>\r\n</header>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar {\n  background: #9D50BB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #6E48AA, #9D50BB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n  .navbar .navbar-logo {\n    text-align: center; }\n    .navbar .navbar-logo img {\n      width: 50%; }\n  .navbar form {\n    position: relative; }\n    .navbar form input {\n      height: 30px;\n      border-radius: 2px;\n      width: 450px;\n      font-size: 12px;\n      font-family: 'Lato', sans-serif;\n      font-weight: 300; }\n    .navbar form input:focus {\n      border-color: #f49500;\n      box-shadow: 0 0 0 0.2rem rgba(244, 149, 0, 0.15); }\n    .navbar form button {\n      color: #7b49b6;\n      background: #eee;\n      border: none;\n      border-radius: 2px;\n      height: 28px;\n      padding: 0 18px;\n      position: absolute;\n      right: 8px;\n      cursor: pointer; }\n    .navbar form button:hover {\n      background: #f1efef; }\n  .navbar .navbar-nav {\n    width: 100%;\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end; }\n    .navbar .navbar-nav li a {\n      color: #e6ecf1;\n      position: relative; }\n      .navbar .navbar-nav li a i {\n        color: #fff; }\n      .navbar .navbar-nav li a i:hover {\n        color: #e6ecf1; }\n    .navbar .navbar-nav li a:hover {\n      color: #fff; }\n      .navbar .navbar-nav li a:hover .help-tip {\n        visibility: visible;\n        opacity: 1; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/partials/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/header/header.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_component__ = __webpack_require__("../../../../../src/app/partials/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__header_component__["a" /* HeaderComponent */]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "../../../../../src/app/partials/make-post/make-post.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"make-post\" (click)=\"animate($event)\" >\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">post a word</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">post an excercise </a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">post a chalange</a>\n    </li>\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">post a job</a>\n    </li>\n  </ul>\n  <div class=\"tab-content\" id=\"myTabContent\">\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\n      <div class=\"editor d-flex\" >\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n          <div class=\"editor-inner\">\n            Write a word\n          </div>\n      </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\n        <div class=\"editor d-flex\">\n            <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n            <p>Post an experience</p>\n        </div>\n    </div>\n    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\n        <div class=\"editor d-flex\">\n            <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n            <p>Post an chalange</p>\n        </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"editor-modal\" [@showpopup]='state'>\n  <div class=\"modal-header d-flex justify-content-start\">\n    <h3 class=\"mr-auto\">Post a words</h3>\n    <div class=\"user\">\n      <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\n      <span>username</span>\n    </div>\n    <div class=\"dropdown\">\n      <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n        <i class=\"fa fa-globe\" aria-hidden=\"true\"></i>\n      </button>\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\n        <a class=\"dropdown-item\" href=\"#\"><i class=\"fa fa-lock\" aria-hidden=\"true\"></i></a>\n      </div>\n    </div>\n  </div>\n  <div class=\"modal-body\">\n    <ul class=\"progressbar d-flex justify-conten-between\">\n      <li class=\"active\">Make a title</li>\n      <li>Add wordks</li>\n      <li>Publish</li>\n    </ul>\n    <div class=\"form-group clearfix\">\n      <i class=\"fa fa-header\" aria-hidden=\"true\"></i><input type=\"text\" class=\"form-control\" placeholder=\"Type a name\">\n    </div>\n    <div class=\"form-group clearfix\">\n      <i class=\"fa fa-align-left\" aria-hidden=\"true\"></i><textarea class=\"form-control\" placeholder=\"Type a description\"></textarea>\n    </div>\n  </div>\n  <div class=\"modal-footer\">\n    <button class=\"btn btn-next\">Next</button>\n  </div>\n</div>\n"
=======
module.exports = "<div class=\"make-post\">\r\n  <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link active\" id=\"home-tab\" data-toggle=\"tab\" href=\"#home\" role=\"tab\" aria-controls=\"home\" aria-selected=\"true\">post a word</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" id=\"profile-tab\" data-toggle=\"tab\" href=\"#profile\" role=\"tab\" aria-controls=\"profile\" aria-selected=\"false\">post an excercise </a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">post a chalange</a>\r\n    </li>\r\n    <li class=\"nav-item\">\r\n      <a class=\"nav-link\" id=\"contact-tab\" data-toggle=\"tab\" href=\"#contact\" role=\"tab\" aria-controls=\"contact\" aria-selected=\"false\">post a job</a>\r\n    </li>\r\n  </ul>\r\n  <div class=\"tab-content\" id=\"myTabContent\">\r\n    <div class=\"tab-pane fade show active\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\">\r\n      <div class=\"editor d-flex\">\r\n          <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n          <p>Write a word</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"tab-pane fade\" id=\"profile\" role=\"tabpanel\" aria-labelledby=\"profile-tab\">\r\n        <div class=\"editor d-flex\">\r\n            <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n            <p>Post an experience</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"tab-pane fade\" id=\"contact\" role=\"tabpanel\" aria-labelledby=\"contact-tab\">\r\n        <div class=\"editor d-flex\">\r\n            <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i>\r\n            <p>Post an chalange</p>\r\n        </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"
>>>>>>> master

/***/ }),

/***/ "../../../../../src/app/partials/make-post/make-post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".col-md-3 {\n  z-index: -1; }\n\n.make-post:hover {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3); }\n\n.make-post {\n  transition: all 0.2s ease-in-out;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background: #ffff;\n  border-radius: 2px; }\n  .make-post .nav {\n    background: #f6f7f9;\n    border-top-left-radius: 2px;\n    border-top-right-radius: 2px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    padding-left: 20px;\n    padding-right: 20px; }\n    .make-post .nav li a {\n      font-size: 14px;\n      padding: 5px 10px;\n      border: none;\n      color: #6a44a2;\n      font-family: 'Lato', sans-serif;\n      font-weight: 400;\n      position: relative; }\n    .make-post .nav li a.active {\n      background: none;\n      color: #9148a7; }\n    .make-post .nav li:last-child a {\n      border-left: none !important; }\n  .make-post .tab-content {\n    height: 100px; }\n    .make-post .tab-content .editor {\n      padding-top: 15px;\n      padding-left: 21px; }\n      .make-post .tab-content .editor p {\n        margin-left: 10px;\n        color: #D4DBDD;\n        font-size: 12px;\n        padding-top: 5px; }\n      .make-post .tab-content .editor i {\n        font-size: 32px; }\n\n.editor-modal {\n  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n  background: #fff;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 9999;\n  display: block;\n  width: 900px;\n  top: 0;\n  left: -200px; }\n  .editor-modal .modal-header {\n    border-bottom: 1px solid #eee; }\n    .editor-modal .modal-header .user {\n      border-radius: 2px;\n      border: 1px solid #663e94;\n      color: #663e94;\n      cursor: pointer;\n      padding: 5px;\n      margin-right: 5px; }\n    .editor-modal .modal-header .dropdown .btn {\n      background: #9D50BB;\n      /* fallback for old browsers */\n      /* Chrome 10-25, Safari 5.1-6 */\n      background: linear-gradient(to top, #6E48AA, #9D50BB);\n      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      border-radius: 2px;\n      padding: 5px 15px; }\n    .editor-modal .modal-header .dropdown .btn:focus {\n      box-shadow: none; }\n    .editor-modal .modal-header .dropdown .dropdown-menu {\n      min-width: 100%; }\n  .editor-modal .modal-body .form-group {\n    margin-bottom: 10px; }\n    .editor-modal .modal-body .form-group i {\n      float: left;\n      margin-right: 10px;\n      width: 15px;\n      font-size: 12px;\n      margin-top: 12px;\n      color: #a3ccef; }\n    .editor-modal .modal-body .form-group input, .editor-modal .modal-body .form-group textarea {\n      float: left;\n      width: 95%; }\n  .editor-modal .modal-body .progressbar {\n    counter-reset: step;\n    padding: 20px 0;\n    float: left;\n    display: block;\n    margin: auto;\n    width: 100%; }\n  .editor-modal .modal-body .progressbar li {\n    list-style-type: none;\n    width: 25%;\n    float: left;\n    font-size: 12px;\n    position: relative;\n    text-align: center;\n    text-transform: uppercase;\n    color: #7d7d7d;\n    margin: auto; }\n  .editor-modal .modal-body .progressbar li:before {\n    width: 30px;\n    height: 30px;\n    content: counter(step);\n    counter-increment: step;\n    line-height: 30px;\n    border: 2px solid #7d7d7d;\n    display: block;\n    text-align: center;\n    margin: 0 auto 10px auto;\n    border-radius: 50%;\n    background-color: white; }\n  .editor-modal .modal-body .progressbar li:after {\n    width: 130%;\n    height: 2px;\n    content: '';\n    position: absolute;\n    background-color: #7d7d7d;\n    top: 15px;\n    left: -78%;\n    z-index: -1; }\n  .editor-modal .modal-body .progressbar li:first-child:after {\n    content: none; }\n  .editor-modal .modal-body .progressbar li.active {\n    color: green; }\n  .editor-modal .modal-body .progressbar li.active:before {\n    border-color: #55b776; }\n  .editor-modal .modal-body .progressbar li.active + li:after {\n    background-color: #55b776; }\n  .editor-modal .modal-footer button {\n    border-radius: 20px;\n    margin-left: -5px;\n    color: #efd125;\n    font-size: 16px;\n    border: 1px solid;\n    padding: 5px 20px;\n    cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/make-post/make-post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MakePostComponent = (function () {
    function MakePostComponent() {
        this.state = 'small';
        this.overflow = document.getElementsByClassName('overflow');
        var that = this;
        __WEBPACK_IMPORTED_MODULE_2_jquery__(document).keyup(function (e) {
            if (e.keyCode === 27) {
                __WEBPACK_IMPORTED_MODULE_2_jquery__(that.overflow).removeClass('show');
                that.state = 'small';
            }
        });
    }
    MakePostComponent.prototype.ngOnInit = function () {
    };
    MakePostComponent.prototype.animate = function (event) {
        this.state = (this.state === 'small' ? 'large' : 'small');
        var el = event.target;
        var editor = __WEBPACK_IMPORTED_MODULE_2_jquery__(el).find('p');
        editor.attr('contenteditable', 'true');
        if (this.state === 'large') {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(this.overflow).addClass('show');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_2_jquery__(this.overflow).removeClass('show');
        }
    };
    MakePostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-make-post',
            template: __webpack_require__("../../../../../src/app/partials/make-post/make-post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/make-post/make-post.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('showpopup', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('small', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        visibility: 'hidden',
                        transition: 'all 0.2s ease-in-out',
                        zIndex: '9999',
                        opacity: '0',
                        transformOrigin: '50% 0%'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        visibility: 'visibility',
                        position: 'relative',
                        zIndex: '9999',
                        opacity: '1'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('small => large', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('200ms ease-in'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], MakePostComponent);
    return MakePostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/make-post/make-post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MakePostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__make_post_component__ = __webpack_require__("../../../../../src/app/partials/make-post/make-post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MakePostModule = (function () {
    function MakePostModule() {
    }
    MakePostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__make_post_component__["a" /* MakePostComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__make_post_component__["a" /* MakePostComponent */]],
        })
    ], MakePostModule);
    return MakePostModule;
}());



/***/ }),

/***/ "../../../../../src/app/partials/navigation/navigation.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<div class=\"navigation\">\n  <h3>Navigation</h3>\n  <ul>\n    <li><a [routerLinkActive]=\"['active']\" [routerLink]=\"['/words']\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i> Words</a></li>\n    <li><a [routerLinkActive]=\"['active']\"  [routerLink]=\"['/excercices']\" ><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>Excercices</a></li>\n    <li><a [routerLinkActive]=\"['active']\"  [routerLink]=\"['/jobs']\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Jobs</a></li>\n  </ul>\n</div>\n"
=======
module.exports = "<div class=\"navigation\">\r\n  <h3>Navigation</h3>\r\n  <ul>\r\n    <li><a href=\"#\"><i class=\"fa fa-book\" aria-hidden=\"true\"></i> Words</a></li>\r\n    <li><a href=\"#\"><i class=\"fa fa-file-excel-o\" aria-hidden=\"true\"></i>Excercices</a></li>\r\n    <li><a href=\"#\"><i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>Jobs</a></li>\r\n  </ul>\r\n</div>"
>>>>>>> master

/***/ }),

/***/ "../../../../../src/app/partials/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navigation {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  margin-top: 20px;\n  background: #fff;\n  border-radius: 2px; }\n  .navigation h3 {\n    font-size: 18px;\n    padding: 10px;\n    font-family: 'Lato', sans-serif;\n    font-weight: 400; }\n  .navigation ul {\n    margin-left: 0;\n    padding-left: 0; }\n    .navigation ul li {\n      list-style-type: none;\n      border-top: 1px solid #eee; }\n      .navigation ul li a {\n        padding: 5px 10px;\n        color: #6a44a2;\n        line-height: 40px;\n        font-size: 14px;\n        display: inline-block;\n        width: 100%;\n        transition: all 0.2s ease-in-out; }\n        .navigation ul li a i {\n          margin-right: 10px; }\n      .navigation ul li a:hover {\n        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3);\n        text-decoration: none;\n        background: #6a44a2;\n        color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/partials/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/navigation/navigation.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_component__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NavigationModule = (function () {
    function NavigationModule() {
    }
    NavigationModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__navigation_component__["a" /* NavigationComponent */]]
        })
    ], NavigationModule);
    return NavigationModule;
}());



/***/ }),

/***/ "../../../../../src/app/partials/post/post.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"show-post d-flex\">\r\n  <div class=\"user-img\"><img src=\"https://pbs.twimg.com/profile_images/918856427380211713/tZX3DB2h_bigger.jpg\" alt=\"\"></div>\r\n  <div class=\"post\">\r\n    <h4><a href=\"#\">JayzTwoCents</a> <span>| 9 minutes ago</span></h4>\r\n    <h5>Words for all cases!</h5>\r\n    <div class=\"post-object\">\r\n      <div class=\"post-content\">\r\n          <img src=\"https://assets1.cdn-mw.com/mw/images/gallery/gal-home-edpick-lg/the-real-history-behind-10-words-sigil-944@1x.jpg\" alt=\"\">\r\n          <div class=\"caption\"><h6>Words from Game of Thrones</h6><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, labore in facere aliquid id ipsam earum at cupiditate nam blanditiis doloremque, cum quidem error eius eligendi temporibus a tempore maxime?</p></div>\r\n      </div>\r\n      <div class=\"post-funcs\">\r\n        <i class=\"fa fa-comment-o\" aria-hidden=\"true\"></i>\r\n        <i class=\"fa fa-heart-o\" aria-hidden=\"true\"></i>\r\n        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/post/post.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".show-post {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n  background: #fff;\n  border-radius: 2px;\n  margin-top: 20px;\n  padding: 10px; }\n  .show-post .user-img {\n    width: 20%; }\n    .show-post .user-img img {\n      border-radius: 50%;\n      margin: 0 10px;\n      width: 80%; }\n  .show-post .post {\n    padding-left: 10px; }\n    .show-post .post h3, .show-post .post h4 {\n      font-family: 'Lato', sans-serif;\n      font-weight: 500; }\n    .show-post .post h4 {\n      font-size: 16px; }\n    .show-post .post h5 {\n      font-size: 12px; }\n    .show-post .post .post-object .post-content {\n      border-radius: 2px;\n      border: 1px solid #e6ecf1; }\n    .show-post .post .post-object img {\n      width: 100%;\n      border-top-left-radius: 2px;\n      border-top-right-radius: 2px; }\n    .show-post .post .post-object .caption {\n      padding: 10px;\n      display: block;\n      background: #e6ecf14f; }\n      .show-post .post .post-object .caption h6 {\n        font-family: 'Lato', sans-serif;\n        font-weight: 500;\n        font-size: 14px; }\n      .show-post .post .post-object .caption p {\n        font-family: 'Lato', sans-serif;\n        font-weight: 400;\n        font-size: 12px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/post/post.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostComponent = (function () {
    function PostComponent() {
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-post',
            template: __webpack_require__("../../../../../src/app/partials/post/post.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/post/post.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post_component__ = __webpack_require__("../../../../../src/app/partials/post/post.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PostModule = (function () {
    function PostModule() {
    }
    PostModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__post_component__["a" /* PostComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__post_component__["a" /* PostComponent */]]
        })
    ], PostModule);
    return PostModule;
}());



/***/ }),

/***/ "../../../../../src/app/partials/user-block/user-block.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"user-block\">\r\n  <div class=\"user-image\">\r\n    <a href=\"#\" class=\"user-img\"><i class=\"fa fa-camera-retro\" aria-hidden=\"true\"></i>\r\n    </a>\r\n  </div>\r\n  <div class=\"user-info\">\r\n      <h3><a class=\"nav-link\" [routerLink]=\"['user-name']\">Guram</a></h3>\r\n      <h4>@Guram</h4>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/partials/user-block/user-block.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-block {\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2); }\n  .user-block .user-image {\n    background: #9D50BB;\n    /* fallback for old browsers */\n    /* Chrome 10-25, Safari 5.1-6 */\n    background: linear-gradient(to top, #6E48AA, #9D50BB);\n    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n    height: 100px;\n    width: 100%;\n    display: block;\n    position: relative; }\n    .user-block .user-image .user-img {\n      width: 64px;\n      height: 64px;\n      display: block;\n      border-radius: 50%;\n      text-align: center;\n      background: #9D50BB;\n      /* fallback for old browsers */\n      /* Chrome 10-25, Safari 5.1-6 */\n      background: linear-gradient(to top, #6E48AA, #9D50BB);\n      /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n      position: absolute;\n      /* line-height: 63px; */\n      bottom: -34px;\n      left: 10px;\n      border: 5px solid #fff; }\n      .user-block .user-image .user-img i {\n        font-size: 31px;\n        line-height: 53px;\n        color: #fff; }\n  .user-block .user-info {\n    background: #fff;\n    padding: 10px; }\n    .user-block .user-info h3 a {\n      padding-left: 74px;\n      padding-right: 0;\n      padding-bottom: 0;\n      padding-top: 0;\n      font-size: 21px;\n      margin-bottom: 0;\n      color: black; }\n    .user-block .user-info h3 a:hover {\n      text-decoration: underline; }\n    .user-block .user-info h4 {\n      font-size: 15px;\n      padding-left: 71px;\n      color: #819eb5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/partials/user-block/user-block.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBlockComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserBlockComponent = (function () {
    function UserBlockComponent() {
    }
    UserBlockComponent.prototype.ngOnInit = function () {
    };
    UserBlockComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-block',
            template: __webpack_require__("../../../../../src/app/partials/user-block/user-block.component.html"),
            styles: [__webpack_require__("../../../../../src/app/partials/user-block/user-block.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserBlockComponent);
    return UserBlockComponent;
}());



/***/ }),

/***/ "../../../../../src/app/partials/user-block/user-block.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBlockModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_block_component__ = __webpack_require__("../../../../../src/app/partials/user-block/user-block.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserBlockModule = (function () {
    function UserBlockModule() {
    }
    UserBlockModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__user_block_component__["a" /* UserBlockComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_block_component__["a" /* UserBlockComponent */]],
        })
    ], UserBlockModule);
    return UserBlockModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\" class=\"user-profile\">\r\n  <div class=\"container\">\r\n    <div id=\"user-img\">\r\n      <a href=\"#\" class=\"image\">\r\n        <i aria-hidden=\"true\" class=\"fa fa-camera-retro\"></i>\r\n      </a>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"container-fluid user-nav\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-md-3\"></div>\r\n          <div class=\"col-md-6\">\r\n            <ul class=\"nav\">\r\n              <li><a href=\"#\">Timeline</a></li>\r\n              <li><a href=\"#\">Billing</a></li>\r\n              <li><a href=\"#\">Settings</a></li>\r\n            </ul>\r\n          </div>\r\n          <div class=\"col-md-3\"></div>\r\n        </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\" id=\"main\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-3\">\r\n      <div class=\"user-info\">\r\n          <h3>Guram</h3>\r\n          <div class=\"date\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>Registration date: August 2017</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n      <app-post></app-post>\r\n    </div>\r\n    <div class=\"col-md-3\">\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".user-profile {\n  background: #e6ecf1;\n  min-height: 175px; }\n  .user-profile #user-img {\n    position: relative; }\n    .user-profile #user-img a {\n      width: 200px;\n      height: 200px;\n      display: block;\n      top: 50px;\n      border-radius: 50%;\n      text-align: center;\n      background: #9D50BB;\n      background: linear-gradient(to top, #6E48AA, #9D50BB);\n      position: absolute;\n      bottom: -34px;\n      left: 10px;\n      border: 5px solid #fff; }\n      .user-profile #user-img a i {\n        font-size: 56px;\n        line-height: 200px;\n        color: #fff; }\n\n.user-nav {\n  background: #9D50BB;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to top, #6E48AA, #9D50BB);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n  .user-nav ul.nav li a {\n    font-family: 'Lato', sans-serif;\n    font-weight: 500;\n    color: #fff;\n    display: inline-block;\n    font-size: 14px;\n    padding: 10px 20px;\n    line-height: 40px;\n    text-transform: capitalize;\n    position: relative;\n    text-align: center; }\n  .user-nav ul.nav li a:hover {\n    text-decoration: none; }\n  .user-nav ul.nav li a:before {\n    height: 3px;\n    background: #fff;\n    display: block;\n    left: 0;\n    content: \"\";\n    visibility: hidden;\n    transition: all 0.2s ease-in-out;\n    opacity: 0;\n    position: absolute;\n    bottom: 0;\n    width: 100%; }\n  .user-nav ul.nav li a:hover::before {\n    visibility: visible;\n    opacity: 1; }\n\n.user-info h3 {\n  font-family: 'Lato', sans-serif;\n  font-weight: 700;\n  margin-top: 20px;\n  font-size: 22px; }\n\n.user-info .date {\n  color: #819eb5;\n  font-size: 14px; }\n  .user-info .date i {\n    margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__ = __webpack_require__("../../../../../src/app/partials/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_post_post_module__ = __webpack_require__("../../../../../src/app/partials/post/post.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__partials_post_post_module__["a" /* PostModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/word/word.component.html":
/***/ (function(module, exports) {

<<<<<<< HEAD
module.exports = "<app-header></app-header>\n\n<div class=\"container-fluid\" id=\"main\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <app-user-block></app-user-block>\n        <app-navigation></app-navigation>\n      </div>\n      <div class=\"col-md-6\">\n        <app-make-post></app-make-post>\n       <app-post></app-post>\n      </div>\n      <div class=\"col-md-3\"></div>\n    </div>\n  </div>\n</div>\n"
=======
module.exports = "<p>\r\n  word works!\r\n</p>\r\n"
>>>>>>> master

/***/ }),

/***/ "../../../../../src/app/word/word.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/word/word.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WordComponent = (function () {
    function WordComponent() {
    }
    WordComponent.prototype.ngOnInit = function () {
    };
    WordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-word',
            template: __webpack_require__("../../../../../src/app/word/word.component.html"),
            styles: [__webpack_require__("../../../../../src/app/word/word.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], WordComponent);
    return WordComponent;
}());



/***/ }),

/***/ "../../../../../src/app/word/word.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WordModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__word_component__ = __webpack_require__("../../../../../src/app/word/word.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__ = __webpack_require__("../../../../../src/app/partials/header/header.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_post_post_module__ = __webpack_require__("../../../../../src/app/partials/post/post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_make_post_make_post_module__ = __webpack_require__("../../../../../src/app/partials/make-post/make-post.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__partials_user_block_user_block_module__ = __webpack_require__("../../../../../src/app/partials/user-block/user-block.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__partials_navigation_navigation_module__ = __webpack_require__("../../../../../src/app/partials/navigation/navigation.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var WordModule = (function () {
    function WordModule() {
    }
    WordModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__partials_header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__partials_post_post_module__["a" /* PostModule */],
                __WEBPACK_IMPORTED_MODULE_5__partials_make_post_make_post_module__["a" /* MakePostModule */],
                __WEBPACK_IMPORTED_MODULE_6__partials_user_block_user_block_module__["a" /* UserBlockModule */],
                __WEBPACK_IMPORTED_MODULE_7__partials_navigation_navigation_module__["a" /* NavigationModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__word_component__["a" /* WordComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__word_component__["a" /* WordComponent */]]
        })
    ], WordModule);
    return WordModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map