(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["verify-email-verify-email-module"], {
    /***/
    "6//T":
    /*!******************************************************************!*\
      !*** ./src/app/home/verify-email/verify-email-routing.module.ts ***!
      \******************************************************************/

    /*! exports provided: VerifyEmailPageRoutingModule */

    /***/
    function T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPageRoutingModule", function () {
        return VerifyEmailPageRoutingModule;
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


      var _verify_email_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./verify-email.page */
      "Hvaf");

      var routes = [{
        path: '',
        component: _verify_email_page__WEBPACK_IMPORTED_MODULE_3__["VerifyEmailPage"]
      }];

      var VerifyEmailPageRoutingModule = function VerifyEmailPageRoutingModule() {
        _classCallCheck(this, VerifyEmailPageRoutingModule);
      };

      VerifyEmailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], VerifyEmailPageRoutingModule);
      /***/
    },

    /***/
    "EWdf":
    /*!************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/verify-email/verify-email.page.html ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EWdf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\" mode=\"ios\">\r\n  <ion-buttons>\r\n    <ion-back-button mode=\"md\" defaultHref=\"/home/tabs/profile\">\r\n    </ion-back-button>\r\n  </ion-buttons>\r\n  <br><br><br>\r\n  <div class=\"ion-nowrap ion-text-center\">\r\n    <img src=\"assets/images/email.png\">\r\n  </div>\r\n\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start ion-padding-top\">\r\n    <h1>VERIFIKASI EMAIL</h1>\r\n    <ion-label style=\"font-size: 18px;\"> Silahkan cek email Anda dan klik link <br> untuk verifikasi email.</ion-label>\r\n    <br><br>\r\n  </div>\r\n\r\n  <ion-grid>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" expand=\"block\" (click)=\"authService.SendVerificationMail()\" expand=\"block\">\r\n          Kirim ulang link verifikasi\r\n        </ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\" href=\"/home/login\" expand=\"block\">Masuk Akun</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "Hvaf":
    /*!********************************************************!*\
      !*** ./src/app/home/verify-email/verify-email.page.ts ***!
      \********************************************************/

    /*! exports provided: VerifyEmailPage */

    /***/
    function Hvaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPage", function () {
        return VerifyEmailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./verify-email.page.html */
      "EWdf");
      /* harmony import */


      var _verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./verify-email.page.scss */
      "Xjhv");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../authentication.service */
      "UxNV");

      var VerifyEmailPage = /*#__PURE__*/function () {
        function VerifyEmailPage(authService) {
          _classCallCheck(this, VerifyEmailPage);

          this.authService = authService;
        }

        _createClass(VerifyEmailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return VerifyEmailPage;
      }();

      VerifyEmailPage.ctorParameters = function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      };

      VerifyEmailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-verify-email',
        template: _raw_loader_verify_email_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_verify_email_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], VerifyEmailPage);
      /***/
    },

    /***/
    "Xjhv":
    /*!**********************************************************!*\
      !*** ./src/app/home/verify-email/verify-email.page.scss ***!
      \**********************************************************/

    /*! exports provided: default */

    /***/
    function Xjhv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 20px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 250px;\n}\n\nion-button {\n  display: flex;\n  align-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2ZXJpZnktZW1haWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxjQUFBO0VBRUEsU0FBQTtBQURGOztBQUlBO0VBQ0UscUJBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EscUJBQUE7QUFERiIsImZpbGUiOiJ2ZXJpZnktZW1haWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBwIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIycHg7XHJcblxyXG4gIGNvbG9yOiAjOGM4YzhjO1xyXG5cclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbiNjb250YWluZXIgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxufVxyXG5cclxuaW1nIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG5pb24tYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "aN9/":
    /*!**********************************************************!*\
      !*** ./src/app/home/verify-email/verify-email.module.ts ***!
      \**********************************************************/

    /*! exports provided: VerifyEmailPageModule */

    /***/
    function aN9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailPageModule", function () {
        return VerifyEmailPageModule;
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


      var _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verify-email-routing.module */
      "6//T");
      /* harmony import */


      var _verify_email_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./verify-email.page */
      "Hvaf");

      var VerifyEmailPageModule = function VerifyEmailPageModule() {
        _classCallCheck(this, VerifyEmailPageModule);
      };

      VerifyEmailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _verify_email_routing_module__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailPageRoutingModule"]],
        declarations: [_verify_email_page__WEBPACK_IMPORTED_MODULE_6__["VerifyEmailPage"]]
      })], VerifyEmailPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=verify-email-verify-email-module-es5.js.map