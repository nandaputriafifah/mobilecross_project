(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["register-register-module"],{

/***/ "5d3w":
/*!**********************************************************!*\
  !*** ./src/app/home/register/register-routing.module.ts ***!
  \**********************************************************/
/*! exports provided: RegisterPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageRoutingModule", function() { return RegisterPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register.page */ "eqxg");




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_3__["RegisterPage"]
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ "GqFN":
/*!**************************************************!*\
  !*** ./src/app/home/register/register.page.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nh1 {\n  font-size: 27px;\n  font-weight: 700;\n}\n\nspan {\n  font-size: 17px;\n}\n\nimg {\n  size: 10px;\n  display: flex;\n  align-content: flex-end;\n}\n\n.input-field {\n  height: 45px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyZWdpc3Rlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBREY7O0FBSUE7RUFDRSxlQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFERiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHN0cm9uZyB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG59XHJcblxyXG4jY29udGFpbmVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuXHJcbiAgY29sb3I6ICM4YzhjOGM7XHJcblxyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuI2NvbnRhaW5lciBhIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXNpemU6IDI3cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG59XHJcblxyXG5pbWcge1xyXG4gIHNpemU6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmlucHV0LWZpZWxke1xyXG4gIGhlaWdodDogNDVweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "QuKQ":
/*!**************************************************!*\
  !*** ./src/app/home/register/register.module.ts ***!
  \**************************************************/
/*! exports provided: RegisterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-routing.module */ "5d3w");
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./register.page */ "eqxg");







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _register_routing_module__WEBPACK_IMPORTED_MODULE_5__["RegisterPageRoutingModule"]
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_6__["RegisterPage"]]
    })
], RegisterPageModule);



/***/ }),

/***/ "Ua/J":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/register/register.page.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content mode=\"ios\">\r\n  <ion-buttons mode=\"md\">\r\n    <ion-back-button defaultHref=\"/home/tabs/profile\"></ion-back-button>\r\n  </ion-buttons>\r\n\r\n  <!--  Title and Subtitle  -->\r\n  <div class=\"ion-padding-start\">\r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-col>\r\n          <h1>REGISTRASI <br>AKUN</h1>\r\n        </ion-col>\r\n        <img class=\"ion-padding\" src=\"assets/images/logo.png\">\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n\r\n  <form #form=\"ngForm\">\r\n\r\n    <ion-label position=\"fixed\" class=\"ion-padding-start\">Nama</ion-label>\r\n    <ion-card class=\"input-field\">\r\n      <ion-input class=\"ion-padding-start\"\r\n                 style=\"font-size: 18px;\"\r\n                 type=\"text\"\r\n                 name=\"names\"\r\n                 ngModel\r\n                 #name = \"ngModel\"\r\n                 required></ion-input>\r\n    </ion-card>\r\n    <ion-item lines=\"none\" *ngIf=\"!name.valid && name.touched\">\r\n      <ion-note color=\"danger\">Nama tidak boleh kosong.</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-label position=\"fixed\" class=\"ion-padding-start\">Email</ion-label>\r\n    <ion-card class=\"input-field\">\r\n      <ion-input class=\"ion-padding-start\"\r\n                 style=\"font-size: 18px;\"\r\n                 type=\"email\"\r\n                 name=\"emails\"\r\n                 ngModel\r\n                 #email = \"ngModel\"\r\n                 required></ion-input>\r\n    </ion-card>\r\n    <ion-item lines=\"none\" *ngIf=\"!email.valid && email.touched\">\r\n      <ion-note color=\"danger\">Email tidak boleh kosong.</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-label position=\"fixed\" class=\"ion-padding-start\">Username</ion-label>\r\n    <ion-card class=\"input-field\">\r\n      <ion-input class=\"ion-padding-start\"\r\n                 style=\"font-size: 18px;\"\r\n                 type=\"text\"\r\n                 name=\"usernames\"\r\n                 ngModel\r\n                 #username = \"ngModel\"\r\n                 required></ion-input>\r\n    </ion-card>\r\n    <ion-item lines=\"none\" *ngIf=\"!username.valid && username.touched\">\r\n      <ion-note color=\"danger\">Username tidak boleh kosong.</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-label position=\"fixed\" class=\"ion-padding-start\">Kata Sandi</ion-label>\r\n    <ion-card class=\"input-field\">\r\n      <ion-input class=\"ion-padding-start\"\r\n                 style=\"font-size: 18px;\"\r\n                 type=\"password\"\r\n                 name=\"password\"\r\n                 ngModel\r\n                 #password = \"ngModel\"\r\n                 required></ion-input>\r\n    </ion-card>\r\n    <ion-item lines=\"none\" *ngIf=\"!password.valid && password.touched\">\r\n      <ion-note color=\"danger\">Password tidak boleh kosong.</ion-note>\r\n    </ion-item>\r\n\r\n    <ion-row>\r\n      <ion-col>\r\n        <ion-button type=\"submit\"\r\n                    color=\"secondary\"\r\n                    shape=\"round\"\r\n                    [disabled]=\"!form.valid\"\r\n                    (click)=\"presentLoading(email, password, name, username)\"\r\n                    expand=\"block\">Register</ion-button>\r\n      </ion-col>\r\n    </ion-row>\r\n\r\n    <br>\r\n    <ion-row class=\"ion-text-center\">\r\n      <ion-col>\r\n        <ion-text>Sudah punya akun? </ion-text>\r\n        <a [href]=\"['/home/login']\">Masuk akun</a>\r\n      </ion-col>\r\n    </ion-row>\r\n    <br><br>\r\n  </form>\r\n</ion-content>\r\n");

/***/ }),

/***/ "eqxg":
/*!************************************************!*\
  !*** ./src/app/home/register/register.page.ts ***!
  \************************************************/
/*! exports provided: RegisterPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPage", function() { return RegisterPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.page.html */ "Ua/J");
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.page.scss */ "GqFN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "UxNV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");







let RegisterPage = class RegisterPage {
    constructor(authService, router, toastController, loadingCtrl) {
        this.authService = authService;
        this.router = router;
        this.toastController = toastController;
        this.loadingCtrl = loadingCtrl;
    }
    ngOnInit() {
    }
    signUp(email, password, name, username) {
        this.authService.RegisterUser(email.value, password.value, name.value, username.value)
            .then((res) => {
            // Do send verification email
            this.authService.SendVerificationMail();
            this.router.navigate(['/home/verify-email']);
            this.presentToast();
        }).catch((error) => {
            window.alert(error.message);
        });
    }
    presentToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: 'Link verifikasi sukses dikirim!',
                color: 'secondary',
                duration: 4000
            });
            toast.present();
        });
    }
    presentLoading(email, password, name, username) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                cssClass: 'my-custom-class',
                spinner: 'dots',
                duration: 4000
            });
            yield loading.present();
            yield loading.onDidDismiss().then(() => {
                this.signUp(email, password, name, username);
            });
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["LoadingController"] }
];
RegisterPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterPage);



/***/ })

}]);
//# sourceMappingURL=register-register-module-es2015.js.map