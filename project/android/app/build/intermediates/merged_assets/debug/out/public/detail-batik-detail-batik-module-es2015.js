(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-batik-detail-batik-module"],{

/***/ "/tBj":
/*!*********************************************************************!*\
  !*** ./src/app/home/list-batik/detail-batik/detail-batik.module.ts ***!
  \*********************************************************************/
/*! exports provided: DetailBatikPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBatikPageModule", function() { return DetailBatikPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _detail_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail-batik-routing.module */ "91q8");
/* harmony import */ var _detail_batik_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./detail-batik.page */ "digp");







let DetailBatikPageModule = class DetailBatikPageModule {
};
DetailBatikPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _detail_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailBatikPageRoutingModule"]
        ],
        declarations: [_detail_batik_page__WEBPACK_IMPORTED_MODULE_6__["DetailBatikPage"]]
    })
], DetailBatikPageModule);



/***/ }),

/***/ "91q8":
/*!*****************************************************************************!*\
  !*** ./src/app/home/list-batik/detail-batik/detail-batik-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: DetailBatikPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBatikPageRoutingModule", function() { return DetailBatikPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _detail_batik_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detail-batik.page */ "digp");




const routes = [
    {
        path: '',
        component: _detail_batik_page__WEBPACK_IMPORTED_MODULE_3__["DetailBatikPage"]
    }
];
let DetailBatikPageRoutingModule = class DetailBatikPageRoutingModule {
};
DetailBatikPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DetailBatikPageRoutingModule);



/***/ }),

/***/ "digp":
/*!*******************************************************************!*\
  !*** ./src/app/home/list-batik/detail-batik/detail-batik.page.ts ***!
  \*******************************************************************/
/*! exports provided: DetailBatikPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailBatikPage", function() { return DetailBatikPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_detail_batik_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./detail-batik.page.html */ "ty+X");
/* harmony import */ var _detail_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./detail-batik.page.scss */ "lQm2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/database */ "sSZD");
/* harmony import */ var _batik_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../batik.service */ "DYsX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "kU1M");








let DetailBatikPage = class DetailBatikPage {
    constructor(activatedRoute, afDatabase, batikService) {
        this.activatedRoute = activatedRoute;
        this.afDatabase = afDatabase;
        this.batikService = batikService;
    }
    ngOnInit() {
        this.batikService.getAllBatik().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(changes => changes.map(c => (Object.assign({ batik_id: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.batiks = data;
            console.log('DATA', data);
            this.activatedRoute.paramMap.subscribe(paramMap => {
                this.dataURL = paramMap.get('batik_id');
            });
            this.batikDetail = this.getBatik(this.dataURL);
        });
    }
    getBatik(id) {
        let ref = this.afDatabase.database.ref('batik/' + id);
        ref.once('value').then((snapshot) => {
            this.batikDetail = snapshot.val();
            this.batikName = this.batikDetail.batik_name;
            this.batikDescription = this.batikDetail.batik_description;
            this.batikProvince = this.batikDetail.province_name;
            this.batikHistory = this.batikDetail.batik_history;
            this.batikImage = this.batikDetail.batik_image;
            this.batikLocation = this.batikDetail.batik_location;
            this.batikMaps = this.batikDetail.batik_maps;
        });
    }
};
DetailBatikPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"] },
    { type: _batik_service__WEBPACK_IMPORTED_MODULE_6__["BatikService"] }
];
DetailBatikPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-batik',
        template: _raw_loader_detail_batik_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DetailBatikPage);



/***/ }),

/***/ "lQm2":
/*!*********************************************************************!*\
  !*** ./src/app/home/list-batik/detail-batik/detail-batik.page.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 414px;\n  height: 250px;\n  border-radius: 20px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWlsLWJhdGlrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJkZXRhaWwtYmF0aWsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNDE0cHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmlvbi10aHVtYm5haWwge1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "ty+X":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/list-batik/detail-batik/detail-batik.page.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-title>{{batikName}}</ion-title>\r\n    <ion-buttons>\r\n      <ion-back-button mode=\"md\" defaultHref = \"/home/list-batik\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button href=\"/home/tabs/landing-page\">\r\n        <ion-icon color=\"dark\" name=\"home-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  <img src=\"{{batikImage}}\">\r\n  <div class=\"ion-nowrap\">\r\n    <!--  Title and Subtitle  -->\r\n    <div class=\"ion-padding-start ion-text-uppercase\">\r\n      <h1>{{batikName}}</h1>\r\n      <ion-label>Asal daerah: {{batikProvince}}</ion-label>\r\n    </div>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <h2 style=\"font-size: 20px;\"><b>ARTI MOTIF</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item lines=\"none\" class=\"ion-padding-bottom\">{{batikDescription}}</ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <h2 style=\"font-size: 20px;\"><b>SEJARAH MOTIF</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item lines=\"none\" class=\"ion-padding-bottom\">{{batikHistory}}</ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card href=\"{{batikLocation}}\">\r\n      <ion-item>\r\n      <h2 style=\"font-size: 20px;\"><b>KAMPUNG BATIK</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <img src=\"{{batikMaps}}\">\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=detail-batik-detail-batik-module-es2015.js.map