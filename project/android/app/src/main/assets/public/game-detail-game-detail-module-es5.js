(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-detail-game-detail-module"], {
    /***/
    "BIhc":
    /*!******************************************************!*\
      !*** ./src/app/home/game-detail/game-detail.page.ts ***!
      \******************************************************/

    /*! exports provided: GameDetailPage */

    /***/
    function BIhc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPage", function () {
        return GameDetailPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_game_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./game-detail.page.html */
      "uXb1");
      /* harmony import */


      var _game_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./game-detail.page.scss */
      "yGL/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _game_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../game.service */
      "B0pb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! firebase */
      "JZFu");
      /* harmony import */


      var _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/fire/database */
      "sSZD");

      var GameDetailPage = /*#__PURE__*/function () {
        function GameDetailPage(gameService, router, afDatabase, loadingCtrl, alertCtrl, route) {
          _classCallCheck(this, GameDetailPage);

          this.gameService = gameService;
          this.router = router;
          this.afDatabase = afDatabase;
          this.loadingCtrl = loadingCtrl;
          this.alertCtrl = alertCtrl;
          this.route = route;
          this.score = 0;
          this.today = new Date();
          this.todaysDay = String(this.today.getDate()).padStart(2, '0');
          this.todaysMonth = String(this.today.getMonth() + 1).padStart(2, '0'); // January is 0!

          this.todaysYear = this.today.getFullYear();
          this.todaysHour = this.today.getHours();
          this.todaysMinute = this.today.getMinutes();
        }

        _createClass(GameDetailPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.gameService.getAllQuizes().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  quiz_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function (data) {
              _this.quizes = data;
              firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('/quiz').on('value', function () {});
              firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('/quiz').once('value', function () {});
            });
            this.gameService.getUserData().snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (changes) {
              return changes.map(function (c) {
                return Object.assign({
                  user_id: c.payload.key
                }, c.payload.val());
              });
            })).subscribe(function () {
              _this.userId = firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().currentUser.uid;
              console.log('USER ID CURRENT', _this.userId);

              _this.afDatabase.database.ref('users/' + _this.userId).once('value').then(function (userDetailsAsObject) {
                _this.totalPoints = userDetailsAsObject.val().total_points;
              })["catch"](function (err) {
                console.log('Error pulling /profile table inside functionName() inside componentName.component.ts');
                console.log(err);
              });
            });
            this.doDisabled = false;
            this.show = false;
            this.doDisabledSubmitButton = true;
          }
        }, {
          key: "scrollToBottom",
          value: function scrollToBottom() {
            this.content.scrollToBottom(300);
          }
        }, {
          key: "scrollToTop",
          value: function scrollToTop() {
            this.content.scrollToTop(300);
          }
        }, {
          key: "swipeNext",
          value: function swipeNext() {
            this.slide.slideNext();
            this.slide.lockSwipeToPrev(true);
          } // Get value of choice selected

        }, {
          key: "choiceSelected",
          value: function choiceSelected(event, question) {
            console.log('====== CHOICE SELECTED', event.detail.value);
            console.log('====== CHOICE DETAIL', event.detail);
            console.log('====== ANSWER', this.quizes);
            this.selectedChoice = event.detail.value;
            this.selectedQuestion = question;
            console.log('====== QUESTION', this.selectedQuestion);
          } // This to get index of current slides

        }, {
          key: "getIndexSlideChanged",
          value: function getIndexSlideChanged() {
            var _this2 = this;

            this.slide.getActiveIndex().then(function (index) {
              _this2.index = index + 1;
              console.log(_this2.index);
            });
          }
        }, {
          key: "getQuizResult",
          value: function getQuizResult() {
            console.log('SELECTED CHOICE', this.selectedChoice);
            console.log('QUIZ', this.quizes);

            for (var questionLength = 0; questionLength < this.quizes.length; questionLength++) {
              if (this.selectedChoice === this.quizes[questionLength].answer) {
                // Add score + 10 if selected choice is equal to answer
                this.score = this.score + 10;
                console.log('SCOREEE', this.score);
              }
            }
          }
        }, {
          key: "showAnswer",
          value: function showAnswer() {
            this.show = true;
          }
        }, {
          key: "hideAnswer",
          value: function hideAnswer() {
            this.show = false;
          }
        }, {
          key: "disabledChoices",
          value: function disabledChoices() {
            this.doDisabled = true;
          }
        }, {
          key: "enabledChoices",
          value: function enabledChoices() {
            this.doDisabled = false;
          }
        }, {
          key: "disabledSubmitButton",
          value: function disabledSubmitButton() {
            this.doDisabledSubmitButton = true;
          }
        }, {
          key: "hideSubmitButton",
          value: function hideSubmitButton() {
            this.doDisabledSubmitButton = false;
          }
        }, {
          key: "postScoreToFirebase",
          value: function postScoreToFirebase() {
            var _this3 = this;

            firebase__WEBPACK_IMPORTED_MODULE_8__["default"].auth().onAuthStateChanged(function (user) {
              if (user) {
                // User logged in already or has just logged in.
                _this3.user_id = user.uid;
                console.log('===USER ID===', _this3.user_id); // This for post quiz history to field quiz_history in firebase

                firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('users/' + _this3.user_id + '/quiz_history').push({
                  quiz_date: "".concat(_this3.todaysDay, "/").concat(_this3.todaysMonth, "/").concat(_this3.todaysYear, " ").concat(_this3.todaysHour, ":").concat(_this3.todaysMinute),
                  user_score: _this3.score,
                  user_point: _this3.score / 10
                }); // This for post score and point after played quiz to field points in firebase

                firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('users/' + _this3.user_id + '/points').set({
                  user_score: _this3.score,
                  user_point: _this3.score / 10
                }); // This for update total_points for user

                firebase__WEBPACK_IMPORTED_MODULE_8__["default"].database().ref('users/' + _this3.user_id).update({
                  total_points: _this3.totalPoints += _this3.score / 10
                });
              } else {// User not logged in or has just logged out.
              }
            });
          }
        }, {
          key: "presentLoading",
          value: function presentLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.loadingCtrl.create({
                        cssClass: 'my-custom-class',
                        spinner: 'dots',
                        message: 'Mempersiapkan hasil kuis...',
                        duration: 4000
                      });

                    case 2:
                      loading = _context.sent;
                      _context.next = 5;
                      return loading.present();

                    case 5:
                      _context.next = 7;
                      return loading.onDidDismiss().then(function () {
                        _this4.route.navigateByUrl('/home/results');

                        console.log('Loading dismissed!');
                      });

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertCtrl.create({
                        header: 'KELUAR KUIS',
                        message: 'Apakah kamu yakin ingin <br> mengakhiri kuis?',
                        buttons: [{
                          text: 'YA',
                          handler: function handler() {
                            return _this5.presentLoading().then(function () {
                              _this5.postScoreToFirebase();

                              _this5.route.navigateByUrl('/home/results');
                            });
                          }
                        }, {
                          text: 'TIDAK',
                          role: 'cancel'
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return GameDetailPage;
      }();

      GameDetailPage.ctorParameters = function () {
        return [{
          type: _game_service__WEBPACK_IMPORTED_MODULE_4__["GameService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_fire_database__WEBPACK_IMPORTED_MODULE_9__["AngularFireDatabase"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["LoadingController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      };

      GameDetailPage.propDecorators = {
        slide: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['quizSlider']
        }],
        content: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['content', {
            "static": false
          }]
        }]
      };
      GameDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-game-detail',
        template: _raw_loader_game_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_game_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], GameDetailPage);
      /***/
    },

    /***/
    "M5IV":
    /*!****************************************************************!*\
      !*** ./src/app/home/game-detail/game-detail-routing.module.ts ***!
      \****************************************************************/

    /*! exports provided: GameDetailPageRoutingModule */

    /***/
    function M5IV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPageRoutingModule", function () {
        return GameDetailPageRoutingModule;
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


      var _game_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./game-detail.page */
      "BIhc");

      var routes = [{
        path: '',
        component: _game_detail_page__WEBPACK_IMPORTED_MODULE_3__["GameDetailPage"]
      }];

      var GameDetailPageRoutingModule = function GameDetailPageRoutingModule() {
        _classCallCheck(this, GameDetailPageRoutingModule);
      };

      GameDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], GameDetailPageRoutingModule);
      /***/
    },

    /***/
    "dtrh":
    /*!********************************************************!*\
      !*** ./src/app/home/game-detail/game-detail.module.ts ***!
      \********************************************************/

    /*! exports provided: GameDetailPageModule */

    /***/
    function dtrh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GameDetailPageModule", function () {
        return GameDetailPageModule;
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


      var _game_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./game-detail-routing.module */
      "M5IV");
      /* harmony import */


      var _game_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./game-detail.page */
      "BIhc");

      var GameDetailPageModule = function GameDetailPageModule() {
        _classCallCheck(this, GameDetailPageModule);
      };

      GameDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _game_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["GameDetailPageRoutingModule"]],
        declarations: [_game_detail_page__WEBPACK_IMPORTED_MODULE_6__["GameDetailPage"]]
      })], GameDetailPageModule);
      /***/
    },

    /***/
    "uXb1":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/game-detail/game-detail.page.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function uXb1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content mode=\"ios\" #content>\r\n\r\n  <!-- Score and Question Description -->\r\n  <ion-grid class=\"ion-no-padding\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n      </ion-col>\r\n      <ion-col size=\"4.5\">\r\n        <div class=\"ion-text-center ion-padding text-score\">\r\n          <ion-label class=\"text-title\">SKOR: {{score}}</ion-label>\r\n        </div>\r\n      </ion-col>\r\n      <ion-col size=\"3.5\">\r\n        <ion-buttons class=\"ion-padding\">\r\n          <ion-button (click)=\"presentAlert()\"\r\n                      style=\"color: white;\">\r\n            <ion-icon name=\"exit-outline\" style=\"width: 100px;\"></ion-icon>\r\n          </ion-button>\r\n        </ion-buttons>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <!-- Each question will show by each slide -->\r\n    <ion-slides #quizSlider\r\n                (ionSlidesDidLoad)=\"getIndexSlideChanged()\"\r\n                (ionSlideWillChange)=\"\r\n                getIndexSlideChanged();\r\n                enabledChoices();\r\n                hideAnswer();\r\n                scrollToTop();\r\n                 disabledSubmitButton()\">\r\n    <ion-slide *ngFor=\"let quiz of quizes\">\r\n\r\n      <div class=\"ion-text-center\">\r\n        <ion-label class=\"text-title\">Pertanyaan {{index}}/10</ion-label>\r\n\r\n        <!-- Image and question -->\r\n        <ion-card>\r\n          <ion-card-header>\r\n           <img src=\"{{quiz.quiz_image}}\">\r\n          </ion-card-header>\r\n          <ion-text class=\"text-question\">\r\n            {{quiz.question}}\r\n          </ion-text>\r\n\r\n          <!-- Insert choices here -->\r\n          <ion-list>\r\n            <ion-radio-group\r\n                    name=\"quiz-batik\"\r\n                    (ionChange)=\"choiceSelected($event, quiz.question)\"\r\n                    required\r\n                    ngModel\r\n                    #quizCtrl = \"ngModel\">\r\n\r\n              <ion-card class=\"card-choices\" *ngIf=\"!show\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice1}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice1}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-correct\"\r\n                        *ngIf=\"show && quiz.choice1 === quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice1}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice1}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-false\"\r\n                        *ngIf=\"selectedChoice === quiz.choice1 && show && quiz.choice1 !== quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice1}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice1}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\"\r\n                        *ngIf=\"show && quiz.choice1 !== quiz.answer  && selectedChoice !== quiz.choice1\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice1}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice1}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\" *ngIf=\"!show\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice2}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice2}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-correct\"\r\n                        *ngIf=\"show && quiz.choice2 === quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice2}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice2}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-false\"\r\n                        *ngIf=\"selectedChoice === quiz.choice2 && show && quiz.choice2 !== quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice2}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice2}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\"\r\n                        *ngIf=\"show && quiz.choice2 !== quiz.answer && selectedChoice !== quiz.choice2\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice2}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice2}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\" *ngIf=\"!show\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice3}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice3}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-correct\"\r\n                        *ngIf=\"show && quiz.choice3 === quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice3}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice3}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-false\"\r\n                        *ngIf=\"selectedChoice === quiz.choice3 && show && quiz.choice3 !== quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice3}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice3}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\"\r\n                        *ngIf=\"show && quiz.choice3 !== quiz.answer && selectedChoice !== quiz.choice3\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice3}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice3}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\" *ngIf=\"!show\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice4}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice4}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-correct\"\r\n                        *ngIf=\"show && quiz.choice4 === quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice4}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice4}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices-false\"\r\n                        *ngIf=\"selectedChoice === quiz.choice4 && show && quiz.choice4 !== quiz.answer\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label style=\"color: white;\">{{quiz.choice4}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice4}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n              <ion-card class=\"card-choices\"\r\n                        *ngIf=\"show && quiz.choice4 !== quiz.answer && selectedChoice !== quiz.choice4\">\r\n                <ion-item lines=\"none\">\r\n                  <ion-label>{{quiz.choice4}}</ion-label>\r\n                  <ion-radio slot=\"start\"\r\n                             value=\"{{quiz.choice4}}\"\r\n                             disabled=\"{{doDisabled}}\"></ion-radio>\r\n                </ion-item>\r\n              </ion-card>\r\n\r\n            </ion-radio-group>\r\n          </ion-list>\r\n\r\n          <!--   Button to get score by getQuizResult() and show answer by showAnswer()  -->\r\n          <ion-button type=\"submit\"\r\n                      *ngIf=\"doDisabledSubmitButton\"\r\n                      (click)=\"getQuizResult(); disabledChoices(); showAnswer(); hideSubmitButton();\"\r\n                      [disabled]=\"!quizCtrl.valid\"\r\n                      disabled=\"{{!doDisabledSubmitButton}}\">KIRIM\r\n          </ion-button>\r\n\r\n            <br><br>\r\n        </ion-card>\r\n\r\n        <!--   Scroll to bottom to see answer description -->\r\n        <div class=\"next-button\">\r\n          <ion-buttons>\r\n            <ion-button *ngIf=\"selectedChoice === quiz.answer && show\"\r\n                        (click)=\"scrollToBottom()\"\r\n                        style=\"color: white\">\r\n              <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n\r\n          <ion-buttons>\r\n            <ion-button *ngIf=\"selectedChoice !== quiz.answer && show\"\r\n                        (click)=\"scrollToBottom()\"\r\n                        style=\"color: white\">\r\n              <ion-icon name=\"arrow-down-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n\r\n        <!--   Answer description -->\r\n        <!--   Correct answer -->\r\n        <ion-card>\r\n          <ion-item *ngIf=\"selectedChoice === quiz.answer && show\">\r\n            <div class=\"ion-nowrap\">\r\n\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: #283618;\"> JAWABAN KAMU BENAR! </ion-card-title>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                {{quiz.answer_description}}\r\n              </ion-card-content>\r\n            </div>\r\n\r\n          </ion-item>\r\n\r\n          <!--   False answer  -->\r\n          <ion-item *ngIf=\"selectedChoice !== quiz.answer && show\">\r\n            <div class=\"ion-nowrap\">\r\n              <ion-card-header>\r\n                <ion-card-title style=\"color: #bf382e;\"> JAWABAN KAMU SALAH </ion-card-title>\r\n                <ion-card-subtitle>JAWABAN: {{quiz.answer}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n\r\n              <ion-card-content>\r\n                {{quiz.answer_description}}\r\n              </ion-card-content>\r\n            </div>\r\n          </ion-item>\r\n        </ion-card>\r\n\r\n        <!--  Button to post score value into database  -->\r\n        <div class=\"submit-button\" *ngIf=\"show\">\r\n          <ion-button type=\"submit\"\r\n                      (click)=\"postScoreToFirebase();presentLoading()\"\r\n                      *ngIf=\"index === quizes.length\"\r\n                      shape=\"round\"\r\n                      style=\"height: 40px;width: 180px;font-size: 17px;\">LIHAT HASIL!\r\n          </ion-button>\r\n        </div>\r\n\r\n\r\n        <div class=\"next-button\" *ngIf=\"selectedChoice === quiz.answer && show\">\r\n          <ion-buttons>\r\n            <ion-button type=\"submit\"\r\n                        shape=\"round\"\r\n                        *ngIf=\"index !== quizes.length\"\r\n                        (click)=\"swipeNext()\"\r\n                        [disabled]=\"!quizCtrl.valid\"\r\n                        style=\"height: 30px;color: white;\"> Berikutnya\r\n              <ion-icon  class=\"ion-padding-start\" name=\"arrow-forward-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </div> <br>\r\n\r\n        <div class=\"next-button\" *ngIf=\"selectedChoice !== quiz.answer && show\">\r\n          <ion-buttons>\r\n            <ion-button type=\"submit\"\r\n                        shape=\"round\"\r\n                        *ngIf=\"index !== quizes.length\"\r\n                        (click)=\"swipeNext()\"\r\n                        [disabled]=\"!quizCtrl.valid\"\r\n                        style=\"height: 30px;color: white;\"> Berikutnya\r\n              <ion-icon  class=\"ion-padding-start\" name=\"arrow-forward-outline\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </div> <br>\r\n      </div>\r\n    </ion-slide>\r\n    </ion-slides>\r\n  </ion-grid>\r\n</ion-content>\r\n";
      /***/
    },

    /***/
    "yGL/":
    /*!********************************************************!*\
      !*** ./src/app/home/game-detail/game-detail.page.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function yGL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --ion-background-color:#283618;\n}\n\nion-card {\n  --ion-background-color: white;\n}\n\n@media only screen and (max-width: 414px) {\n  ion-card {\n    width: 380px;\n  }\n\n  .card-choices {\n    width: 350px;\n  }\n\n  .card-choices-correct {\n    width: 350px;\n  }\n\n  .card-choices-false {\n    width: 350px;\n  }\n}\n\n@media only screen and (max-width: 375px) {\n  ion-card {\n    width: 330px;\n  }\n\n  .card-choices {\n    width: 300px;\n  }\n\n  .card-choices-correct {\n    width: 300px;\n  }\n\n  .card-choices-false {\n    width: 300px;\n  }\n}\n\n@media only screen and (max-width: 320px) {\n  ion-card {\n    width: 290px;\n  }\n\n  .card-choices {\n    width: 260px;\n  }\n\n  .card-choices-correct {\n    width: 260px;\n  }\n\n  .card-choices-false {\n    width: 260px;\n  }\n}\n\nion-radio {\n  --color-checked: green;\n}\n\nion-item:active {\n  background-color: green;\n  border-color: green;\n}\n\n.text-title {\n  color: white;\n}\n\n.text-score {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.text-question {\n  font-size: 18px;\n  font-weight: bold;\n  color: black;\n}\n\n.card-choices {\n  height: 45px;\n  border-radius: 20px;\n}\n\n.card-choices-correct {\n  height: 45px;\n  border-radius: 20px;\n  --ion-background-color: #283618;\n}\n\n.card-choices-correct ion-radio {\n  --color-checked: #283618;\n}\n\n.card-choices-false {\n  height: 45px;\n  border-radius: 20px;\n  --ion-background-color: #bf382e;\n}\n\n.card-choices-false ion-radio {\n  --color-checked: #bf382e;\n}\n\n.next-button {\n  display: flex;\n  justify-content: center;\n}\n\n.submit-button {\n  display: flex;\n  justify-content: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxnYW1lLWRldGFpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUVBO0VBQ0UsNkJBQUE7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsWUFBQTtFQUFGOztFQUVBO0lBQ0UsWUFBQTtFQUNGOztFQUVBO0lBQ0UsWUFBQTtFQUNGOztFQUVBO0lBQ0UsWUFBQTtFQUNGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLFlBQUE7RUFERjs7RUFJQTtJQUNFLFlBQUE7RUFERjs7RUFJQTtJQUNFLFlBQUE7RUFERjs7RUFJQTtJQUNFLFlBQUE7RUFERjtBQUNGOztBQUtBO0VBQ0U7SUFDRSxZQUFBO0VBSEY7O0VBTUE7SUFDRSxZQUFBO0VBSEY7O0VBTUE7SUFDRSxZQUFBO0VBSEY7O0VBTUE7SUFDRSxZQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLHNCQUFBO0FBSkY7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBUUE7RUFDRSxZQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFMRjs7QUFRQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQUxGOztBQVFBO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFMRjs7QUFNRTtFQUNFLHdCQUFBO0FBSko7O0FBUUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUxGOztBQU1FO0VBQ0Usd0JBQUE7QUFKSjs7QUFRQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQUxGOztBQVFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FBTEYiLCJmaWxlIjoiZ2FtZS1kZXRhaWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IzI4MzYxODtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4vLyBRdWVzdGlvbnMgY2FyZCBmb3IgaXBob25lIDYvNy84IHBsdXMgc2NyZWVuIHJlc29sdXRpb25cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTRweCkge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAzODBweDtcclxuICB9XHJcbiAgLmNhcmQtY2hvaWNlcyB7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jaG9pY2VzLWNvcnJlY3R7XHJcbiAgICB3aWR0aDogMzUwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jaG9pY2VzLWZhbHNle1xyXG4gICAgd2lkdGg6IDM1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuLy8gUXVlc3Rpb25zIGNhcmQgZm9yIGlwaG9uZSA2LzcvOC9YIHNjcmVlbiByZXNvbHV0aW9uXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICBpb24tY2FyZCB7XHJcbiAgICB3aWR0aDogMzMwcHg7XHJcbiAgfVxyXG5cclxuICAuY2FyZC1jaG9pY2VzIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNob2ljZXMtY29ycmVjdHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNob2ljZXMtZmFsc2V7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBRdWVzdGlvbnMgY2FyZCBmb3IgaXBob25lIDUvU0Ugc2NyZWVuIHJlc29sdXRpb25cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gIGlvbi1jYXJkIHtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICB9XHJcblxyXG4gIC5jYXJkLWNob2ljZXMge1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY2hvaWNlcy1jb3JyZWN0e1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY2hvaWNlcy1mYWxzZXtcclxuICAgIHdpZHRoOiAyNjBweDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi1yYWRpbyB7XHJcbiAgLS1jb2xvci1jaGVja2VkOiBncmVlbjtcclxufVxyXG5cclxuaW9uLWl0ZW06YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICBib3JkZXItY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG5cclxuLnRleHQtdGl0bGUge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRleHQtc2NvcmUge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHQtcXVlc3Rpb24ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5jYXJkLWNob2ljZXMge1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1jaG9pY2VzLWNvcnJlY3R7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzI4MzYxODtcclxuICBpb24tcmFkaW8ge1xyXG4gICAgLS1jb2xvci1jaGVja2VkOiAjMjgzNjE4O1xyXG4gIH1cclxufVxyXG5cclxuLmNhcmQtY2hvaWNlcy1mYWxzZXtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjYmYzODJlO1xyXG4gIGlvbi1yYWRpbyB7XHJcbiAgICAtLWNvbG9yLWNoZWNrZWQ6ICNiZjM4MmU7XHJcbiAgfVxyXG59XHJcblxyXG4ubmV4dC1idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4iXX0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=game-detail-game-detail-module-es5.js.map