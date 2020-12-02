(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leaderboard-leaderboard-module"], {
    /***/
    "39a6":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/leaderboard/leaderboard.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function a6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content class=\"ion-padding\">\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n   <h1><b>PAPAN PERINGKAT</b></h1>\r\n   <span>Cek poin tertinggi mu sekarang juga!</span>\r\n </div>\r\n <br>\r\n <div class=\"ion-padding-top\">\r\n   <ion-grid>\r\n     <ion-row>\r\n       <ion-col style=\"text-align: center;\">\r\n         <ion-text color=\"primary\"><h5><b>No.</b></h5></ion-text>\r\n       </ion-col>\r\n       <ion-col style=\"text-align: center;\" size=\"8\">\r\n         <ion-text color=\"primary\"> <h5><b>Username</b></h5></ion-text>\r\n       </ion-col>\r\n       <ion-col style=\"text-align: center;\">\r\n         <ion-text color=\"primary\"><h5><b>Poin</b></h5></ion-text>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n </div>\r\n\r\n <ion-card *ngFor=\"let user of users; let i = index\">\r\n   <ion-grid>\r\n     <ion-row>\r\n       <ion-col style=\"text-align: center;\" >\r\n         <h5><b>{{ i + 1 }}</b></h5>\r\n       </ion-col>\r\n       <ion-col style= \"text-align: center;\" size=\"8\" >\r\n         <h5><b>{{ user.usernames }}</b></h5>\r\n       </ion-col>\r\n       <ion-col style=\"text-align: center;\">\r\n         <ion-text color=\"danger\"><h5><b>{{ user.total_points }}</b></h5></ion-text>\r\n       </ion-col>\r\n     </ion-row>\r\n   </ion-grid>\r\n </ion-card>\r\n</ion-content>";
      /***/
    },

    /***/
    "Auh3":
    /*!********************************************************!*\
      !*** ./src/app/home/leaderboard/leaderboard.module.ts ***!
      \********************************************************/

    /*! exports provided: LeaderboardPageModule */

    /***/
    function Auh3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardPageModule", function () {
        return LeaderboardPageModule;
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


      var _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./leaderboard-routing.module */
      "UqZz");
      /* harmony import */


      var _leaderboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./leaderboard.page */
      "LN9S");

      var LeaderboardPageModule = function LeaderboardPageModule() {
        _classCallCheck(this, LeaderboardPageModule);
      };

      LeaderboardPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _leaderboard_routing_module__WEBPACK_IMPORTED_MODULE_5__["LeaderboardPageRoutingModule"]],
        declarations: [_leaderboard_page__WEBPACK_IMPORTED_MODULE_6__["LeaderboardPage"]]
      })], LeaderboardPageModule);
      /***/
    },

    /***/
    "F57X":
    /*!**************************************!*\
      !*** ./src/app/home/user.service.ts ***!
      \**************************************/

    /*! exports provided: UserService */

    /***/
    function F57X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserService", function () {
        return UserService;
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


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var UserService = /*#__PURE__*/function () {
        function UserService(db) {
          _classCallCheck(this, UserService);

          this.db = db;
          this.dbPath = '/users';
          this.userRef = null;
          this.userRef = db.list(this.dbPath);
        }

        _createClass(UserService, [{
          key: "getAllUsers",
          value: function getAllUsers() {
            return this.userRef;
          }
        }]);

        return UserService;
      }();

      UserService.ctorParameters = function () {
        return [{
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"]
        }];
      };

      UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], UserService);
      /***/
    },

    /***/
    "KMf7":
    /*!********************************************************!*\
      !*** ./src/app/home/leaderboard/leaderboard.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function KMf7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-card {\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZWFkZXJib2FyZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtBQUNKIiwiZmlsZSI6ImxlYWRlcmJvYXJkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jYXJkIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICB9Il19 */";
      /***/
    },

    /***/
    "LN9S":
    /*!******************************************************!*\
      !*** ./src/app/home/leaderboard/leaderboard.page.ts ***!
      \******************************************************/

    /*! exports provided: LeaderboardPage */

    /***/
    function LN9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardPage", function () {
        return LeaderboardPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./leaderboard.page.html */
      "39a6");
      /* harmony import */


      var _leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./leaderboard.page.scss */
      "KMf7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../user.service */
      "F57X");

      var LeaderboardPage = /*#__PURE__*/function () {
        function LeaderboardPage(userService, db) {
          _classCallCheck(this, LeaderboardPage);

          this.userService = userService;
          this.db = db;
        }

        _createClass(LeaderboardPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.userService.getAllUsers().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  user_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.users = data;
              console.log(data);
              firebase__WEBPACK_IMPORTED_MODULE_6__["default"].database().ref('users/').orderByChild('total_points').once('value').then(function (snap) {
                snap.forEach(function (childSnap) {
                  _this.totalPoints = snap.val();
                });
              });
            });
          }
        }]);

        return LeaderboardPage;
      }();

      LeaderboardPage.ctorParameters = function () {
        return [{
          type: _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"]
        }];
      };

      LeaderboardPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-leaderboard',
        template: _raw_loader_leaderboard_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_leaderboard_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LeaderboardPage); // this.userService.getAllUsers().snapshotChanges().pipe(
      //   map(changes =>
      //       changes.map(c => ({user_id: c.payload.key, ...c.payload.val()}))
      //   )
      // ).subscribe(data => {
      //   this.users = data;
      //   console.log(data);
      //   console.log(this.totalPoints);
      //   //this.users = this.db.list('users/').valueChanges();
      //   const usersRef = this.db.database.ref('users/');
      //   const ref = usersRef.orderByChild("total_points");
      //   ref.once('value').then(function(snap) {
      //     snap.forEach(function (childSnap) {
      //       this.totalpoints = childSnap.val();
      //       console.log(pkey);
      //     });
      //   });
      // });

      /***/
    },

    /***/
    "UqZz":
    /*!****************************************************************!*\
      !*** ./src/app/home/leaderboard/leaderboard-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: LeaderboardPageRoutingModule */

    /***/
    function UqZz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LeaderboardPageRoutingModule", function () {
        return LeaderboardPageRoutingModule;
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


      var _leaderboard_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./leaderboard.page */
      "LN9S");

      var routes = [{
        path: '',
        component: _leaderboard_page__WEBPACK_IMPORTED_MODULE_3__["LeaderboardPage"]
      }];

      var LeaderboardPageRoutingModule = function LeaderboardPageRoutingModule() {
        _classCallCheck(this, LeaderboardPageRoutingModule);
      };

      LeaderboardPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], LeaderboardPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=leaderboard-leaderboard-module-es5.js.map