import { ViewschooluserComponent } from './../viewschooluser/viewschooluser.component';

import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {NgModule, ChangeDetectionStrategy} from '@angular/core';
import {DashboardPageComponent} from '../pages/dashboard-page/dashboard-page.component';
import {TypographyPageComponent} from '../pages/typography-page/typography-page.component';
import {DropdownPageComponent} from '../pages/dropdown-page/dropdown-page.component';
import {LoginPageComponent} from '../pages/login-page/login-page.component';
import {FormElementsPageComponent} from '../pages/form-elements-page/form-elements-page.component';
import {ButtonsPageComponent} from '../pages/buttons-page/buttons-page.component';
import {MainPageComponent} from '../pages/main-page/main-page.component';
import {RegisterPageComponent} from '../pages/register-page/register-page.component';
import {ComingSoonPageComponent} from '../pages/coming-soon-page/coming-soon-page.component';
import {MaintenancePageComponent} from '../pages/maintenance-page/maintenance-page.component';
import {NotFoundPageComponent} from '../pages/not-found-page/not-found-page.component';
import {ProductsPageComponent} from '../pages/products-page/products-page.component';
import {OtherComponentsPageComponent} from '../pages/other-components-page/other-components-page.component';
import {ProductDetailsPageComponent} from '../pages/product-details-page/product-details-page.component';
import {TabsPageComponent} from '../pages/tabs-page/tabs-page.component';

import {CartPageComponent} from '../pages/cart-page/cart-page.component';
import {PricingTablesPageComponent} from '../pages/pricing-tables-page/pricing-tables-page.component';
import {ListPageComponent} from '../pages/list-page/list-page.component';
import {ProfilePageComponent} from '../pages/profile-page/profile-page.component';
import {RatingPageComponent} from '../pages/rating-page/rating-page.component';
import {GoogleMapPageComponent} from '../pages/google-map-page/google-map-page.component';
import {ContactPageComponent} from '../pages/contact-page/contact-page.component';
import {CardsPageComponent} from '../pages/cards-page/cards-page.component';
import {BarchartPageComponent} from '../pages/barchart-page/barchart-page.component';
import {LineChartPageComponent} from '../pages/line-chart-page/line-chart-page.component';
import {PieChartPageComponent} from '../pages/pie-chart-page/pie-chart-page.component';
import {BubbleChartPageComponent} from '../pages/bubble-chart-page/bubble-chart-page.component';
import {HeatMapPageComponent} from '../pages/heat-map-page/heat-map-page.component';
import {RadarPageComponent} from '../pages/radar-page/radar-page.component';
import {TablePageComponent} from '../pages/table-page/table-page.component';
import {AccordionPageComponent} from '../pages/accordion-page/accordion-page.component';
import {DatepickerPageComponent} from '../pages/datepicker-page/datepicker-page.component';
import {ModalPageComponent} from '../pages/modal-page/modal-page.component';
import {PaginationPageComponent} from '../pages/pagination-page/pagination-page.component';
import {PopoverPageComponent} from '../pages/popover-page/popover-page.component';
import {ProgressbarPageComponent} from '../pages/progressbar-page/progressbar-page.component';
import {TimepickerPageComponent} from '../pages/timepicker-page/timepicker-page.component';
import {TooltipPageComponent} from '../pages/tooltip-page/tooltip-page.component';
import {GridPageComponent} from '../pages/grid-page/grid-page.component';
import {BadgePageComponent} from '../pages/badge-page/badge-page.component';
import {IconsPageComponent} from '../pages/icons-page/icons-page.component';
import {DataMapsPageComponent} from '../pages/data-maps-page/data-maps-page.component';
import {TranslatePageComponent} from '../pages/translate-page/translate-page.component';
import {ScrollPageComponent} from '../pages/scroll-page/scroll-page.component';
import { SchoolmanagementComponent } from '../schoolmanagement/schoolmanagement.component';
import { UsermanagementComponent } from '../usermanagement/usermanagement.component';
import { AddschoolComponent } from '../addschool/addschool.component';
import { AssignusertoschoolComponent } from '../assignusertoschool/assignusertoschool.component';
import { AdduserComponent } from '../adduser/adduser.component';
import { UpdateuserComponent } from '../updateuser/updateuser.component';
import { ForgotpswdComponent } from '../pages/forgotpswd/forgotpswd.component';
import { ForgotresetComponent } from '../pages/forgotreset/forgotreset.component';
import { ChangepaswordComponent } from '../pages/changepasword/changepasword.component';
import { GeneratereportComponent } from '../generatereport/generatereport.component';
import { ViewreportComponent } from '../viewreport/viewreport.component';
import { FeedbackComponent } from '../feedback/feedback.component';
import { AssignusertocynosureComponent } from '../assignusertocynosure/assignusertocynosure.component';
import { ComplaintComponent } from '../complaint/complaint.component';
import { AddcomplaintComponent } from '../addcomplaint/addcomplaint.component';
import { InprocresscomplaintComponent } from '../inprocresscomplaint/inprocresscomplaint.component';
import { CompletedcomplaintComponent } from '../completedcomplaint/completedcomplaint.component';
import { ServicehistoryComponent } from '../servicehistory/servicehistory.component';
import { AlertmanagementComponent } from '../alertmanagement/alertmanagement.component';
import { ComplainthistoryComponent } from '../complainthistory/complainthistory.component';
import { ContracthistoryComponent } from '../contracthistory/contracthistory.component';
import { ViewfeedbackComponent } from '../viewfeedback/viewfeedback.component';
import { FeedbackhistrotyComponent } from '../feedbackhistroty/feedbackhistroty.component';
import { ReportdetialsComponent } from '../reportdetials/reportdetials.component';
import { ViewcomplaintsComponent } from '../viewcomplaints/viewcomplaints.component';




