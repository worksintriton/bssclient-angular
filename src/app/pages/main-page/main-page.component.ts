import { SchoolsService } from './../../schools.service';
import {Component, HostListener, OnInit, ViewEncapsulation} from '@angular/core';
import {ResizeService} from '../../resize/resize.service';
import {TranslateService} from '@ngx-translate/core';
import {routerTransition} from '../../utils/page.animation';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

/**
 * This page wraps all other pages in application, it contains header, side menu and router outlet for child pages
 */
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  animations: [routerTransition],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {
  // Model for side menu


  menuModel = [
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
          routerUrl: '/main/complaints'
        },
        {
          title: 'Feedback',
          iconClass: 'material-icons',
          // iconCode: 'work',
          routerUrl: '/main/viewfeedback',
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
  isSmallMenuMode = false;
  isMenuCollapsed = false;
  isMenuClosed = this.isSmallWidth();
  isOverlayMenuMode = this.isSmallWidth();
  // Side menu animation value. Is used for delay to render content after side panel changes
  sideNavTransitionDuration = 300;
  // Open/close options window
  isOptionsClosed = true;
  // Box layout option
  isBoxedLayout = false;
  // Fixed header option
  isFixedHeader = true;

  numberofschools: number;
  numberofuser: number;
  numberofschools0user= 0;
  numberofuer0schools= 0;

  constructor(private resizeService: ResizeService, translateService: TranslateService, private router: Router) {

    this.onResize();
    // this language will be used as a fallback when a translation isn't found in the current language
    translateService.setDefaultLang('en');

    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translateService.use('en');

  }

  /**
   * Window resize listener
   */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.resizeService.resizeInformer$.next();
    if (this.isSmallWidth()) {
      this.isOverlayMenuMode = true;
      this.isMenuClosed = true;
      setTimeout(() => this.resizeService.resizeInformer$.next(), this.sideNavTransitionDuration + 700);
    }
  }

  /**
   * Call resize service after side panel mode changes
   */
  onSideNavModeChange() {
    setTimeout(() => {
      this.resizeService.resizeInformer$.next();
    }, this.sideNavTransitionDuration)
  }

  ngOnInit(): void {

  }


  /**
   * Call resize service after box mode changes
   */
  toggleBoxed() {
    this.isBoxedLayout = !this.isBoxedLayout;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, 0);
  }

  toggleCompactMenu() {
    this.isSmallMenuMode = !this.isSmallMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Call resize service after side panel mode changes
   */
  toggleOverlayMode() {
    this.isOverlayMenuMode = !this.isOverlayMenuMode;
    setTimeout(() => {
      this.resizeService.resizeInformer$.next()
    }, this.sideNavTransitionDuration);
  }

  /**
   * Changes header mode
   */
  toggleFixedHeader() {
    this.isFixedHeader = !this.isFixedHeader;
  }

  /**
   * Return url as state, that will trigger animation when url changes
   * @param outlet
   * @returns {string}
   */
  getState(outlet) {
    return this.router.url;
  }

  private isSmallWidth() {
    return window.innerWidth < 700;
  }









}
