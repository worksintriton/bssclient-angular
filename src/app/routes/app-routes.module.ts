import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule, ChangeDetectionStrategy} from '@angular/core';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';

import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';
import { NewcomplaintsComponent } from 'app/complaints/newcomplaints/newcomplaints.component';
import { EditcomplaintsComponent } from 'app/complaints/editcomplaints/editcomplaints.component';
import { ViewcomplaintsComponent } from 'app/complaints/viewcomplaints/viewcomplaints.component';
import { ListcomplaintsComponent } from 'app/complaints/listcomplaints/listcomplaints.component';
import { ClosedcomplaintsComponent } from 'app/complaints/closedcomplaints/closedcomplaints.component';
import { NewfeedbackComponent } from 'app/feedback/newfeedback/newfeedback.component';
import { ViewfeedbackComponent } from 'app/feedback/viewfeedback/viewfeedback.component';
import { EditfeedbackComponent } from 'app/feedback/editfeedback/editfeedback.component';
import { ListfeedbackComponent } from 'app/feedback/listfeedback/listfeedback.component';
import { ReportfeedbackComponent } from 'app/feedback/reportfeedback/reportfeedback.component';
import { CompletecomplaintsComponent } from 'app/complaints/completecomplaints/completecomplaints.component';
import { TestComponent } from 'app/test/test.component';
import { CompleteviewComponent } from 'app/complaints/completeview/completeview.component';
import { ClosedviewComponent } from 'app/complaints/closedview/closedview.component';








 
// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'test', component: TestComponent},
      
      

  //**Complaints*/
  {path: 'newcomplaint', component: NewcomplaintsComponent},
  {path: 'viewcomplaint', component: ViewcomplaintsComponent},
  {path: 'editcomplaint', component: EditcomplaintsComponent},
  {path: 'listcomplaints', component: ListcomplaintsComponent},
  {path: 'closedcomplaints', component: ClosedcomplaintsComponent},
  {path: 'completecomplaints', component: CompletecomplaintsComponent},
  {path: 'completedview/:id', component: CompleteviewComponent},
  {path: 'colsedview/:id', component: ClosedviewComponent},

//**FeedBack*/
  {path: 'newfeedback', component: NewfeedbackComponent},
  {path: 'viewfeedback', component: ViewfeedbackComponent},
  {path: 'editfeedback', component: EditfeedbackComponent},
  {path: 'listfeedback', component: ListfeedbackComponent},
  {path: 'reportfeedback', component: ReportfeedbackComponent},

      {path: '**', redirectTo: '/dashboard' },
    ]
  },
  { path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full' },
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'forgotpassword', component: ForgotpswdComponent},
  {path: 'changepassword', component: ChangepaswordComponent},

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}




