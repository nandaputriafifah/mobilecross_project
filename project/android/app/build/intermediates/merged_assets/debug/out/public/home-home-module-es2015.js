(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "A3+G":
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/*! exports provided: HomePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageRoutingModule", function() { return HomePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.page */ "zpKS");




const routes = [
    {
        path: 'tabs',
        component: _home_page__WEBPACK_IMPORTED_MODULE_3__["HomePage"],
        children: [
            {
                path: 'landing-page',
                loadChildren: () => Promise.all(/*! import() | landing-page-landing-page-module */[__webpack_require__.e("common"), __webpack_require__.e("landing-page-landing-page-module")]).then(__webpack_require__.bind(null, /*! ./landing-page/landing-page.module */ "MvOJ")).then(m => m.LandingPagePageModule)
            },
            {
                path: 'games',
                loadChildren: () => Promise.all(/*! import() | games-games-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("games-games-module")]).then(__webpack_require__.bind(null, /*! ./games/games.module */ "oLvc")).then(m => m.GamesPageModule)
            },
            {
                path: 'leaderboard',
                loadChildren: () => Promise.all(/*! import() | leaderboard-leaderboard-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("leaderboard-leaderboard-module")]).then(__webpack_require__.bind(null, /*! ./leaderboard/leaderboard.module */ "Auh3")).then(m => m.LeaderboardPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "be/P")).then(m => m.ProfilePageModule)
            },
        ]
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "JNZR")).then(m => m.LoginPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "QuKQ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'verify-email',
        loadChildren: () => Promise.all(/*! import() | verify-email-verify-email-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("verify-email-verify-email-module")]).then(__webpack_require__.bind(null, /*! ./verify-email/verify-email.module */ "aN9/")).then(m => m.VerifyEmailPageModule)
    },
    {
        path: 'edit-profile',
        loadChildren: () => Promise.all(/*! import() | edit-profile-edit-profile-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("edit-profile-edit-profile-module")]).then(__webpack_require__.bind(null, /*! ./edit-profile/edit-profile.module */ "yJ8b")).then(m => m.EditProfilePageModule)
    },
    {
        path: 'list-batik',
        loadChildren: () => Promise.all(/*! import() | list-batik-list-batik-module */[__webpack_require__.e("common"), __webpack_require__.e("list-batik-list-batik-module")]).then(__webpack_require__.bind(null, /*! ./list-batik/list-batik.module */ "0913")).then(m => m.ListBatikPageModule)
    },
    {
        path: 'list-province',
        loadChildren: () => Promise.all(/*! import() | list-province-list-province-module */[__webpack_require__.e("common"), __webpack_require__.e("list-province-list-province-module")]).then(__webpack_require__.bind(null, /*! ./list-province/list-province.module */ "rnxD")).then(m => m.ListProvincePageModule)
    },
    {
        path: 'game-detail',
        loadChildren: () => Promise.all(/*! import() | game-detail-game-detail-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("game-detail-game-detail-module")]).then(__webpack_require__.bind(null, /*! ./game-detail/game-detail.module */ "dtrh")).then(m => m.GameDetailPageModule)
    },
    {
        path: 'results',
        loadChildren: () => Promise.all(/*! import() | results-results-module */[__webpack_require__.e("default~edit-profile-edit-profile-module~firebase-auth~game-detail-game-detail-module~games-games-mo~1caf7d9d"), __webpack_require__.e("default~edit-profile-edit-profile-module~game-detail-game-detail-module~games-games-module~leaderboa~5105f503"), __webpack_require__.e("common"), __webpack_require__.e("results-results-module")]).then(__webpack_require__.bind(null, /*! ./results/results.module */ "cm9o")).then(m => m.ResultsPageModule)
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], HomePageRoutingModule);



/***/ }),

/***/ "WcN3":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n    <ion-tabs>\r\n        <ion-tab-bar slot=\"bottom\">\r\n            <ion-tab-button tab=\"landing-page\">\r\n                <ion-icon name=\"home-outline\"></ion-icon>\r\n                <ion-label>Home</ion-label>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"games\">\r\n                <ion-icon name=\"game-controller-outline\"></ion-icon>\r\n                <ion-label>Games</ion-label>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"leaderboaionicrd\">\r\n                <ion-icon name=\"medal-outline\"></ion-icon>\r\n                <ion-label>Leaderboard</ion-label>\r\n            </ion-tab-button>\r\n\r\n            <ion-tab-button tab=\"profile\">\r\n                <ion-icon name=\"person-outline\"></ion-icon>\r\n                <ion-label>Profile</ion-label>\r\n            </ion-tab-button>\r\n        </ion-tab-bar>\r\n    </ion-tabs>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "ct+p":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "zpKS");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home-routing.module */ "A3+G");







let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _home_routing_module__WEBPACK_IMPORTED_MODULE_6__["HomePageRoutingModule"]
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "f6od":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "zpKS":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "WcN3");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "f6od");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let HomePage = class HomePage {
    constructor() { }
};
HomePage.ctorParameters = () => [];
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map