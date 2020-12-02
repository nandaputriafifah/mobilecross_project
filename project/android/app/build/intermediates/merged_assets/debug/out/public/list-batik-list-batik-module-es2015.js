(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-batik-list-batik-module"],{

/***/ "0913":
/*!******************************************************!*\
  !*** ./src/app/home/list-batik/list-batik.module.ts ***!
  \******************************************************/
/*! exports provided: ListBatikPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBatikPageModule", function() { return ListBatikPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _list_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list-batik-routing.module */ "Ud04");
/* harmony import */ var _list_batik_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-batik.page */ "WtMM");







let ListBatikPageModule = class ListBatikPageModule {
};
ListBatikPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _list_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListBatikPageRoutingModule"]
        ],
        declarations: [_list_batik_page__WEBPACK_IMPORTED_MODULE_6__["ListBatikPage"]]
    })
], ListBatikPageModule);



/***/ }),

/***/ "Ud04":
/*!**************************************************************!*\
  !*** ./src/app/home/list-batik/list-batik-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ListBatikPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBatikPageRoutingModule", function() { return ListBatikPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _list_batik_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-batik.page */ "WtMM");




const routes = [
    {
        path: '',
        component: _list_batik_page__WEBPACK_IMPORTED_MODULE_3__["ListBatikPage"]
    },
    {
        path: ':batik_id',
        loadChildren: () => __webpack_require__.e(/*! import() | detail-batik-detail-batik-module */ "detail-batik-detail-batik-module").then(__webpack_require__.bind(null, /*! ./detail-batik/detail-batik.module */ "/tBj")).then(m => m.DetailBatikPageModule)
    }
];
let ListBatikPageRoutingModule = class ListBatikPageRoutingModule {
};
ListBatikPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ListBatikPageRoutingModule);



/***/ }),

/***/ "WtMM":
/*!****************************************************!*\
  !*** ./src/app/home/list-batik/list-batik.page.ts ***!
  \****************************************************/
/*! exports provided: ListBatikPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListBatikPage", function() { return ListBatikPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_list_batik_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./list-batik.page.html */ "jpad");
/* harmony import */ var _list_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list-batik.page.scss */ "sw6m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _batik_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../batik.service */ "DYsX");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






let ListBatikPage = class ListBatikPage {
    constructor(batikService) {
        this.batikService = batikService;
    }
    ngOnInit() {
        this.batikService.getAllBatik().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(changes => changes.map(c => (Object.assign({ batik_id: c.payload.key }, c.payload.val()))))).subscribe(data => {
            this.batiks = data;
            console.log(data);
        });
    }
};
ListBatikPage.ctorParameters = () => [
    { type: _batik_service__WEBPACK_IMPORTED_MODULE_4__["BatikService"] }
];
ListBatikPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-batik',
        template: _raw_loader_list_batik_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ListBatikPage);



/***/ }),

/***/ "jpad":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/list-batik/list-batik.page.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\r\n\r\n  <ion-buttons>\r\n    <ion-back-button mode=\"md\" defaultHref = \"/home/tabs/landing-page\"></ion-back-button>\r\n  </ion-buttons>\r\n\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <h1>MOTIF BATIK</h1>\r\n    <span>Jelajah ragam motif batik dari <br> berbagai Provinsi Indonesia</span>\r\n  </div>\r\n\r\n  <ion-card [routerLink]=\"['./', batik.batik_id]\" *ngFor=\"let batik of batiks\">\r\n\r\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n      <ion-thumbnail><img src=\"{{batik.batik_image}}\"></ion-thumbnail>\r\n      <div class=\"ion-nowrap ion-padding\">\r\n        <ion-label><b>{{batik.batik_name}}</b></ion-label>\r\n        <ion-label>{{batik.province_name}}</ion-label>\r\n      </div>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "sw6m":
/*!******************************************************!*\
  !*** ./src/app/home/list-batik/list-batik.page.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LWJhdGlrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6Imxpc3QtYmF0aWsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxuICBcclxufVxyXG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=list-batik-list-batik-module-es2015.js.map