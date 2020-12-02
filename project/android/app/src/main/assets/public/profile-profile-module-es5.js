(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"], {
    /***/
    "9JrI":
    /*!************************************************!*\
      !*** ./src/app/home/profile/profile.page.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function JrI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header {\n  width: 100%;\n}\n\nimg {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 300px;\n}\n\n.center {\n  display: block;\n  margin: auto;\n  width: 200px;\n  height: 200px;\n}\n\n.login-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 280px;\n  height: 35px;\n  border-radius: 20px;\n}\n\nh1 {\n  font-size: 22px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\n.edit-button {\n  width: 30px;\n  height: 30px;\n}\n\n.field-user {\n  height: 40px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxwcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFPQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQVdBO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQVJGOztBQVlBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBWUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFURjs7QUFZQTtFQUNFLGVBQUE7QUFURjs7QUFZQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBVEY7O0FBWUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFURiIsImZpbGUiOiJwcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vL2lvbi1jb250ZW50IHtcclxuLy9cclxuLy8gIGJhY2tncm91bmQtaW1hZ2UgOiBcImh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvYmF0aWNjYS03NTVlZi5hcHBzcG90LmNvbS9vL0xvZ28lMkZWaXJ0dWFsJTIwQmFja2dyb3VuZCUyMFpvb20lMjAtJTIwUGVzZXJ0YS5wbmc/YWx0PW1lZGlhJnRva2VuPTBiNWY0NjZhLTcyNzktNDVkZS05ZWY2LTBhODBjOTNkZDA2NVwiO1xyXG4vL31cclxuXHJcbmltZyB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4vLy5tYWluLWltYWdlLCAuIHVzZXItaW1hZ2V7XHJcbi8vICB3aWR0aDogMjAwcHg7XHJcbi8vICBoZWlnaHQ6IDIwMHB4O1xyXG4vL31cclxuXHJcbi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuXHJcbn1cclxuXHJcbi5sb2dpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDoyODBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5zcGFuIHtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbn1cclxuXHJcbi5lZGl0LWJ1dHRvbntcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6MzBweDtcclxufVxyXG5cclxuLmZpZWxkLXVzZXIge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4vL2lvbi1zbGlkZTpmaXJzdC1jaGlsZCB7XHJcbi8vICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbi8vfVxyXG5cclxuLy9pb24tc2xpZGVzIHtcclxuLy8gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4vL31cclxuLy9cclxuLy9pb24tc2xpZGVzOmxhc3QtY2hpbGR7XHJcbi8vICBtYXJnaW4tcmlnaHQ6IC01MHB4O1xyXG4vL31cclxuIl19 */";
      /***/
    },

    /***/
    "AoIH":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/profile/profile.page.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function AoIH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n    <ion-toolbar *ngIf=\"authService.isLoggedIn === true\">\r\n        <div class=\"ion-padding-start\">\r\n            <b>PROFIL SAYA</b>\r\n        </div>\r\n\r\n        <ion-buttons slot=\"end\">\r\n            <ion-button size=\"small\" type=\"submit\" (click)=\"authService.SignOut()\">Keluar</ion-button>\r\n        </ion-buttons>\r\n\r\n    </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <!-- USER LOGGED IN -->\r\n  <!-- isLoggedIn = true, means user has been logged in -->\r\n  <!-- If user already logged in, display this -->\r\n  <ion-item *ngIf=\"authService.isLoggedIn === true\" lines=\"none\">\r\n  <div class = \"ion-nowrap\">\r\n<!--      <ion-grid>-->\r\n          <ion-row style=\"background-color: #DDA15E; width : 414px; height: 170px;\">\r\n<!--              <ion-card style=\"background-color: #DDA15E; width : 414px;\">-->\r\n<!--                  <ion-card-header>-->\r\n                  <div id=\"profile-info\" *ngIf=\"usernames\">\r\n                    <ion-grid>\r\n                        <ion-row>\r\n                            <ion-avatar style=\"width:150px; height:150px;\" class=\"user-image ion-padding\">\r\n                                <ion-img src=\"{{photoProfile}}\"></ion-img>\r\n                            </ion-avatar>\r\n\r\n                            <div class=\"ion-padding-start\">\r\n                                <br><br><ion-text><b>Hi,<br></b></ion-text>\r\n                            <ion-label  style=\"font-size: 25px\"><b>{{usernames}}</b></ion-label>\r\n                            <ion-img class=\"edit-button\" src=\"https://firebasestorage.googleapis.com/v0/b/baticca-755ef.appspot.com/o/Profile%2Fbtn-edit%20(1).png?alt=media&token=730b13bf-c470-4fc1-949f-2bee0da037c7\" routerLink=\"/home/edit-profile\" ></ion-img>\r\n<!--                                <ion-button shape=\"round\" color=\"primary\" routerLink=\"/home/edit-profile\">Edit Profil</ion-button>-->\r\n                            </div>\r\n                        </ion-row>\r\n                    </ion-grid>\r\n              </div>\r\n<!--            </ion-card>-->\r\n          </ion-row>\r\n<!--   </ion-grid>-->\r\n\r\n      <br>\r\n<!--      <div>-->\r\n<!--          <br><br>-->\r\n<!--          <ion-title><b>Data Diri</b></ion-title>-->\r\n<!--      </div>-->\r\n<!--      -->\r\n          <ion-label><b>Nama</b></ion-label>\r\n      <ion-card class=\"field-user\">\r\n          <ion-text class=\"ion-padding-top ion-padding-start ion-text-center\">{{ names }}</ion-text>\r\n      </ion-card>\r\n\r\n      <ion-text><b>Username</b></ion-text>\r\n      <ion-card  class=\"field-user\">\r\n          <ion-text class=\"ion-padding-top ion-padding-start ion-text-center\">{{ usernames }}</ion-text>\r\n      </ion-card>\r\n\r\n          <ion-text><b>Email</b></ion-text>\r\n          <ion-card  class=\"field-user\">\r\n              <ion-text class=\"ion-padding-top ion-padding-start ion-text-center\">{{userEmail}}</ion-text>\r\n      </ion-card>\r\n\r\n          <ion-text><b>Poin Tertinggi</b></ion-text>\r\n          <ion-card class=\"field-user\">\r\n              <ion-text class=\"ion-padding-top ion-padding-start ion-text-center\">{{totalPoints}}</ion-text>\r\n      </ion-card>\r\n  </div>\r\n\r\n  </ion-item>\r\n\r\n\r\n\r\n  <!-- USER NOT LOGGED IN -->\r\n  <!-- isLoggedIn = false, means user hasn't logged in yet -->\r\n  <!-- If user hasn't logged in yet, display this -->\r\n  <ion-item lines=\"none\" *ngIf=\"authService.isLoggedIn === false\">\r\n      <div class = \"ion-nowrap\">\r\n        <p><br><br></p>\r\n          <div class=\"center\">\r\n              <img src=\"https://firebasestorage.googleapis.com/v0/b/baticca-755ef.appspot.com/o/Logo%2F1606851067042.png?alt=media&token=fdfb595f-df5a-475d-8482-99d0d776fb6b\">\r\n      </div>\r\n\r\n          <div class=\"ion-padding-start ion-padding-top\">\r\n              <h1 class=\"ion-text-center\">\r\n                  <b>BERGABUNG DI KOMUNITAS</b>\r\n              </h1>\r\n\r\n              <p class=\"ion-text-center\">\r\n                  Mengenal aneka macam batik <br>\r\n                  berbagai daerah di Indonesia <br>\r\n                  dan kalahkan mini games <br>\r\n                  Mainkan sekarang! <br><br>\r\n              </p>\r\n          </div>\r\n\r\n    <ion-button class=\"login-button\" color=\"secondary\" href=\"/home/login\">Masuk</ion-button>\r\n\r\n          <ion-row>\r\n              <ion-col>\r\n                  <p class=\"ion-text-center\">\r\n                  <ion-text>Belum punya akun? </ion-text>\r\n                  <a [href]=\"['/home/register']\">Buat akun</a>\r\n                  </p>\r\n              </ion-col>\r\n          </ion-row>\r\n      </div>\r\n  </ion-item>\r\n\r\n\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "I9jw":
    /*!********************************************************!*\
      !*** ./src/app/home/profile/profile-routing.module.ts ***!
      \********************************************************/

    /*! exports provided: ProfilePageRoutingModule */

    /***/
    function I9jw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function () {
        return ProfilePageRoutingModule;
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


      var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./profile.page */
      "fsaT");

      var routes = [{
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
      }];

      var ProfilePageRoutingModule = function ProfilePageRoutingModule() {
        _classCallCheck(this, ProfilePageRoutingModule);
      };

      ProfilePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProfilePageRoutingModule);
      /***/
    },

    /***/
    "be/P":
    /*!************************************************!*\
      !*** ./src/app/home/profile/profile.module.ts ***!
      \************************************************/

    /*! exports provided: ProfilePageModule */

    /***/
    function beP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function () {
        return ProfilePageModule;
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


      var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./profile-routing.module */
      "I9jw");
      /* harmony import */


      var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./profile.page */
      "fsaT");

      var ProfilePageModule = function ProfilePageModule() {
        _classCallCheck(this, ProfilePageModule);
      };

      ProfilePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"]],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
      })], ProfilePageModule);
      /***/
    },

    /***/
    "fsaT":
    /*!**********************************************!*\
      !*** ./src/app/home/profile/profile.page.ts ***!
      \**********************************************/

    /*! exports provided: ProfilePage */

    /***/
    function fsaT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfilePage", function () {
        return ProfilePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.page.html */
      "AoIH");
      /* harmony import */


      var _profile_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.page.scss */
      "9JrI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../authentication.service */
      "UxNV");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! firebase */
      "JZFu");

      var ProfilePage = /*#__PURE__*/function () {
        function ProfilePage(authService, afDatabase) {
          _classCallCheck(this, ProfilePage);

          this.authService = authService;
          this.afDatabase = afDatabase;
        }

        _createClass(ProfilePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.authService.getUserData().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  user_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function () {
              _this.userId = firebase__WEBPACK_IMPORTED_MODULE_7__["default"].auth().currentUser.uid;
              console.log('USER ID CURRENT', _this.userId);

              _this.afDatabase.database.ref('users/' + _this.userId).once('value').then(function (userDetailsAsObject) {
                _this.names = userDetailsAsObject.val().names;
                _this.userEmail = userDetailsAsObject.val().emails;
                _this.usernames = userDetailsAsObject.val().usernames;
                _this.photoProfile = userDetailsAsObject.val().photo_profile;
                _this.totalPoints = userDetailsAsObject.val().total_points;
              })["catch"](function (err) {
                console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
                console.log(err);
              });
            });
          }
        }]);

        return ProfilePage;
      }();

      ProfilePage.ctorParameters = function () {
        return [{
          type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_5__["AngularFireDatabase"]
        }];
      };

      ProfilePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfilePage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=profile-profile-module-es5.js.map