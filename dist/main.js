(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Constant.ts":
/*!*****************************!*\
  !*** ./src/app/Constant.ts ***!
  \*****************************/
/*! exports provided: Constant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constant", function() { return Constant; });
var Constant = /** @class */ (function () {
    function Constant() {
    }
    return Constant;
}());



/***/ }),

/***/ "./src/app/alertmanagement/alertmanagement.component.html":
/*!****************************************************************!*\
  !*** ./src/app/alertmanagement/alertmanagement.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  alertmanagement works!\n</p>\n"

/***/ }),

/***/ "./src/app/alertmanagement/alertmanagement.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/alertmanagement/alertmanagement.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/alertmanagement/alertmanagement.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/alertmanagement/alertmanagement.component.ts ***!
  \**************************************************************/
/*! exports provided: AlertmanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertmanagementComponent", function() { return AlertmanagementComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlertmanagementComponent = /** @class */ (function () {
    function AlertmanagementComponent() {
    }
    AlertmanagementComponent.prototype.ngOnInit = function () {
    };
    AlertmanagementComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alertmanagement',
            template: __webpack_require__(/*! ./alertmanagement.component.html */ "./src/app/alertmanagement/alertmanagement.component.html"),
            styles: [__webpack_require__(/*! ./alertmanagement.component.scss */ "./src/app/alertmanagement/alertmanagement.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertmanagementComponent);
    return AlertmanagementComponent;
}());



/***/ }),

/***/ "./src/app/api-integ.service.ts":
/*!**************************************!*\
  !*** ./src/app/api-integ.service.ts ***!
  \**************************************/
/*! exports provided: ApiIntegService, CustomInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiIntegService", function() { return ApiIntegService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomInterceptor", function() { return CustomInterceptor; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Constant */ "./src/app/Constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiIntegService = /** @class */ (function () {
    function ApiIntegService(http, _configuration) {
        this.http = http;
        this._configuration = _configuration;
    }
    ApiIntegService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"], _Constant__WEBPACK_IMPORTED_MODULE_2__["Constant"]])
    ], ApiIntegService);
    return ApiIntegService;
}());

var CustomInterceptor = /** @class */ (function () {
    function CustomInterceptor() {
    }
    CustomInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], CustomInterceptor);
    return CustomInterceptor;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        // When this field is set true, it removes class from root component. That causes pre loader to be removed.
        this.loading = false;
        // Send goggle analytics info about page change.
        // If you do not need google analytics in your project, you can delete this part
        /* this.router.events.subscribe(event => {
          if (event instanceof NavigationEnd) {
            ga('set', 'page', event.urlAfterRedirects);
            ga('send', 'pageview');
          }
        });*/
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.loading'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "loading", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: createTranslateLoader, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslateLoader", function() { return createTranslateLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_multimenu_multimenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/multimenu/multimenu.component */ "./src/app/components/multimenu/multimenu.component.ts");
/* harmony import */ var _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./routes/app-routes.module */ "./src/app/routes/app-routes.module.ts");
/* harmony import */ var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/dashboard-page/dashboard-page.component */ "./src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _resize_resize_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./resize/resize.service */ "./src/app/resize/resize.service.ts");
/* harmony import */ var _components_echart_component_echart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/echart-component/echart.component */ "./src/app/components/echart-component/echart.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _api_integ_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./api-integ.service */ "./src/app/api-integ.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _pages_forgotpswd_forgotpswd_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/forgotpswd/forgotpswd.component */ "./src/app/pages/forgotpswd/forgotpswd.component.ts");
/* harmony import */ var _pages_changepasword_changepasword_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/changepasword/changepasword.component */ "./src/app/pages/changepasword/changepasword.component.ts");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _alertmanagement_alertmanagement_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./alertmanagement/alertmanagement.component */ "./src/app/alertmanagement/alertmanagement.component.ts");
/* harmony import */ var _complaints_newcomplaints_newcomplaints_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./complaints/newcomplaints/newcomplaints.component */ "./src/app/complaints/newcomplaints/newcomplaints.component.ts");
/* harmony import */ var _complaints_viewcomplaints_viewcomplaints_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./complaints/viewcomplaints/viewcomplaints.component */ "./src/app/complaints/viewcomplaints/viewcomplaints.component.ts");
/* harmony import */ var _complaints_editcomplaints_editcomplaints_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./complaints/editcomplaints/editcomplaints.component */ "./src/app/complaints/editcomplaints/editcomplaints.component.ts");
/* harmony import */ var _complaints_listcomplaints_listcomplaints_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./complaints/listcomplaints/listcomplaints.component */ "./src/app/complaints/listcomplaints/listcomplaints.component.ts");
/* harmony import */ var _complaints_closedcomplaints_closedcomplaints_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./complaints/closedcomplaints/closedcomplaints.component */ "./src/app/complaints/closedcomplaints/closedcomplaints.component.ts");
/* harmony import */ var _feedback_newfeedback_newfeedback_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./feedback/newfeedback/newfeedback.component */ "./src/app/feedback/newfeedback/newfeedback.component.ts");
/* harmony import */ var _feedback_viewfeedback_viewfeedback_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./feedback/viewfeedback/viewfeedback.component */ "./src/app/feedback/viewfeedback/viewfeedback.component.ts");
/* harmony import */ var _feedback_editfeedback_editfeedback_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./feedback/editfeedback/editfeedback.component */ "./src/app/feedback/editfeedback/editfeedback.component.ts");
/* harmony import */ var _feedback_listfeedback_listfeedback_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./feedback/listfeedback/listfeedback.component */ "./src/app/feedback/listfeedback/listfeedback.component.ts");
/* harmony import */ var _feedback_reportfeedback_reportfeedback_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./feedback/reportfeedback/reportfeedback.component */ "./src/app/feedback/reportfeedback/reportfeedback.component.ts");
/* harmony import */ var _complaints_completecomplaints_completecomplaints_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./complaints/completecomplaints/completecomplaints.component */ "./src/app/complaints/completecomplaints/completecomplaints.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _complaints_completeview_completeview_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./complaints/completeview/completeview.component */ "./src/app/complaints/completeview/completeview.component.ts");
/* harmony import */ var _complaints_closedview_closedview_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./complaints/closedview/closedview.component */ "./src/app/complaints/closedview/closedview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











































var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
// AoT requires an exported function for factories for translate module
function createTranslateLoader(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_19__["TranslateHttpLoader"](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_multimenu_multimenu_component__WEBPACK_IMPORTED_MODULE_3__["MultimenuComponent"],
                _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_5__["DashboardPageComponent"],
                _components_echart_component_echart_component__WEBPACK_IMPORTED_MODULE_11__["EchartComponent"],
                _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_12__["LoginPageComponent"],
                _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_13__["MainPageComponent"],
                _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_14__["RegisterPageComponent"],
                _pages_forgotpswd_forgotpswd_component__WEBPACK_IMPORTED_MODULE_24__["ForgotpswdComponent"],
                _pages_changepasword_changepasword_component__WEBPACK_IMPORTED_MODULE_25__["ChangepaswordComponent"],
                _alertmanagement_alertmanagement_component__WEBPACK_IMPORTED_MODULE_28__["AlertmanagementComponent"],
                _complaints_newcomplaints_newcomplaints_component__WEBPACK_IMPORTED_MODULE_29__["NewcomplaintsComponent"],
                _complaints_viewcomplaints_viewcomplaints_component__WEBPACK_IMPORTED_MODULE_30__["ViewcomplaintsComponent"],
                _complaints_editcomplaints_editcomplaints_component__WEBPACK_IMPORTED_MODULE_31__["EditcomplaintsComponent"],
                _complaints_listcomplaints_listcomplaints_component__WEBPACK_IMPORTED_MODULE_32__["ListcomplaintsComponent"],
                _complaints_closedcomplaints_closedcomplaints_component__WEBPACK_IMPORTED_MODULE_33__["ClosedcomplaintsComponent"],
                _feedback_newfeedback_newfeedback_component__WEBPACK_IMPORTED_MODULE_34__["NewfeedbackComponent"],
                _feedback_viewfeedback_viewfeedback_component__WEBPACK_IMPORTED_MODULE_35__["ViewfeedbackComponent"],
                _feedback_editfeedback_editfeedback_component__WEBPACK_IMPORTED_MODULE_36__["EditfeedbackComponent"],
                _feedback_listfeedback_listfeedback_component__WEBPACK_IMPORTED_MODULE_37__["ListfeedbackComponent"],
                _feedback_reportfeedback_reportfeedback_component__WEBPACK_IMPORTED_MODULE_38__["ReportfeedbackComponent"],
                _complaints_completecomplaints_completecomplaints_component__WEBPACK_IMPORTED_MODULE_39__["CompletecomplaintsComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_40__["TestComponent"],
                _complaints_completeview_completeview_component__WEBPACK_IMPORTED_MODULE_41__["CompleteviewComponent"],
                _complaints_closedview_closedview_component__WEBPACK_IMPORTED_MODULE_42__["ClosedviewComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                _routes_app_routes_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutesModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_9__["NgbButtonsModule"],
                ngx_gallery__WEBPACK_IMPORTED_MODULE_15__["NgxGalleryModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_17__["TextMaskModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_23__["HttpModule"],
                angular_webstorage_service__WEBPACK_IMPORTED_MODULE_26__["StorageServiceModule"],
                // Insert your google maps api key, if you do not need google map in your project, you can remove this import
                _agm_core__WEBPACK_IMPORTED_MODULE_16__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_20__["TranslateLoader"],
                        useFactory: (createTranslateLoader),
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClient"]]
                    }
                }),
            ],
            providers: [
                _api_integ_service__WEBPACK_IMPORTED_MODULE_22__["ApiIntegService"],
                _resize_resize_service__WEBPACK_IMPORTED_MODULE_10__["ResizeService"],
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_27__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_27__["HashLocationStrategy"] },
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/complaints/closedcomplaints/closedcomplaints.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/complaints/closedcomplaints/closedcomplaints.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # BOOTSNIP INFO -->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div _ngcontent-c4=\"\" class=\"header\">\n          <div _ngcontent-c4=\"\" class=\"row\">\n            <div _ngcontent-c4=\"\" class=\"col-12 col-md-6 mb-3\">\n              <div _ngcontent-c4=\"\" class=\"col-md-8\">\n                <h3 _ngcontent-c4=\"\" class=\"adsc\">\n                  <i _ngcontent-c4=\"\" class=\"fa fa-university\"></i> &nbsp;Open Complaint</h3>\n                </div>\n              </div>\n              <div _ngcontent-c4=\"\" class=\"col-md-6\">\n                  <button type=\"button\" class=\"btn btn-info btn-lg pull-right\" style=\"color: #fff;\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal1\" >Add FAQ</button>\n  \n  \n              </div>\n            </div>\n           \n          </div>\n          <div class=\" butn col-md-12 pull-left\">\n            <div class=\"notifications1\">\n                      \n                <span class=\"num\">{{All}}</span>\n               \n            </div>\n          <button class=\"input1\" (click) = \"addapi1()\" >Open</button>\n          <div class=\"notifications2\">\n              \n                <span class=\"num\">{{Open}}</span>\n               \n            </div>\n          <button class=\"input1\" (click) = \"addapi2()\">Complete</button>\n           \n          <div class=\"notifications3\">\n              \n                <span class=\"num\">{{Inprogree}}</span>\n               \n            </div>\n          <button class=\"input2\" (click) = \"addapi3()\" >Closed</button>\n                 </div>\n          <div class=\"col\">\n      \n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"tabl\" >\n                      <table class=\"table table-bordered\" style=\"border-collapse:collapse;\">\n                          <thead>\n                              <tr>\n                                  <th>SL.NO</th>\n                                  <th>Complaint ID</th>\n                                  <th>Complaint From</th>\n                                  <th>Poster ID</th>\n                                  <th>Complaint Type</th>\n                                  <th>Title</th>\n                                  <th>Description</th>\n                                  <th>Posted On</th>\n                                  <th>Status</th>\n                                  <th>View</th>\n                               \n                                 \n                              </tr>\n                          </thead>\n                          <tbody>\n                                <ng-container  *ngFor=\"let data of datas ;  let i = index\">\n                                        <tr>\n                                            <td>{{i+1}}</td> \n                                            <td>{{data.complaint_id}}</td>\n                                            <td>{{data.complaint_from}}</td>\n                                            <td id=\"l1\">{{data.poster_id}}</td>\n                                            <td id=\"a1\">{{data.complaint_type}}</td>\n                                            <td id=\"pc1\">{{data.title}}</td>\n                                            <td id=\"pc1\">{{data.description}}</td>\n                                            <td id=\"pc1\">{{data.posted_on}}</td>\n                                            <td id=\"pc1\">{{data.status}}</td>\n                                            <td><button _ngcontent-c6=\"\" class=\"accordion-toggle  btn mat-button-wrapper btn-sm\"  style=\"background: transparent;\" (click)=\"open($event,data)\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                      </tr>\n                                      </ng-container>      \n                          </tbody>\n                      </table>\n                      <div *ngIf=\"loading\" ><div class=\"loader text-center\"></div></div>     \n                      <div class=\"card-footer p-0\">\n                      <ngb-pagination   [collectionSize]=\"collsize\" [(page)]=\"advancedPage\" (pageChange)=\"newsync()\" [boundaryLinks]=\"true\" ></ngb-pagination>\n                      </div>     \n                </div>\n                </div>\n              </div>\n              </div>\n          \n         \n    </div>\n  </div>\n  <!-- END # BOOTSNIP INFO -->\n  \n  \n  \n  <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       \n                \n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>Complaint Form</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                    <select class=\"form-control\"  name=\"complaint_type\" value=\"\" [(ngModel)]=\"addissue.complaint_type\"  #employee_type  id=\"exampleFormControlSelect1\">\n                                      <option>Thieft</option>\n                                      <option>Fire</option>\n                                      <option>Accident</option>\n                                      <option>Molestaion</option>\n                                      <option>Murder</option>\n                                      <option>Death</option>\n                                      <option>Mob</option> \n                                      <option>Assualt</option>\n                                      <option>Departmental</option>\n                                      <option>Help</option>\n                                    </select>                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" [(ngModel)]=\"addissue.title\"  placeholder=\"Complaint Title\" value=\"\" #title>                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"addissue.description\" name=\"description\"  placeholder=\"Complaint Description\" value=\"\" #description></textarea>\n                                    </div>\n  \n                                    \n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\"  [(ngModel)]=\"addissue.idtype\" name=\"title\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"addcomplaint()\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n  \n  <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>View Complaint</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Type\"  #complaint_ids disabled>                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Title\" #title disabled>                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\"  placeholder=\"Complaint Description\" #description disabled></textarea>\n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Posted By</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Posted By\"  value = \"\" #take_by disabled>\n                                    </div>\n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"assign2(complaint_ids.value,title.value,description.value,take_by.value)\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n    <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>Edit Complaint</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Type\"  #complaint_ids >                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Title\" #title >                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\"  placeholder=\"Complaint Description\" #description ></textarea>\n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Posted By</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Posted By\"  value = \"\" #take_by >\n                                    </div>\n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"assign2(complaint_ids.value,title.value,description.value,take_by.value)\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/complaints/closedcomplaints/closedcomplaints.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/complaints/closedcomplaints/closedcomplaints.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-modal .modal-dialog {\n  width: 600px;\n  margin-left: 40%; }\n\n.btn-primary {\n  background-color: #13477e !important;\n  border-radius: 100px; }\n\n#login-modal input[type=text], input[type=password] {\n  margin-top: 10px; }\n\n#div-login-msg,\n#div-lost-msg,\n#div-register-msg {\n  border: 1px solid #dadfe1;\n  height: 30px;\n  line-height: 28px;\n  transition: all ease-in-out 500ms; }\n\n#div-login-msg.success,\n#div-lost-msg.success,\n#div-register-msg.success {\n  border: 1px solid #68c3a3;\n  background-color: #c8f7c5; }\n\n#div-login-msg.error,\n#div-lost-msg.error,\n#div-register-msg.error {\n  border: 1px solid #eb575b;\n  background-color: #ffcad1; }\n\n#icon-login-msg,\n#icon-lost-msg,\n#icon-register-msg {\n  width: 30px;\n  float: left;\n  line-height: 28px;\n  text-align: center;\n  background-color: #dadfe1;\n  margin-right: 5px;\n  transition: all ease-in-out 500ms; }\n\n#icon-login-msg.success,\n#icon-lost-msg.success,\n#icon-register-msg.success {\n  background-color: #68c3a3 !important; }\n\n#icon-login-msg.error,\n#icon-lost-msg.error,\n#icon-register-msg.error {\n  background-color: #eb575b !important; }\n\n#img_logo {\n  max-height: 100px;\n  max-width: 100px; }\n\n/* #########################################\n   #    override the bootstrap configs     #\n   ######################################### */\n\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .8; }\n\n.modal-content {\n  background-color: #ececec;\n  border: 1px solid #bdc3c7;\n  border-radius: 0px;\n  outline: 0; }\n\n.modal-header {\n  min-height: 16.43px;\n  padding: 15px 15px 15px 15px;\n  border-bottom: 0px; }\n\n.modal-body {\n  position: relative;\n  padding: 5px 15px 5px 15px; }\n\n.modal-footer {\n  padding: 15px 15px 15px 15px;\n  text-align: left;\n  border-top: 0px; }\n\n.checkbox {\n  margin-bottom: 0px; }\n\n.btn {\n  border-radius: 0px; }\n\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  border-radius: 0px; }\n\n.btn-link {\n  padding: 5px 10px 0px 0px;\n  color: #95a5a6; }\n\n.btn-link:hover, .btn-link:focus {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.glyphicon {\n  top: 0px; }\n\n.btn-primary[_ngcontent-c4] {\n  background-color: transparent !important; }\n\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #ddd; }\n\n.btn[_ngcontent-c4] {\n  border-radius: 0px;\n  color: #1d4b7c; }\n\n.btn-primary:hover {\n  color: #fff;\n  border-color: #fff; }\n\n.btn:hover {\n  box-shadow: 0px 4px 5px -2px rgba(255, 255, 255, 0), 0px 7px 10px 1px white, 0px 2px 16px 1px rgba(255, 255, 255, 0.12); }\n\n.btn:hover, .btn:focus, .btn.focus {\n  color: #1d4b7c;\n  text-decoration: none; }\n\n.add {\n  background-color: #13477e !important;\n  color: white;\n  border-radius: 100px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.form-heading {\n  color: #fff;\n  font-size: 23px; }\n\n.panel h2 {\n  color: #444444;\n  font-size: 18px;\n  margin: 0 0 8px 0; }\n\n.panel p {\n  color: #777777;\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 24px; }\n\n.login-form .form-control {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px; }\n\n.main-div {\n  background: #ffffff none repeat scroll 0 0;\n  border-radius: 2px;\n  margin: 10px auto 30px;\n  padding: 10px 10px 10px 10px; }\n\n.login-form .form-group {\n  margin-bottom: 10px; }\n\n.login-form {\n  text-align: center; }\n\n.forgot a {\n  color: #777777;\n  font-size: 14px;\n  text-decoration: underline; }\n\n.login-form .btn.btn-primary {\n  background: #f0ad4e none repeat scroll 0 0;\n  border-color: #f0ad4e;\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0; }\n\n.forgot {\n  text-align: left;\n  margin-bottom: 30px; }\n\n.botto-text {\n  color: #ffffff;\n  font-size: 14px;\n  margin: auto; }\n\n.login-form .btn.btn-primary.reset {\n  background: #ff9900 none repeat scroll 0 0; }\n\n.back {\n  text-align: left;\n  margin-top: 10px; }\n\n.back a {\n  color: #444444;\n  font-size: 13px;\n  text-decoration: none; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  text-align: right;\n  float: left; }\n\n.btn-lg[_ngcontent-c4], .btn-group-lg[_ngcontent-c4] > .btn[_ngcontent-c4] {\n  border-radius: 0px;\n  padding: 8px 10px 7px 13px;\n  margin-top: -3px;\n  border-radius: 100px;\n  color: #fff; }\n\n.btn:focus, .btn:active, button:focus, button:active {\n  outline: none !important;\n  box-shadow: none !important; }\n\n#image-gallery .modal-footer {\n  display: block; }\n\n.ngx-gallery-icon {\n  color: rgba(255, 255, 255, 0.59) !important; }\n\n.thumb {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.login-form[_ngcontent-c4] .form-control[_ngcontent-c4] {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: initial; }\n\nul.pagination {\n  display: flex;\n  list-style: none;\n  border-radius: .125rem;\n  padding: 10px;\n  margin: 0 10px 10px 40% !important;\n  width: 100%; }\n\n.input1 {\n  margin: 0px 0px 0px 5%;\n  width: 20%;\n  border-radius: 0px !important;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n  /* float: right; */\n  text-align: right;\n  margin-right: 15px;\n  margin-top: 10px; }\n\n.tabl {\n  width: 100%;\n  float: left; }\n\n.table {\n  background: #fff; }\n\n.input2 {\n  background-color: #0867cc !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin: 0px 0px 0px 2%;\n  width: 20%;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.input1 {\n  background-color: #084280 !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin-bottom: 20px; }\n\n.notifications2 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 44%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications2 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications1 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 20%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications1 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications3 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 68%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications3 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications4 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 93%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications4 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/complaints/closedcomplaints/closedcomplaints.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/complaints/closedcomplaints/closedcomplaints.component.ts ***!
  \***************************************************************************/
/*! exports provided: ClosedcomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedcomplaintsComponent", function() { return ClosedcomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ClosedcomplaintsComponent = /** @class */ (function () {
    function ClosedcomplaintsComponent(storage, http, route, router) {
        var _this = this;
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.onlyThumbnailsGalleryOptions = [
            {
                'image': false,
                'height': '100px',
                'thumbnailSize': 'contain',
                'arrowPrevIcon': 'fa fa-angle-left',
                'arrowNextIcon': 'fa fa-angle-right',
                'width': '100%'
            }
        ];
        this.galleryImages = [
            {
                small: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                medium: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                big: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png'
            },
            {
                small: 'assets/images/ecommerce/images.jpeg',
                medium: 'assets/images/ecommerce/images.jpeg',
                big: 'assets/images/ecommerce/images.jpeg'
            },
            {
                small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
            }
        ];
        this.titles = [];
        this.datas = [];
        this.urls = new Array();
        this.addissue = new addissue();
        this.id = this.getFromLocal('user_id');
        this.name = this.getFromLocal('Name');
        this.http.post('http://localhost:84/complaints/complaintlist', { "LoginKey": "" + this.id }).subscribe(function (data) {
            _this.datas = [];
            var dat = data;
            for (var index = 0; index < dat.issue.length; index++) {
                var element = dat.issue[index];
                if (element.status === 'closed')
                    _this.datas.push(element);
            }
        });
    }
    ClosedcomplaintsComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    ClosedcomplaintsComponent.prototype.ngOnInit = function () {
    };
    ClosedcomplaintsComponent.prototype.addcomplaint = function () {
        var _this = this;
        this.addissue.LoginKey = "" + this.getFromLocal('user_id');
        this.addissue.complaint_from = this.getFromLocal('Name');
        this.addissue.status = "open";
        this.addissue.posted_on = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        console.log(this.addissue.LoginKey, this.addissue.complaint_from, this.addissue.complaint_type, this.addissue.description, this.addissue.posted_on, this.addissue.status, this.addissue.title);
        this.http.post('http://localhost:84/complaints/newcomplaints', { "LoginKey": this.addissue.LoginKey, "complaint_from": this.addissue.complaint_from, "title": this.addissue.title, "description": this.addissue.description, "status": this.addissue.status, "posted_on": this.addissue.posted_on, "complaint_type": this.addissue.complaint_type }).subscribe(function (data) {
            console.log(data);
            alert(data.message);
            _this.ngOnInit();
        });
    };
    ClosedcomplaintsComponent.prototype.open = function ($event, item) {
        console.log(item.complaint_id);
        this.router.navigate(['main/colsedview/' + item.complaint_id]);
    };
    ClosedcomplaintsComponent.prototype.addapi1 = function () {
        this.router.navigate(['main/listcomplaints']);
    };
    ClosedcomplaintsComponent.prototype.addapi2 = function () {
        this.router.navigate(['main/completecomplaints']);
    };
    ClosedcomplaintsComponent.prototype.addapi3 = function () {
        this.router.navigate(['main/closedcomplaints']);
    };
    ClosedcomplaintsComponent.prototype.getFromLocal = function (key) {
        // console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    ClosedcomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closedcomplaints',
            template: __webpack_require__(/*! ./closedcomplaints.component.html */ "./src/app/complaints/closedcomplaints/closedcomplaints.component.html"),
            styles: [__webpack_require__(/*! ./closedcomplaints.component.scss */ "./src/app/complaints/closedcomplaints/closedcomplaints.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClosedcomplaintsComponent);
    return ClosedcomplaintsComponent;
}());

var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());
var Issuelist = /** @class */ (function () {
    function Issuelist() {
    }
    return Issuelist;
}());
var addissue = /** @class */ (function () {
    function addissue() {
    }
    return addissue;
}());


/***/ }),

/***/ "./src/app/complaints/closedview/closedview.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/complaints/closedview/closedview.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-sm-6\">\n<div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\nmargin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\nborder-radius: 4px;\npadding: .5em .5em 0;\">\n<label class=\"comtitle\">Complaint Open Status</label>\n<table style=\"width:100%\">\n  <tr>\n    <th>complaint_id</th>\n    <td>: {{datas0.complaint_id}}</td>\n  </tr>\n   <tr>\n    <th>complaint_from</th>\n    <td>: {{datas0.complaint_from}}</td>\n  </tr>\n   <tr>\n    <th>Posted By</th>\n    <td>: {{datas0.poster_id}}</td>\n  </tr>\n      <tr>\n    <th>Complaint type</th>\n    <td>: {{datas0.complaint_type}}</td>\n  </tr>\n  <tr>\n    <th>Title</th>\n    <td>: {{datas0.title}}</td>\n  </tr>\n   <tr>\n    <th>Description</th>\n    <td>: {{datas0.description}}</td>\n  </tr>\n   <tr>\n    <th>Posted on</th>\n    <td>: {{datas0.posted_on}}</td>\n  </tr>\n  <tr>\n    <th>Status</th>\n    <td>: {{datas0.status}}</td>\n  </tr>\n  <tr>\n  </tr>      \n  <tr>\n    <th><button>view Documents</button></th>\n  </tr>       \n</table> \n</div>\n</div>\n<div class=\"col-12 col-sm-6\">\n  <div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\n  margin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\n    border-radius: 4px;\n    padding: .5em .5em 0;\">\n    <label class=\"comtitle\">Complaint Moved Status</label>\n    <table style=\"width:100%\">\n      <tr>\n        <th>complaint id</th>\n        <td>: {{datas1.complaint_id}}</td>\n      </tr>\n       <tr>\n        <th>complaint from</th>\n        <td>: {{datas1.complaint_from}}</td>\n      </tr>\n       <tr>\n        <th>Posted By</th>\n        <td>: {{datas1.poster_id}}</td>\n      </tr>\n          <tr>\n        <th>Complaint type</th>\n        <td>: {{datas1.complaint_type}}</td>\n      </tr>\n      <tr>\n        <th>Title</th>\n        <td>: {{datas1.title}}</td>\n      </tr>\n       <tr>\n        <th>Description</th>\n        <td>: {{datas1.description}}</td>\n      </tr>\n       <tr>\n        <th>Posted on</th>\n        <td>: {{datas1.posted_on}}</td>\n      </tr>\n      <tr>\n        <th>Status</th>\n        <td>: {{datas1.status}}</td>\n      </tr>\n      <tr>\n          <th>Moved By</th>\n          <td>: {{datas1.moved_by}}</td>\n        </tr>\n        <tr>\n          <th>Moved To</th>\n          <td>: {{datas1.moved_to}}</td>\n        </tr>\n        <tr>\n          <th>Last Update</th>\n          <td>: {{datas1.updated_at}}</td>\n        </tr>\n      <tr>\n      </tr>      \n      <tr>\n        <th><button>view Documents</button></th>\n      </tr>       \n</table> \n  </div>\n  </div>\n\n      <div class=\"col-12 col-sm-6\">\n          <div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\n          margin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\n            border-radius: 4px;\n            padding: .5em .5em 0;\">\n            <label class=\"comtitle\">Complaint Report</label>\n            <table style=\"width:100%\">\n              <tr>\n                <th>complaint_id</th>\n                <td>: {{datas2.complaint_id}}</td>\n              </tr>\n               <tr>\n                <th>Work Done by </th>\n                <td>: {{datas2.taken_by}}</td>\n              </tr>\n              <tr>\n                <th>Title</th>\n                <td>: {{datas2.title}}</td>\n              </tr>\n               <tr>\n                <th>Description</th>\n                <td>: {{datas2.description}}</td>\n              </tr>\n               <tr>\n                <th>Posted on</th>\n                <td>: {{datas2.updated_at}}</td>\n              </tr>\n              <tr>\n                <th>Status</th>\n                <td>: {{datas2.status}}</td>\n              </tr>\n              <tr>\n                  <th>Last Update</th>\n                  <td>: {{datas2.updated_at}}</td>\n                </tr>\n              <tr>\n              </tr>      \n              <tr>\n                <th><button>view Documents</button></th>\n              </tr>  \n              <tr>\n                <th><button (click)=\"closed()\">Closed</button></th>\n              </tr>  \n              <tr>\n                <th><button (click)=\"repone()\">Re-Open</button></th>\n              </tr>       \n      </table> \n          </div>\n          </div>\n                </div> \n        \n    "

/***/ }),

