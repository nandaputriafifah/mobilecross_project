(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["detail-batik-detail-batik-module"], {
    /***/
    "/tBj":
    /*!*********************************************************************!*\
      !*** ./src/app/home/list-batik/detail-batik/detail-batik.module.ts ***!
      \*********************************************************************/

    /*! exports provided: DetailBatikPageModule */

    /***/
    function tBj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailBatikPageModule", function () {
        return DetailBatikPageModule;
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


      var _detail_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./detail-batik-routing.module */
      "91q8");
      /* harmony import */


      var _detail_batik_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./detail-batik.page */
      "digp");

      var DetailBatikPageModule = function DetailBatikPageModule() {
        _classCallCheck(this, DetailBatikPageModule);
      };

      DetailBatikPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _detail_batik_routing_module__WEBPACK_IMPORTED_MODULE_5__["DetailBatikPageRoutingModule"]],
        declarations: [_detail_batik_page__WEBPACK_IMPORTED_MODULE_6__["DetailBatikPage"]]
      })], DetailBatikPageModule);
      /***/
    },

    /***/
    "91q8":
    /*!*****************************************************************************!*\
      !*** ./src/app/home/list-batik/detail-batik/detail-batik-routing.module.ts ***!
      \*****************************************************************************/

    /*! exports provided: DetailBatikPageRoutingModule */

    /***/
    function q8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailBatikPageRoutingModule", function () {
        return DetailBatikPageRoutingModule;
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


      var _detail_batik_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./detail-batik.page */
      "digp");

      var routes = [{
        path: '',
        component: _detail_batik_page__WEBPACK_IMPORTED_MODULE_3__["DetailBatikPage"]
      }];

      var DetailBatikPageRoutingModule = function DetailBatikPageRoutingModule() {
        _classCallCheck(this, DetailBatikPageRoutingModule);
      };

      DetailBatikPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], DetailBatikPageRoutingModule);
      /***/
    },

    /***/
    "digp":
    /*!*******************************************************************!*\
      !*** ./src/app/home/list-batik/detail-batik/detail-batik.page.ts ***!
      \*******************************************************************/

    /*! exports provided: DetailBatikPage */

    /***/
    function digp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DetailBatikPage", function () {
        return DetailBatikPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_detail_batik_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./detail-batik.page.html */
      "ty+X");
      /* harmony import */


      var _detail_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./detail-batik.page.scss */
      "lQm2");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var _batik_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../batik.service */
      "DYsX");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

      var DetailBatikPage = /*#__PURE__*/function () {
        function DetailBatikPage(activatedRoute, afDatabase, batikService) {
          _classCallCheck(this, DetailBatikPage);

          this.activatedRoute = activatedRoute;
          this.afDatabase = afDatabase;
          this.batikService = batikService;
        }

        _createClass(DetailBatikPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.batikService.getAllBatik().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  batik_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.batiks = data;
              console.log('DATA', data);

              _this.activatedRoute.paramMap.subscribe(function (paramMap) {
                _this.dataURL = paramMap.get('batik_id');
              });

              _this.batikDetail = _this.getBatik(_this.dataURL);
            });
          }
        }, {
          key: "getBatik",
          value: function getBatik(id) {
            var _this2 = this;

            var ref = this.afDatabase.database.ref('batik/' + id);
            ref.once('value').then(function (snapshot) {
              _this2.batikDetail = snapshot.val();
              _this2.batikName = _this2.batikDetail.batik_name;
              _this2.batikDescription = _this2.batikDetail.batik_description;
              _this2.batikProvince = _this2.batikDetail.province_name;
              _this2.batikHistory = _this2.batikDetail.batik_history;
              _this2.batikImage = _this2.batikDetail.batik_image;
              _this2.batikLocation = _this2.batikDetail.batik_location;
              _this2.batikMaps = _this2.batikDetail.batik_maps;
            });
          }
        }]);

        return DetailBatikPage;
      }();

      DetailBatikPage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }, {
          type: _batik_service__WEBPACK_IMPORTED_MODULE_6__["BatikService"]
        }];
      };

      DetailBatikPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-detail-batik',
        template: _raw_loader_detail_batik_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_detail_batik_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], DetailBatikPage);
      /***/
    },

    /***/
    "lQm2":
    /*!*********************************************************************!*\
      !*** ./src/app/home/list-batik/detail-batik/detail-batik.page.scss ***!
      \*********************************************************************/

    /*! exports provided: default */

    /***/
    function lQm2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "img {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 414px;\n  height: 250px;\n  border-radius: 20px;\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZGV0YWlsLWJhdGlrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0FBQUY7O0FBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUFGOztBQUNFO0VBQ0UsbUJBQUE7QUFDSiIsImZpbGUiOiJkZXRhaWwtYmF0aWsucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nIHtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICB3aWR0aDogNDE0cHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiNjb250YWluZXIgc3Ryb25nIHtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuXHJcbiNjb250YWluZXIgcCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cclxuICBjb2xvcjogIzhjOGM4YztcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4jY29udGFpbmVyIGEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbmlvbi10aHVtYm5haWwge1xyXG4gIHdpZHRoOiA4NXB4O1xyXG4gIGhlaWdodDogNzVweDtcclxuICBpbWcge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "ty+X":
    /*!***********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/list-batik/detail-batik/detail-batik.page.html ***!
      \***********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function tyX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header mode=\"ios\">\r\n  <ion-toolbar>\r\n    <ion-title>{{batikName}}</ion-title>\r\n    <ion-buttons>\r\n      <ion-back-button mode=\"md\" defaultHref = \"/home/list-batik\"></ion-back-button>\r\n    </ion-buttons>\r\n    <ion-buttons slot=\"primary\">\r\n      <ion-button href=\"/home/tabs/landing-page\">\r\n        <ion-icon color=\"dark\" name=\"home-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content mode=\"ios\">\r\n  <img src=\"{{batikImage}}\">\r\n  <div class=\"ion-nowrap\">\r\n    <!--  Title and Subtitle  -->\r\n    <div class=\"ion-padding-start ion-text-uppercase\">\r\n      <h1>{{batikName}}</h1>\r\n      <ion-label>Asal daerah: {{batikProvince}}</ion-label>\r\n    </div>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <h2 style=\"font-size: 20px;\"><b>ARTI MOTIF</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item lines=\"none\" class=\"ion-padding-bottom\">{{batikDescription}}</ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card>\r\n      <ion-item>\r\n        <h2 style=\"font-size: 20px;\"><b>SEJARAH MOTIF</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <ion-item lines=\"none\" class=\"ion-padding-bottom\">{{batikHistory}}</ion-item>\r\n    </ion-card>\r\n\r\n    <ion-card href=\"{{batikLocation}}\">\r\n      <ion-item>\r\n      <h2 style=\"font-size: 20px;\"><b>KAMPUNG BATIK</b></h2>\r\n      </ion-item>\r\n      <br>\r\n      <img src=\"{{batikMaps}}\">\r\n    </ion-card>\r\n  </div>\r\n</ion-content>\r\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=detail-batik-detail-batik-module-es5.js.map