// Routes model for application. Some of the pages are loaded lazily to increase startup time.
const APP_ROUTES: Routes = [
  {
    path: 'main', component: MainPageComponent, children: [
      {path: 'dashboard', component: DashboardPageComponent},
      {path: 'schoolmanagement', component: SchoolmanagementComponent},
      {path: 'usermanagements', component: UsermanagementComponent},
      {path: 'assignusertoschool', component: AssignusertoschoolComponent},
      {path: 'assignuser', component: AssignusertocynosureComponent},
      {path: 'addschool', component: AddschoolComponent},
      {path: 'adduser', component: AdduserComponent},
      {path: 'schoolmanagement', component: TypographyPageComponent},
      {path: 'dropdown', component: DropdownPageComponent},
      {path: '', component: LoginPageComponent},
      {path: 'form-elements', component: FormElementsPageComponent},
      
   
      {path: 'updateuser/:id', component: UpdateuserComponent},
      {path: 'viewuserschool', component: ViewschooluserComponent},
      {path: 'product-details', component: ProductDetailsPageComponent},
      {path: 'tabs', component: TabsPageComponent},
      {path: 'generatereports', component: GeneratereportComponent},
      {path: 'viewreport', component: ViewreportComponent},
      {path: 'feedback', component: FeedbackComponent},
      {path: 'complaints', component: ComplaintComponent},
      {path: 'addcomplaints', component: AddcomplaintComponent},
      {path: 'inprocesscomplaint', component: InprocresscomplaintComponent},
      {path: 'completedcomplaint', component: CompletedcomplaintComponent},
      {path: 'servicehistory', component: ServicehistoryComponent},
      {path: 'alertmanagement', component: AlertmanagementComponent},
      {path: 'feedbackhistory', component: FeedbackhistrotyComponent},
      {path: 'complainthistory', component: ComplainthistoryComponent},
      {path: 'contracthistory', component: ContracthistoryComponent},
      {path: 'viewfeedback', component: ViewfeedbackComponent},
      {path: 'tablePage', component: TablePageComponent},
      {path: 'cart', component: CartPageComponent},
      {path: 'reportdel', component: ReportdetialsComponent},

      {path: 'viewcomplaint', component: ViewcomplaintsComponent},
      



    
   
      {path: 'pricing-tables', component: PricingTablesPageComponent},
      {path: 'lists', component: ListPageComponent},
      {path: 'profile', component: ProfilePageComponent},
      {path: 'rating', component: RatingPageComponent},
      {path: 'google-map', component: GoogleMapPageComponent},
      {path: 'contact', component: ContactPageComponent},
      {path: 'usermanagement', component: CardsPageComponent},
      {path: 'barchart', component: BarchartPageComponent},
      {path: 'linechart', component: LineChartPageComponent},
      {path: 'piechart', component: PieChartPageComponent},
      {path: 'bubblechart', component: BubbleChartPageComponent},
      {path: 'heatmap', component: HeatMapPageComponent},
      {path: 'radar', component: RadarPageComponent},
      {path: 'table', component: TablePageComponent},
      {path: 'accordion', component: AccordionPageComponent},
      {path: 'datepicker', component: DatepickerPageComponent},
      {path: 'modal', component: ModalPageComponent},
      {path: 'pagination', component: PaginationPageComponent},
      {path: 'popover', component: PopoverPageComponent},
      {path: 'progressbar', component: ProgressbarPageComponent},
      {path: 'timepicker', component: TimepickerPageComponent},
      {path: 'tooltip', component: TooltipPageComponent},
      {path: 'assignusertoschool', component: GridPageComponent},
      {path: 'badge', component: BadgePageComponent},
      {path: 'icons', component: IconsPageComponent},
      {path: 'data-maps', component: DataMapsPageComponent},
      {path: 'translate', component: TranslatePageComponent},
      {path: 'scroll', component: ScrollPageComponent},
      {path: 'component-table', loadChildren: 'app/pages/component-table/component-table.module#ComponentTableModule'},
      {path: 'tree', loadChildren: 'app/pages/tree/tree-demo.module#TreeDemoModule'},
      {path: 'drag', loadChildren: 'app/pages/drag/drag.module#DragModule'},
      {path: 'editor', loadChildren: 'app/pages/editor/editor.module#EditorModule'},
      {path: 'slider', loadChildren: 'app/pages/slider/slider.module#SliderModule'},
      {path: '**', redirectTo: '/dashboard' }
    ]
  },
  {path: 'mainpage', redirectTo: '/main/dashboard', pathMatch: 'full'},
  {path: 'usermanage', component: UsermanagementComponent},
  {path: '', component: LoginPageComponent},
  {path: 'register', component: RegisterPageComponent},
  {path: 'forgotpassword', component: ForgotpswdComponent},
  {path: 'forgotreset', component: ForgotresetComponent},
  {path: 'changepassword', component: ChangepaswordComponent},
  {path: 'coming-soon', component: ComingSoonPageComponent},
  {path: 'maintenance', component: MaintenancePageComponent},
  {path: '404', component: NotFoundPageComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ]
})
export class AppRoutesModule {
}