/***/ "./src/app/complaints/closedview/closedview.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/complaints/closedview/closedview.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-block {\n  display: block;\n  width: auto !important; }\n\n.multistep-form-section {\n  background: #fff; }\n\ntr:nth-child(even) {\n  background-color: #dddddd; }\n\nth, td {\n  background-color: #ffffff !important;\n  color: black;\n  padding: 5px;\n  text-align: left;\n  width: 50%; }\n\n.comtitle {\n  background: #13477e;\n  padding: 5px;\n  width: 100%;\n  color: #fff; }\n\ndetails {\n  background: #ffffff !important;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  padding: .5em .5em 0;\n  /* width: 1200px; */\n  margin-left: -17px;\n  margin-right: -17px; }\n\nsummary {\n  font-weight: bold;\n  margin: -.5em -.5em 0;\n  padding: .5em; }\n\ndetails[open] {\n  padding: .5em; }\n\ndetails[open] summary {\n  border-bottom: 1px solid #aaa;\n  margin-bottom: .5em; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  text-align: left;\n  float: left; }\n"

/***/ }),

/***/ "./src/app/complaints/closedview/closedview.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/complaints/closedview/closedview.component.ts ***!
  \***************************************************************/
/*! exports provided: ClosedviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClosedviewComponent", function() { return ClosedviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClosedviewComponent = /** @class */ (function () {
    function ClosedviewComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.onlyThumbnailsGalleryOptions = [
            {
                'image': false,
                'height': '100px',
                'thumbnailSize': 'contain',
                'arrowPrevIcon': 'fa fa-angle-left',
                'arrowNextIcon': 'fa fa-angle-right',
                'width': '100%'
            }
        ];
        this.galleryImages = [
            {
                small: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
                medium: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
                big: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg'
            },
            {
                small: 'assets/images/ecommerce/images.jpeg',
                medium: 'assets/images/ecommerce/images.jpeg',
                big: 'assets/images/ecommerce/images.jpeg'
            },
            {
                small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
            }
        ];
        this.titles = [];
        this.urls = new Array();
        this.model = new form1model();
    }
    ClosedviewComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    ClosedviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.complaint_ids = +params['id']; // (+) converts string 'id' to a number
            console.log('this id: ' + _this.complaint_ids);
            _this.http.post('http://132.148.140.42:84/issue/issuetrack', { complaint_id: _this.complaint_ids }).subscribe(function (data) {
                console.log(data);
                _this.datas0 = data.issue[0];
                _this.datas1 = data.issue[1];
                _this.datas2 = data.issue[2];
                _this.datas3 = data.issue[3];
                console.log(_this.datas0);
                console.log(_this.datas1);
                console.log(_this.datas2);
                console.log(_this.datas3);
            });
        });
    };
    ClosedviewComponent.prototype.view = function (event, item) {
        console.log(item.cliid);
        this.router.navigate(['main/clientdetails/' + item.cliid]);
    };
    ClosedviewComponent.prototype.edit = function (event, item) {
        console.log(item.cliid);
        this.router.navigate(['main/updateclient/' + item.cliid]);
    };
    ClosedviewComponent.prototype.open = function ($event, item) {
        alert("Complaint disable successfully");
    };
    ClosedviewComponent.prototype.closed = function () {
        var _this = this;
        this.http.post('http://132.148.140.42:84/complaints/updateStatus', { "complaint_id": "" + this.complaint_ids, "status": "closed" }).subscribe(function (data) {
            console.log(data);
            alert("Complaint Moved to Closed");
            _this.router.navigate(['main/operacomcompletelist']);
        });
    };
    ClosedviewComponent.prototype.repone = function () {
        var _this = this;
        this.http.post('http://132.148.140.42:84/complaints/updateStatus', { "complaint_id": this.complaint_ids, "status": "open" }).subscribe(function (data) {
            console.log(data);
            alert("Complaint Moved to Open");
            _this.router.navigate(['main/operacomcompletelist']);
        });
    };
    ClosedviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-closedview',
            template: __webpack_require__(/*! ./closedview.component.html */ "./src/app/complaints/closedview/closedview.component.html"),
            styles: [__webpack_require__(/*! ./closedview.component.scss */ "./src/app/complaints/closedview/closedview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ClosedviewComponent);
    return ClosedviewComponent;
}());

var form1model = /** @class */ (function () {
    function form1model() {
    }
    return form1model;
}());
var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());
var Issuelist = /** @class */ (function () {
    function Issuelist() {
    }
    return Issuelist;
}());


/***/ }),

/***/ "./src/app/complaints/completecomplaints/completecomplaints.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/complaints/completecomplaints/completecomplaints.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # BOOTSNIP INFO -->\n\n<div class=\"container\">\n    <div class=\"row\">\n        <div _ngcontent-c4=\"\" class=\"header\">\n          <div _ngcontent-c4=\"\" class=\"row\">\n            <div _ngcontent-c4=\"\" class=\"col-12 col-md-6 mb-3\">\n              <div _ngcontent-c4=\"\" class=\"col-md-8\">\n                <h3 _ngcontent-c4=\"\" class=\"adsc\">\n                  <i _ngcontent-c4=\"\" class=\"fa fa-university\"></i> &nbsp;Open Complaint</h3>\n                </div>\n              </div>\n              <div _ngcontent-c4=\"\" class=\"col-md-6\">\n                  <button type=\"button\" class=\"btn btn-info btn-lg pull-right\" style=\"color: #fff;\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal1\" >Add FAQ</button>\n  \n  \n              </div>\n            </div>\n           \n          </div>\n          <div class=\" butn col-md-12 pull-left\">\n            <div class=\"notifications1\">\n                      \n                <span class=\"num\">{{All}}</span>\n               \n            </div>\n          <button class=\"input1\" (click) = \"addapi1()\" >Open</button>\n          <div class=\"notifications2\">\n              \n                <span class=\"num\">{{Open}}</span>\n               \n            </div>\n          <button class=\"input2\" (click) = \"addapi2()\">Complete</button>\n           \n          <div class=\"notifications3\">\n              \n                <span class=\"num\">{{Inprogree}}</span>\n               \n            </div>\n          <button class=\"input1\" (click) = \"addapi3()\" >Closed</button>\n                 </div>\n          <div class=\"col\">\n      \n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"tabl\" >\n                      <table class=\"table table-bordered\" style=\"border-collapse:collapse;\">\n                          <thead>\n                              <tr>\n                                  <th>SL.NO</th>\n                                  <th>Complaint ID</th>\n                                  <th>Complaint From</th>\n                                  <th>Poster ID</th>\n                                  <th>Complaint Type</th>\n                                  <th>Title</th>\n                                  <th>Description</th>\n                                  <th>Posted On</th>\n                                  <th>Status</th>\n                                  <th>View</th>\n                                  <th>Edit</th>\n                                 \n                              </tr>\n                          </thead>\n                          <tbody>\n                                <ng-container  *ngFor=\"let data of datas ;  let i = index\">\n                                        <tr>\n                                            <td>{{i+1}}</td> \n                                            <td>{{data.complaint_id}}</td>\n                                            <td>{{data.complaint_from}}</td>\n                                            <td id=\"l1\">{{data.poster_id}}</td>\n                                            <td id=\"a1\">{{data.complaint_type}}</td>\n                                            <td id=\"pc1\">{{data.title}}</td>\n                                            <td id=\"pc1\">{{data.description}}</td>\n                                            <td id=\"pc1\">{{data.posted_on}}</td>\n                                            <td id=\"pc1\">{{data.status}}</td>\n                                            <td><button _ngcontent-c6=\"\" class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" data-target=\"#login-modal2\" data-toggle=\"modal\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                            <td><button type=\"button\"   (click)=\"Move($event, data)\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"fa m-1 fa-send ng-star-inserted\"></i></button></td> \n                                      </tr>\n                                      </ng-container>      \n                          </tbody>\n                      </table>\n                      <div *ngIf=\"loading\" ><div class=\"loader text-center\"></div></div>     \n                      <div class=\"card-footer p-0\">\n                      <ngb-pagination   [collectionSize]=\"collsize\" [(page)]=\"advancedPage\" (pageChange)=\"newsync()\" [boundaryLinks]=\"true\" ></ngb-pagination>\n                      </div>     \n                </div>\n                </div>\n              </div>\n              </div>\n          \n         \n    </div>\n  </div>\n  <!-- END # BOOTSNIP INFO -->\n  \n  \n  \n  <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n       \n                \n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>Complaint Form</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                    <select class=\"form-control\"  name=\"complaint_type\" value=\"\" [(ngModel)]=\"addissue.complaint_type\"  #employee_type  id=\"exampleFormControlSelect1\">\n                                      <option>Thieft</option>\n                                      <option>Fire</option>\n                                      <option>Accident</option>\n                                      <option>Molestaion</option>\n                                      <option>Murder</option>\n                                      <option>Death</option>\n                                      <option>Mob</option> \n                                      <option>Assualt</option>\n                                      <option>Departmental</option>\n                                      <option>Help</option>\n                                    </select>                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" [(ngModel)]=\"addissue.title\"  placeholder=\"Complaint Title\" value=\"\" #title>                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"addissue.description\" name=\"description\"  placeholder=\"Complaint Description\" value=\"\" #description></textarea>\n                                    </div>\n  \n                                    \n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\"  [(ngModel)]=\"addissue.idtype\" name=\"title\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"addcomplaint()\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n  \n  <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>View Complaint</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Type\"  #complaint_ids disabled>                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Title\" #title disabled>                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\"  placeholder=\"Complaint Description\" #description disabled></textarea>\n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Posted By</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Posted By\"  value = \"\" #take_by disabled>\n                                    </div>\n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"assign2(complaint_ids.value,title.value,description.value,take_by.value)\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n    <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n      <div class=\"modal-dialog modal-dialogs\">\n      <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n                <!-- Begin # DIV Form -->\n                <div id=\"div-forms\">\n                \n                    <!-- Begin # Login Form -->\n                    <form id=\"login-form\">\n                    <div class=\"modal-body\">\n              \n                        <div class=\"login-form\">\n                            <div class=\"main-div\">\n                                <div class=\"panel\">\n                             <h3>Edit Complaint</h3>\n                              \n                               </div>\n                                <form id=\"Login\">\n                                    <div class=\"form-group\">                       \n                                    <label>Complaint Type</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Type\"  #complaint_ids >                           \n                                    </div>\n                                    <div class=\"form-group\">                           \n                                        <label>Complaint Title</label>\n                                        <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint Title\" #title >                          \n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Complaint Description</label>\n                                        <textarea type=\"text\" class=\"form-control\"  placeholder=\"Complaint Description\" #description ></textarea>\n                                    </div>\n  \n                                    <div class=\"form-group\">\n                                            <label>Posted By</label>\n                                        <input type=\"email\" class=\"form-control\" id=\"inputEmail\" placeholder=\"Posted By\"  value = \"\" #take_by >\n                                    </div>\n                                </form>\n                                <div>\n                                    <img *ngFor=\"let url of urls\" [src]=\"url\" class=\"rounded mb-3\" width=\"180\">\n                                  </div>\n                                  <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                                </div>\n                                <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"assign2(complaint_ids.value,title.value,description.value,take_by.value)\">Submit</button>\n                            </div>\n                  </div>\n                    </form>\n                    <!-- End # Login Form -->\n                    <!-- Begin | Lost Password Form -->\n                </div>\n                <!-- End # DIV Form -->\n                \n      </div>\n    </div>\n  </div>\n    <!-- END # MODAL LOGIN -->\n  \n  \n  \n  "

/***/ }),

/***/ "./src/app/complaints/completecomplaints/completecomplaints.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/complaints/completecomplaints/completecomplaints.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-modal .modal-dialog {\n  width: 600px;\n  margin-left: 40%; }\n\n.btn-primary {\n  background-color: #13477e !important;\n  border-radius: 100px; }\n\n#login-modal input[type=text], input[type=password] {\n  margin-top: 10px; }\n\n#div-login-msg,\n#div-lost-msg,\n#div-register-msg {\n  border: 1px solid #dadfe1;\n  height: 30px;\n  line-height: 28px;\n  transition: all ease-in-out 500ms; }\n\n#div-login-msg.success,\n#div-lost-msg.success,\n#div-register-msg.success {\n  border: 1px solid #68c3a3;\n  background-color: #c8f7c5; }\n\n#div-login-msg.error,\n#div-lost-msg.error,\n#div-register-msg.error {\n  border: 1px solid #eb575b;\n  background-color: #ffcad1; }\n\n#icon-login-msg,\n#icon-lost-msg,\n#icon-register-msg {\n  width: 30px;\n  float: left;\n  line-height: 28px;\n  text-align: center;\n  background-color: #dadfe1;\n  margin-right: 5px;\n  transition: all ease-in-out 500ms; }\n\n#icon-login-msg.success,\n#icon-lost-msg.success,\n#icon-register-msg.success {\n  background-color: #68c3a3 !important; }\n\n#icon-login-msg.error,\n#icon-lost-msg.error,\n#icon-register-msg.error {\n  background-color: #eb575b !important; }\n\n#img_logo {\n  max-height: 100px;\n  max-width: 100px; }\n\n/* #########################################\n   #    override the bootstrap configs     #\n   ######################################### */\n\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .8; }\n\n.modal-content {\n  background-color: #ececec;\n  border: 1px solid #bdc3c7;\n  border-radius: 0px;\n  outline: 0; }\n\n.modal-header {\n  min-height: 16.43px;\n  padding: 15px 15px 15px 15px;\n  border-bottom: 0px; }\n\n.modal-body {\n  position: relative;\n  padding: 5px 15px 5px 15px; }\n\n.modal-footer {\n  padding: 15px 15px 15px 15px;\n  text-align: left;\n  border-top: 0px; }\n\n.checkbox {\n  margin-bottom: 0px; }\n\n.btn {\n  border-radius: 0px; }\n\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  border-radius: 0px; }\n\n.btn-link {\n  padding: 5px 10px 0px 0px;\n  color: #95a5a6; }\n\n.btn-link:hover, .btn-link:focus {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.glyphicon {\n  top: 0px; }\n\n.btn-primary[_ngcontent-c4] {\n  background-color: transparent !important; }\n\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #ddd; }\n\n.btn[_ngcontent-c4] {\n  border-radius: 0px;\n  color: #1d4b7c; }\n\n.btn-primary:hover {\n  color: #fff;\n  border-color: #fff; }\n\n.btn:hover {\n  box-shadow: 0px 4px 5px -2px rgba(255, 255, 255, 0), 0px 7px 10px 1px white, 0px 2px 16px 1px rgba(255, 255, 255, 0.12); }\n\n.btn:hover, .btn:focus, .btn.focus {\n  color: #1d4b7c;\n  text-decoration: none; }\n\n.add {\n  background-color: #13477e !important;\n  color: white;\n  border-radius: 100px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.form-heading {\n  color: #fff;\n  font-size: 23px; }\n\n.panel h2 {\n  color: #444444;\n  font-size: 18px;\n  margin: 0 0 8px 0; }\n\n.panel p {\n  color: #777777;\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 24px; }\n\n.login-form .form-control {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px; }\n\n.main-div {\n  background: #ffffff none repeat scroll 0 0;\n  border-radius: 2px;\n  margin: 10px auto 30px;\n  padding: 10px 10px 10px 10px; }\n\n.login-form .form-group {\n  margin-bottom: 10px; }\n\n.login-form {\n  text-align: center; }\n\n.forgot a {\n  color: #777777;\n  font-size: 14px;\n  text-decoration: underline; }\n\n.login-form .btn.btn-primary {\n  background: #f0ad4e none repeat scroll 0 0;\n  border-color: #f0ad4e;\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0; }\n\n.forgot {\n  text-align: left;\n  margin-bottom: 30px; }\n\n.botto-text {\n  color: #ffffff;\n  font-size: 14px;\n  margin: auto; }\n\n.login-form .btn.btn-primary.reset {\n  background: #ff9900 none repeat scroll 0 0; }\n\n.back {\n  text-align: left;\n  margin-top: 10px; }\n\n.back a {\n  color: #444444;\n  font-size: 13px;\n  text-decoration: none; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  text-align: right;\n  float: left; }\n\n.btn-lg[_ngcontent-c4], .btn-group-lg[_ngcontent-c4] > .btn[_ngcontent-c4] {\n  border-radius: 0px;\n  padding: 8px 10px 7px 13px;\n  margin-top: -3px;\n  border-radius: 100px;\n  color: #fff; }\n\n.btn:focus, .btn:active, button:focus, button:active {\n  outline: none !important;\n  box-shadow: none !important; }\n\n#image-gallery .modal-footer {\n  display: block; }\n\n.ngx-gallery-icon {\n  color: rgba(255, 255, 255, 0.59) !important; }\n\n.thumb {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.login-form[_ngcontent-c4] .form-control[_ngcontent-c4] {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: initial; }\n\nul.pagination {\n  display: flex;\n  list-style: none;\n  border-radius: .125rem;\n  padding: 10px;\n  margin: 0 10px 10px 40% !important;\n  width: 100%; }\n\n.input1 {\n  margin: 0px 0px 0px 5%;\n  width: 20%;\n  border-radius: 0px !important;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n  /* float: right; */\n  text-align: right;\n  margin-right: 15px;\n  margin-top: 10px; }\n\n.tabl {\n  width: 100%;\n  float: left; }\n\n.table {\n  background: #fff; }\n\n.input2 {\n  background-color: #0867cc !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin: 0px 0px 0px 2%;\n  width: 20%;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.input1 {\n  background-color: #084280 !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin-bottom: 20px; }\n\n.notifications2 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 44%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications2 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications1 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 20%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications1 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications3 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 68%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications3 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications4 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 93%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications4 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/complaints/completecomplaints/completecomplaints.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/complaints/completecomplaints/completecomplaints.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CompletecomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletecomplaintsComponent", function() { return CompletecomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CompletecomplaintsComponent = /** @class */ (function () {
    function CompletecomplaintsComponent(storage, http, route, router) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.onlyThumbnailsGalleryOptions = [
            {
                'image': false,
                'height': '100px',
                'thumbnailSize': 'contain',
                'arrowPrevIcon': 'fa fa-angle-left',
                'arrowNextIcon': 'fa fa-angle-right',
                'width': '100%'
            }
        ];
        this.galleryImages = [
            {
                small: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                medium: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                big: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png'
            },
            {
                small: 'assets/images/ecommerce/images.jpeg',
                medium: 'assets/images/ecommerce/images.jpeg',
                big: 'assets/images/ecommerce/images.jpeg'
            },
            {
                small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
            }
        ];
        this.titles = [];
        this.datas = [];
        this.urls = new Array();
        this.addissue = new addissue();
    }
    CompletecomplaintsComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    CompletecomplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.getFromLocal('user_id');
        this.name = this.getFromLocal('Name');
        this.http.post('http://localhost:84/complaints/complaintlist', { "LoginKey": "" + this.id }).subscribe(function (data) {
            _this.datas = [];
            var dat = data;
            for (var index = 0; index < dat.issue.length; index++) {
                var element = dat.issue[index];
                if (element.status === 'completed')
                    _this.datas.push(element);
            }
        });
    };
    CompletecomplaintsComponent.prototype.addcomplaint = function () {
        var _this = this;
        this.addissue.LoginKey = "" + this.getFromLocal('user_id');
        this.addissue.complaint_from = this.getFromLocal('Name');
        this.addissue.status = "open";
        this.addissue.posted_on = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        console.log(this.addissue.LoginKey, this.addissue.complaint_from, this.addissue.complaint_type, this.addissue.description, this.addissue.posted_on, this.addissue.status, this.addissue.title);
        this.http.post('http://localhost:84/complaints/newcomplaints', { "LoginKey": this.addissue.LoginKey, "complaint_from": this.addissue.complaint_from, "title": this.addissue.title, "description": this.addissue.description, "status": this.addissue.status, "posted_on": this.addissue.posted_on, "complaint_type": this.addissue.complaint_type }).subscribe(function (data) {
            console.log(data);
            alert(data.message);
            _this.ngOnInit();
        });
    };
    CompletecomplaintsComponent.prototype.Move = function (event, item) {
        var _this = this;
        this.http.post('http://132.148.140.42:84/complaints/updateStatus', { "complaint_id": "" + item.complaint_id, "status": "closed" }).subscribe(function (data) {
            console.log(data);
            alert("Complaint Moved to Closed");
            _this.ngOnInit();
        });
    };
    CompletecomplaintsComponent.prototype.open = function ($event, item) {
        console.log(item.complaint_id);
        this.router.navigate(['main/completedview/' + item.complaint_id]);
    };
    CompletecomplaintsComponent.prototype.addapi1 = function () {
        this.router.navigate(['main/listcomplaints']);
    };
    CompletecomplaintsComponent.prototype.addapi2 = function () {
        this.router.navigate(['main/completecomplaints']);
    };
    CompletecomplaintsComponent.prototype.addapi3 = function () {
        this.router.navigate(['main/closedcomplaints']);
    };
    CompletecomplaintsComponent.prototype.getFromLocal = function (key) {
        // console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    CompletecomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completecomplaints',
            template: __webpack_require__(/*! ./completecomplaints.component.html */ "./src/app/complaints/completecomplaints/completecomplaints.component.html"),
            styles: [__webpack_require__(/*! ./completecomplaints.component.scss */ "./src/app/complaints/completecomplaints/completecomplaints.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompletecomplaintsComponent);
    return CompletecomplaintsComponent;
}());

var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());
var Issuelist = /** @class */ (function () {
    function Issuelist() {
    }
    return Issuelist;
}());
var addissue = /** @class */ (function () {
    function addissue() {
    }
    return addissue;
}());


/***/ }),

