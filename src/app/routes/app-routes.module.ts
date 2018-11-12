
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule, ChangeDetectionStrategy} from '@angular/core';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';

import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';




// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: '', component: LoginPageComponent},
      
   

      



    
   
      {path: 'component-table', loadChildren: 'app/pages/component-table/component-table.module#ComponentTableModule'},
      {path: 'tree', loadChildren: 'app/pages/tree/tree-demo.module#TreeDemoModule'},
      {path: 'drag', loadChildren: 'app/pages/drag/drag.module#DragModule'},
      {path: 'editor', loadChildren: 'app/pages/editor/editor.module#EditorModule'},
      {path: 'slider', loadChildren: 'app/pages/slider/slider.module#SliderModule'},
      {path: '**', redirectTo: '/dashboard' }
    ]
  },
  {path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full'},
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
