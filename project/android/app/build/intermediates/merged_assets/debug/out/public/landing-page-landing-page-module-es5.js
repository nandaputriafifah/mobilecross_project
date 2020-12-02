(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-page-landing-page-module"], {
    /***/
    "0IJJ":
    /*!******************************************************************!*\
      !*** ./src/app/home/landing-page/landing-page-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: LandingPagePageRoutingModule */

    /***/
    function IJJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePageRoutingModule", function () {
        return LandingPagePageRoutingModule;
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


      var _landing_page_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./landing-page.page */
      "CCZa");

      var routes = [{
        path: '',
        component: _landing_page_page__WEBPACK_IMPORTED_MODULE_3__["LandingPagePage"]
      }];

      var LandingPagePageRoutingModule = function LandingPagePageRoutingModule() {
        _classCallCheck(this, LandingPagePageRoutingModule);
      };

      LandingPagePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LandingPagePageRoutingModule);
      /***/
    },

    /***/
    "CCZa":
    /*!********************************************************!*\
      !*** ./src/app/home/landing-page/landing-page.page.ts ***!
      \********************************************************/

    /*! exports provided: LandingPagePage */

    /***/
    function CCZa(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePage", function () {
        return LandingPagePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_landing_page_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./landing-page.page.html */
      "oqML");
      /* harmony import */


      var _landing_page_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./landing-page.page.scss */
      "uXY0");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _batik_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../batik.service */
      "DYsX");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _province_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../province.service */
      "Z6ms");

      var LandingPagePage = /*#__PURE__*/function () {
        function LandingPagePage(batikService, provinceService) {
          _classCallCheck(this, LandingPagePage);

          this.batikService = batikService;
          this.provinceService = provinceService; // This for custom slider image province
          // slidesPerView means showing two images (slides) per view

          this.sliderOpts = {
            slidesPerView: 2.2,
            spaceBetween: 10
          };
        }

        _createClass(LandingPagePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.batikService.getAllBatik().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  batik_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.batiks = data;
              console.log(data);
            });
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

        return LandingPagePage;
      }();

      LandingPagePage.ctorParameters = function () {
        return [{
          type: _batik_service__WEBPACK_IMPORTED_MODULE_4__["BatikService"]
        }, {
          type: _province_service__WEBPACK_IMPORTED_MODULE_6__["ProvinceService"]
        }];
      };

      LandingPagePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-landing-page',
        template: _raw_loader_landing_page_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_landing_page_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LandingPagePage);
      /***/
    },

    /***/
    "MvOJ":
    /*!**********************************************************!*\
      !*** ./src/app/home/landing-page/landing-page.module.ts ***!
      \**********************************************************/

    /*! exports provided: LandingPagePageModule */

    /***/
    function MvOJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LandingPagePageModule", function () {
        return LandingPagePageModule;
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


      var _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./landing-page-routing.module */
      "0IJJ");
      /* harmony import */


      var _landing_page_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./landing-page.page */
      "CCZa");

      var LandingPagePageModule = function LandingPagePageModule() {
        _classCallCheck(this, LandingPagePageModule);
      };

      LandingPagePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _landing_page_routing_module__WEBPACK_IMPORTED_MODULE_5__["LandingPagePageRoutingModule"]],
        declarations: [_landing_page_page__WEBPACK_IMPORTED_MODULE_6__["LandingPagePage"]]
      })], LandingPagePageModule);
      /***/
    },

    /***/
    "oqML":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-page/landing-page.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function oqML(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" mode=\"ios\">\r\n\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <h1>JELAJAH <br> BATIK NUSANTARA</h1>\r\n    <span>Jelajah ragam motif batik dari <br> berbagai Provinsi Indonesia</span>\r\n  </div>\r\n\r\n  <!--  Province  -->\r\n  <div class=\"ion-padding-start ion-padding-top\" >\r\n    <ion-text><b><br>Provinsi</b></ion-text>\r\n    <!-- This for showing images in slider   -->\r\n    <ion-slides [options]=\"sliderOpts\">\r\n      <!--  Do the loop for showing images based on image in database -->\r\n      <ion-slide *ngFor=\"let img of provinces\">\r\n        <ion-item mode=\"md\" lines=\"none\" [routerLink]=\"['/home/list-province/' + img.province_id]\">\r\n          <img class=\"img-slider\" src=\"{{img.province_thumbnail}}\">\r\n        </ion-item>\r\n      </ion-slide>\r\n    </ion-slides>\r\n    <br>\r\n    <ion-button color=\"secondary\" href=\"/home/list-province\">Lihat Provinsi lebih lanjut</ion-button>\r\n  </div>\r\n\r\n  <!--  Batik List -->\r\n  <div class=\"ion-padding-start ion-padding-top\">\r\n    <br><br>\r\n    <ion-text><b>Motif Batik</b></ion-text>\r\n  </div>\r\n  <div *ngFor=\"let batik of batiks\">\r\n    <!-- Only shows 5 Batik in landing page -->\r\n    <ion-card [routerLink]=\"['/home/list-batik/', batik.batik_id]\" *ngIf=\"batik.batik_id <= 5\">\r\n        <ion-item class=\"ion-no-padding\" lines=\"none\">\r\n          <ion-thumbnail><img src=\"{{batik.batik_image}}\"></ion-thumbnail>\r\n          <div class=\"ion-nowrap ion-padding\">\r\n            <ion-label><b>{{batik.batik_name}}</b></ion-label>\r\n            <ion-label>{{batik.province_name}}</ion-label>\r\n          </div>\r\n        </ion-item>\r\n    </ion-card>\r\n  </div>\r\n  <ion-button href =\"/home/list-batik\" color=\"secondary\">Lihat Batik lebih lanjut</ion-button>\r\n\r\n  <!--  Navigation to Games -->\r\n  <div class=\"ion-padding-start ion-padding-top\">\r\n    <br><br>\r\n    <ion-text><b>Kuis Batik</b></ion-text>\r\n  </div>\r\n  <ion-card>\r\n    <p align=\"center\">\r\n      <img style=\"align-items: center;\" src=\"assets/images/img-card-quiz.png\">\r\n    </p>\r\n  </ion-card>\r\n  <ion-button color=\"secondary\" href=\"/home/tabs/games\">Mainkan sekarang!</ion-button>\r\n</ion-content>\r\n\r\n";
      /***/
    },

    /***/
    "uXY0":
    /*!**********************************************************!*\
      !*** ./src/app/home/landing-page/landing-page.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function uXY0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nion-slides {\n  padding-top: 12px;\n}\n\nion-slides:last-child {\n  margin-right: -50px;\n}\n\nion-slide:first-child {\n  margin-left: -10px;\n}\n\nion-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n}\n\nion-thumbnail {\n  width: 85px;\n  height: 75px;\n}\n\nion-thumbnail img {\n  border-radius: 15px;\n}\n\n.img-slider {\n  -o-object-fit: cover;\n     object-fit: cover;\n  width: 140px;\n  height: 275px;\n  border-radius: 15px;\n  filter: brightness(70%);\n}\n\n@media only screen and (max-width: 375px) {\n  ion-slide:first-child {\n    margin-left: -1px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsYW5kaW5nLXBhZ2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsaUJBQUE7QUFERjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQUhGOztBQUlFO0VBQ0UsbUJBQUE7QUFGSjs7QUFPQTtFQUNFLG9CQUFBO0tBQUEsaUJBQUE7RUFFQSxZQUFBO0VBQ0EsYUFBQTtFQUVBLG1CQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFTQTtFQUNFO0lBQ0UsaUJBQUE7RUFORjtBQUNGIiwiZmlsZSI6ImxhbmRpbmctcGFnZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5pb24tc2xpZGVzIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxufVxyXG5cclxuaW9uLXNsaWRlczpsYXN0LWNoaWxke1xyXG4gIG1hcmdpbi1yaWdodDogLTUwcHg7XHJcbn1cclxuXHJcbi8vIFRoaXMgZm9yIGZpeCB1cCBtYXJnaW4gbGVmdCBvbiB0aGUgZmlyc3QgcHJldmlldyBvZiBpbWFnZSBpbiBzbGlkZVxyXG5pb24tc2xpZGU6Zmlyc3QtY2hpbGQge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxufVxyXG5cclxuLy8gUHV0dGluZyBidXR0b24gaW50byBjZW50ZXJcclxuaW9uLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAyODBweDtcclxufVxyXG5cclxuaW9uLXRodW1ibmFpbCB7XHJcbiAgd2lkdGg6IDg1cHg7XHJcbiAgaGVpZ2h0OiA3NXB4O1xyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ3VzdG9tIGltYWdlIHNsaWRlclxyXG4uaW1nLXNsaWRlciB7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcblxyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDI3NXB4O1xyXG5cclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGZpbHRlcjogYnJpZ2h0bmVzcyg3MCUpO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgaW9uLXNsaWRlOmZpcnN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXB4O1xyXG4gIH1cclxufVxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=landing-page-landing-page-module-es5.js.map