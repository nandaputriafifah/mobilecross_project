(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-batik-province-list-batik-province-module"], {
    /***/
    "M0fg":
    /*!************************************************************************************!*\
      !*** ./src/app/home/list-province/list-batik-province/list-batik-province.page.ts ***!
      \************************************************************************************/

    /*! exports provided: ListBatikProvincePage */

    /***/
    function M0fg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBatikProvincePage", function () {
        return ListBatikProvincePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_list_batik_province_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./list-batik-province.page.html */
      "i6dA");
      /* harmony import */


      var _list_batik_province_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./list-batik-province.page.scss */
      "tHHa");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _province_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../province.service */
      "Z6ms");

      var ListBatikProvincePage = /*#__PURE__*/function () {
        function ListBatikProvincePage(provinceService, afDatabase, activatedRoute) {
          _classCallCheck(this, ListBatikProvincePage);

          this.provinceService = provinceService;
          this.afDatabase = afDatabase;
          this.activatedRoute = activatedRoute;
        }

        _createClass(ListBatikProvincePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.activatedRoute.paramMap.subscribe(function (paramMap) {
              _this.dataURL = paramMap.get('province_id');
            });
            this.provinceDetail = this.getProvince(this.dataURL);
            this.provinceName = this.getProvinceName(this.dataURL);
          } // Get all list batik in province selected
          // Give parameter id for province_id

        }, {
          key: "getProvince",
          value: function getProvince(id) {
            var _this2 = this;

            var ref = this.afDatabase.database.ref('province/' + id + '/list_batik');
            ref.once('value').then(function (snapshot) {
              _this2.provinceDetail = snapshot.val();
            });
          } // Get list province name in province selected
          // Give parameter id for province_id

        }, {
          key: "getProvinceName",
          value: function getProvinceName(id) {
            var _this3 = this;

            this.afDatabase.database.ref('province/' + id).once('value').then(function (snapshot) {
              _this3.provinceName = snapshot.val().province_name;
            });
          }
        }]);

        return ListBatikProvincePage;
      }();

      ListBatikProvincePage.ctorParameters = function () {
        return [{
          type: _province_service__WEBPACK_IMPORTED_MODULE_6__["ProvinceService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      };

      ListBatikProvincePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-list-batik-province',
        template: _raw_loader_list_batik_province_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_list_batik_province_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ListBatikProvincePage);
      /***/
    },

    /***/
    "SJgq":
    /*!**********************************************************************************************!*\
      !*** ./src/app/home/list-province/list-batik-province/list-batik-province-routing.module.ts ***!
      \**********************************************************************************************/

    /*! exports provided: ListBatikProvincePageRoutingModule */

    /***/
    function SJgq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBatikProvincePageRoutingModule", function () {
        return ListBatikProvincePageRoutingModule;
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


      var _list_batik_province_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./list-batik-province.page */
      "M0fg");

      var routes = [{
        path: '',
        component: _list_batik_province_page__WEBPACK_IMPORTED_MODULE_3__["ListBatikProvincePage"]
      }];

      var ListBatikProvincePageRoutingModule = function ListBatikProvincePageRoutingModule() {
        _classCallCheck(this, ListBatikProvincePageRoutingModule);
      };

      ListBatikProvincePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ListBatikProvincePageRoutingModule);
      /***/
    },

    /***/
    "i6dA":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/list-province/list-batik-province/list-batik-province.page.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function i6dA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\">\r\n  <ion-buttons>\r\n    <ion-back-button mode=\"md\" defaultHref=\"/home/list-province\"></ion-back-button>\r\n  </ion-buttons>\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <h1 class=\" ion-text-uppercase\">BATIK {{provinceName}}</h1>\r\n  </div>\r\n\r\n  <ion-card *ngFor=\"let batikProvince of provinceDetail\" [routerLink]=\"['/home/list-batik/' + batikProvince.batik_id]\">\r\n    <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n      <ion-thumbnail><img src=\"{{batikProvince.batik_image}}\"></ion-thumbnail>\r\n      <div class=\"ion-nowrap ion-padding\">\r\n        <ion-label><b>{{batikProvince.batik_name}}</b></ion-label>\r\n      </div>\r\n    </ion-item>\r\n  </ion-card>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "tHHa":
    /*!**************************************************************************************!*\
      !*** ./src/app/home/list-province/list-batik-province/list-batik-province.page.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function tHHa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbGlzdC1iYXRpay1wcm92aW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUVFO0VBQ0UsbUJBQUE7QUFBSiIsImZpbGUiOiJsaXN0LWJhdGlrLXByb3ZpbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmlvbi10aHVtYm5haWwge1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "zBmp":
    /*!**************************************************************************************!*\
      !*** ./src/app/home/list-province/list-batik-province/list-batik-province.module.ts ***!
      \**************************************************************************************/

    /*! exports provided: ListBatikProvincePageModule */

    /***/
    function zBmp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ListBatikProvincePageModule", function () {
        return ListBatikProvincePageModule;
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


      var _list_batik_province_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./list-batik-province-routing.module */
      "SJgq");
      /* harmony import */


      var _list_batik_province_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./list-batik-province.page */
      "M0fg");

      var ListBatikProvincePageModule = function ListBatikProvincePageModule() {
        _classCallCheck(this, ListBatikProvincePageModule);
      };

      ListBatikProvincePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _list_batik_province_routing_module__WEBPACK_IMPORTED_MODULE_5__["ListBatikProvincePageRoutingModule"]],
        declarations: [_list_batik_province_page__WEBPACK_IMPORTED_MODULE_6__["ListBatikProvincePage"]]
      })], ListBatikProvincePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=list-batik-province-list-batik-province-module-es5.js.map