/***/ "./src/app/complaints/completeview/completeview.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/complaints/completeview/completeview.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-12 col-sm-6\">\n<div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\nmargin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\nborder-radius: 4px;\npadding: .5em .5em 0;\">\n<label class=\"comtitle\">Complaint Open Status</label>\n<table style=\"width:100%\">\n  <tr>\n    <th>complaint_id</th>\n    <td>: {{datas0.complaint_id}}</td>\n  </tr>\n   <tr>\n    <th>complaint_from</th>\n    <td>: {{datas0.complaint_from}}</td>\n  </tr>\n   <tr>\n    <th>Posted By</th>\n    <td>: {{datas0.poster_id}}</td>\n  </tr>\n      <tr>\n    <th>Complaint type</th>\n    <td>: {{datas0.complaint_type}}</td>\n  </tr>\n  <tr>\n    <th>Title</th>\n    <td>: {{datas0.title}}</td>\n  </tr>\n   <tr>\n    <th>Description</th>\n    <td>: {{datas0.description}}</td>\n  </tr>\n   <tr>\n    <th>Posted on</th>\n    <td>: {{datas0.posted_on}}</td>\n  </tr>\n  <tr>\n    <th>Status</th>\n    <td>: {{datas0.status}}</td>\n  </tr>\n  <tr>\n  </tr>      \n  <tr>\n    <th><button>view Documents</button></th>\n  </tr>       \n</table> \n</div>\n</div>\n<div class=\"col-12 col-sm-6\">\n  <div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\n  margin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\n    border-radius: 4px;\n    padding: .5em .5em 0;\">\n    <label class=\"comtitle\">Complaint Moved Status</label>\n    <table style=\"width:100%\">\n      <tr>\n        <th>complaint id</th>\n        <td>: {{datas1.complaint_id}}</td>\n      </tr>\n       <tr>\n        <th>complaint from</th>\n        <td>: {{datas1.complaint_from}}</td>\n      </tr>\n       <tr>\n        <th>Posted By</th>\n        <td>: {{datas1.poster_id}}</td>\n      </tr>\n          <tr>\n        <th>Complaint type</th>\n        <td>: {{datas1.complaint_type}}</td>\n      </tr>\n      <tr>\n        <th>Title</th>\n        <td>: {{datas1.title}}</td>\n      </tr>\n       <tr>\n        <th>Description</th>\n        <td>: {{datas1.description}}</td>\n      </tr>\n       <tr>\n        <th>Posted on</th>\n        <td>: {{datas1.posted_on}}</td>\n      </tr>\n      <tr>\n        <th>Status</th>\n        <td>: {{datas1.status}}</td>\n      </tr>\n      <tr>\n          <th>Moved By</th>\n          <td>: {{datas1.moved_by}}</td>\n        </tr>\n        <tr>\n          <th>Moved To</th>\n          <td>: {{datas1.moved_to}}</td>\n        </tr>\n        <tr>\n          <th>Last Update</th>\n          <td>: {{datas1.updated_at}}</td>\n        </tr>\n      <tr>\n      </tr>      \n      <tr>\n        <th><button>view Documents</button></th>\n      </tr>       \n</table> \n  </div>\n  </div>\n\n      <div class=\"col-12 col-sm-6\">\n          <div class=\"Emp\" style=\"background: #ffffff; margin-left: -17px;\n          margin-right: -17px; width: 100% ; height: 100%; border: 1px solid #aaa;\n            border-radius: 4px;\n            padding: .5em .5em 0;\">\n            <label class=\"comtitle\">Complaint Report</label>\n            <table style=\"width:100%\">\n              <tr>\n                <th>complaint_id</th>\n                <td>: {{datas2.complaint_id}}</td>\n              </tr>\n               <tr>\n                <th>Work Done by </th>\n                <td>: {{datas2.taken_by}}</td>\n              </tr>\n              <tr>\n                <th>Title</th>\n                <td>: {{datas2.title}}</td>\n              </tr>\n               <tr>\n                <th>Description</th>\n                <td>: {{datas2.description}}</td>\n              </tr>\n               <tr>\n                <th>Posted on</th>\n                <td>: {{datas2.updated_at}}</td>\n              </tr>\n              <tr>\n                <th>Status</th>\n                <td>: {{datas2.status}}</td>\n              </tr>\n              <tr>\n                  <th>Last Update</th>\n                  <td>: {{datas2.updated_at}}</td>\n                </tr>\n              <tr>\n              </tr>      \n              <tr>\n                <th><button>view Documents</button></th>\n              </tr>        \n      </table> \n          </div>\n          </div>\n                </div> \n        \n    "

/***/ }),

/***/ "./src/app/complaints/completeview/completeview.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/complaints/completeview/completeview.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-block {\n  display: block;\n  width: auto !important; }\n\n.multistep-form-section {\n  background: #fff; }\n\ntr:nth-child(even) {\n  background-color: #dddddd; }\n\nth, td {\n  background-color: #ffffff !important;\n  color: black;\n  padding: 5px;\n  text-align: left;\n  width: 50%; }\n\n.comtitle {\n  background: #13477e;\n  padding: 5px;\n  width: 100%;\n  color: #fff; }\n\ndetails {\n  background: #ffffff !important;\n  border: 1px solid #aaa;\n  border-radius: 4px;\n  padding: .5em .5em 0;\n  /* width: 1200px; */\n  margin-left: -17px;\n  margin-right: -17px; }\n\nsummary {\n  font-weight: bold;\n  margin: -.5em -.5em 0;\n  padding: .5em; }\n\ndetails[open] {\n  padding: .5em; }\n\ndetails[open] summary {\n  border-bottom: 1px solid #aaa;\n  margin-bottom: .5em; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  text-align: left;\n  float: left; }\n"

/***/ }),

/***/ "./src/app/complaints/completeview/completeview.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/complaints/completeview/completeview.component.ts ***!
  \*******************************************************************/
/*! exports provided: CompleteviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompleteviewComponent", function() { return CompleteviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompleteviewComponent = /** @class */ (function () {
    function CompleteviewComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.onlyThumbnailsGalleryOptions = [
            {
                'image': false,
                'height': '100px',
                'thumbnailSize': 'contain',
                'arrowPrevIcon': 'fa fa-angle-left',
                'arrowNextIcon': 'fa fa-angle-right',
                'width': '100%'
            }
        ];
        this.galleryImages = [
            {
                small: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
                medium: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg',
                big: 'assets/images/ecommerce/how-to-handle-guest-with-complaints-in-hotel-1-638.jpg'
            },
            {
                small: 'assets/images/ecommerce/images.jpeg',
                medium: 'assets/images/ecommerce/images.jpeg',
                big: 'assets/images/ecommerce/images.jpeg'
            },
            {
                small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
            }
        ];
        this.titles = [];
        this.urls = new Array();
        this.model = new form1model();
    }
    CompleteviewComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    CompleteviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.complaint_ids = +params['id']; // (+) converts string 'id' to a number
            console.log('this id: ' + _this.complaint_ids);
            _this.http.post('http://132.148.140.42:84/issue/issuetrack', { complaint_id: _this.complaint_ids }).subscribe(function (data) {
                console.log(data);
                _this.datas0 = data.issue[0];
                _this.datas1 = data.issue[1];
                _this.datas2 = data.issue[2];
                _this.datas3 = data.issue[3];
                console.log(_this.datas0);
                console.log(_this.datas1);
                console.log(_this.datas2);
                console.log(_this.datas3);
            });
        });
    };
    CompleteviewComponent.prototype.view = function (event, item) {
        console.log(item.cliid);
        this.router.navigate(['main/clientdetails/' + item.cliid]);
    };
    CompleteviewComponent.prototype.edit = function (event, item) {
        console.log(item.cliid);
        this.router.navigate(['main/updateclient/' + item.cliid]);
    };
    CompleteviewComponent.prototype.open = function ($event, item) {
        alert("Complaint disable successfully");
    };
    CompleteviewComponent.prototype.closed = function () {
        var _this = this;
        this.http.post('http://132.148.140.42:84/complaints/updateStatus', { "complaint_id": "" + this.complaint_ids, "status": "closed" }).subscribe(function (data) {
            console.log(data);
            alert("Complaint Moved to Closed");
            _this.router.navigate(['main/operacomcompletelist']);
        });
    };
    CompleteviewComponent.prototype.repone = function () {
        var _this = this;
        this.http.post('http://132.148.140.42:84/complaints/updateStatus', { "complaint_id": this.complaint_ids, "status": "open" }).subscribe(function (data) {
            console.log(data);
            alert("Complaint Moved to Open");
            _this.router.navigate(['main/operacomcompletelist']);
        });
    };
    CompleteviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completeview',
            template: __webpack_require__(/*! ./completeview.component.html */ "./src/app/complaints/completeview/completeview.component.html"),
            styles: [__webpack_require__(/*! ./completeview.component.scss */ "./src/app/complaints/completeview/completeview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CompleteviewComponent);
    return CompleteviewComponent;
}());

var form1model = /** @class */ (function () {
    function form1model() {
    }
    return form1model;
}());
var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());
var Issuelist = /** @class */ (function () {
    function Issuelist() {
    }
    return Issuelist;
}());


/***/ }),

/***/ "./src/app/complaints/editcomplaints/editcomplaints.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/editcomplaints/editcomplaints.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editcomplaints works!\n</p>\n"

/***/ }),

/***/ "./src/app/complaints/editcomplaints/editcomplaints.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/editcomplaints/editcomplaints.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complaints/editcomplaints/editcomplaints.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/complaints/editcomplaints/editcomplaints.component.ts ***!
  \***********************************************************************/
/*! exports provided: EditcomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditcomplaintsComponent", function() { return EditcomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditcomplaintsComponent = /** @class */ (function () {
    function EditcomplaintsComponent() {
    }
    EditcomplaintsComponent.prototype.ngOnInit = function () {
    };
    EditcomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editcomplaints',
            template: __webpack_require__(/*! ./editcomplaints.component.html */ "./src/app/complaints/editcomplaints/editcomplaints.component.html"),
            styles: [__webpack_require__(/*! ./editcomplaints.component.scss */ "./src/app/complaints/editcomplaints/editcomplaints.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditcomplaintsComponent);
    return EditcomplaintsComponent;
}());



/***/ }),

/***/ "./src/app/complaints/listcomplaints/listcomplaints.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/listcomplaints/listcomplaints.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # BOOTSNIP INFO -->\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div _ngcontent-c4=\"\" class=\"header\">\n        <div _ngcontent-c4=\"\" class=\"row\">\n          <div _ngcontent-c4=\"\" class=\"col-12 col-md-6 mb-3\">\n            <div _ngcontent-c4=\"\" class=\"col-md-8\">\n              <h3 _ngcontent-c4=\"\" class=\"adsc\">\n                <i _ngcontent-c4=\"\" class=\"fa fa-university\"></i> &nbsp;Open Complaint</h3>\n              </div>\n            </div>\n            <div _ngcontent-c4=\"\" class=\"col-md-6\">\n                <button type=\"button\" class=\"btn btn-info btn-lg pull-right\" style=\"color: #fff;\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal1\" >Add FAQ</button>\n\n\n            </div>\n          </div>\n         \n        </div>\n        <div class=\" butn col-md-12 pull-left\">\n          <div class=\"notifications1\">\n                    \n              <span class=\"num\">{{All}}</span>\n             \n          </div>\n        <button class=\"input2\" (click) = \"addapi1()\" >Open</button>\n        <div class=\"notifications2\">\n            \n              <span class=\"num\">{{Open}}</span>\n             \n          </div>\n        <button class=\"input1\" (click) = \"addapi2()\">Complete</button>\n         \n        <div class=\"notifications3\">\n            \n              <span class=\"num\">{{Inprogree}}</span>\n             \n          </div>\n        <button class=\"input1\" (click) = \"addapi3()\" >Closed</button>\n               </div>\n        <div class=\"col\">\n    \n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                <div class=\"tabl\" >\n                    <table class=\"table table-bordered\" style=\"border-collapse:collapse;\">\n                        <thead>\n                            <tr>\n                                <th>SL.NO</th>\n                                <th>Complaint ID</th>\n                                <th>Complaint From</th>\n                                <th>Poster ID</th>\n                                <th>Complaint Type</th>\n                                <th>Title</th>\n                                <th>Description</th>\n                                <th>Posted On</th>\n                                <th>Status</th>\n                                <th>View</th>\n                                <th>Edit</th>\n                               \n                            </tr>\n                        </thead>\n                        <tbody>\n                              <ng-container  *ngFor=\"let data of datas ;  let i = index\">\n                                      <tr>\n                                          <td>{{i+1}}</td> \n                                          <td>{{data.complaint_id}}</td>\n                                          <td>{{data.complaint_from}}</td>\n                                          <td id=\"l1\">{{data.poster_id}}</td>\n                                          <td id=\"a1\">{{data.complaint_type}}</td>\n                                          <td id=\"pc1\">{{data.title}}</td>\n                                          <td id=\"pc1\">{{data.description}}</td>\n                                          <td id=\"pc1\">{{data.posted_on}}</td>\n                                          <td id=\"pc1\">{{data.status}}</td>\n                                          <td><button _ngcontent-c6=\"\" class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" data-target=\"#login-modal2\" data-toggle=\"modal\" (click)=\"open($event, data)\"  style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                          <td><button _ngcontent-c6=\"\" class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" data-target=\"#login-modal\" data-toggle=\"modal\" (click)=\"edit($event, data)\"  style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                    </tr>\n                                    </ng-container>      \n                        </tbody>\n                    </table>\n                    <div *ngIf=\"loading\" ><div class=\"loader text-center\"></div></div>     \n                    <div class=\"card-footer p-0\">\n                    <ngb-pagination   [collectionSize]=\"collsize\" [(page)]=\"advancedPage\" (pageChange)=\"newsync()\" [boundaryLinks]=\"true\" ></ngb-pagination>\n                    </div>     \n              </div>\n              </div>\n            </div>\n            </div>\n        \n       \n  </div>\n</div>\n<!-- END # BOOTSNIP INFO -->\n\n\n\n<!-- BEGIN # MODAL LOGIN -->\n<div class=\"modal fade\" id=\"login-modal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-dialogs\">\n    <div class=\"modal-content\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n     \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                           <h3>Complaint Form</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                                  <div class=\"form-group\">                       \n                                  <label>Complaint Type</label>\n                                  <select class=\"form-control\"  name=\"complaint_type\" value=\"\" [(ngModel)]=\"addissue.complaint_type\"  #employee_type  id=\"exampleFormControlSelect1\">\n                                    <option>Thieft</option>\n                                    <option>Fire</option>\n                                    <option>Accident</option>\n                                    <option>Molestaion</option>\n                                    <option>Murder</option>\n                                    <option>Death</option>\n                                    <option>Mob</option> \n                                    <option>Assualt</option>\n                                    <option>Departmental</option>\n                                    <option>Help</option>\n                                  </select>                           \n                                  </div>\n                                  <div class=\"form-group\">                           \n                                      <label>Complaint Title</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\" name=\"title\" [(ngModel)]=\"addissue.title\"  placeholder=\"Complaint Title\" value=\"\" #title>                          \n                                  </div>\n\n                                  <div class=\"form-group\">\n                                          <label>Complaint Description</label>\n                                      <textarea type=\"text\" class=\"form-control\" [(ngModel)]=\"addissue.description\" name=\"description\"  placeholder=\"Complaint Description\" value=\"\" #description></textarea>\n                                  </div>\n\n                                  \n                              </form>\n                              <div>\n                                  <img *ngFor=\"let url of urls\" [src]=\"url\"  [(ngModel)]=\"addissue.idtype\" name=\"title\" class=\"rounded mb-3\" width=\"180\">\n                                </div>\n                                <input type=\"file\" multiple (change)=\"detectFiles($event)\">\n                              </div>\n                              <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"addcomplaint()\">Submit</button>\n                          </div>\n                </div>\n                  </form>\n                  <!-- End # Login Form -->\n                  <!-- Begin | Lost Password Form -->\n              </div>\n              <!-- End # DIV Form -->\n              \n    </div>\n  </div>\n</div>\n  <!-- END # MODAL LOGIN -->\n\n\n\n<!-- BEGIN # MODAL LOGIN -->\n<div class=\"modal fade\" id=\"login-modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog\" style=\"max-width: 700px;margin-right: 17%;\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n         \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>View Compliant</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                          \n\n                                  <div class=\"form-group row\">\n                                      \n                                  <label class=\"col-sm-4\">Complaint From :</label>\n                                  <div class=\"col-md-8\">\n                                      <input type=\"text\" class=\"form-control\"  value = \"{{datass.complaint_from}}\" id=\"name\" disabled>\n                                  </div>\n                                  </div>\n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Type</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\"  value = \"{{datass.complaint_type}}\" disabled>\n                          \n                                  </div>\n\n\n                                  \n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Title</label>\n                                      <input type=\"email\" class=\"form-control\" id=\"inputEmail\"  value = \"{{datass.title}}\" disabled>\n                          \n                                  </div>\n                          \n                                  <div class=\"form-group\">\n                                      <label>Description</label>\n                                      <textarea type=\"text\" class=\"form-control\"   id=\"inputEmail\"  value = \"{{datass.description}}\" disabled></textarea>\n                          \n                                  </div>\n                                  \n                                  \n                          \n                              </form>\n\n                              <div class=\"card mb-3\">\n                                  <div class=\"card-body\">\n                                    <h5 class=\"card-title\"></h5>\n                                    <ngx-gallery [options]=\"onlyThumbnailsGalleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                                  </div>\n                                </div>\n                              </div>\n                         \n                          </div>\n                </div>\n              \n                  </form>\n                  <!-- End # Login Form -->\n                  \n                  <!-- Begin | Lost Password Form -->\n                \n                  \n                  \n              </div>\n              <!-- End # DIV Form -->\n              \n\n\n  <!-- BEGIN # MODAL LOGIN -->\n<div class=\"modal fade\" id=\"login-modal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog\" style=\"max-width: 700px;margin-right: 17%;\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n         \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>View Compliant</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                          \n\n                                  <div class=\"form-group row\">\n                                      \n                                  <label class=\"col-sm-4\">Complaint From :</label>\n                                  <div class=\"col-md-8\">\n                                      <input type=\"text\" class=\"form-control\"  value = \"{{datass.complaint_from}}\" id=\"name\" disabled>\n                                  </div>\n                                  </div>\n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Type</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\"  value = \"{{datass.complaint_type}}\" disabled>\n                          \n                                  </div>\n\n\n                                  \n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Title</label>\n                                      <input type=\"email\" class=\"form-control\" id=\"inputEmail\"  value = \"{{datass.title}}\" disabled>\n                          \n                                  </div>\n                          \n                                  <div class=\"form-group\">\n                                      <label>Description</label>\n                                      <textarea type=\"text\" class=\"form-control\"   id=\"inputEmail\"  value = \"{{datass.description}}\" disabled></textarea>\n                          \n                                  </div>\n                                  \n                                  \n                          \n                              </form>\n\n                              <div class=\"card mb-3\">\n                                  <div class=\"card-body\">\n                                    <h5 class=\"card-title\"></h5>\n                                    <ngx-gallery [options]=\"onlyThumbnailsGalleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                                  </div>\n                                </div>\n                              </div>\n                         \n                          </div>\n                </div>\n              \n                  </form>\n                  <!-- End # Login Form -->\n                  \n                  <!-- Begin | Lost Password Form -->\n                \n                  \n                  \n              </div>\n              <!-- End # DIV Form -->\n\n\n\n"

/***/ }),

/***/ "./src/app/complaints/listcomplaints/listcomplaints.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/listcomplaints/listcomplaints.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#login-modal .modal-dialog {\n  width: 600px;\n  margin-left: 40%; }\n\n.btn-primary {\n  background-color: #13477e !important;\n  border-radius: 100px; }\n\n#login-modal input[type=text], input[type=password] {\n  margin-top: 10px; }\n\n#div-login-msg,\n#div-lost-msg,\n#div-register-msg {\n  border: 1px solid #dadfe1;\n  height: 30px;\n  line-height: 28px;\n  transition: all ease-in-out 500ms; }\n\n#div-login-msg.success,\n#div-lost-msg.success,\n#div-register-msg.success {\n  border: 1px solid #68c3a3;\n  background-color: #c8f7c5; }\n\n#div-login-msg.error,\n#div-lost-msg.error,\n#div-register-msg.error {\n  border: 1px solid #eb575b;\n  background-color: #ffcad1; }\n\n#icon-login-msg,\n#icon-lost-msg,\n#icon-register-msg {\n  width: 30px;\n  float: left;\n  line-height: 28px;\n  text-align: center;\n  background-color: #dadfe1;\n  margin-right: 5px;\n  transition: all ease-in-out 500ms; }\n\n#icon-login-msg.success,\n#icon-lost-msg.success,\n#icon-register-msg.success {\n  background-color: #68c3a3 !important; }\n\n#icon-login-msg.error,\n#icon-lost-msg.error,\n#icon-register-msg.error {\n  background-color: #eb575b !important; }\n\n#img_logo {\n  max-height: 100px;\n  max-width: 100px; }\n\n/* #########################################\n   #    override the bootstrap configs     #\n   ######################################### */\n\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .8; }\n\n.modal-content {\n  background-color: #ececec;\n  border: 1px solid #bdc3c7;\n  border-radius: 0px;\n  outline: 0; }\n\n.modal-header {\n  min-height: 16.43px;\n  padding: 15px 15px 15px 15px;\n  border-bottom: 0px; }\n\n.modal-body {\n  position: relative;\n  padding: 5px 15px 5px 15px; }\n\n.modal-footer {\n  padding: 15px 15px 15px 15px;\n  text-align: left;\n  border-top: 0px; }\n\n.checkbox {\n  margin-bottom: 0px; }\n\n.btn {\n  border-radius: 0px; }\n\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: none; }\n\n.btn-lg, .btn-group-lg > .btn {\n  border-radius: 0px; }\n\n.btn-link {\n  padding: 5px 10px 0px 0px;\n  color: #95a5a6; }\n\n.btn-link:hover, .btn-link:focus {\n  color: #2c3e50;\n  text-decoration: none; }\n\n.glyphicon {\n  top: 0px; }\n\n.btn-primary[_ngcontent-c4] {\n  background-color: transparent !important; }\n\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding: 6px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border: 1px solid #ddd; }\n\n.btn[_ngcontent-c4] {\n  border-radius: 0px;\n  color: #1d4b7c; }\n\n.btn-primary:hover {\n  color: #fff;\n  border-color: #fff; }\n\n.btn:hover {\n  box-shadow: 0px 4px 5px -2px rgba(255, 255, 255, 0), 0px 7px 10px 1px white, 0px 2px 16px 1px rgba(255, 255, 255, 0.12); }\n\n.btn:hover, .btn:focus, .btn.focus {\n  color: #1d4b7c;\n  text-decoration: none; }\n\n.add {\n  background-color: #13477e !important;\n  color: white;\n  border-radius: 100px; }\n\n.form-control {\n  border-radius: 0px; }\n\n.form-heading {\n  color: #fff;\n  font-size: 23px; }\n\n.panel h2 {\n  color: #444444;\n  font-size: 18px;\n  margin: 0 0 8px 0; }\n\n.panel p {\n  color: #777777;\n  font-size: 14px;\n  margin-bottom: 30px;\n  line-height: 24px; }\n\n.login-form .form-control {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  height: 50px;\n  line-height: 50px; }\n\n.main-div {\n  background: #ffffff none repeat scroll 0 0;\n  border-radius: 2px;\n  margin: 10px auto 30px;\n  padding: 10px 10px 10px 10px; }\n\n.login-form .form-group {\n  margin-bottom: 10px; }\n\n.login-form {\n  text-align: center; }\n\n.forgot a {\n  color: #777777;\n  font-size: 14px;\n  text-decoration: underline; }\n\n.login-form .btn.btn-primary {\n  background: #f0ad4e none repeat scroll 0 0;\n  border-color: #f0ad4e;\n  color: #ffffff;\n  font-size: 14px;\n  width: 100%;\n  height: 50px;\n  line-height: 50px;\n  padding: 0; }\n\n.forgot {\n  text-align: left;\n  margin-bottom: 30px; }\n\n.botto-text {\n  color: #ffffff;\n  font-size: 14px;\n  margin: auto; }\n\n.login-form .btn.btn-primary.reset {\n  background: #ff9900 none repeat scroll 0 0; }\n\n.back {\n  text-align: left;\n  margin-top: 10px; }\n\n.back a {\n  color: #444444;\n  font-size: 13px;\n  text-decoration: none; }\n\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: 700;\n  text-align: right;\n  float: left; }\n\n.btn-lg[_ngcontent-c4], .btn-group-lg[_ngcontent-c4] > .btn[_ngcontent-c4] {\n  border-radius: 0px;\n  padding: 8px 10px 7px 13px;\n  margin-top: -3px;\n  border-radius: 100px;\n  color: #fff; }\n\n.btn:focus, .btn:active, button:focus, button:active {\n  outline: none !important;\n  box-shadow: none !important; }\n\n#image-gallery .modal-footer {\n  display: block; }\n\n.ngx-gallery-icon {\n  color: rgba(255, 255, 255, 0.59) !important; }\n\n.thumb {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n\n.login-form[_ngcontent-c4] .form-control[_ngcontent-c4] {\n  background: #f7f7f7 none repeat scroll 0 0;\n  border: 1px solid #d4d4d4;\n  border-radius: 4px;\n  font-size: 14px;\n  line-height: initial; }\n\nul.pagination {\n  display: flex;\n  list-style: none;\n  border-radius: .125rem;\n  padding: 10px;\n  margin: 0 10px 10px 40% !important;\n  width: 100%; }\n\n.input1 {\n  margin: 0px 0px 0px 5%;\n  width: 20%;\n  border-radius: 0px !important;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.close:not(:disabled):not(.disabled) {\n  cursor: pointer;\n  /* float: right; */\n  text-align: right;\n  margin-right: 15px;\n  margin-top: 10px; }\n\n.tabl {\n  width: 100%;\n  float: left; }\n\n.table {\n  background: #fff; }\n\n.input2 {\n  background-color: #0867cc !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin: 0px 0px 0px 2%;\n  width: 20%;\n  float: left !important;\n  margin-bottom: 20px; }\n\n.input1 {\n  background-color: #084280 !important;\n  color: white;\n  padding: 12px 20px;\n  border: none;\n  border-radius: 100px !important;\n  cursor: pointer;\n  margin-bottom: 20px; }\n\n.notifications2 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 44%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications2 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications1 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 20%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications1 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications3 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 68%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications3 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n\n.notifications4 {\n  width: 45px;\n  height: 45px;\n  background: #fff;\n  border-radius: 30px;\n  box-sizing: border-box;\n  text-align: center;\n  float: right;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  position: absolute;\n  z-index: 1111;\n  margin-left: 93%;\n  margin-top: -22px;\n  float: right;\n  text-align: right;\n  z-index: 999; }\n\n.notifications4 .num {\n  position: absolute;\n  top: 11px;\n  right: 14px;\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  background: #fff;\n  color: #222;\n  line-height: 25px;\n  font-family: sans-serif;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/complaints/listcomplaints/listcomplaints.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/complaints/listcomplaints/listcomplaints.component.ts ***!
  \***********************************************************************/
