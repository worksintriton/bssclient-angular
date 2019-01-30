import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MultimenuComponent} from './components/multimenu/multimenu.component';
import {AppRoutesModule} from './routes/app-routes.module';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {NgbButtonsModule, NgbModule, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {ResizeService} from './resize/resize.service';
import {EchartComponent} from './components/echart-component/echart.component';
import {LoginPageComponent} from './pages/login-page/login-page.component';
import {MainPageComponent} from './pages/main-page/main-page.component';
import {RegisterPageComponent} from './pages/register-page/register-page.component';
import {NgxGalleryModule} from 'ngx-gallery';
import {AgmCoreModule} from '@agm/core';
import {TextMaskModule} from 'angular2-text-mask';
import { HttpClientModule ,HttpClient} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ApiIntegService } from './api-integ.service';
import { HttpModule } from '@angular/http';
import { ForgotpswdComponent } from './pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from './pages/changepasword/changepasword.component';
import { StorageServiceModule} from 'angular-webstorage-service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AlertmanagementComponent } from './alertmanagement/alertmanagement.component';
import { EditcomplaintsComponent } from './complaints/editcomplaints/editcomplaints.component';
import { ListcomplaintsComponent } from './complaints/listcomplaints/listcomplaints.component';
import { ClosedcomplaintsComponent } from './complaints/closedcomplaints/closedcomplaints.component';
import { ListfeedbackComponent } from './feedback/listfeedback/listfeedback.component';
import { CompletecomplaintsComponent } from './complaints/completecomplaints/completecomplaints.component';
import { TestComponent } from './test/test.component';
import { CompleteviewComponent } from './complaints/completeview/completeview.component';
import { ClosedviewComponent } from './complaints/closedview/closedview.component';



const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

// AoT requires an exported function for factories for translate module
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MultimenuComponent,
    DashboardPageComponent,
    EchartComponent,
  
    LoginPageComponent,

    MainPageComponent,
    RegisterPageComponent,
   
   
    
    
    ForgotpswdComponent,
    ChangepaswordComponent,
    AlertmanagementComponent,
    EditcomplaintsComponent,
    ListcomplaintsComponent,
    ClosedcomplaintsComponent,
    ListfeedbackComponent,
    CompletecomplaintsComponent,
    TestComponent,
    CompleteviewComponent,
    ClosedviewComponent,
    

   


  ],
  imports: [
  
    BrowserModule,

    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    PerfectScrollbarModule,
    RouterModule,
    AppRoutesModule,
    NgbModule.forRoot(),
    NgbButtonsModule,
    NgxGalleryModule,
    TextMaskModule,
    BrowserAnimationsModule,
    HttpModule,
    StorageServiceModule,
    // Insert your google maps api key, if you do not need google map in your project, you can remove this import
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY_HERE'
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
  ],
  providers: [
    ApiIntegService,
    ResizeService,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
