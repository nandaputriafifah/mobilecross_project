(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-province-list-province-module"], {
    /***/
    "8NBK":
    /*!********************************************************************!*\
      !*** ./src/app/home/list-province/list-province-routing.module.ts ***!
      \********************************************************************/

    /*! exports provided: ListProvincePageRoutingModule */

    /***/
    function NBK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProvincePageRoutingModule", function () {
        return ListProvincePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _list_province_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-province.page */
      "A4x2");

      var routes = [{
        path: '',
        component: _list_province_page__WEBPACK_IMPORTED_MODULE_3__["ListProvincePage"]
      }, {
        path: ':province_id',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | list-batik-province-list-batik-province-module */
          "list-batik-province-list-batik-province-module").then(__webpack_require__.bind(null,
          /*! ./list-batik-province/list-batik-province.module */
          "zBmp")).then(function (m) {
            return m.ListBatikProvincePageModule;
          });
        }
      }];

      var ListProvincePageRoutingModule = function ListProvincePageRoutingModule() {
        _classCallCheck(this, ListProvincePageRoutingModule);
      };

      ListProvincePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListProvincePageRoutingModule);
      /***/
    },

    /***/
    "A4x2":
    /*!**********************************************************!*\
      !*** ./src/app/home/list-province/list-province.page.ts ***!
      \**********************************************************/

    /*! exports provided: ListProvincePage */

    /***/
    function A4x2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProvincePage", function () {
        return ListProvincePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_province_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-province.page.html */
      "AQRD");
      /* harmony import */


      var _list_province_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-province.page.scss */
      "Lt+l");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _province_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../province.service */
      "Z6ms");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var ListProvincePage = /*#__PURE__*/function () {
        function ListProvincePage(provinceService, afDatabase) {
          _classCallCheck(this, ListProvincePage);

          this.provinceService = provinceService;
          this.afDatabase = afDatabase;
        }

        _createClass(ListProvincePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.provinceService.getAllProvince().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  province_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.provinces = data;
              console.log(data);
            });
          }
        }]);

        return ListProvincePage;
      }();

      ListProvincePage.ctorParameters = function () {
        return [{
          type: _province_service__WEBPACK_IMPORTED_MODULE_4__["ProvinceService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabase"]
        }];
      };

      ListProvincePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-province',
        template: _raw_loader_list_province_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_province_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListProvincePage);
      /***/
    },

    /***/
    "AQRD":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/list-province/list-province.page.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AQRD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\r\n  <ion-buttons>\r\n    <ion-back-button mode=\"md\" defaultHref=\"/home/tabs/landing-page\"></ion-back-button>\r\n  </ion-buttons>\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <h1>PROVINSI</h1>\r\n    <span>Jelajah provinsi untuk melihat <br> ragam motif batik Nusantara</span>\r\n  </div>\r\n  <ion-card *ngFor=\"let province of provinces\" [routerLink]=\"['./', province.province_id]\">\r\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n      <ion-thumbnail><img src=\"{{province.province_image}}\"></ion-thumbnail>\r\n      <div class=\"ion-nowrap ion-padding\">\r\n        <ion-label><b>{{province.province_name}}</b></ion-label>\r\n      </div>\r\n    </ion-item>\r\n  </ion-card>\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Lt+l":
    /*!************************************************************!*\
      !*** ./src/app/home/list-province/list-province.page.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function LtL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsaXN0LXByb3ZpbmNlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBRUU7RUFDRSxtQkFBQTtBQUFKIiwiZmlsZSI6Imxpc3QtcHJvdmluY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "rnxD":
    /*!************************************************************!*\
      !*** ./src/app/home/list-province/list-province.module.ts ***!
      \************************************************************/

    /*! exports provided: ListProvincePageModule */

    /***/
    function rnxD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListProvincePageModule", function () {
        return ListProvincePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _list_province_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-province-routing.module */
      "8NBK");
      /* harmony import */


      var _list_province_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-province.page */
      "A4x2");

      var ListProvincePageModule = function ListProvincePageModule() {
        _classCallCheck(this, ListProvincePageModule);
      };

      ListProvincePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_province_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListProvincePageRoutingModule"]],
        declarations: [_list_province_page__WEBPACK_IMPORTED_MODULE_6__["ListProvincePage"]]
      })], ListProvincePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-province-list-province-module-es5.js.map