/*! exports provided: ListcomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListcomplaintsComponent", function() { return ListcomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var ListcomplaintsComponent = /** @class */ (function () {
    function ListcomplaintsComponent(storage, http, route, router) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.onlyThumbnailsGalleryOptions = [
            {
                'image': false,
                'height': '100px',
                'thumbnailSize': 'contain',
                'arrowPrevIcon': 'fa fa-angle-left',
                'arrowNextIcon': 'fa fa-angle-right',
                'width': '100%'
            }
        ];
        this.galleryImages = [
            {
                small: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                medium: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png',
                big: 'http://tritontutebox.com/propmall/datauploads/arunexcello/ziva/Project-data/1_COMPANY_PROFILE/vision.png'
            },
            {
                small: 'assets/images/ecommerce/images.jpeg',
                medium: 'assets/images/ecommerce/images.jpeg',
                big: 'assets/images/ecommerce/images.jpeg'
            },
            {
                small: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                medium: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg',
                big: 'assets/images/ecommerce/original_6_Hotel_Pet_Peeves_And_How_Hotels_Should_Solve_Them.jpg'
            }
        ];
        this.titles = [];
        this.datas = [];
        this.urls = new Array();
        this.addissue = new addissue();
        this.datass = [];
    }
    ListcomplaintsComponent.prototype.detectFiles = function (event) {
        var _this = this;
        this.urls = [];
        var files = event.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
    };
    ListcomplaintsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.getFromLocal('user_id');
        this.name = this.getFromLocal('Name');
        this.http.post('http://localhost:84/complaints/complaintlist', { "LoginKey": "" + this.id }).subscribe(function (data) {
            _this.datas = [];
            var dat = data;
            for (var index = 0; index < dat.issue.length; index++) {
                var element = dat.issue[index];
                if (element.status === 'open')
                    _this.datas.push(element);
                console.log(_this.datas);
            }
        });
    };
    ListcomplaintsComponent.prototype.addcomplaint = function () {
        var _this = this;
        this.addissue.LoginKey = "" + this.getFromLocal('user_id');
        this.addissue.complaint_from = this.getFromLocal('Name');
        this.addissue.status = "open";
        this.addissue.posted_on = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["formatDate"])(new Date(), 'dd-MM-yyyy hh:mm:ss a', 'en-US', '+0530');
        console.log(this.addissue.LoginKey, this.addissue.complaint_from, this.addissue.complaint_type, this.addissue.description, this.addissue.posted_on, this.addissue.status, this.addissue.title);
        this.http.post('http://localhost:84/complaints/newcomplaints', { "LoginKey": this.addissue.LoginKey, "complaint_from": this.addissue.complaint_from, "title": this.addissue.title, "description": this.addissue.description, "status": this.addissue.status, "posted_on": this.addissue.posted_on, "complaint_type": this.addissue.complaint_type }).subscribe(function (data) {
            console.log(data);
            alert(data.message);
            _this.ngOnInit();
        });
    };
    ListcomplaintsComponent.prototype.open = function (event, item) {
        var _this = this;
        console.log(item.complaint_id);
        this.http.post('http://132.148.140.42:84/issue/issuedetails', { complaint_id: item.complaint_id }).subscribe(function (data) {
            _this.datass = data.issue;
            console.log(_this.datass);
        });
    };
    ListcomplaintsComponent.prototype.edit = function ($event, item) {
        var _this = this;
        console.log(item.complaint_id);
        this.http.post('http://132.148.140.42:84/issue/issuedetails', { complaint_id: item.complaint_id }).subscribe(function (data) {
            _this.datass = data.issue;
            console.log(_this.datass);
        });
    };
    ListcomplaintsComponent.prototype.addapi1 = function () {
        this.router.navigate(['main/listcomplaints']);
    };
    ListcomplaintsComponent.prototype.addapi2 = function () {
        this.router.navigate(['main/completecomplaints']);
    };
    ListcomplaintsComponent.prototype.addapi3 = function () {
        this.router.navigate(['main/closedcomplaints']);
    };
    ListcomplaintsComponent.prototype.getFromLocal = function (key) {
        // console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    ListcomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listcomplaints',
            template: __webpack_require__(/*! ./listcomplaints.component.html */ "./src/app/complaints/listcomplaints/listcomplaints.component.html"),
            styles: [__webpack_require__(/*! ./listcomplaints.component.scss */ "./src/app/complaints/listcomplaints/listcomplaints.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_4__["WebStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListcomplaintsComponent);
    return ListcomplaintsComponent;
}());

var Issue = /** @class */ (function () {
    function Issue() {
    }
    return Issue;
}());
var Issuelist = /** @class */ (function () {
    function Issuelist() {
    }
    return Issuelist;
}());
var addissue = /** @class */ (function () {
    function addissue() {
    }
    return addissue;
}());


/***/ }),

/***/ "./src/app/complaints/newcomplaints/newcomplaints.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/complaints/newcomplaints/newcomplaints.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newcomplaints works!\n</p>\n"

/***/ }),

/***/ "./src/app/complaints/newcomplaints/newcomplaints.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/complaints/newcomplaints/newcomplaints.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complaints/newcomplaints/newcomplaints.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/complaints/newcomplaints/newcomplaints.component.ts ***!
  \*********************************************************************/
/*! exports provided: NewcomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewcomplaintsComponent", function() { return NewcomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewcomplaintsComponent = /** @class */ (function () {
    function NewcomplaintsComponent() {
    }
    NewcomplaintsComponent.prototype.ngOnInit = function () {
    };
    NewcomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newcomplaints',
            template: __webpack_require__(/*! ./newcomplaints.component.html */ "./src/app/complaints/newcomplaints/newcomplaints.component.html"),
            styles: [__webpack_require__(/*! ./newcomplaints.component.scss */ "./src/app/complaints/newcomplaints/newcomplaints.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewcomplaintsComponent);
    return NewcomplaintsComponent;
}());



/***/ }),

/***/ "./src/app/complaints/viewcomplaints/viewcomplaints.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/viewcomplaints/viewcomplaints.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewcomplaints works!\n</p>\n"

/***/ }),

/***/ "./src/app/complaints/viewcomplaints/viewcomplaints.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/complaints/viewcomplaints/viewcomplaints.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complaints/viewcomplaints/viewcomplaints.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/complaints/viewcomplaints/viewcomplaints.component.ts ***!
  \***********************************************************************/
/*! exports provided: ViewcomplaintsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewcomplaintsComponent", function() { return ViewcomplaintsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewcomplaintsComponent = /** @class */ (function () {
    function ViewcomplaintsComponent() {
    }
    ViewcomplaintsComponent.prototype.ngOnInit = function () {
    };
    ViewcomplaintsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewcomplaints',
            template: __webpack_require__(/*! ./viewcomplaints.component.html */ "./src/app/complaints/viewcomplaints/viewcomplaints.component.html"),
            styles: [__webpack_require__(/*! ./viewcomplaints.component.scss */ "./src/app/complaints/viewcomplaints/viewcomplaints.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewcomplaintsComponent);
    return ViewcomplaintsComponent;
}());



/***/ }),

/***/ "./src/app/components/echart-component/echart.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/echart-component/echart.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "px-gdn-echarts {\n  display: block; }\n"

/***/ }),

/***/ "./src/app/components/echart-component/echart.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/echart-component/echart.component.ts ***!
  \*****************************************************************/
/*! exports provided: EchartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EchartComponent", function() { return EchartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * This is simple component to show echarts. Mostly it is used to display small charts in table - it is convenient to use
 * simple component in *ngFor directive. In other cases, native echarts approach is used.
 */
var EchartComponent = /** @class */ (function () {
    function EchartComponent(elementRef) {
        this.elementRef = elementRef;
    }
    EchartComponent.prototype.ngOnInit = function () {
        this.chart = echarts__WEBPACK_IMPORTED_MODULE_1__["init"](this.elementRef.nativeElement);
        this.chart.setOption(this.option);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], EchartComponent.prototype, "option", void 0);
    EchartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'px-gdn-echarts',
            template: '',
            styles: [__webpack_require__(/*! ./echart.component.scss */ "./src/app/components/echart-component/echart.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], EchartComponent);
    return EchartComponent;
}());



/***/ }),

/***/ "./src/app/components/multimenu/multimenu.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/multimenu/multimenu.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<perfect-scrollbar class=\"menu-scroll\">\n  <ul [class.menu-collapse]=\"collapse | async\">\n    <ng-template #recursiveList let-menuModel>\n      <li #menuItem *ngFor=\"let item of menuModel\" (click)=\"toggleOpen(item); $event.stopPropagation()\"\n          [ngClass]=\"{opened: item.opened, selected: item.selected, pointed: item === pointedMenuItem}\">\n        <a *ngIf=\"item.externalUrl; else withRouterLink\" [attr.href]=\"item.externalUrl\"\n           class=\"d-flex align-items-center\">\n          <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n        </a>\n        <ng-template #withRouterLink>\n          <a *ngIf=\"!item.externalUrl\" [routerLink]=\"item.routerUrl ? item.routerUrl : null\"\n             class=\"d-flex align-items-center\">\n            <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n          </a>\n        </ng-template>\n        <ng-template #itemContent>\n          <i *ngIf=\"item.iconClass || item.iconCode\" class=\"{{item.iconClass}}\">{{item.iconCode}}</i>\n          <span>{{item.title}}</span>\n          <div *ngIf=\"item.count\">{{item.count}}</div>\n        </ng-template>\n        <ul *ngIf=\"item.children?.length > 0\">\n          <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: item.children }\"></ng-container>\n        </ul>\n      </li>\n    </ng-template>\n    <ng-container *ngTemplateOutlet=\"recursiveList; context:{ $implicit: menuModel }\"></ng-container>\n  </ul>\n  <div #pointer class=\"pointer\"></div>\n</perfect-scrollbar>\n"

/***/ }),

/***/ "./src/app/components/multimenu/multimenu.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/multimenu/multimenu.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "px-gdn-multimenu {\n  display: block; }\n  px-gdn-multimenu .menu-scroll {\n    height: 100%; }\n  px-gdn-multimenu .menu-scroll ul {\n      list-style-type: none;\n      color: rgba(255, 255, 255, 0.87);\n      padding: 0; }\n  px-gdn-multimenu .menu-scroll ul li a {\n        position: relative;\n        height: 50px;\n        width: 100%;\n        padding-left: 90px;\n        padding-right: 30px;\n        line-height: 50px;\n        color: inherit;\n        text-decoration: inherit;\n        transition: all 0.1s ease; }\n  px-gdn-multimenu .menu-scroll ul li a:hover {\n          -webkit-transform: scale(1.1);\n                  transform: scale(1.1);\n          color: #ffffff;\n          font-weight: 600; }\n  px-gdn-multimenu .menu-scroll ul li a:hover i {\n            color: #ffffff; }\n  px-gdn-multimenu .menu-scroll ul li a i {\n          position: absolute;\n          left: 40px;\n          top: 50%;\n          -webkit-transform: translateY(-50%);\n                  transform: translateY(-50%);\n          color: rgba(255, 255, 255, 0.54); }\n  px-gdn-multimenu .menu-scroll ul li a span {\n          width: 100%;\n          display: inline-block;\n          overflow: hidden;\n          text-overflow: ellipsis;\n          white-space: nowrap; }\n  px-gdn-multimenu .menu-scroll ul li a div {\n          min-width: 20px;\n          height: 20px;\n          border-radius: 10px;\n          background-color: #ffffff;\n          text-align: center;\n          font-size: 10px;\n          line-height: 20px;\n          color: #19c9b4;\n          transition: all 0.3s ease; }\n  px-gdn-multimenu .menu-scroll ul li li a {\n        padding-left: 100px; }\n  px-gdn-multimenu .menu-scroll ul li li li a {\n        padding-left: 110px; }\n  px-gdn-multimenu .menu-scroll ul li > ul {\n        max-height: 0;\n        overflow: hidden;\n        transition: max-height 0.35s ease-out; }\n  px-gdn-multimenu .menu-scroll ul li > ul li {\n          -webkit-transform: scale(0);\n                  transform: scale(0);\n          transition: -webkit-transform 0s linear 0.4s;\n          transition: transform 0s linear 0.4s;\n          transition: transform 0s linear 0.4s, -webkit-transform 0s linear 0.4s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul {\n        transition: max-height 0.35s ease-in;\n        max-height: 1000px; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li {\n          -webkit-transform: scale(1);\n                  transform: scale(1); }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(1) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.02s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.02s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.02s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.02s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(2) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.06s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.06s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.06s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.06s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(3) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.12s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.12s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.12s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.12s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(4) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.2s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.2s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.2s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.2s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(5) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.3s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.3s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.3s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.3s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(6) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.42s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.42s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.42s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.42s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(7) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.56s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.56s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.56s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.56s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(8) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.72s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.72s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.72s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.72s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(9) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.9s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.9s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.9s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 0.9s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(10) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.1s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.1s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.1s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.1s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(11) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.32s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.32s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.32s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.32s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(12) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.56s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.56s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.56s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.56s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(13) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.82s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.82s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.82s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 1.82s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(14) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.1s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.1s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.1s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.1s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(15) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.4s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.4s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.4s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.4s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(16) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.72s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.72s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.72s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 2.72s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(17) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.06s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.06s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.06s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.06s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(18) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.42s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.42s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.42s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.42s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(19) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.8s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.8s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.8s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 3.8s; }\n  px-gdn-multimenu .menu-scroll ul li.opened > ul li:nth-child(20) {\n            transition: -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 4.2s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 4.2s;\n            transition: transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 4.2s, -webkit-transform 0.3s cubic-bezier(0.24, 1.13, 0.4, 1.39) 4.2s; }\n  px-gdn-multimenu .menu-scroll ul li.selected {\n        color: #ffffff; }\n  px-gdn-multimenu .menu-scroll ul li.selected a i {\n          color: #ffffff; }\n  px-gdn-multimenu .menu-scroll ul li.pointer {\n        background-color: bisque; }\n  px-gdn-multimenu .menu-scroll ul.menu-collapse li a div {\n        opacity: 0; }\n  px-gdn-multimenu .menu-scroll .pointer {\n      position: absolute;\n      right: 0;\n      top: 25px;\n      width: 0;\n      height: 0;\n      -webkit-transform: translateY(15px);\n              transform: translateY(15px);\n      border-style: solid;\n      border-width: 10px 10px 10px 0;\n      border-color: transparent #f2f3f7 transparent transparent;\n      transition: top 0.4s cubic-bezier(0.41, 1.18, 0.69, 1.08); }\n  px-gdn-multimenu .menu-scroll .ps__rail-y {\n      background-color: transparent !important; }\n  px-gdn-multimenu .menu-scroll .ps-content {\n      position: relative; }\n"

/***/ }),

/***/ "./src/app/components/multimenu/multimenu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/multimenu/multimenu.component.ts ***!
  \*************************************************************/
