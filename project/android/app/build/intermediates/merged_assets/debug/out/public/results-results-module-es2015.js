(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["results-results-module"],{

/***/ "IvqK":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/results/results.page.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"ion-padding\" mode=\"ios\">\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\" *ngIf=\"userScores === 100\">\r\n    <h1>SEMPURNA!</h1>\r\n    <span>Kamu sudah selesaikan<br> kuis dengan sempurna</span>\r\n  </div>\r\n\r\n  <div class=\"ion-padding-start\" *ngIf=\"userScores >= 70 && userScores <= 90\">\r\n    <h1>SELAMAT!</h1>\r\n    <span>Kamu sudah selesaikan<br> kuis dengan baik</span>\r\n  </div>\r\n\r\n  <div class=\"ion-padding-start\" *ngIf=\"userScores <= 60\">\r\n    <h1>YUK COBA LAGI!</h1>\r\n    <span>Tak perlu gundah,<br> yuk kita coba main lagi</span>\r\n  </div>\r\n  <br><br><br>\r\n\r\n  <div class=\"ion-nowrap\">\r\n    <img *ngIf=\"userScores >= 70\" src=\"assets/images/result.png\">\r\n\r\n    <img *ngIf=\"userScores < 70\" src=\"assets/images/result_fail.png\">\r\n\r\n    <ion-card style=\"text-align: center\" class=\"ion-padding\">\r\n      <ion-card-subtitle>Skor</ion-card-subtitle>\r\n      <ion-card-title class=\"title-size\">\r\n        <mark class=\"primary\">{{userScores}}</mark>/100\r\n      </ion-card-title>\r\n    </ion-card>\r\n\r\n    <ion-card style=\"text-align: center\" class=\"ion-padding\">\r\n      <ion-card-subtitle>Poin</ion-card-subtitle>\r\n      <ion-card-title class=\"title-size\">\r\n        <mark class=\"primary\">+ {{userPoints}}</mark>\r\n      </ion-card-title>\r\n    </ion-card>\r\n\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-button color=\"secondary\" href=\"/home/game-detail\">Main lagi!</ion-button>\r\n        </ion-col>\r\n        <ion-col>\r\n          <ion-button href=\"/home/tabs/games\">Kembali</ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "P7BW":
/*!************************************************!*\
  !*** ./src/app/home/results/results.page.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n}\n\nmark.primary {\n  color: #bc6c25;\n  background: none;\n}\n\n.title-size {\n  font-size: 40px;\n}\n\nion-button {\n  display: flex;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZXN1bHRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDQyxlQUFBO0FBREQ7O0FBSUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJyZXN1bHRzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxubWFyay5wcmltYXJ5IHtcclxuICBjb2xvcjojYmM2YzI1O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZS1zaXplIHtcclxuIGZvbnQtc2l6ZTogNDBweDtcclxufVxyXG5cclxuaW9uLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "VIp7":
/*!********************************************************!*\
  !*** ./src/app/home/results/results-routing.module.ts ***!
  \********************************************************/
/*! exports provided: ResultsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageRoutingModule", function() { return ResultsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./results.page */ "d0RV");




const routes = [
    {
        path: '',
        component: _results_page__WEBPACK_IMPORTED_MODULE_3__["ResultsPage"]
    }
];
let ResultsPageRoutingModule = class ResultsPageRoutingModule {
};
ResultsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ResultsPageRoutingModule);



/***/ }),

/***/ "cm9o":
/*!************************************************!*\
  !*** ./src/app/home/results/results.module.ts ***!
  \************************************************/
/*! exports provided: ResultsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPageModule", function() { return ResultsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _results_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./results-routing.module */ "VIp7");
/* harmony import */ var _results_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./results.page */ "d0RV");







let ResultsPageModule = class ResultsPageModule {
};
ResultsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _results_routing_module__WEBPACK_IMPORTED_MODULE_5__["ResultsPageRoutingModule"]
        ],
        declarations: [_results_page__WEBPACK_IMPORTED_MODULE_6__["ResultsPage"]]
    })
], ResultsPageModule);



/***/ }),

/***/ "d0RV":
/*!**********************************************!*\
  !*** ./src/app/home/results/results.page.ts ***!
  \**********************************************/
/*! exports provided: ResultsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultsPage", function() { return ResultsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./results.page.html */ "IvqK");
/* harmony import */ var _results_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./results.page.scss */ "P7BW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game.service */ "B0pb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! firebase */ "JZFu");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");









let ResultsPage = class ResultsPage {
    constructor(gameService, afDatabase, router) {
        this.gameService = gameService;
        this.afDatabase = afDatabase;
        this.router = router;
    }
    ngOnInit() {
        this.gameService.getUserData().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(changes => changes.map(c => (Object.assign({ user_id: c.payload.key }, c.payload.val()))))).subscribe(() => {
            this.userId = firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
            console.log('USER ID CURRENT', this.userId);
            this.afDatabase.database.ref('users/' + this.userId).once('value').then(userDetailsAsObject => {
                this.userPoints = userDetailsAsObject.val().points.user_point;
                this.userScores = userDetailsAsObject.val().points.user_score;
            }).catch(err => {
                console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
                console.log(err);
            });
        });
    }
};
ResultsPage.ctorParameters = () => [
    { type: _game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_8__["AngularFireDatabase"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
ResultsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-results',
        template: _raw_loader_results_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_results_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResultsPage);



/***/ })

}]);
//# sourceMappingURL=results-results-module-es2015.js.map