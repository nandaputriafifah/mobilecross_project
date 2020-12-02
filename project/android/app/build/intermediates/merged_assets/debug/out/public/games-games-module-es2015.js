(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["games-games-module"],{

/***/ "+iFO":
/*!********************************************!*\
  !*** ./src/app/home/games/games.page.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUFGIiwiZmlsZSI6ImdhbWVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxIHtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG4vLyBQdXR0aW5nIGJ1dHRvbiBpbnRvIGNlbnRlclxyXG5pb24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDI4MHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "BFyA":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/games/games.page.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" mode=\"ios\">\r\n\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <h1><b>KUTIK</b></h1>\r\n    <h3>(Kuis Batik)<br></h3>\r\n    <span>Yuk mainkan permainan edukasi <br> seputar batik Nusantara!</span>\r\n  </div>\r\n\r\n  <!--  Card in Games -->\r\n  <ion-card>\r\n    <p align=\"center\">\r\n      <img style=\"align-items: center;\" src=\"assets/images/img-card-quiz-page.png\">\r\n    </p>\r\n    \r\n  </ion-card>\r\n\r\n  <!-- USER NOT LOGGED IN -->\r\n  <!-- isLoggedIn can be found in authentication.service.ts -->\r\n  <!-- isLoggedIn = false, means user hasn't logged in yet -->\r\n  <!-- If user not logged in, when press the button, should present alert to logged in/ register -->\r\n  <!-- presentAlert() can be found in games.page.ts -->\r\n  <ion-button\r\n          *ngIf=\"authService.isLoggedIn === false\"\r\n          color=\"secondary\"\r\n          (click)=\"presentAlert()\">Mainkan sekarang!</ion-button>\r\n\r\n  <!-- USER LOGGED IN -->\r\n  <!-- isLoggedIn = true, means user has been logged in -->\r\n  <!-- If user already logged in, when user press the button, should redirect to game-detail -->\r\n  <ion-button\r\n          *ngIf=\"authService.isLoggedIn === true\"\r\n          color=\"secondary\"\r\n          (click)=\"presentLoading()\">Mainkan sekarang!</ion-button>\r\n</ion-content>\r\n\r\n");

/***/ }),

/***/ "erWK":
/*!****************************************************!*\
  !*** ./src/app/home/games/games-routing.module.ts ***!
  \****************************************************/
/*! exports provided: GamesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageRoutingModule", function() { return GamesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./games.page */ "pg1g");




const routes = [
    {
        path: '',
        component: _games_page__WEBPACK_IMPORTED_MODULE_3__["GamesPage"]
    }
];
let GamesPageRoutingModule = class GamesPageRoutingModule {
};
GamesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], GamesPageRoutingModule);



/***/ }),

/***/ "oLvc":
/*!********************************************!*\
  !*** ./src/app/home/games/games.module.ts ***!
  \********************************************/
/*! exports provided: GamesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPageModule", function() { return GamesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _games_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./games-routing.module */ "erWK");
/* harmony import */ var _games_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./games.page */ "pg1g");







let GamesPageModule = class GamesPageModule {
};
GamesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _games_routing_module__WEBPACK_IMPORTED_MODULE_5__["GamesPageRoutingModule"]
        ],
        declarations: [_games_page__WEBPACK_IMPORTED_MODULE_6__["GamesPage"]]
    })
], GamesPageModule);



/***/ }),

/***/ "pg1g":
/*!******************************************!*\
  !*** ./src/app/home/games/games.page.ts ***!
  \******************************************/
/*! exports provided: GamesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GamesPage", function() { return GamesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./games.page.html */ "BFyA");
/* harmony import */ var _games_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./games.page.scss */ "+iFO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../authentication.service */ "UxNV");







let GamesPage = class GamesPage {
    constructor(alertCtrl, loadingCtrl, router, authService) {
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
    }
    presentAlert() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'MASUK AKUN',
                message: 'Untuk bermain <strong>KUTIK</strong>, \n' + 'kamu harus masuk akun \n' +
                    'terlebih dahulu. \n\n' + 'Apakah kamu sudah \n' + 'memiliki akun?',
                buttons: [
                    {
                        text: 'YA',
                        handler: () => this.router.navigateByUrl('/home/login')
                    },
                    {
                        text: 'BELUM',
                        role: 'register',
                        handler: () => {
                            this.router.navigateByUrl('/home/register');
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    presentLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                spinner: 'dots',
                message: 'Mempersiapkan kuis...',
                duration: 4000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                this.router.navigateByUrl('/home/game-detail');
                console.log('Loading dismissed!');
            });
        });
    }
};
GamesPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }
];
GamesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-games',
        template: _raw_loader_games_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_games_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GamesPage);



/***/ })

}]);
//# sourceMappingURL=games-games-module-es2015.js.map