/*! exports provided: MultimenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultimenuComponent", function() { return MultimenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MultimenuComponent = /** @class */ (function () {
    function MultimenuComponent(router, renderer) {
        this.router = router;
        this.renderer = renderer;
        // Informs when menu collapses
        this.collapse = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    MultimenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var firstCall = true;
        var onNavigation = function () {
            _this.menuModel.forEach(function (d) { return _this.checkSelection(d); });
            _this.menuModel.forEach(function (d) { return _this.findPointedMenuItem(d, true); });
            _this.movePointer();
            if (firstCall) {
                _this.onMouseLeave();
                firstCall = false;
            }
        };
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                onNavigation();
            }
        });
        setTimeout(function () { return onNavigation(); });
    };
    /**
     * Set selected flag to model if any of children is selected.
     * @param {MenuModel} item
     */
    MultimenuComponent.prototype.checkSelection = function (item) {
        var _this = this;
        item.selected = item.routerUrl && this.router.isActive(item.routerUrl, true);
        var childrenSelected = false;
        if (item.children) {
            childrenSelected = item.children.reduce(function (accumulator, item) {
                _this.checkSelection(item);
                return item.selected || accumulator;
            }, false);
            item.selected = item.selected || childrenSelected;
        }
        if (item.selected) {
            item.opened = true;
        }
    };
    /**
     * Opens menu and moves pointer
     * @param item
     */
    MultimenuComponent.prototype.toggleOpen = function (item) {
        var _this = this;
        item.opened = !item.opened;
        this.menuModel.forEach(function (d) { return _this.findPointedMenuItem(d, true); });
        this.movePointer();
    };
    /**
     * Finds menu items, that is selected
     * @param item
     * @param parentOpened
     */
    MultimenuComponent.prototype.findPointedMenuItem = function (item, parentOpened) {
        var _this = this;
        if (item.selected && parentOpened) {
            this.pointedMenuItem = item;
        }
        if (item.opened && item.children) {
            item.children.forEach(function (d) { return _this.findPointedMenuItem(d, item.opened); });
        }
    };
    /**
     * Moves pointer to selected item
     */
    MultimenuComponent.prototype.movePointer = function () {
        var _this = this;
        var moveFunction = function () {
            var pointed = _this.pointedListItem.find(function (item) { return item.nativeElement.classList.contains('pointed'); }).nativeElement;
            _this.pointer.nativeElement.style.top = pointed.offsetTop + 'px';
        };
        // Move pointer 2 times - before open animation and after
        setTimeout(moveFunction, 0);
        setTimeout(moveFunction, 350);
    };
    Object.defineProperty(MultimenuComponent.prototype, "smallMenu", {
        /**
         * Changes menu mode
         * @param value
         */
        set: function (value) {
            if (value) {
                this.isSmallMenu = value;
                this.onMouseLeave();
            }
            else {
                this.onMouseEnter();
                this.isSmallMenu = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MultimenuComponent.prototype.onMouseEnter = function () {
        var _this = this;
        if (this.isSmallMenu) {
            this.menuModel.forEach(function (item, i) {
                item.opened = _this.openStates[i];
            });
            this.menuModel.forEach(function (d) { return _this.findPointedMenuItem(d, true); });
            this.movePointer();
            this.openStates = null;
            this.collapse.emit(false);
        }
    };
    MultimenuComponent.prototype.onMouseLeave = function () {
        var _this = this;
        if (this.isSmallMenu) {
            this.openStates = this.menuModel.map(function (item) {
                var state = item.opened;
                item.opened = false;
                return state;
            });
            this.menuModel.forEach(function (d) { return _this.findPointedMenuItem(d, true); });
            this.movePointer();
            this.collapse.emit(true);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], MultimenuComponent.prototype, "menuModel", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.small-menu'),
        __metadata("design:type", Object)
    ], MultimenuComponent.prototype, "isSmallMenu", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('menuItem'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], MultimenuComponent.prototype, "pointedListItem", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('pointer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], MultimenuComponent.prototype, "pointer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], MultimenuComponent.prototype, "collapse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], MultimenuComponent.prototype, "smallMenu", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultimenuComponent.prototype, "onMouseEnter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MultimenuComponent.prototype, "onMouseLeave", null);
    MultimenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'px-gdn-multimenu',
            template: __webpack_require__(/*! ./multimenu.component.html */ "./src/app/components/multimenu/multimenu.component.html"),
            styles: [__webpack_require__(/*! ./multimenu.component.scss */ "./src/app/components/multimenu/multimenu.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], MultimenuComponent);
    return MultimenuComponent;
}());



/***/ }),

/***/ "./src/app/feedback/editfeedback/editfeedback.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/editfeedback/editfeedback.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  editfeedback works!\n</p>\n"

/***/ }),

/***/ "./src/app/feedback/editfeedback/editfeedback.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/editfeedback/editfeedback.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/editfeedback/editfeedback.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/editfeedback/editfeedback.component.ts ***!
  \*****************************************************************/
/*! exports provided: EditfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditfeedbackComponent", function() { return EditfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditfeedbackComponent = /** @class */ (function () {
    function EditfeedbackComponent() {
    }
    EditfeedbackComponent.prototype.ngOnInit = function () {
    };
    EditfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editfeedback',
            template: __webpack_require__(/*! ./editfeedback.component.html */ "./src/app/feedback/editfeedback/editfeedback.component.html"),
            styles: [__webpack_require__(/*! ./editfeedback.component.scss */ "./src/app/feedback/editfeedback/editfeedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EditfeedbackComponent);
    return EditfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/feedback/listfeedback/listfeedback.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/listfeedback/listfeedback.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- BEGIN # BOOTSNIP INFO -->\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div _ngcontent-c4=\"\" class=\"header\">\n        <div _ngcontent-c4=\"\" class=\"row\">\n          <div _ngcontent-c4=\"\" class=\"col-12 col-md-6 mb-3\">\n            <div _ngcontent-c4=\"\" class=\"col-md-8\">\n              <h3 _ngcontent-c4=\"\" class=\"adsc\">\n                <i _ngcontent-c4=\"\" class=\"fa fa-university\"></i> &nbsp;Open Complaint</h3>\n              </div>\n            </div>\n            <div _ngcontent-c4=\"\" class=\"col-md-6\">\n                <button type=\"button\" class=\"btn btn-info btn-lg pull-right\" style=\"color: #fff;\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal1\" >Add FAQ</button>\n\n\n            </div>\n          </div>\n         \n        </div>\n        <div class=\" butn col-md-12 pull-left\">\n          <div class=\"notifications1\">\n                    \n              <span class=\"num\">{{All}}</span>\n             \n          </div>\n        <button class=\"input2\" (click) = \"addapi1()\" >Open</button>\n        <div class=\"notifications2\">\n            \n              <span class=\"num\">{{Open}}</span>\n             \n          </div>\n        <button class=\"input1\" (click) = \"addapi2()\">Complete</button>\n         \n        <div class=\"notifications3\">\n            \n              <span class=\"num\">{{Inprogree}}</span>\n             \n          </div>\n        <button class=\"input1\" (click) = \"addapi3()\" >Closed</button>\n               </div>\n        <div class=\"col\">\n    \n            <div class=\"col-md-12\">\n              <div class=\"row\">\n                <div class=\"tabl\" >\n                    <table class=\"table table-bordered\" style=\"border-collapse:collapse;\">\n                        <thead>\n                            <tr>\n                                <th>SL.NO</th>\n                                <th>Complaint ID</th>\n                                <th>Complaint From</th>\n                                <th>Poster ID</th>\n                                <th>Complaint Type</th>\n                                <th>Title</th>\n                                <th>Description</th>\n                                <th>Posted On</th>\n                                <th>Status</th>\n                                <th>View</th>\n                                <th>Edit</th>\n                               \n                            </tr>\n                        </thead>\n                        <tbody>\n                              <ng-container  *ngFor=\"let data of datas ;  let i = index\">\n                                      <tr>\n                                          <td>{{i+1}}</td> \n                                          <td>{{data.complaint_id}}</td>\n                                          <td>{{data.complaint_from}}</td>\n                                          <td id=\"l1\">{{data.poster_id}}</td>\n                                          <td id=\"a1\">{{data.complaint_type}}</td>\n                                          <td id=\"pc1\">{{data.title}}</td>\n                                          <td id=\"pc1\">{{data.description}}</td>\n                                          <td id=\"pc1\">{{data.posted_on}}</td>\n                                          <td id=\"pc1\">{{data.status}}</td>\n                                          <td><button _ngcontent-c6=\"\" class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" data-target=\"#login-modal2\" data-toggle=\"modal\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                        <!-- <td> <button class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal2\" (click)=\"open($event, data)\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td> -->\n                                        <td><button type=\"button\" data-toggle=\"modal\"  data-uid=\"1\" class=\" btn  btn-sm\" data-toggle=\"modal\" data-target=\"#login-modal3\" (click)=\"Move($event, data)\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"fa m-1 fa-send ng-star-inserted\"></i></button></td> \n                                    </tr>\n                                    </ng-container>      \n                        </tbody>\n                    </table>\n                    <div *ngIf=\"loading\" ><div class=\"loader text-center\"></div></div>     \n                    <div class=\"card-footer p-0\">\n                    <ngb-pagination   [collectionSize]=\"collsize\" [(page)]=\"advancedPage\" (pageChange)=\"newsync()\" [boundaryLinks]=\"true\" ></ngb-pagination>\n                    </div>     \n              </div>\n              </div>\n            </div>\n            </div>\n        \n       \n  </div>\n</div>\n<!-- END # BOOTSNIP INFO -->\n\n\n\n\n    <!-- BEGIN # MODAL LOGIN -->\n<div class=\"modal fade\" id=\"login-modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog\" style=\"max-width: 700px;margin-right: 17%;\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n         \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>View Compliant</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                          \n\n                                  <div class=\"form-group row\">\n                                      \n                                  <label class=\"col-sm-4\">Complaint From :</label>\n                                  <div class=\"col-md-8\">\n                                      <input type=\"text\" class=\"form-control\"  value = \"{{datass.issue.complaint_from}}\" id=\"name\" disabled>\n                                  </div>\n                                  </div>\n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Type</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\"  value = \"{{datass.issue.complaint_type}}\" disabled>\n                          \n                                  </div>\n\n\n                                  \n\n                                  <div class=\"form-group\">\n                          \n                                      <label>Title</label>\n                                      <input type=\"email\" class=\"form-control\" id=\"inputEmail\"  value = \"{{datass.issue.title}}\" disabled>\n                          \n                                  </div>\n                          \n                                  <div class=\"form-group\">\n                                      <label>Description</label>\n                                      <textarea type=\"text\" class=\"form-control\"   id=\"inputEmail\"  value = \"{{datass.issue.description}}\" disabled></textarea>\n                          \n                                  </div>\n                        \n                              </form>\n\n                              <div class=\"card mb-3\">\n                                  <div class=\"card-body\">\n                                    <h5 class=\"card-title\"></h5>\n                                    <ngx-gallery [options]=\"onlyThumbnailsGalleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                                  </div>\n                                </div>\n                              </div>\n                         \n                          </div>\n                </div>\n              \n                  </form>\n                  <!-- End # Login Form -->\n                  \n                  <!-- Begin | Lost Password Form -->\n                \n                  \n                  \n              </div>\n              <!-- End # DIV Form -->\n              \n    </div>\n  </div>\n</div>\n  <!-- END # MODAL LOGIN -->\n\n\n        <!-- BEGIN # MODAL LOGIN -->\n<div class=\"modal fade\" id=\"login-modal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n  <div class=\"modal-dialog\" style=\"max-width: 700px;margin-right: 17%;\">\n  <div class=\"modal-content\">\n    \n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n         \n       \n            \n            <!-- Begin # DIV Form -->\n            <div id=\"div-forms\">\n            \n                <!-- Begin # Login Form -->\n                <form id=\"login-form\">\n                <div class=\"modal-body\">\n          \n                    <div class=\"login-form\">\n                        <div class=\"main-div\">\n                            <div class=\"panel\">\n                                <h3>Move Compliant</h3>\n                          \n                           </div>\n                            <form id=\"Login\">\n                                <div class=\"form-group\">  \n                                <label>Complaint_ID</label>\n                                    <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Complaint_ID\" value =\"{{datass.issue.complaint_id}}\" #complaint_id disabled>\n                                </div>\n                                <div class=\"form-group\">  \n                                  <label>Enter  Your ID</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Ender your ID\" value = \"Name: {{name}} & User-ID: {{id}}\" #your_id disabled>\n                                  </div>\n                                <div class=\"form-group\">\n                                    <label>Move To</label>\n                                    <select class=\"form-control\" id=\"exampleFormControlSelect1\" #moved_to >\n                                      <option>completed</option>\n                                      <option>Inprogress</option>\n                                    </select>                            \n                                </div>\n                            </form>\n                            <div class=\"card mb-3\">\n                                <div class=\"card-body\">\n                                  <h5 class=\"card-title\"></h5>\n                                  <ngx-gallery [options]=\"onlyThumbnailsGalleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n                                </div>\n                              </div>\n                            </div>\n                            <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"submit(complaint_id.value,your_id.value,moved_to.value)\">Submit</button>\n                        </div>\n              </div>\n                </form>   \n            </div>\n            <!-- End # DIV Form -->\n            \n  </div>\n</div>\n</div>\n<!-- END # MODAL LOGIN -->\n\n\n<!-- BEGIN # BOOTSNIP INFO -->\n<div class=\"container\">\n    <div class=\"row\">\n        <div _ngcontent-c4=\"\" class=\"header\">\n          <div _ngcontent-c4=\"\" class=\"row\">\n            <div _ngcontent-c4=\"\" class=\"col-12 col-md-6 mb-3\">\n              <div _ngcontent-c4=\"\" class=\"col-md-8\">\n                <h3 _ngcontent-c4=\"\" class=\"adsc\">\n                  <i _ngcontent-c4=\"\" class=\"fa fa-university\"></i> &nbsp;FAQ List</h3>\n                </div>\n              </div>\n              <div _ngcontent-c4=\"\" class=\"col-md-6\">\n                  <button type=\"button\" class=\"btn btn-info btn-lg pull-right\" style=\"color: #fff;\" data-toggle=\"collapse\"  data-toggle=\"modal\" data-target=\"#login-modal1\" >Add FAQ</button>\n              </div>\n            </div>\n           \n          </div>\n          <div class=\"col stglit\">\n      \n              <div class=\"col-md-12\">\n                <div class=\"row\">\n                  <div class=\"tabl\" >\n                      <table class=\"table table-bordered table-responsive\" style=\"border-collapse:collapse;\">\n                          <thead>\n                              <tr>\n                                  <th>SL.NO</th>\n                                  <th>FAQ ID</th>\n                                  <th>Questions</th>\n                                  <th>Answers</th>\n                                  <th>Date</th>\n                                  <th>View</th> \n                                  <th>Update</th>      \n                                  <th>Delete</th>    \n                              </tr>\n                          </thead>\n                          <tbody>\n                                <ng-container  *ngFor=\"let data of datas ;  let i = index\">\n                                        <tr>\n                                            <td>{{i+1}}</td> \n                                            <td>{{data.faq_id}}</td>\n                                            <td>{{data.questions}}</td>\n                                            <td id=\"l1\">{{data.answers}}</td>\n                                            <td id=\"l1\">{{data.date}}</td>\n                                          <td> <button class=\"accordion-toggle  btn mat-button-wrapper btn-sm\" style=\"background: transparent;\" data-toggle=\"collapse\"  data-toggle=\"modal\"  data-toggle=\"modal\" data-target=\"#login-modal3\" (click)=\"view($event, data)\"><i _ngcontent-c6=\"\" class=\"m-1 icon-screen-desktop\"></i></button></td>\n                                          <td><button type=\"button\" data-toggle=\"modal\"  data-uid=\"1\" class=\" btn  btn-sm\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-note\" data-toggle=\"modal\" data-target=\"#login-modal2\" (click)=\"edit($event,data)\"></i></button></td> \n                                          <td><button type=\"button\" data-toggle=\"modal\" data-target=\"#delete\" data-uid=\"1\" class=\" btn  btn-sm\" style=\"background: transparent;\"><i _ngcontent-c6=\"\" class=\"m-1 icon-close\" (click)=\"delete($event,data)\"></i></button></td>\n                                      </tr>\n                                      </ng-container>      \n                          </tbody>\n                      </table>\n                      <div *ngIf=\"loading\" ><div class=\"loader text-center\"></div></div>     \n                      <div class=\"card-footer p-0\">\n                      <ngb-pagination   [collectionSize]=\"collsize\" [(page)]=\"advancedPage\" (pageChange)=\"newsync()\" [boundaryLinks]=\"true\" ></ngb-pagination>\n                      </div>     \n                </div>\n                </div>\n              </div>\n              </div>\n          \n         \n    </div>\n  </div>\n  \n  \n  <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal1\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-dialogs\" style=\"max-width: 500px;\">\n    <div class=\"modal-content\">\n      \n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n           \n         \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>Add FAQ</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                                  <div class=\"form-group\">  \n                                  <label>Questions</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Topic title\" value =\"\" name=\"\" #quest >\n                                  </div>\n                                  <div class=\"form-group\">  \n                                    <label>Answers</label>\n                                    <textarea type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Description\" value=\"\" name=\"\" #ans></textarea>\n                                    </div>\n                              </form>\n                              </div>\n                              <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click)=\"assign(quest.value,ans.value)\">Submit</button>\n                          </div>\n                </div>\n              \n                  </form>\n                  <!-- End # Login Form -->\n                  \n                  <!-- Begin | Lost Password Form -->\n                \n                  \n                  \n              </div>\n              <!-- End # DIV Form -->\n              \n    </div>\n  </div>\n  </div>\n  <!-- END # MODAL LOGIN -->\n  \n  \n    <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal2\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-dialogs \" style=\"max-width: 700px;\">\n    <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n     \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>Update FAQ</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                          \n    \n                                  <div class=\"form-group\">\n                          \n                                  <label>Question</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\" value=\"{{datass.questions}}\" #questions >\n                          \n                                  </div>\n    \n                                  <div class=\"form-group\">\n                          \n                                      <label>Answer</label>\n                                      <textarea class=\"form-control\" id=\"name\" value=\"{{datass.answers}}\" #answers ></textarea>\n                          \n                                  </div>\n                              </form>\n                              </div>\n                              <button class=\"btn btn-primary\" data-dismiss=\"modal\" style=\"color:#fff; background:#13477e!important;\" (click) = \"update(questions.value,answers.value)\">Submit</button>\n                          </div>\n                </div>\n              \n                  </form>\n                  <!-- End # Login Form -->\n                  \n                  <!-- Begin | Lost Password Form -->\n                \n                  \n                  \n              </div>\n              <!-- End # DIV Form -->\n              \n    </div>\n    </div>\n    </div>\n    <!-- END # MODAL LOGIN -->\n  \n    <!-- BEGIN # MODAL LOGIN -->\n  <div class=\"modal fade\" id=\"login-modal3\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\" style=\"display: none;\">\n    <div class=\"modal-dialog modal-dialogs\" style=\"max-width: 700px;\">\n    <div class=\"modal-content\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n     \n              \n              <!-- Begin # DIV Form -->\n              <div id=\"div-forms\">\n              \n                  <!-- Begin # Login Form -->\n                  <form id=\"login-form\">\n                  <div class=\"modal-body\">\n            \n                      <div class=\"login-form\">\n                          <div class=\"main-div\">\n                              <div class=\"panel\">\n                                  <h3>View FAQ</h3>\n                            \n                             </div>\n                              <form id=\"Login\">\n                                  <div class=\"form-group\">\n                                  <label>Question</label>\n                                      <input type=\"text\" class=\"form-control\" id=\"name\" value=\"{{datass.questions}}\" disabled>\n                                  </div>\n                                  <div class=\"form-group\">\n                                      <label>Answer</label>\n                                      <textarea class=\"form-control\" id=\"name\" value=\"{{datass.answers}}\" disabled ></textarea>\n                          \n                                  </div>\n                              </form>\n                              </div>\n                          </div>\n                </div>\n                  </form>\n              </div>\n    </div>\n    </div>\n    </div>\n    <!-- END # MODAL LOGIN -->"

/***/ }),

/***/ "./src/app/feedback/listfeedback/listfeedback.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/listfeedback/listfeedback.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/listfeedback/listfeedback.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/listfeedback/listfeedback.component.ts ***!
  \*****************************************************************/
/*! exports provided: ListfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListfeedbackComponent", function() { return ListfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListfeedbackComponent = /** @class */ (function () {
    function ListfeedbackComponent() {
    }
    ListfeedbackComponent.prototype.ngOnInit = function () {
    };
    ListfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listfeedback',
            template: __webpack_require__(/*! ./listfeedback.component.html */ "./src/app/feedback/listfeedback/listfeedback.component.html"),
            styles: [__webpack_require__(/*! ./listfeedback.component.scss */ "./src/app/feedback/listfeedback/listfeedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ListfeedbackComponent);
    return ListfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/feedback/newfeedback/newfeedback.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/newfeedback/newfeedback.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  newfeedback works!\n</p>\n"

/***/ }),

/***/ "./src/app/feedback/newfeedback/newfeedback.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/newfeedback/newfeedback.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/newfeedback/newfeedback.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/feedback/newfeedback/newfeedback.component.ts ***!
  \***************************************************************/
/*! exports provided: NewfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewfeedbackComponent", function() { return NewfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewfeedbackComponent = /** @class */ (function () {
    function NewfeedbackComponent() {
    }
    NewfeedbackComponent.prototype.ngOnInit = function () {
    };
    NewfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-newfeedback',
            template: __webpack_require__(/*! ./newfeedback.component.html */ "./src/app/feedback/newfeedback/newfeedback.component.html"),
            styles: [__webpack_require__(/*! ./newfeedback.component.scss */ "./src/app/feedback/newfeedback/newfeedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewfeedbackComponent);
    return NewfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/feedback/reportfeedback/reportfeedback.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/feedback/reportfeedback/reportfeedback.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  reportfeedback works!\n</p>\n"

/***/ }),

/***/ "./src/app/feedback/reportfeedback/reportfeedback.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/feedback/reportfeedback/reportfeedback.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/reportfeedback/reportfeedback.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/feedback/reportfeedback/reportfeedback.component.ts ***!
  \*********************************************************************/
/*! exports provided: ReportfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportfeedbackComponent", function() { return ReportfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportfeedbackComponent = /** @class */ (function () {
    function ReportfeedbackComponent() {
    }
    ReportfeedbackComponent.prototype.ngOnInit = function () {
    };
    ReportfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reportfeedback',
            template: __webpack_require__(/*! ./reportfeedback.component.html */ "./src/app/feedback/reportfeedback/reportfeedback.component.html"),
            styles: [__webpack_require__(/*! ./reportfeedback.component.scss */ "./src/app/feedback/reportfeedback/reportfeedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportfeedbackComponent);
    return ReportfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/feedback/viewfeedback/viewfeedback.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/viewfeedback/viewfeedback.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  viewfeedback works!\n</p>\n"

/***/ }),

/***/ "./src/app/feedback/viewfeedback/viewfeedback.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/feedback/viewfeedback/viewfeedback.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feedback/viewfeedback/viewfeedback.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/feedback/viewfeedback/viewfeedback.component.ts ***!
  \*****************************************************************/
/*! exports provided: ViewfeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewfeedbackComponent", function() { return ViewfeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ViewfeedbackComponent = /** @class */ (function () {
    function ViewfeedbackComponent() {
    }
    ViewfeedbackComponent.prototype.ngOnInit = function () {
    };
    ViewfeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-viewfeedback',
            template: __webpack_require__(/*! ./viewfeedback.component.html */ "./src/app/feedback/viewfeedback/viewfeedback.component.html"),
            styles: [__webpack_require__(/*! ./viewfeedback.component.scss */ "./src/app/feedback/viewfeedback/viewfeedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewfeedbackComponent);
    return ViewfeedbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/changepasword/changepasword.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/changepasword/changepasword.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mx-auto login\">\n  <div class=\"card-body\">\n\n    <h2 class=\"card-title text-center mb-5\">  <img src=\"assets/images/cynosure.png\"></h2>\n    <form>\n      <div class=\"form-group \">\n        <label for=\"password\">Old Password</label>\n        <input #uname  type=\"password\" class=\"form-control col-md-8\" id=\"password\" required>\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwords\">New Password</label>\n        <input #pass type=\"password\" class=\"form-control col-md-8\" id=\"passwords\">\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"passwords\">Confirm Password</label>\n          <input #pass1 type=\"password\" class=\"form-control col-md-8\" id=\"passwords\">\n      </div>\n\n      <div class=\"mt-5 text-center\">\n        <button onclick=\"myFunction()\" type=\"button\" class=\"btn  btn btn-primary px-gdn-btn mb-3 mr-3\"   style=\"    padding: 10px;\n        width: 100%;\n        margin-top: 2pc;\" >Submit</button>\n\n\n      </div>\n      <!-- <button onclick=\"myFunction()\">Try it</button> -->\n\n\n      <div class=\"alert alert-danger\" id=\"passwordsNoMatchRegister\" style=\"display:none;\">\n          <strong>Error!</strong> Looks like the passwords you entered don't match!\n        </div>\n      <!-- <div class=\"text-center\">Don’t have an account? <a routerLink=\"/register\">Sign up</a></div> -->\n\n    </form>\n\n  </div>\n</div>\n<div class=\"text-nowrap footer\">\n  2018 <a routerLink=\"/\">Cynosure</a> all rights reserved\n</div>\n<!-- <img src=\"/assets/images/user-pages/login-img.png\"> -->\n"

/***/ }),

/***/ "./src/app/pages/changepasword/changepasword.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/changepasword/changepasword.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  height: 100%;\n  overflow: hidden !important; }\n\nbody {\n  height: 100%; }\n\n.login {\n  margin-top: 50px !important; }\n\n.card {\n  max-width: 630px;\n  margin-top: 100px; }\n\n.app-login-page img {\n  position: static !important;\n  left: 0;\n  top: 20 !important;\n  width: 35%;\n  margin: 0 auto; }\n\n.footer {\n  width: 100%;\n  float: left;\n  background: #222;\n  padding: 10px;\n  text-align: center;\n  bottom: 0;\n  position: fixed;\n  color: #fff; }\n\n.form-control {\n  border-radius: 0px;\n  font-size: 14px;\n  font-weight: 500;\n  width: 100%;\n  line-height: 1.42857143;\n  border: 1px solid #327d1a;\n  background-color: #fff;\n  letter-spacing: 0px;\n  margin-bottom: 14px;\n  webkit-box-shadow: 0px 11px 10px -10px rgba(0, 0, 0, 0.24);\n  font-family: \"Exo\", sans-serif !important;\n  float: right;\n  margin-right: 0px;\n  margin-top: -8px; }\n"

/***/ }),

/***/ "./src/app/pages/changepasword/changepasword.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/changepasword/changepasword.component.ts ***!
  \****************************************************************/
/*! exports provided: ChangepaswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangepaswordComponent", function() { return ChangepaswordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! aws-amplify */ "./node_modules/aws-amplify/lib/index.js");
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ChangepaswordComponent = /** @class */ (function () {
    function ChangepaswordComponent(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
    }
    ChangepaswordComponent.prototype.ngOnInit = function () {
    };
    ChangepaswordComponent.prototype.changePassword = function (oldpass, newpass, confnewpass) {
        var _this = this;
        aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].currentAuthenticatedUser()
            .then(function (user) {
            return aws_amplify__WEBPACK_IMPORTED_MODULE_2__["Auth"].changePassword(user, oldpass, newpass);
        })
            .then(function (data) {
            alert('Success');
            console.log(data);
            _this.router.navigate(['main/dashboard']);
        })
            .catch(function (err) {
            console.log(err);
            alert('error');
        });
    };
    ChangepaswordComponent.prototype.saveInLocal = function (key, val) {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
    };
    ChangepaswordComponent.prototype.getFromLocal = function (key) {
        console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    ChangepaswordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-changepasword',
            template: __webpack_require__(/*! ./changepasword.component.html */ "./src/app/pages/changepasword/changepasword.component.html"),
            styles: [__webpack_require__(/*! ./changepasword.component.scss */ "./src/app/pages/changepasword/changepasword.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_1__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ChangepaswordComponent);
    return ChangepaswordComponent;
}());



/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n  <div class=\"col-12\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-12 col-lg-3 mb-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body1\">\r\n            <div class=\"dash-box dash-box-color-1\">\r\n              <div class=\"dash-box-icon\">\r\n                  <i class=\"material-icons\"  style=\"font-size:36px\">\r\n                      person\r\n                      </i>\r\n              </div>\r\n              <div class=\"dash-box-body\">\r\n                  <span class=\"dash-box-title\">&nbsp;</span>\r\n                <span class=\"dash-box-count\">Number of Security</span><br>\r\n                <span class=\"dash-box-title\">23</span>\r\n              </div>\r\n              \r\n              <a href=\"/main/viewemployee\"> <div class=\"dash-box-action\">\r\n                <!-- <button type=\"button\" class=\"btn btn-info mb-3 \">More Info</button> -->\r\n              </div></a>\t\t\t\t\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-12 col-lg-3 mb-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body2\">\r\n            <div class=\"dash-box dash-box-color-2\">\r\n              <div class=\"dash-box-icon\">\r\n                  <i class=\"material-icons\"  style=\"font-size:36px\">\r\n                      comment\r\n                      </i>\r\n              </div>\r\n              <div class=\"dash-box-body\">\r\n                  <span class=\"dash-box-title\">&nbsp;</span>\r\n                <span class=\"dash-box-count\">Reports</span><br>\r\n                <span class=\"dash-box-title\">100</span>\r\n              </div>\r\n              <a href=\"/main/clientmanagement\">\r\n              <div class=\"dash-box-action\">\r\n              <!-- <button type=\"button\" class=\"btn btn-info mb-3 \">More Info</button> -->\r\n              </div></a>\t\t\t\t\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"col-12 col-lg-3 mb-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body3\">\r\n            <div class=\"dash-box dash-box-color-2\">\r\n              <div class=\"dash-box-icon\">\r\n                  <i class=\"material-icons\"  style=\"font-size:36px\">\r\n                      list_alt\r\n                      </i>\r\n              </div>\r\n              <div class=\"dash-box-body\">\r\n                  <span class=\"dash-box-title\">&nbsp;</span>\r\n                <span class=\"dash-box-count\">History</span><br>\r\n                <span class=\"dash-box-title\">34</span>\r\n              </div>\r\n              <a href=\"/main/issues\">\r\n              <div class=\"dash-box-action\">\r\n              <!-- <button type=\"button\" class=\"btn btn-info mb-3 \">More Info</button> -->\r\n              </div></a>\t\t\t\t\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n    \r\n      <div class=\"col-12 col-lg-3 mb-3\">\r\n        <div class=\"card\">\r\n          <div class=\"card-body4\">\r\n            <div class=\"dash-box dash-box-color-2\">\r\n              <div class=\"dash-box-icon\">\r\n                  <i class=\"material-icons\"  style=\"font-size:36px\">\r\n                      notifications\r\n                      </i>\r\n              </div>\r\n              <div class=\"dash-box-body\">\r\n                  <span class=\"dash-box-title\">&nbsp;</span>\r\n                <span class=\"dash-box-count\">Alert</span><br>\r\n                <span class=\"dash-box-title\">2</span>\r\n              </div>\r\n              <a href=\"/main/clientissues\">\r\n              <div class=\"dash-box-action\">\r\n              \r\n              </div></a>\t\t\t\t\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      </div>\r\n            </div>\r\n  \r\n     \r\n\r\n\r\n<br>\r\n<div class=\"row\" style=\"background: #fff;\">\r\n  <div class=\"col-12\">\r\n    <div class=\"full\">\r\n    <div class=\"card\">\r\n\r\n<div class=\"tabl\">\r\n        <table class=\"table table-striped\" width = \"100%\">\r\n          <thead>\r\n          <tr>\r\n            <th scope=\"col\" >Security ID</th>\r\n            <th scope=\"col\" >Security Name</th>\r\n            <th scope=\"col\" >Shift Type</th>\r\n            <th scope=\"col\" >Date</th>\r\n            <th scope=\"col\" >Signin Time</th>\r\n            <th scope=\"col\" >Signout Time</th>\r\n            <th scope=\"col\" >Number of hrs worked</th>\r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr>\r\n            <td>SE-01</td>\r\n            <td>Sundar</td>\r\n            <td>Day</td>\r\n            <td>22/09/2108</td>\r\n            <td>04:34:P.M</td>\r\n            <td>04:34:A.M</td>\r\n            <td>12</td>\r\n          </tr>\r\n          <tr>\r\n              <td>SE-01</td>\r\n              <td>parthipan</td>\r\n              <td>Day</td>\r\n              <td>22/09/2108</td>\r\n              <td>04:30:P.M</td>\r\n              <td>02:30:A.M</td>\r\n              <td>10</td>\r\n            </tr>\r\n            <tr>\r\n                <td>SE-09</td>\r\n                <td>tamil</td>\r\n                <td>Day</td>\r\n                <td>22/09/2108</td>\r\n                <td>05:38:P.M</td>\r\n                <td>04:38:A.M</td>\r\n                <td>9</td>\r\n              </tr>\r\n              <tr>\r\n                  <td>SE-08</td>\r\n                  <td>mohammed</td>\r\n                  <td>Day</td>\r\n                  <td>22/09/2108</td>\r\n                  <td>04:34:P.M</td>\r\n                  <td>04:34:A.M</td>\r\n                  <td>12</td>\r\n                </tr>\r\n                <tr>\r\n                    <td>SE-21</td>\r\n                    <td>pangu</td>\r\n                    <td>Day</td>\r\n                    <td>22/09/2108</td>\r\n                    <td>04:34:P.M</td>\r\n                    <td>04:34:A.M</td>\r\n                    <td>12</td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>SE-451</td>\r\n                      <td>murugan</td>\r\n                      <td>Day</td>\r\n                      <td>22/09/2108</td>\r\n                      <td>09:34:P.M</td>\r\n                      <td>04:34:A.M</td>\r\n                      <td>7</td>\r\n                    </tr>\r\n          </tbody>\r\n        </table>\r\n        </div>\r\n\r\n    </div>\r\n    </div>\r\n</div></div>\r\n\r\n\r\n<!-- <h2 class=\"text-center\">Grid table</h2>\r\n<div class=\"text-center\">\r\n  <nav class=\"breadcrumb mx-auto d-inline-block\">\r\n    <a class=\"breadcrumb-item text-body\" routerLink=\"/\">Home</a>\r\n    <a class=\"breadcrumb-item text-body\" routerLink=\"/\">Extra</a>\r\n    <span class=\"breadcrumb-item active\">Grid table</span>\r\n  </nav>\r\n</div>\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">10k rows</h5>\r\n    <ngx-datatable\r\n      class=\"material\"\r\n      [columnMode]=\"'force'\"\r\n      [headerHeight]=\"50\"\r\n      [footerHeight]=\"0\"\r\n      [rowHeight]=\"50\"\r\n      [scrollbarV]=\"true\"\r\n      [scrollbarH]=\"true\"\r\n      [rows]=\"rows\">\r\n      <ngx-datatable-column name=\"Id\" [width]=\"80\"></ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Name\" [width]=\"300\"></ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Gender\"></ngx-datatable-column>\r\n      <ngx-datatable-column name=\"Age\"></ngx-datatable-column>\r\n      <ngx-datatable-column name=\"City\" [width]=\"300\" prop=\"address.city\"></ngx-datatable-column>\r\n      <ngx-datatable-column name=\"State\" [width]=\"300\" prop=\"address.state\"></ngx-datatable-column>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Search</h5>\r\n    <input\r\n      type='text'\r\n      style='padding:8px;margin:15px auto;width:30%;'\r\n      placeholder='Type to filter the name column...'\r\n      (keyup)='updateFilter($event)'\r\n    />\r\n    <ngx-datatable\r\n      #table\r\n      class='material'\r\n      [columns]=\"columns\"\r\n      [columnMode]=\"'force'\"\r\n      [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\"\r\n      [rowHeight]=\"'auto'\"\r\n      [limit]=\"10\"\r\n      [rows]='filterRows'>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card mb-3\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">Multiselect</h5>\r\n    <ngx-datatable\r\n      class=\"material\"\r\n      [rows]=\"rows\"\r\n      [columnMode]=\"'force'\"\r\n      [columns]=\"columns\"\r\n      [headerHeight]=\"50\"\r\n      [footerHeight]=\"50\"\r\n      [rowHeight]=\"'auto'\"\r\n      [limit]=\"5\"\r\n      [selected]=\"selected\"\r\n      [selectionType]=\"'multiClick'\"\r\n      (select)='onSelect($event)'>\r\n    </ngx-datatable>\r\n  </div>\r\n</div>\r\n\r\n -->\r\n"

/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\n * angular2-data-table v\"12.0.0\" (https://github.com/swimlane/angular2-data-table)\n * Copyright 2016\n * Licensed under MIT\n */\n.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  -webkit-transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }\n.ngx-datatable [hidden] {\n    display: none !important; }\n.ngx-datatable *, .ngx-datatable *:before, .ngx-datatable *:after {\n    box-sizing: border-box; }\n.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }\n.ngx-datatable.scroll-vertical .datatable-body .datatable-row-wrapper {\n      position: absolute; }\n.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }\n.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }\n.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }\n.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }\n.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }\n.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }\n.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }\n.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }\n.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }\n.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }\n.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }\n.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }\n.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }\n.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle, .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }\n.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }\n.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }\n.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }\n.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }\n.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }\n.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }\n.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }\n.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }\n.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }\n.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }\n.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }\n.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%; }\n.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }\n.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }\n.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }\n.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }\n.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }\n.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li, .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }\n.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }\n.ngx-datatable.material {\n  background: #FFF;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n\t * Shared Styles\n\t */\n  /**\n\t * Global Row Styles\n\t */\n  /**\n\t * Header Styles\n\t */\n  /**\n\t * Body Styles\n\t */\n  /**\n\t * Footer Styles\n\t */ }\n.ngx-datatable.material.striped .datatable-row-odd {\n    background: #eee; }\n.ngx-datatable.material.single-selection .datatable-body-row.active,\n  .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n    background-color: #304FFE;\n    color: #FFF; }\n.ngx-datatable.material.single-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n    background-color: #193AE4;\n    color: #FFF; }\n.ngx-datatable.material.single-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus,\n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n    background-color: #2041EF;\n    color: #FFF; }\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover,\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: .3s;\n    transition-timing-function: linear; }\n.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus,\n  .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n    background-color: #ddd; }\n.ngx-datatable.material.cell-selection .datatable-body-cell:hover,\n  .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n    background-color: #eee;\n    transition-property: background;\n    transition-duration: .3s;\n    transition-timing-function: linear; }\n.ngx-datatable.material.cell-selection .datatable-body-cell:focus,\n  .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n    background-color: #ddd; }\n.ngx-datatable.material.cell-selection .datatable-body-cell.active,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n    background-color: #304FFE;\n    color: #FFF; }\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n    background-color: #193AE4;\n    color: #FFF; }\n.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus,\n  .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n    background-color: #2041EF;\n    color: #FFF; }\n.ngx-datatable.material .empty-row {\n    height: 50px;\n    text-align: left;\n    padding: .5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }\n.ngx-datatable.material .loading-row {\n    text-align: left;\n    padding: .5rem 1.2rem;\n    vertical-align: top;\n    border-top: 0; }\n.ngx-datatable.material .datatable-header .datatable-row-left,\n  .ngx-datatable.material .datatable-body .datatable-row-left {\n    background-color: #FFF;\n    background-position: 100% 0;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==); }\n.ngx-datatable.material .datatable-header .datatable-row-right,\n  .ngx-datatable.material .datatable-body .datatable-row-right {\n    background-position: 0 0;\n    background-color: #fff;\n    background-repeat: repeat-y;\n    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==); }\n.ngx-datatable.material .datatable-header {\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12); }\n.ngx-datatable.material .datatable-header .datatable-header-cell {\n      text-align: left;\n      padding: .9rem 1.2rem;\n      font-weight: 400;\n      color: rgba(0, 0, 0, 0.54);\n      vertical-align: bottom;\n      font-size: 12px;\n      font-weight: 500; }\n.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n        position: relative; }\n.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n        transition: opacity 400ms ease, -webkit-transform 400ms ease;\n        transition: transform 400ms ease, opacity 400ms ease;\n        transition: transform 400ms ease, opacity 400ms ease, -webkit-transform 400ms ease;\n        opacity: .5;\n        -webkit-transform: scale(1);\n                transform: scale(1); }\n.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n        content: \" \";\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        margin: -30px 0 0 -30px;\n        height: 60px;\n        width: 60px;\n        background: #eee;\n        border-radius: 100%;\n        opacity: 1;\n        -webkit-filter: none;\n                filter: none;\n        -webkit-transform: scale(0);\n                transform: scale(0);\n        z-index: 9999;\n        pointer-events: none; }\n.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n        border-right: none; }\n.ngx-datatable.material .datatable-header .resize-handle {\n      border-right: solid 1px #eee; }\n.ngx-datatable.material .datatable-body .datatable-row-detail {\n    background: #f5f5f5;\n    padding: 10px; }\n.ngx-datatable.material .datatable-body .datatable-group-header {\n    background: #f5f5f5;\n    border-bottom: solid 1px #D9D8D9;\n    border-top: solid 1px #D9D8D9; }\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n    text-align: left;\n    padding: .9rem 1.2rem;\n    vertical-align: top;\n    border-top: 0;\n    color: rgba(0, 0, 0, 0.87);\n    transition: width 0.3s ease;\n    font-size: 14px;\n    font-weight: 400; }\n.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n    text-align: left;\n    padding: .9rem 1.2rem;\n    vertical-align: top;\n    border-top: 0;\n    color: rgba(0, 0, 0, 0.87);\n    transition: width 0.3s ease;\n    font-size: 14px;\n    font-weight: 400; }\n.ngx-datatable.material .datatable-body .progress-linear {\n    display: block;\n    position: relative;\n    width: 100%;\n    height: 5px;\n    padding: 0;\n    margin: 0;\n    position: absolute; }\n.ngx-datatable.material .datatable-body .progress-linear .container {\n      display: block;\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n      height: 5px;\n      -webkit-transform: translate(0, 0) scale(1, 1);\n      transform: translate(0, 0) scale(1, 1);\n      background-color: #aad1f9; }\n.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n        transition: all .2s linear;\n        -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n        animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n        transition: -webkit-transform .2s linear;\n        transition: transform .2s linear;\n        transition: transform .2s linear, -webkit-transform .2s linear;\n        background-color: #106cc8;\n        position: absolute;\n        left: 0;\n        top: 0;\n        bottom: 0;\n        width: 100%;\n        height: 5px; }\n.ngx-datatable.material .datatable-footer {\n    border-top: 1px solid rgba(0, 0, 0, 0.12);\n    font-size: 12px;\n    font-weight: 400;\n    color: rgba(0, 0, 0, 0.54); }\n.ngx-datatable.material .datatable-footer .page-count {\n      line-height: 50px;\n      height: 50px;\n      padding: 0 1.2rem; }\n.ngx-datatable.material .datatable-footer .datatable-pager {\n      margin: 0 10px; }\n.ngx-datatable.material .datatable-footer .datatable-pager li {\n        vertical-align: middle; }\n.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n          color: rgba(0, 0, 0, 0.26) !important;\n          background-color: transparent !important; }\n.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n          background-color: rgba(158, 158, 158, 0.2);\n          font-weight: bold; }\n.ngx-datatable.material .datatable-footer .datatable-pager a {\n        height: 22px;\n        min-width: 24px;\n        line-height: 22px;\n        padding: 0 6px;\n        border-radius: 3px;\n        margin: 6px 3px;\n        text-align: center;\n        vertical-align: top;\n        color: rgba(0, 0, 0, 0.54);\n        text-decoration: none;\n        vertical-align: bottom; }\n.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n          color: rgba(0, 0, 0, 0.75);\n          background-color: rgba(158, 158, 158, 0.2); }\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n      .ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n        font-size: 20px;\n        line-height: 20px;\n        padding: 0 3px; }\n.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n    background-color: #ddd; }\n.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n      background-color: #ddd; }\n.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n      font-weight: bold; }\n/**\n * Checkboxes\n**/\n.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0; }\n.datatable-checkbox input[type='checkbox'] {\n    position: relative;\n    margin: 0 1rem 0 0;\n    cursor: pointer;\n    outline: none; }\n.datatable-checkbox input[type='checkbox']:before {\n      transition: all 0.3s ease-in-out;\n      content: \"\";\n      position: absolute;\n      left: 0;\n      z-index: 1;\n      width: 1rem;\n      height: 1rem;\n      border: 2px solid #f2f2f2; }\n.datatable-checkbox input[type='checkbox']:checked:before {\n      -webkit-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n      height: .5rem;\n      border-color: #009688;\n      border-top-style: none;\n      border-right-style: none; }\n.datatable-checkbox input[type='checkbox']:after {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 1rem;\n      height: 1rem;\n      background: #fff;\n      cursor: pointer; }\n/**\n * Progress bar animations\n */\n@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1); } }\n@keyframes query {\n  0% {\n    opacity: 1;\n    -webkit-transform: translateX(35%) scale(0.3, 1);\n            transform: translateX(35%) scale(0.3, 1); }\n  100% {\n    opacity: 0;\n    -webkit-transform: translateX(-50%) scale(0, 1);\n            transform: translateX(-50%) scale(0, 1); } }\n@charset \"UTF-8\";\n@font-face {\n  font-family: \"data-table\";\n  src:url(\"data:application/vnd.ms-fontobject;base64,3AkAADAJAAABAAIAAAAAAAIABQkAAAAAAAABAJABAAAAAExQAQAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA454DpQAAAAAAAAAAAAAAAAAAAAAAABQAZABhAHQAYQAtAHQAYQBiAGwAZQAAAAoAdABhAGIAbABlAAAAFgBWAGUAcgBzAGkAbwBuACAAMQAuADAAAAAUAGQAYQB0AGEALQB0AGEAYgBsAGUAAAAAAAABAAAADQCAAAMAUEZGVE1zJ0o+AAAJFAAAABxHREVGAEAABgAACPQAAAAgT1MvMk/7XLcAAAFYAAAAVmNtYXAk3SrMAAAB4AAAAXBnYXNw//8AAwAACOwAAAAIZ2x5ZkZJsk8AAAN4AAADLGhlYWQH+OhrAAAA3AAAADZoaGVhBCACBQAAARQAAAAkaG10eAl1Az4AAAGwAAAALmxvY2EGiAdCAAADUAAAAChtYXhwAFgAJwAAATgAAAAgbmFtZduncZMAAAakAAABoXBvc3RfNPVGAAAISAAAAKQAAQAAAAEAAKUDnuNfDzz1AAsCAAAAAADTdNO3AAAAANN007f/9wAAAfoCAAAAAAgAAgAAAAAAAAABAAACAAAAAC4CAP/3AAAB+gABAAAAAAAAAAAAAAAAAAAABAABAAAAEwAkAAMAAAAAAAIAAAABAAEAAABAAAAAAAAAAAECAAGQAAUACAFMAWYAAABHAUwBZgAAAPUAGQCEAAACAAUJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAQABhAHIB4P/gAC4CAAAAAAAAAQAAAAAAAAIAAAAAAAAAAgAAAAIAAEAAngCeAGsAgACAAEAASf/3AAAAfgBrAKsAtwCAAIAAAAAAAAMAAAADAAAAHAABAAAAAABqAAMAAQAAABwABABOAAAACgAIAAIAAgAAAGsAbQBy//8AAAAAAGEAbQBv//8AAAAA/6H/oAABAAAACAAAAAAAAAAEAAMABQAGAAcACAAJAAoACwAMAA0AAAEGAAABAAAAAAAAAAECAAAAAgAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAMFBgcICQoLDA0ADgAPEBESAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGgA0AFAAagB8AI4ApgC4ANoBBgE8AVABYgFyAYQBlgADAEAAgAHAAYAAAwAHAAsAADczNSMnFSE1BSE1IdVWVpUBgP7AAQD/AIAr1SsrlSoAAAAAAgCeAFUBYgGrAAUACwAANxc3FzcnNycHJwcXnh5ERB5iYh5ERB5icx5ERB5iuB5ERB5iAAIAngBAAWIBwAAFAAsAAAEXNycHHwEnBxc3JwEARB5iYh5ERB5iYh4BhEQeYmIexEQeYmIeAAAAAQBrAGsBlQGVAAsAAAEnBycHFwcXNxc3JwGVHnd3Hnd3Hnd3HncBdx53dx53dx53dx53AAEAgAC3AYABVQAFAAABBxc3FzcBAIAeYmIeAVWAHmJiHgAAAAEAgACrAYABSQAFAAABBycHFzcBYmJiHoCAAUliYh6AgAAAAAMAQACAAcABgAADAAcACwAANzM1IzUVITUFITUhQICAAYD+gAEA/wCAK9UrK5UqAAEASQBrAcABiQAFAAA3JwcXASfAWh13AQAeploedwEAHgAAAAP/9wBrAfkBiQADAAkADgAAAScHFzcHJwcXAQUXNycHAYAehx7h4VkfeAEA/f6JHnceAWseiB6m4lkedwEAiXcedx4AAgAAAAAB+gIAABEAGQAANzI3FxYyNzYvATY1NCYiBhQWEjIWFAYiJjTAQzWkBhIGDg6kKnCgcHASfFdXfFeAKqQGBhAOpTVCUHBwoHABVVd8V1d8AAAAAAIAfgAAAYIB4AAEACMAADcXNwYiNy4BPQE0NzY1NCYiBhUUFxYdARQGBwYVFBYzMjY1NOAgIBQYawwTDAwvUi4MCxMMI0k5OkigoKAClwcaCiAMDgoMFRsbFQ0JDwsgChoHERsdLS0dGwAAAAEAawBrAZUBlQALAAAlIxUjNSM1MzUzFTMBlYAqgIAqgOuAgCqAgAABAKsAiwFJAYsABQAAJSc3JwcXAUliYh6AgKliYh6AgAAAAAABALcAhQFVAYUABQAAPwEnNxcHt2JiHoCAo2JiHoCAAAIAgACAAYABgAACAAYAAD8BJzMRMxGAtbXVK4CAgP8AAQAAAAIAgACAAYABgAADAAYAABMzESM3FxGAKytLtQGA/wCAgAEAAAAADACWAAEAAAAAAAEACgAWAAEAAAAAAAIABQAtAAEAAAAAAAMAJQB/AAEAAAAAAAQACgC7AAEAAAAAAAUACwDeAAEAAAAAAAYACgEAAAMAAQQJAAEAFAAAAAMAAQQJAAIACgAhAAMAAQQJAAMASgAzAAMAAQQJAAQAFAClAAMAAQQJAAUAFgDGAAMAAQQJAAYAFADqAGQAYQB0AGEALQB0AGEAYgBsAGUAAGRhdGEtdGFibGUAAHQAYQBiAGwAZQAAdGFibGUAAEYAbwBuAHQARgBvAHIAZwBlACAAMgAuADAAIAA6ACAAZABhAHQAYQAtAHQAYQBiAGwAZQAgADoAIAAxAC0ANgAtADIAMAAxADYAAEZvbnRGb3JnZSAyLjAgOiBkYXRhLXRhYmxlIDogMS02LTIwMTYAAGQAYQB0AGEALQB0AGEAYgBsAGUAAGRhdGEtdGFibGUAAFYAZQByAHMAaQBvAG4AIAAxAC4AMAAAVmVyc2lvbiAxLjAAAGQAYQB0AGEALQB0AGEAYgBsAGUAAGRhdGEtdGFibGUAAAAAAAIAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAEwAAAAEAAgECAQMBBAEFAQYBBwEIAQkBCgELAQwBDQEOAQ8BEAERBmZpbHRlcghjb2xsYXBzZQZleHBhbmQFY2xvc2UCdXAEZG93bgRzb3J0BGRvbmUIZG9uZS1hbGwGc2VhcmNoA3BpbgNhZGQEbGVmdAVyaWdodARza2lwBHByZXYAAAAB//8AAgABAAAADgAAABgAAAAAAAIAAQADABIAAQAEAAAAAgAAAAAAAQAAAADMPaLPAAAAANN007cAAAAA03TTtw==\");\n  src:url('data-table.eot?#iefix') format(\"embedded-opentype\"),\n    url(\"data:font/woff;base64,d09GRk9UVE8AAAZcAAsAAAAACKAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRkYgAAABCAAAAv8AAAOHZ5Fq60ZGVE0AAAQIAAAAGgAAABxzJ0o+R0RFRgAABCQAAAAdAAAAIAA+AARPUy8yAAAERAAAAEcAAABgUB1eWGNtYXAAAASMAAAAaQAAAXAdwCK4aGVhZAAABPgAAAAtAAAANgf+6GtoaGVhAAAFKAAAABsAAAAkBCYCA2htdHgAAAVEAAAAJgAAACYHdQM+bWF4cAAABWwAAAAGAAAABgARUABuYW1lAAAFdAAAANcAAAGh26dxk3Bvc3QAAAZMAAAAEAAAACAAAwABeJxNkV1oU0kUx8+kuc21CXFbZvwMrQUf9qLCUnS38QMUlLSITwrqw0pvm1uNvbeJSbZKC340prGd1q/cxm/tk+xtX3ypzz4UYenSoA++5aHgwqrk0T0XRqgzm0WXw2HOzJw58z+/QyAYBEJIOGnmzV15s9+2gASAwCF/R8Df2eRvCk5HCI808UiwvQU2H29b4/xbEAmNc9/1XS0Gf62PAfwQI82tMdgYa8q0QZsqE4L1wGALxGAbbIcf4Sf4GeKwHw7CEeiFY3ASzMGUnbeyA2nbNjM5y7qUMYeTA3Y6Z/2WSaYvDufS2XwyPWwp32Xads4yswPnMqlhM5m0rcF8NnX2XD43lMpkstbI9y7+1w8AKZEbZJJMEU6myQy5SW6R2+QOuUvKxCWzpAKtSmsAOqSuPpiBOViEN/A32UJs8pZ8CkCABXYGDkcxhZS9XO0LiSvoMp/2faHNy51sEV0zFMUuDLF6vW44TqKaSGi4F/9khmHUPa+aqFa1KLr+JpZIOF4jSUuIU6xa9ZxGjhb1DT/MRFiEUbrjNFYZefhvhGHPa6wYVsXwA0MqqOMYdcNw5Hv8B2vMcwRVhtTz6oYWXVaKkUrJ9JvkzuB/ik/gXoYjeFE+cqXJwr8rHRTXmNgqYvLnrRjTMLJhvpEQwfC8975LE5XX7AlvyJGNqEKUde5Z/fx5Vfmezg5+Zqz/wnkdu0VcKxf45cJ4qVScnOBFPjFTuqWLbuzWzl/oH/uV6/ghGO/picdXemq1lZVarWcl3hHFPO5ms1P3pmZ5hVemZ6f1IbFb+4h/sGfXHo7yUX3w9OC+/adevGjnjx89eeo+dh/M8fv6QohXiuWJu4U7pTIv68+9uaWl+ZFMOy9MFK4Xi9eLBX5VHwrxyw9HHo3rkjheYYsKlqmYmYrnIlJJpoYHmByBvFGmZiS7PIq/SL7qQF04juKrdozLafQKqi0o2MLta5bHPmXCfYluaEFQhr1IuXAlW5dytvwOJ+euvWpubyFda5F1M5GWr+wFd0IAeJxjYGBgZACCM7aLzoPoyyWXt8NoAFJhCB4AAHicY2BkYGDgA2IJBhBgYmAEQgEgZgHzGAAE+gBDAAAAeJxjYGZiYJzAwMrAwejDmMbAwOAOpb8ySDK0MDAwMbByMsAAIwMSCEhzTWFwYEhkKGJ88P8Bgx4TkhrGBiChAISMANYdChsAeJy1jcsNgDAMQ18/lFK+AzATO3AFISQGglFLaFmAA46i2FEcA4bcI4oHiyiVtGWSGfBoKVjZOGJMV7PwPfN4xTM5PBlalBF3gaOUbSU/alCON+JHaGVs4UpfhZqGtuuHvxM/4QbXZguvAAAAeJxjYGRgYADiF78jNOL5bb4ycDMxgMDlksvbYfT/7wwMTAxgcQ4IBQBbogu4AAAAeJxjYGRgYGIAAj0mhv/fwWxGBlTABAAz6QIvAAIAAAACAABAAJ4AngBrAIAAgABAAEn/9wAAAH4AawCrALcAgACAAAAAAFAAABEAAHichY4xbsJAEEWfwUYKpIxSL0XKtbyORMEBXHAAeiMshIRsybjnFtwgp0jPMXKAnCJ/yUSkQGKl2Xnz52tmgGfOJMSXMOXVeESGNx7zxsk4lefTOGPGl/GEaRKdSfok5YU/Hsk/Nx6z4t04lefDONPWi/FE+jdbagaFv/4bDjSwrYfaD/XmIP4nm1LR0UqPuWenjqMkp1BeKu6N/O0EaQtFKW8QUXXtUHX9rnFlXriluy1WEfzCl0WQ7eGRawk9R/bX0+KieA7rpj/uu9aFvHg85Acxfz5ZAHicY2BmQAaMDGgAAACOAAU=\") format(\"woff\"),\n    url(\"data:font/ttf;base64,AAEAAAANAIAAAwBQRkZUTXMnSj4AAAkUAAAAHEdERUYAQAAGAAAI9AAAACBPUy8yT/tctwAAAVgAAABWY21hcCTdKswAAAHgAAABcGdhc3D//wADAAAI7AAAAAhnbHlmRkmyTwAAA3gAAAMsaGVhZAf46GsAAADcAAAANmhoZWEEIAIFAAABFAAAACRobXR4CXUDPgAAAbAAAAAubG9jYQaIB0IAAANQAAAAKG1heHAAWAAnAAABOAAAACBuYW1l26dxkwAABqQAAAGhcG9zdF809UYAAAhIAAAApAABAAAAAQAApQOe418PPPUACwIAAAAAANN007cAAAAA03TTt//3AAAB+gIAAAAACAACAAAAAAAAAAEAAAIAAAAALgIA//cAAAH6AAEAAAAAAAAAAAAAAAAAAAAEAAEAAAATACQAAwAAAAAAAgAAAAEAAQAAAEAAAAAAAAAAAQIAAZAABQAIAUwBZgAAAEcBTAFmAAAA9QAZAIQAAAIABQkAAAAAAAAAAAABAAAAAAAAAAAAAAAAUGZFZABAAGEAcgHg/+AALgIAAAAAAAABAAAAAAAAAgAAAAAAAAACAAAAAgAAQACeAJ4AawCAAIAAQABJ//cAAAB+AGsAqwC3AIAAgAAAAAAAAwAAAAMAAAAcAAEAAAAAAGoAAwABAAAAHAAEAE4AAAAKAAgAAgACAAAAawBtAHL//wAAAAAAYQBtAG///wAAAAD/of+gAAEAAAAIAAAAAAAAAAQAAwAFAAYABwAIAAkACgALAAwADQAAAQYAAAEAAAAAAAAAAQIAAAACAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAwUGBwgJCgsMDQAOAA8QERIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAaADQAUABqAHwAjgCmALgA2gEGATwBUAFiAXIBhAGWAAMAQACAAcABgAADAAcACwAANzM1IycVITUFITUh1VZWlQGA/sABAP8AgCvVKyuVKgAAAAACAJ4AVQFiAasABQALAAA3FzcXNyc3JwcnBxeeHkREHmJiHkREHmJzHkREHmK4HkREHmIAAgCeAEABYgHAAAUACwAAARc3JwcfAScHFzcnAQBEHmJiHkREHmJiHgGERB5iYh7ERB5iYh4AAAABAGsAawGVAZUACwAAAScHJwcXBxc3FzcnAZUed3ced3ced3cedwF3Hnd3Hnd3Hnd3HncAAQCAALcBgAFVAAUAAAEHFzcXNwEAgB5iYh4BVYAeYmIeAAAAAQCAAKsBgAFJAAUAAAEHJwcXNwFiYmIegIABSWJiHoCAAAAAAwBAAIABwAGAAAMABwALAAA3MzUjNRUhNQUhNSFAgIABgP6AAQD/AIAr1SsrlSoAAQBJAGsBwAGJAAUAADcnBxcBJ8BaHXcBAB6mWh53AQAeAAAAA//3AGsB+QGJAAMACQAOAAABJwcXNwcnBxcBBRc3JwcBgB6HHuHhWR94AQD9/okedx4Bax6IHqbiWR53AQCJdx53HgACAAAAAAH6AgAAEQAZAAA3MjcXFjI3Ni8BNjU0JiIGFBYSMhYUBiImNMBDNaQGEgYODqQqcKBwcBJ8V1d8V4AqpAYGEA6lNUJQcHCgcAFVV3xXV3wAAAAAAgB+AAABggHgAAQAIwAANxc3BiI3LgE9ATQ3NjU0JiIGFRQXFh0BFAYHBhUUFjMyNjU04CAgFBhrDBMMDC9SLgwLEwwjSTk6SKCgoAKXBxoKIAwOCgwVGxsVDQkPCyAKGgcRGx0tLR0bAAAAAQBrAGsBlQGVAAsAACUjFSM1IzUzNTMVMwGVgCqAgCqA64CAKoCAAAEAqwCLAUkBiwAFAAAlJzcnBxcBSWJiHoCAqWJiHoCAAAAAAAEAtwCFAVUBhQAFAAA/ASc3Fwe3YmIegICjYmIegIAAAgCAAIABgAGAAAIABgAAPwEnMxEzEYC1tdUrgICA/wABAAAAAgCAAIABgAGAAAMABgAAEzMRIzcXEYArK0u1AYD/AICAAQAAAAAMAJYAAQAAAAAAAQAKABYAAQAAAAAAAgAFAC0AAQAAAAAAAwAlAH8AAQAAAAAABAAKALsAAQAAAAAABQALAN4AAQAAAAAABgAKAQAAAwABBAkAAQAUAAAAAwABBAkAAgAKACEAAwABBAkAAwBKADMAAwABBAkABAAUAKUAAwABBAkABQAWAMYAAwABBAkABgAUAOoAZABhAHQAYQAtAHQAYQBiAGwAZQAAZGF0YS10YWJsZQAAdABhAGIAbABlAAB0YWJsZQAARgBvAG4AdABGAG8AcgBnAGUAIAAyAC4AMAAgADoAIABkAGEAdABhAC0AdABhAGIAbABlACAAOgAgADEALQA2AC0AMgAwADEANgAARm9udEZvcmdlIDIuMCA6IGRhdGEtdGFibGUgOiAxLTYtMjAxNgAAZABhAHQAYQAtAHQAYQBiAGwAZQAAZGF0YS10YWJsZQAAVgBlAHIAcwBpAG8AbgAgADEALgAwAABWZXJzaW9uIDEuMAAAZABhAHQAYQAtAHQAYQBiAGwAZQAAZGF0YS10YWJsZQAAAAAAAgAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAATAAAAAQACAQIBAwEEAQUBBgEHAQgBCQEKAQsBDAENAQ4BDwEQAREGZmlsdGVyCGNvbGxhcHNlBmV4cGFuZAVjbG9zZQJ1cARkb3duBHNvcnQEZG9uZQhkb25lLWFsbAZzZWFyY2gDcGluA2FkZARsZWZ0BXJpZ2h0BHNraXAEcHJldgAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAMAEgABAAQAAAACAAAAAAABAAAAAMw9os8AAAAA03TTtwAAAADTdNO3\") format(\"truetype\"),\n    url('data-table.svg#data-table') format(\"svg\");\n  font-weight: normal;\n  font-style: normal;\n\n}\n[data-icon]:before {\n  font-family: \"data-table\" !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n[class^=\"datatable-icon-\"]:before,\n[class*=\" datatable-icon-\"]:before {\n  font-family: \"data-table\" !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.datatable-icon-filter:before {\n  content: \"\\62\";\n}\n.datatable-icon-collapse:before {\n  content: \"\\61\";\n}\n.datatable-icon-expand:before {\n  content: \"\\63\";\n}\n.datatable-icon-close:before {\n  content: \"\\64\";\n}\n.datatable-icon-up:before {\n  content: \"\\65\";\n}\n.datatable-icon-down:before {\n  content: \"\\66\";\n}\n.datatable-icon-sort:before {\n  content: \"\\67\";\n}\n.datatable-icon-done:before {\n  content: \"\\68\";\n}\n.datatable-icon-done-all:before {\n  content: \"\\69\";\n}\n.datatable-icon-search:before {\n  content: \"\\6a\";\n}\n.datatable-icon-pin:before {\n  content: \"\\6b\";\n}\n.datatable-icon-add:before {\n  content: \"\\6d\";\n}\n.datatable-icon-left:before {\n  content: \"\\6f\";\n}\n.datatable-icon-right:before {\n  content: \"\\70\";\n}\n.datatable-icon-skip:before {\n  content: \"\\71\";\n}\n.datatable-icon-prev:before {\n  content: \"\\72\";\n}\napp-component-table-page ngx-datatable {\n  height: 400px; }\n.table > tbody > tr > td, .table > tbody > tr > th, .table > tfoot > tr > td, .table > tfoot > tr > th, .table > thead > tr > td, .table > thead > tr > th {\n  padding: px !important;\n  line-height: 1.428571;\n  vertical-align: top;\n  border: 1px solid #ddd;\n  text-align: center; }\n.dash-box-action {\n  position: absolute;\n  left: 35% !important; }\n.user-info i {\n  color: #fff !important; }\napp-dashboard-page {\n  display: block; }\n@media screen and (min-width: 992px) {\n    app-dashboard-page .world-map-card .card-body {\n      height: 950px; } }\napp-dashboard-page .world-map-card .card-body .map-wrap {\n    max-width: 885px;\n    margin: 0 auto;\n    width: 100%; }\napp-dashboard-page .world-map-card .card-body .card {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #f8f9fa !important;\n    background-clip: border-box;\n    border: 1px solid #dee2e6 !important;\n    border-radius: 2px; }\napp-dashboard-page .world-map-card .card-body .polar-wrap .polar-clock-chart {\n    height: 260px; }\napp-dashboard-page .world-map-card .card-body .polar-wrap .polar-clock-text {\n    position: absolute;\n    left: 50%;\n    top: 125px;\n    width: 110px;\n    text-align: center;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\napp-dashboard-page .world-map-card .card-body .polar-wrap table {\n    margin-bottom: 0; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table thead td {\n      border: transparent; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td {\n      white-space: nowrap;\n      font-weight: 600; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td:nth-child(1) {\n        font-weight: 400; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td:nth-child(1) i {\n          content: '';\n          display: inline-block;\n          width: 20px;\n          height: 20px;\n          border: 2px solid;\n          border-radius: 10px;\n          vertical-align: bottom; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td:nth-child(1) span {\n          margin-left: 15px; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td:nth-child(3) .delta {\n        content: '';\n        display: inline-block;\n        width: 0;\n        height: 0;\n        border-style: solid;\n        border-width: 0 3px 6px 3px;\n        border-color: transparent transparent #007bff transparent;\n        margin-bottom: 2px; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table tbody td:nth-child(3) .delta.negative {\n          -webkit-transform: rotate(180deg);\n                  transform: rotate(180deg); }\napp-dashboard-page .world-map-card .card-body .polar-wrap table td:nth-child(1) {\n      width: 30%; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table td:nth-child(2) {\n      width: 30%;\n      text-align: right; }\napp-dashboard-page .world-map-card .card-body .polar-wrap table td:nth-child(3) {\n      width: 40%;\n      text-align: right;\n      padding-right: 30px; }\napp-dashboard-page .world-map-card .card-body .group-bar-wrap .group-bar-chart {\n    height: 300px; }\napp-dashboard-page .line-trend-card .card-body {\n    height: 420px; }\napp-dashboard-page .line-trend-card .card-body .trend-line-chart {\n      height: 135px; }\napp-dashboard-page .line-trend-card .card-body .delta:before {\n      content: '';\n      display: inline-block;\n      width: 0;\n      height: 0;\n      margin-right: 5px;\n      border-style: solid;\n      border-width: 0 4px 8px 4px;\n      border-color: transparent transparent #0be3df transparent; }\napp-dashboard-page .line-trend-card .card-body .divider {\n      height: 2px;\n      background-color: rgba(0, 0, 0, 0.11);\n      margin: 0 -20px; }\napp-dashboard-page .radar-cart .card-body {\n    height: 514px; }\napp-dashboard-page .radar-cart .card-body .radar-chart {\n      height: 350px; }\napp-dashboard-page .area-card .area-chart {\n    height: 180px;\n    margin: 0 -20px; }\napp-dashboard-page .area-card .text-and-pie {\n    padding-right: 120px;\n    position: relative; }\napp-dashboard-page .area-card .text-and-pie .pie-wrap {\n      position: absolute;\n      right: 0;\n      top: 50%;\n      width: 90px;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\napp-dashboard-page .area-card .text-and-pie .pie-wrap .pie-chart {\n        height: 90px; }\napp-dashboard-page .area-card .text-and-pie .pie-wrap .h2 {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        -webkit-transform: translate(-50%, -50%);\n                transform: translate(-50%, -50%); }\napp-dashboard-page .line-chart-card .line-chart {\n    min-height: 340px;\n    flex: 1; }\napp-dashboard-page .bar-card .bar-chart {\n    height: 180px; }\napp-dashboard-page .bar-card td {\n    width: 20%; }\napp-dashboard-page .bar-card td.in-progress {\n      color: #0fcbfa; }\napp-dashboard-page .bar-card td.done {\n      color: #0be3df; }\napp-dashboard-page .bar-card td.missed {\n      color: #3e4f5c; }\napp-dashboard-page .bar-card thead td {\n    border-top: none; }\napp-dashboard-page .bar-card tbody tr:nth-child(n + 2) td {\n    border-top: none; }\napp-dashboard-page perfect-scrollbar .ps__scrollbar-y-rail {\n    opacity: 1 !important; }\napp-dashboard-page perfect-scrollbar .ps__scrollbar-x-rail {\n    opacity: 1 !important; }\n.dash-box-icon > i {\n  border-radius: 50%;\n  line-height: 40px;\n  color: #6c757d;\n  width: 40px;\n  height: 40px;\n  font-size: 30px;\n  padding-top: 19px; }\n.dash-box-body > .dash-box-count {\n  display: block;\n  font-size: 19px;\n  color: #343a40;\n  font-weight: 300; }\n.dash-box {\n  background: #FFF; }\n.grey.lighten-3 {\n  background-color: #fff !important;\n  border: 1px #fffefe solid; }\n.card {\n  max-width: 630px;\n  margin-top: 5px !important; }\n.full > .card {\n  max-width: 100%;\n  margin-top: 5px !important; }\n.dash-box-body > .dash-box-count {\n  margin-bottom: 2%;\n  height: 60px; }\n.dash-box-body > .dash-box-title {\n  font-size: 16px;\n  font-weight: 700; }\n@media only screen and (max-width: 600px) and (min-width: 320px) {\n  .btn-info {\n    margin-top: -15% !important; } }\n.steps-form {\n  display: table;\n  width: 100%;\n  position: relative; }\n.steps-form .steps-row {\n  display: table-row; }\n.steps-form .steps-row:before {\n  top: 14px;\n  bottom: 0;\n  position: absolute;\n  content: \" \";\n  width: 100%;\n  height: 1px;\n  background-color: #ccc; }\n.steps-form .steps-row .steps-step {\n  display: table-cell;\n  text-align: center;\n  position: relative; }\n.steps-form .steps-row .steps-step p {\n  margin-top: 0.5rem; }\n.steps-form .steps-row .steps-step button[disabled] {\n  opacity: 1 !important;\n  filter: alpha(opacity=100) !important; }\n.steps-form .steps-row .steps-step .btn-circle {\n  width: 30px;\n  height: 30px;\n  text-align: center;\n  padding: 6px 0;\n  font-size: 12px;\n  line-height: 1.428571429;\n  border-radius: 15px;\n  margin-top: 0; }\n.card-body {\n  flex: 1 1 auto;\n  padding: 0.5rem !important; }\n.modal-dialog {\n  max-width: 700px !important;\n  margin: 8.75rem auto; }\n.btnsu {\n  width: 100% !important; }\n.loader {\n  border: 6px solid #f3f3f3;\n  border-radius: 50%;\n  border-top: 6px solid #3498db;\n  width: 50px;\n  height: 50px;\n  -webkit-animation: spin 2s linear infinite;\n  /* Safari */\n  animation: spin 2s linear infinite; }\n/* Safari */\n@-webkit-keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg); } }\n@keyframes spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n#snackbar {\n  visibility: hidden;\n  min-width: 250px;\n  margin-left: -125px;\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  border-radius: 2px;\n  padding: 16px;\n  position: fixed;\n  z-index: 1;\n  left: 50%;\n  bottom: 30px;\n  font-size: 17px; }\n#snackbar.show {\n  visibility: visible;\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\n  animation: fadein 0.5s, fadeout 0.5s 2.5s; }\n@-webkit-keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@keyframes fadein {\n  from {\n    bottom: 0;\n    opacity: 0; }\n  to {\n    bottom: 30px;\n    opacity: 1; } }\n@-webkit-keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n@keyframes fadeout {\n  from {\n    bottom: 30px;\n    opacity: 1; }\n  to {\n    bottom: 0;\n    opacity: 0; } }\n.card-body1 {\n  flex: 1 1 auto;\n  padding: 0.5rem !important;\n  border-left: 35px  red solid; }\n.card-body2 {\n  flex: 1 1 auto;\n  padding: 0.5rem !important;\n  border-left: 35px orange solid; }\n.card-body3 {\n  flex: 1 1 auto;\n  padding: 0.5rem !important;\n  border-left: 35px orchid solid; }\n.card-body4 {\n  flex: 1 1 auto;\n  padding: 0.5rem !important;\n  border-left: 35px #2e75b6 solid; }\n.dash-box-body {\n  padding: 0px 20px;\n  height: 35px; }\n.dash-box-body > .dash-box-count {\n  margin-bottom: 2%;\n  height: 0px; }\n.dash-box-body > .dash-box-count {\n  display: block;\n  font-size: 15px;\n  color: #343a40;\n  font-weight: 300; }\napp-component-table-page ngx-datatable {\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/pages/dashboard-page/dashboard-page.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dashboard-page/dashboard-page.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageComponent", function() { return DashboardPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @swimlane/ngx-datatable/release */ "./node_modules/@swimlane/ngx-datatable/release/index.js");
/* harmony import */ var _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardPageComponent = /** @class */ (function () {
    function DashboardPageComponent() {
        var _this = this;
        // Table variables
        this.rows = [];
        this.filterRows = [];
        this.temp = [];
        this.selected = [];
        this.columns = [
            { prop: 'name' },
            { name: 'Company' },
            { name: 'Gender' }
        ];
        this.fetch(function (data) {
            _this.temp = data.slice();
            _this.rows = data;
            _this.filterRows = data;
        });
    }
    /**
     * Load data to show in table
     * @param cb
     */
    DashboardPageComponent.prototype.fetch = function (cb) {
        var req = new XMLHttpRequest();
        req.open('GET', "assets/data/100k.json");
        req.onload = function () {
            cb(JSON.parse(req.response));
        };
        req.send();
    };
    /**
     * Filter rows by inputed string
     * @param event
     */
    DashboardPageComponent.prototype.updateFilter = function (event) {
        var val = event.target.value.toLowerCase();
        // filter our data
        var temp = this.temp.filter(function (d) {
            return d.name.toLowerCase().indexOf(val) !== -1 || !val;
        });
        // update the rows
        this.filterRows = temp;
        // Whenever the filter changes, always go back to the first page
        this.table.offset = 0;
    };
    /**
     * Row select handler
     * @param {any} selected
     */
    DashboardPageComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected;
        var _b;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
    };
    DashboardPageComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"]),
        __metadata("design:type", _swimlane_ngx_datatable_release__WEBPACK_IMPORTED_MODULE_1__["DatatableComponent"])
    ], DashboardPageComponent.prototype, "table", void 0);
    DashboardPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard-page',
            template: __webpack_require__(/*! ./dashboard-page.component.html */ "./src/app/pages/dashboard-page/dashboard-page.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-page.component.scss */ "./src/app/pages/dashboard-page/dashboard-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], DashboardPageComponent);
    return DashboardPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/forgotpswd/forgotpswd.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/forgotpswd/forgotpswd.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mx-auto forgot\">\n  <div class=\"card-body\">\n\n    <h2 class=\"card-title text-center mb-5\">  <img src=\"assets/images/cynosure.png\"></h2>\n    <form>\n      <div class=\"form-group \">\n        <label for=\"Email\">Enter Email</label>\n        <input #uname  type=\"Email\" class=\"form-control col-md-8\" id=\"email\">\n      </div>\n      <div class=\"mt-5 text-center\">\n        <button type=\"button\" class=\"btn  btn btn-primary px-gdn-btn mb-3 mr-3\" (click) = 'forgotpassword(uname.value)'style=\"    padding: 10px;\n        width: 100%;\n        margin-top: 2pc;\"  >Submit</button>\n      </div>\n    </form>\n  </div>\n</div>\n<div class=\"text-nowrap footer\">\n    2018 <a routerLink=\"\"style=\"color:#2e75b6 ;\">Cynosure</a> all rights reserved\n  </div>\n"

/***/ }),

/***/ "./src/app/pages/forgotpswd/forgotpswd.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/forgotpswd/forgotpswd.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  height: 100%; }\n\n.app-login-page {\n  height: auto;\n  padding: 16px 16px 70px; }\n\n.card {\n  max-width: 630px;\n  margin-top: 100px; }\n\n.card img {\n  position: static !important;\n  left: 0;\n  bottom: 0; }\n\nfooter {\n  position: absolute;\n  left: 50%;\n  bottom: 25px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n@media screen and (max-width: 768px) {\n  .card {\n    margin-top: 50px; }\n    .card .card-body {\n      padding-left: 80px;\n      padding-right: 80px; }\n    .card footer {\n      bottom: 235px; } }\n\n@media screen and (max-width: 425px) {\n  .card {\n    margin-top: 0; }\n  .card-body {\n    padding-left: 30px;\n    padding-right: 30px; } }\n\n.forgot {\n  max-width: 630px;\n  margin-top: 100px !important; }\n\n.app-login-page {\n  padding: 50px 130px 80px 130px; }\n\n.text-nowrap {\n  white-space: nowrap !important; }\n\n.footer {\n  position: absolute;\n  left: 50%;\n  bottom: 25px;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%); }\n\n.footer {\n  width: 100%;\n  float: left;\n  background: #222;\n  padding: 10px;\n  text-align: center;\n  bottom: 0;\n  position: fixed;\n  color: #fff; }\n"

/***/ }),

/***/ "./src/app/pages/forgotpswd/forgotpswd.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/forgotpswd/forgotpswd.component.ts ***!
  \**********************************************************/
/*! exports provided: ForgotpswdComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpswdComponent", function() { return ForgotpswdComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @aws-amplify/auth */ "./node_modules/@aws-amplify/auth/lib/index.js");
/* harmony import */ var _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var ForgotpswdComponent = /** @class */ (function () {
    function ForgotpswdComponent(storage, route, router) {
        this.storage = storage;
        this.route = route;
        this.router = router;
    }
    ForgotpswdComponent.prototype.ngOnInit = function () {
    };
    ForgotpswdComponent.prototype.forgotpassword = function (email) {
        var _this = this;
        _aws_amplify_auth__WEBPACK_IMPORTED_MODULE_1___default.a.forgotPassword(email)
            .then(function (data) {
            console.log(data);
            _this.saveInLocal('forgot_pwid', email);
            _this.router.navigate(['forgotreset']);
        })
            .catch(function (err) { return console.log(err); });
    };
    ForgotpswdComponent.prototype.saveInLocal = function (key, val) {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
    };
    ForgotpswdComponent.prototype.getFromLocal = function (key) {
        console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    ForgotpswdComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-forgotpswd',
            template: __webpack_require__(/*! ./forgotpswd.component.html */ "./src/app/pages/forgotpswd/forgotpswd.component.html"),
            styles: [__webpack_require__(/*! ./forgotpswd.component.scss */ "./src/app/pages/forgotpswd/forgotpswd.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ForgotpswdComponent);
    return ForgotpswdComponent;
}());



/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.html":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"loginss\">\n  <div class=\"card logincard mx-auto login\">\n    <div class=\"card-body\">\n  \n      <h2 class=\"card-title text-center mb-5\">  <img src=\"assets/images/23.jpg\"></h2>\n              <form class=\"frms\" name=\"form\" novalidate>\n        <div class=\"form-group \">\n          <label for=\"email\">Login ID</label>\n          <input type=\"text\" #Email_id [(ngModel)]=\"adduser.Email_id\" placeholder=\"Login Id\" class=\"form-control col-md-12\"    pattern=\"^[a-zA-Z0-9_-\\s]{2,150}$\" name=\"Email_id\" value=\"\" #Email_id>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"passwords\">Password</label>\n          <input type=\"password\" #password [(ngModel)]=\"adduser.password\" placeholder=\"Password\" class=\"form-control col-md-12\"    pattern=\"^[a-zA-Z0-9_-\\s]{2,150}$\" name=\"password\" value=\"\" #password>\n        </div>\n        <div class=\"mt-5 text-center\">\n          <button  (click) = \"addapi(Email_id.value,password.value)\" class=\"btn form-control btn btn-primary px-gdn-btn mb-3 mr-3\" style=\"color:#fff;\">LOGIN</button>\n        </div>\n        <div class=\"mt-4 text-center\" (click)=\"forgot()\">Forgot password? <b>Click</b></div>\n      </form>\n    </div>\n  </div>\n  </div>\n  <div class=\"text-nowrap footer\">\n    2018 <b routerLink=\"/\">BSS</b> all rights reserved\n  </div>\n  \n  \n\n  "

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.scss":
/*!************************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  height: 100%; }\n\n.card {\n  margin-top: 100px; }\n\n.card .card-body {\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); }\n\n.card img {\n    position: absolute;\n    left: 0;\n    bottom: 0; }\n\n@media screen and (max-width: 768px) {\n    .card .card {\n      margin-top: 50px; }\n      .card .card .card-body {\n        padding-left: 80px;\n        padding-right: 80px;\n        height: 20px; }\n    .card footer {\n      bottom: 235px; }\n    .card .cards {\n      padding-bottom: 0px !important; } }\n\n@media screen and (max-width: 425px) {\n    .card .card {\n      margin-top: 0; }\n      .card .card .card-body {\n        padding-left: 30px;\n        padding-right: 30px; } }\n\napp-login-page img {\n  position: static !important;\n  left: 0;\n  top: 20 !important;\n  width: 20%;\n  margin: 0 auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 100px;\n  border: 1px #fff solid; }\n\n.footer {\n  width: 100%;\n  float: left;\n  background: #222;\n  padding: 10px;\n  text-align: center;\n  bottom: 0;\n  position: fixed;\n  color: #fff; }\n\n.login {\n  margin-top: 50px; }\n\n.mb-5, .my-5 {\n  margin-bottom: 1rem !important; }\n\n.card .card-body {\n  box-shadow: 0 4px 0px 0 rgba(255, 255, 255, 0.2), 0 6px 20px 0 rgba(255, 255, 255, 0.19); }\n\n.card {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 0px solid transparent;\n  border-radius: 2px;\n  opacity: 0.9; }\n\n.loginss {\n  margin: 0px 0px;\n  padding: 20px;\n  height: 620px;\n  background-image: url(\"/assets/images/security.jpg\");\n  background-size: cover; }\n\n.mt-5, .my-5 {\n  margin-top: 1rem !important; }\n\n.mb-5, .my-5 {\n  margin-bottom: 10px !important; }\n\n.text-center {\n  text-align: center !important;\n  color: #222;\n  cursor: pointer; }\n\n.frms {\n  padding: 10px;\n  margin-top: 0px; }\n"

/***/ }),

/***/ "./src/app/pages/login-page/login-page.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/login-page/login-page.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var LoginPageComponent = /** @class */ (function () {
    function LoginPageComponent(storage, http, route, router) {
        this.storage = storage;
        this.http = http;
        this.route = route;
        this.router = router;
        this.adduser = new Adduser();
    }
    LoginPageComponent.prototype.addapi = function (Email_id, password) {
        var _this = this;
        if ((Email_id !== '') || (password !== '')) {
            console.log(this.adduser);
            this.adduser.Email_id = Email_id;
            this.adduser.password = password;
            this.http.post('http://132.148.140.42:84/authentication/Clientlogin', this.adduser).subscribe(function (data) {
                _this.datas = data;
                console.log(_this.datas.data[0]);
                if (_this.datas.data == "Invalid Account") {
                    alert(_this.datas.data);
                }
                else {
                    alert("Login Successfully");
                    _this.saveInLocal('Name', _this.datas.data[0].Client_Name);
                    _this.saveInLocal('user_id', _this.datas.data[0].id);
                    _this.saveInLocal('usertype', _this.datas.data[0].Designations);
                    _this.router.navigate(['mainpage']);
                }
            });
        }
        else {
            alert("Enter the Login-id And Password");
        }
    };
    LoginPageComponent.prototype.forgot = function () {
        this.router.navigate(['forgotpassword']);
    };
    LoginPageComponent.prototype.saveInLocal = function (key, val) {
        console.log('recieved= key:' + key + 'value:' + val);
        this.storage.set(key, val);
    };
    LoginPageComponent.prototype.getFromLocal = function (key) {
        console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    LoginPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-page',
            template: __webpack_require__(/*! ./login-page.component.html */ "./src/app/pages/login-page/login-page.component.html"),
            styles: [__webpack_require__(/*! ./login-page.component.scss */ "./src/app/pages/login-page/login-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_3__["WebStorageService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPageComponent);
    return LoginPageComponent;
}());

var Adduser = /** @class */ (function () {
    function Adduser() {
    }
    return Adduser;
}());


/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"application\" [ngClass]=\"{'closed-nav': isMenuClosed, 'overlay-nav':isOverlayMenuMode,\r\n    'small-nav':isMenuCollapsed, 'small-nav-mode':isSmallMenuMode, 'fixed-header': isFixedHeader}\">\r\n  <header class=\"d-flex justify-content-start align-items-center\">\r\n    <div class=\"menu\" (click)=\"isMenuClosed = !isMenuClosed; onSideNavModeChange()\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </div>\r\n\r\n    <h2 class=\"text-center\">BSS Client Module</h2>\r\n\r\n    <div class=\"ml-auto d-flex justify-content-start align-items-center\">\r\n      <!-- <i class=\" text-lighten-1  material-icons\">account_circle</i> -->\r\n      <i class=\"material-icons\">event_available</i>\r\n      <div class=\"user-name d-none d-md-block\">23/10/2018</div>\r\n      \r\n      <div ngbDropdown class=\"dropdown-no-toggle dropdown-bounce\" placement=\"bottom-right\">\r\n        <i class=\"material-icons px-4\" ngbDropdownToggle>keyboard_arrow_down</i>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\">\r\n          <div class=\"dropdown-header d-flex justify-content-end align-items-center\">\r\n              <!-- <i class=\" text-lighten-1  material-icons\">account_circle</i> -->\r\n              <i class=\"text-lighten-1    fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n            <div class=\"user-name\">TRITON Admin</div>\r\n            <i class=\"material-icons pl-4\">keyboard_arrow_up</i>\r\n          </div>\r\n          <div class=\"dropdown-divider\"></div>\r\n\r\n          <a class=\"dropdown-item\" routerLink=\"/changepassword\">Change Password </a>\r\n          <div class=\"dropdown-divider\"></div>\r\n          <a class=\"dropdown-item d-flex justify-content-end\" href=\"#\">\r\n            <span>Logout</span>\r\n            <i class=\"material-icons ml-auto\">exit_to_app</i>\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </header>\r\n  <div class=\"main-content\">\r\n    <div [ngClass]=\"{'container-fluid': !isBoxedLayout, 'container': isBoxedLayout}\"\r\n    [@routerTransition]=\"getState(outlet)\">\r\n      <router-outlet #outlet=\"outlet\"></router-outlet>\r\n    </div>\r\n  </div>\r\n  <div class=\"side-nav\">\r\n    <div class=\"back-btn\" (click)=\"isMenuClosed = !isMenuClosed; onSideNavModeChange()\">\r\n      <i class=\"material-icons\">navigate_before</i>\r\n    </div>\r\n    <div class=\"logo\">\r\n      <a >TRITON</a>\r\n    </div>\r\n    <div class=\"user-info\">\r\n        <!-- <i class=\" text-lighten-1 large  material-icons\">account_circle</i> -->\r\n        <i class=\"text-lighten-1   fa fa-user-circle-o\" aria-hidden=\"true\"></i>\r\n      <div>\r\n        <div class=\"name\">TRITON Admin</div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"divider\"></div>\r\n    <px-gdn-multimenu class=\"menu\" [menuModel]=\"menuModel\" [smallMenu]=\"isSmallMenuMode\"\r\n                      (collapse)=\"isMenuCollapsed = $event\"></px-gdn-multimenu>\r\n  </div>\r\n</div>\r\n<!-- <div class=\"card options-panel options-closed\" [class.options-closed]=\"isOptionsClosed\">\r\n  <div class=\"card-body\">\r\n    <div class=\"d-flex justify-content-between\">\r\n      <h5 class=\"card-title \">\r\n        Options\r\n      </h5>\r\n      <i class=\"material-icons options-close-btn\" (click)=\"isOptionsClosed =!isOptionsClosed\">close</i>\r\n    </div>\r\n    <div class=\"d-flex align-items-center mb-2\">\r\n      <div class=\"px-gdn-toggle\">\r\n        <input id=\"toggle-boxed\" type=\"checkbox\" [ngModel]=\"isBoxedLayout\" (change)=\"toggleBoxed()\"/>\r\n        <label for=\"toggle-boxed\" class=\"label-default\"></label>\r\n      </div>\r\n      <div class=\"pl-3\">\r\n        <label class=\"mb-0\" for=\"toggle-boxed\">Boxed</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex align-items-center mb-2\">\r\n      <div class=\"px-gdn-toggle\">\r\n        <input id=\"toggle-compact\" type=\"checkbox\" [ngModel]=\"isSmallMenuMode\" (change)=\"toggleCompactMenu()\"/>\r\n        <label for=\"toggle-compact\" class=\"label-default\"></label>\r\n      </div>\r\n      <div class=\"pl-3\">\r\n        <label class=\"mb-0\" for=\"toggle-compact\">Compact sidenav</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex align-items-center mb-2\">\r\n      <div class=\"px-gdn-toggle\">\r\n        <input id=\"toggle-overlay\" type=\"checkbox\" [ngModel]=\"isOverlayMenuMode\" (change)=\"toggleOverlayMode()\"/>\r\n        <label for=\"toggle-overlay\" class=\"label-default\"></label>\r\n      </div>\r\n      <div class=\"pl-3\">\r\n        <label class=\"mb-0\" for=\"toggle-overlay\">Sidenav overlay</label>\r\n      </div>\r\n    </div>\r\n    <div class=\"d-flex align-items-center\">\r\n      <div class=\"px-gdn-toggle\">\r\n        <input id=\"toggle-fixed\" type=\"checkbox\" [ngModel]=\"isFixedHeader\" (change)=\"toggleFixedHeader()\"/>\r\n        <label for=\"toggle-fixed\" class=\"label-default\"></label>\r\n      </div>\r\n      <div class=\"pl-3\">\r\n        <label class=\"mb-0\" for=\"toggle-fixed\">Fixed header</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <i class=\"material-icons options-open-btn\" (click)=\"isOptionsClosed =!isOptionsClosed\">settings</i>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-main-page .application {\n  height: 100%;\n  padding-left: 250px;\n  transition: padding-left 0.3s ease; }\n  app-main-page .application.small-nav .side-nav {\n    width: 95px; }\n  app-main-page .application.small-nav .side-nav .logo {\n      opacity: 0;\n      visibility: hidden;\n      transition: opacity 0.3s ease, visibility 0s linear 0.3s; }\n  app-main-page .application.small-nav .side-nav .user-info .name,\n    app-main-page .application.small-nav .side-nav .user-info .status {\n      opacity: 0;\n      transition: opacity 0.3s ease; }\n  app-main-page .application.small-nav .side-nav .divider {\n      opacity: 0; }\n  app-main-page .application.small-nav-mode {\n    padding-left: 95px; }\n  app-main-page .application.overlay-nav {\n    padding-left: 0; }\n  app-main-page .application.closed-nav {\n    padding-left: 0; }\n  app-main-page .application.closed-nav .side-nav {\n      -webkit-transform: translateX(-110%);\n              transform: translateX(-110%); }\n  app-main-page .application.fixed-header header {\n    position: fixed;\n    left: 250px;\n    right: 0;\n    transition: left 0.3s ease; }\n  app-main-page .application.fixed-header .main-content {\n    padding-top: 91px; }\n  app-main-page .application.fixed-header.small-nav-mode header {\n    left: 95px; }\n  app-main-page .application.fixed-header.closed-nav header {\n    left: 0; }\n  @media screen and (max-width: 400px) {\n    app-main-page .application {\n      overflow-x: hidden; } }\n  app-main-page .application .side-nav {\n    position: fixed;\n    left: 0;\n    top: 0;\n    bottom: 0;\n    width: 250px;\n    background: linear-gradient(60deg, #00c8fa 0%, #0be3df 100%);\n    transition: width 0.3s ease, -webkit-transform 0.3s ease;\n    transition: width 0.3s ease, transform 0.3s ease;\n    transition: width 0.3s ease, transform 0.3s ease, -webkit-transform 0.3s ease;\n    z-index: 2001;\n    box-shadow: 0px 11px 15px -7px rgba(0, 0, 0, 0.2), 0px 24px 38px 3px rgba(0, 0, 0, 0.14), 0px 9px 46px 8px rgba(0, 0, 0, 0.12); }\n  app-main-page .application .side-nav .back-btn {\n      position: absolute;\n      left: 25px;\n      top: 25px;\n      cursor: pointer; }\n  app-main-page .application .side-nav .back-btn .material-icons {\n        font-size: 30px;\n        color: #ffffff; }\n  app-main-page .application .side-nav .logo {\n      text-align: center;\n      line-height: 80px;\n      padding-bottom: 15px;\n      transition: opacity 0.3s ease; }\n  app-main-page .application .side-nav .logo a {\n        text-decoration: inherit;\n        font-family: Raleway, sans-serif;\n        letter-spacing: 0.05em;\n        font-size: 30px;\n        color: #fefefe;\n        font-weight: 300; }\n  app-main-page .application .side-nav .user-info {\n      color: #ffffff;\n      padding-left: 100px;\n      position: relative;\n      height: 55px; }\n  app-main-page .application .side-nav .user-info img {\n        position: absolute;\n        width: 55px;\n        height: 55px;\n        left: 23px;\n        top: 50%;\n        -webkit-transform: translateY(-50%);\n                transform: translateY(-50%); }\n  app-main-page .application .side-nav .user-info .name {\n        font-size: 18px;\n        white-space: nowrap;\n        transition: opacity 0.3s ease; }\n  app-main-page .application .side-nav .user-info .status {\n        transition: opacity 0.3s ease; }\n  app-main-page .application .side-nav .divider {\n      height: 2px;\n      background-color: rgba(0, 0, 0, 0.08);\n      margin-top: 25px;\n      margin-bottom: 10px;\n      transition: opacity 0.3s ease; }\n  app-main-page .application .side-nav .menu {\n      height: calc(100% - 192px); }\n  app-main-page .application header {\n    background-color: #ffffff;\n    height: 75px;\n    z-index: 2001;\n    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }\n  app-main-page .application header .menu {\n      padding: 0 35px; }\n  app-main-page .application header .menu i {\n        color: rgba(0, 0, 0, 0.38);\n        cursor: pointer; }\n  app-main-page .application header .search {\n      max-width: 200px;\n      height: 40px;\n      border: 1px solid rgba(0, 0, 0, 0.12);\n      border-radius: 20px;\n      z-index: 0; }\n  app-main-page .application header .search .form-control {\n        border: none !important;\n        background-color: transparent;\n        line-height: 40px;\n        box-shadow: none !important; }\n  app-main-page .application header .search i {\n        color: rgba(0, 0, 0, 0.18);\n        cursor: pointer;\n        line-height: 38px; }\n  app-main-page .application header .user-avatar {\n      width: 30px;\n      height: 30px;\n      margin-right: 10px; }\n  app-main-page .application header .dropdown-menu {\n      left: -150px; }\n  app-main-page .application header .dropdown-menu.show {\n        top: -27px !important; }\n  app-main-page .application header .dropdown-menu .dropdown-header {\n        height: 55px; }\n  app-main-page .application header .dropdown-menu .dropdown-header i:hover {\n          color: #0be3df;\n          transition: color 0.2s ease; }\n  app-main-page .application .main-content {\n    min-height: calc(100% - 75px);\n    min-width: 225px;\n    padding: 16px 17px; }\n  @media screen and (max-width: 500px) {\n      app-main-page .application .main-content {\n        padding: 16px 0; } }\n  app-main-page .application .main-content > div {\n      height: 100%; }\n  app-main-page .options-panel {\n  position: fixed;\n  right: 0;\n  top: 140px;\n  overflow: hidden;\n  max-height: 180px;\n  max-width: 200px;\n  transition: max-height 0.3s ease, max-width 0.3s ease;\n  z-index: 2001;\n  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14), 0px 1px 14px 0px rgba(0, 0, 0, 0.12); }\n  app-main-page .options-panel .card-body {\n    visibility: visible;\n    opacity: 1;\n    transition: opacity 0.2s ease 0.3s; }\n  app-main-page .options-panel .card-body .options-close-btn {\n      color: #0be3df;\n      cursor: pointer; }\n  app-main-page .options-panel .options-open-btn {\n    position: absolute;\n    top: 9px;\n    right: 7px;\n    color: #0be3df;\n    cursor: pointer;\n    -webkit-animation: rotate 3s linear;\n            animation: rotate 3s linear;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-fill-mode: forwards;\n            animation-fill-mode: forwards;\n    opacity: 0;\n    visibility: hidden;\n    transition: opacity 0.2s ease, visibility 0s linear 0.2s; }\n  app-main-page .options-panel.options-closed {\n    max-width: 40px;\n    max-height: 40px;\n    transition: max-height 0.3s ease 0.1s, max-width 0.3s ease 0.1s; }\n  app-main-page .options-panel.options-closed .card-body {\n      visibility: hidden;\n      opacity: 0;\n      transition: opacity 0.1s ease, visibility 0s linear 0.1s; }\n  app-main-page .options-panel.options-closed .options-open-btn {\n      opacity: 1;\n      visibility: visible;\n      transition: opacity 0.3s ease 0.3s; }\n  @-webkit-keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  @keyframes rotate {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n  app-main-page .application .side-nav .logo {\n  text-align: center;\n  line-height: 80px;\n  padding-bottom: 0px !important;\n  transition: opacity 0.3s ease; }\n  app-main-page .application .side-nav .user-info {\n  color: #ffffff;\n  padding-left: 50px !important;\n  position: relative;\n  height: 90px; }\n"

/***/ }),

/***/ "./src/app/pages/main-page/main-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/*! exports provided: MainPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainPageComponent", function() { return MainPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _resize_resize_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../resize/resize.service */ "./src/app/resize/resize.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _utils_page_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/page.animation */ "./src/app/utils/page.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-webstorage-service */ "./node_modules/angular-webstorage-service/bundles/angular-webstorage-service.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * This page wraps all other pages in application, it contains header, side menu and router outlet for child pages
 */
var MainPageComponent = /** @class */ (function () {
    function MainPageComponent(storage, resizeService, translateService, router) {
        this.storage = storage;
        this.resizeService = resizeService;
        this.router = router;
        // Model for side menu
        this.menuModel = [
            {
                title: 'Admin Dashboard',
                routerUrl: '/main/dashboard',
                iconClass: 'material-icons',
                iconCode: 'dashboard',
            },
            {
                title: 'Report',
                iconClass: 'material-icons',
                iconCode: 'assignment',
                children: [
                    {
                        title: 'Report History',
                        iconClass: 'material-icons',
                        // iconCode: 'work',
                        routerUrl: '/main/viewreport',
                    },
                    {
                        title: 'Generate Report',
                        iconClass: 'material-icons',
                        // iconCode: 'work',
                        routerUrl: '/main/generatereports',
                    }
                ]
            },
            {
                title: 'Complaints',
                iconClass: 'material-icons',
                iconCode: 'speaker_notes',
                children: [
                    {
                        title: 'Complaints',
                        iconClass: 'material-icons',
                        // iconCode: 'work',
                        routerUrl: '/main/listcomplaints'
                    },
                    {
                        title: 'Feedback',
                        iconClass: 'material-icons',
                        // iconCode: 'work',
                        routerUrl: '/main/listfeedback',
                    }
                ]
            },
            {
                title: 'Service History',
                iconClass: 'material-icons',
                iconCode: 'list_alt',
                routerUrl: '/main/servicehistory'
            },
            {
                title: 'Emergency ALert',
                iconClass: 'material-icons',
                iconCode: 'security',
                routerUrl: '/main/alertmanagement'
            },
        ];
        // Side menu options
        this.isSmallMenuMode = false;
        this.isMenuCollapsed = false;
        this.isMenuClosed = this.isSmallWidth();
        this.isOverlayMenuMode = this.isSmallWidth();
        // Side menu animation value. Is used for delay to render content after side panel changes
        this.sideNavTransitionDuration = 300;
        // Open/close options window
        this.isOptionsClosed = true;
        // Box layout option
        this.isBoxedLayout = false;
        // Fixed header option
        this.isFixedHeader = true;
        this.numberofschools0user = 0;
        this.numberofuer0schools = 0;
        this.id = this.getFromLocal('user_id');
        this.onResize();
        // this language will be used as a fallback when a translation isn't found in the current language
        translateService.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translateService.use('en');
    }
    /**
     * Window resize listener
     */
    MainPageComponent.prototype.onResize = function () {
        var _this = this;
        this.resizeService.resizeInformer$.next();
        if (this.isSmallWidth()) {
            this.isOverlayMenuMode = true;
            this.isMenuClosed = true;
            setTimeout(function () { return _this.resizeService.resizeInformer$.next(); }, this.sideNavTransitionDuration + 700);
        }
    };
    /**
     * Call resize service after side panel mode changes
     */
    MainPageComponent.prototype.onSideNavModeChange = function () {
        var _this = this;
        setTimeout(function () {
            _this.resizeService.resizeInformer$.next();
        }, this.sideNavTransitionDuration);
    };
    MainPageComponent.prototype.ngOnInit = function () {
    };
    /**
     * Call resize service after box mode changes
     */
    MainPageComponent.prototype.toggleBoxed = function () {
        var _this = this;
        this.isBoxedLayout = !this.isBoxedLayout;
        setTimeout(function () {
            _this.resizeService.resizeInformer$.next();
        }, 0);
    };
    MainPageComponent.prototype.toggleCompactMenu = function () {
        var _this = this;
        this.isSmallMenuMode = !this.isSmallMenuMode;
        setTimeout(function () {
            _this.resizeService.resizeInformer$.next();
        }, this.sideNavTransitionDuration);
    };
    /**
     * Call resize service after side panel mode changes
     */
    MainPageComponent.prototype.toggleOverlayMode = function () {
        var _this = this;
        this.isOverlayMenuMode = !this.isOverlayMenuMode;
        setTimeout(function () {
            _this.resizeService.resizeInformer$.next();
        }, this.sideNavTransitionDuration);
    };
    /**
     * Changes header mode
     */
    MainPageComponent.prototype.toggleFixedHeader = function () {
        this.isFixedHeader = !this.isFixedHeader;
    };
    /**
     * Return url as state, that will trigger animation when url changes
     * @param outlet
     * @returns {string}
     */
    MainPageComponent.prototype.getState = function (outlet) {
        return this.router.url;
    };
    MainPageComponent.prototype.isSmallWidth = function () {
        return window.innerWidth < 700;
    };
    MainPageComponent.prototype.getFromLocal = function (key) {
        // console.log('recieved= key:' + key);
        return this.storage.get(key);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MainPageComponent.prototype, "onResize", null);
    MainPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-main-page',
            template: __webpack_require__(/*! ./main-page.component.html */ "./src/app/pages/main-page/main-page.component.html"),
            styles: [__webpack_require__(/*! ./main-page.component.scss */ "./src/app/pages/main-page/main-page.component.scss")],
            animations: [_utils_page_animation__WEBPACK_IMPORTED_MODULE_3__["routerTransition"]],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["LOCAL_STORAGE"])),
        __metadata("design:paramtypes", [angular_webstorage_service__WEBPACK_IMPORTED_MODULE_5__["WebStorageService"], _resize_resize_service__WEBPACK_IMPORTED_MODULE_1__["ResizeService"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], MainPageComponent);
    return MainPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.html":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mx-auto\">\n  <div class=\"card-body\">\n    <h2 class=\"card-title text-center mb-5\">Sign up</h2>\n    <form>\n      <div class=\"form-group\">\n        <label for=\"name\">Username</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\">\n      </div>\n      <div class=\"form-group \">\n        <label for=\"email\">Email address</label>\n        <input type=\"email\" class=\"form-control\" id=\"email\">\n      </div>\n      <div class=\"form-group\">\n        <label for=\"passwords\">Password</label>\n        <input type=\"password\" class=\"form-control\" id=\"passwords\">\n      </div>\n      <div class=\"mt-5 text-center\">\n        <button type=\"submit\" class=\"btn px-gdn-btn mb-3 mr-3\" routerLink=\"/\">SIGN UP</button>\n      </div>\n      <div class=\"mt-4 text-center\">Already have an account? <a routerLink=\"/login\">Login</a></div>\n      <div class=\"dropdown-divider my-4\"></div>\n      <div class=\"text-center\">Or connect with</div>\n      <div class=\"d-flex justify-content-center mt-4\">\n        <a class=\"px-gdn-icon mx-2\" href=\"#\"><i class=\"icon-social-facebook\"></i></a>\n        <a class=\"px-gdn-icon mx-2\" href=\"#\"><i class=\"icon-social-pinterest\"></i></a>\n        <a class=\"px-gdn-icon mx-2\" href=\"#\"><i class=\"icon-social-twitter\"></i></a>\n        <a class=\"px-gdn-icon mx-2\" href=\"#\"><i class=\"icon-social-instagram\"></i></a>\n        <a class=\"px-gdn-icon mx-2\" href=\"#\"><i class=\"icon-social-skype\"></i></a>\n      </div>\n    </form>\n  </div>\n</div>\n<footer class=\"text-nowrap\">\n  2018 <a routerLink=\"/\">Cynosure</a> all rights reserved\n</footer>\n<img src=\"/assets/images/user-pages/register-img.png\">\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-register-page {\n  height: auto;\n  padding: 16px 16px 70px;\n  overflow-x: hidden; }\n  app-register-page .card {\n    max-width: 630px;\n    margin-top: 100px; }\n  app-register-page .card .card-body {\n      padding: 50px 130px 80px 130px; }\n  app-register-page footer {\n    position: absolute;\n    left: 50%;\n    bottom: 25px;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%); }\n  app-register-page img {\n    position: absolute;\n    left: 0;\n    bottom: 0; }\n  @media screen and (max-width: 1024px) {\n    app-register-page {\n      padding-bottom: 290px; } }\n  @media screen and (max-width: 768px) {\n    app-register-page .card {\n      margin-top: 50px; }\n      app-register-page .card .card-body {\n        padding-left: 80px;\n        padding-right: 80px; }\n    app-register-page footer {\n      bottom: 235px; } }\n  @media screen and (max-width: 425px) {\n    app-register-page .card {\n      margin-top: 0; }\n      app-register-page .card .card-body {\n        padding-left: 30px;\n        padding-right: 30px; } }\n"

/***/ }),

/***/ "./src/app/pages/register-page/register-page.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/register-page/register-page.component.ts ***!
  \****************************************************************/
/*! exports provided: RegisterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageComponent", function() { return RegisterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterPageComponent = /** @class */ (function () {
    function RegisterPageComponent() {
    }
    RegisterPageComponent.prototype.ngOnInit = function () {
    };
    RegisterPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-page',
            template: __webpack_require__(/*! ./register-page.component.html */ "./src/app/pages/register-page/register-page.component.html"),
            styles: [__webpack_require__(/*! ./register-page.component.scss */ "./src/app/pages/register-page/register-page.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], RegisterPageComponent);
    return RegisterPageComponent;
}());



/***/ }),

/***/ "./src/app/resize/resize.service.ts":
/*!******************************************!*\
  !*** ./src/app/resize/resize.service.ts ***!
  \******************************************/
/*! exports provided: ResizeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return ResizeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Service for informing about resizing of layout
 */
var ResizeService = /** @class */ (function () {
    function ResizeService() {
        this.resizeInformer$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ResizeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ResizeService);
    return ResizeService;
}());



/***/ }),

/***/ "./src/app/routes/app-routes.module.ts":
/*!*********************************************!*\
  !*** ./src/app/routes/app-routes.module.ts ***!
  \*********************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/dashboard-page/dashboard-page.component */ "./src/app/pages/dashboard-page/dashboard-page.component.ts");
/* harmony import */ var _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/login-page/login-page.component */ "./src/app/pages/login-page/login-page.component.ts");
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/main-page/main-page.component */ "./src/app/pages/main-page/main-page.component.ts");
/* harmony import */ var _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/register-page/register-page.component */ "./src/app/pages/register-page/register-page.component.ts");
/* harmony import */ var _pages_forgotpswd_forgotpswd_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pages/forgotpswd/forgotpswd.component */ "./src/app/pages/forgotpswd/forgotpswd.component.ts");
/* harmony import */ var _pages_changepasword_changepasword_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/changepasword/changepasword.component */ "./src/app/pages/changepasword/changepasword.component.ts");
/* harmony import */ var app_complaints_newcomplaints_newcomplaints_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/complaints/newcomplaints/newcomplaints.component */ "./src/app/complaints/newcomplaints/newcomplaints.component.ts");
/* harmony import */ var app_complaints_editcomplaints_editcomplaints_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! app/complaints/editcomplaints/editcomplaints.component */ "./src/app/complaints/editcomplaints/editcomplaints.component.ts");
/* harmony import */ var app_complaints_viewcomplaints_viewcomplaints_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! app/complaints/viewcomplaints/viewcomplaints.component */ "./src/app/complaints/viewcomplaints/viewcomplaints.component.ts");
/* harmony import */ var app_complaints_listcomplaints_listcomplaints_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/complaints/listcomplaints/listcomplaints.component */ "./src/app/complaints/listcomplaints/listcomplaints.component.ts");
/* harmony import */ var app_complaints_closedcomplaints_closedcomplaints_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! app/complaints/closedcomplaints/closedcomplaints.component */ "./src/app/complaints/closedcomplaints/closedcomplaints.component.ts");
/* harmony import */ var app_feedback_newfeedback_newfeedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! app/feedback/newfeedback/newfeedback.component */ "./src/app/feedback/newfeedback/newfeedback.component.ts");
/* harmony import */ var app_feedback_viewfeedback_viewfeedback_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! app/feedback/viewfeedback/viewfeedback.component */ "./src/app/feedback/viewfeedback/viewfeedback.component.ts");
/* harmony import */ var app_feedback_editfeedback_editfeedback_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! app/feedback/editfeedback/editfeedback.component */ "./src/app/feedback/editfeedback/editfeedback.component.ts");
/* harmony import */ var app_feedback_listfeedback_listfeedback_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! app/feedback/listfeedback/listfeedback.component */ "./src/app/feedback/listfeedback/listfeedback.component.ts");
/* harmony import */ var app_feedback_reportfeedback_reportfeedback_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! app/feedback/reportfeedback/reportfeedback.component */ "./src/app/feedback/reportfeedback/reportfeedback.component.ts");
/* harmony import */ var app_complaints_completecomplaints_completecomplaints_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! app/complaints/completecomplaints/completecomplaints.component */ "./src/app/complaints/completecomplaints/completecomplaints.component.ts");
/* harmony import */ var app_test_test_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! app/test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var app_complaints_completeview_completeview_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! app/complaints/completeview/completeview.component */ "./src/app/complaints/completeview/completeview.component.ts");
/* harmony import */ var app_complaints_closedview_closedview_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! app/complaints/closedview/closedview.component */ "./src/app/complaints/closedview/closedview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















// Routes model for application. Some of the pages are loaded lazily to increase startup time.
var APP_ROUTES = [
    {
        path: 'main', component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_4__["MainPageComponent"], children: [
            { path: 'dashboard', component: _pages_dashboard_page_dashboard_page_component__WEBPACK_IMPORTED_MODULE_2__["DashboardPageComponent"] },
            { path: 'test', component: app_test_test_component__WEBPACK_IMPORTED_MODULE_19__["TestComponent"] },
            //**Complaints*/
            { path: 'newcomplaint', component: app_complaints_newcomplaints_newcomplaints_component__WEBPACK_IMPORTED_MODULE_8__["NewcomplaintsComponent"] },
            { path: 'viewcomplaint', component: app_complaints_viewcomplaints_viewcomplaints_component__WEBPACK_IMPORTED_MODULE_10__["ViewcomplaintsComponent"] },
            { path: 'editcomplaint', component: app_complaints_editcomplaints_editcomplaints_component__WEBPACK_IMPORTED_MODULE_9__["EditcomplaintsComponent"] },
            { path: 'listcomplaints', component: app_complaints_listcomplaints_listcomplaints_component__WEBPACK_IMPORTED_MODULE_11__["ListcomplaintsComponent"] },
            { path: 'closedcomplaints', component: app_complaints_closedcomplaints_closedcomplaints_component__WEBPACK_IMPORTED_MODULE_12__["ClosedcomplaintsComponent"] },
            { path: 'completecomplaints', component: app_complaints_completecomplaints_completecomplaints_component__WEBPACK_IMPORTED_MODULE_18__["CompletecomplaintsComponent"] },
            { path: 'completedview/:id', component: app_complaints_completeview_completeview_component__WEBPACK_IMPORTED_MODULE_20__["CompleteviewComponent"] },
            { path: 'colsedview/:id', component: app_complaints_closedview_closedview_component__WEBPACK_IMPORTED_MODULE_21__["ClosedviewComponent"] },
            //**FeedBack*/
            { path: 'newfeedback', component: app_feedback_newfeedback_newfeedback_component__WEBPACK_IMPORTED_MODULE_13__["NewfeedbackComponent"] },
            { path: 'viewfeedback', component: app_feedback_viewfeedback_viewfeedback_component__WEBPACK_IMPORTED_MODULE_14__["ViewfeedbackComponent"] },
            { path: 'editfeedback', component: app_feedback_editfeedback_editfeedback_component__WEBPACK_IMPORTED_MODULE_15__["EditfeedbackComponent"] },
            { path: 'listfeedback', component: app_feedback_listfeedback_listfeedback_component__WEBPACK_IMPORTED_MODULE_16__["ListfeedbackComponent"] },
            { path: 'reportfeedback', component: app_feedback_reportfeedback_reportfeedback_component__WEBPACK_IMPORTED_MODULE_17__["ReportfeedbackComponent"] },
            { path: '**', redirectTo: '/dashboard' },
        ]
    },
    { path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full' },
    { path: '', component: _pages_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_3__["LoginPageComponent"] },
    { path: 'register', component: _pages_register_page_register_page_component__WEBPACK_IMPORTED_MODULE_5__["RegisterPageComponent"] },
    { path: 'forgotpassword', component: _pages_forgotpswd_forgotpswd_component__WEBPACK_IMPORTED_MODULE_6__["ForgotpswdComponent"] },
    { path: 'changepassword', component: _pages_changepasword_changepasword_component__WEBPACK_IMPORTED_MODULE_7__["ChangepaswordComponent"] },
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_0__["PreloadAllModules"] }),
            ]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Button trigger modal -->\n<button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    Launch demo modal\n  </button>\n  \n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Modal title</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n          ...\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\">Save changes</button>\n        </div>\n      </div>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/test/test.component.scss":
/*!******************************************!*\
  !*** ./src/app/test/test.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestComponent = /** @class */ (function () {
    function TestComponent(http, route, router) {
        this.http = http;
        this.route = route;
        this.router = router;
        this.titles = [];
        this.datass = {};
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/utils/page.animation.ts":
/*!*****************************************!*\
  !*** ./src/app/utils/page.animation.ts ***!
  \*****************************************/
/*! exports provided: routerTransition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerTransition", function() { return routerTransition; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

// Page change animation
var routerTransition = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerTransition', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            // css styles at start of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }),
            // animation and styles at end of transition
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('.3s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]),
    ])
]);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! node-fetch */ "./node_modules/node-fetch/browser.js");
/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mohammedimthiyas/Documents/GitHub/bssclient-angular/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map