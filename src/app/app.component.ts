import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { TranslateConfigService } from './core/services/translate-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'tebdemo';
  opened: boolean = true;
  appList = [];
  autenticated: boolean = false;
  pageName: string = "";
  displayTimer$: Observable<number>;

  idleState = 'Not started.';
  timedOut = false;
  lastPing?: Date = null;
  languageList = [];
  currentLang = '';

  constructor(
    //private routeService: RouteService,
    private activatedRoute: ActivatedRoute,
    //private commonService: CommonService,
    //public toastr: ToastrManager,
    private router: Router,
    //private userIdle: UserIdleService,
    //private idle: Idle,
    //private keepalive: Keepalive,
    //private translate: TranslateService
    private translateConfigService: TranslateConfigService
  ) {
    //translate.setDefaultLang('en');
    this.getAppList();
    this.getLanguageList();
    this.checkAuthentication();

    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        var url = event.url;
        var urls = url.split("/");
        this.pageName = urls.length >= 2 ? urls[1] : "";
      }
    })

  }

  checkAuthentication() {
    this.autenticated = true;
    let auth = localStorage.getItem("Token");
    if (auth != undefined && auth != null && auth != "") {
      this.autenticated = true;
    }
    else {
      this.redirectToModule("comp-one");
    }
  }

  getAppList() {
    this.appList.push({ AppCode: "Comp-One", AppName: "comp-one", url: "comp-one", icon: "dashboard" });
    this.appList.push({ AppCode: "Comp-Two", AppName: "comp-two", url: "comp-two", icon: "contacts" });
    this.appList.push({ AppCode: "Comp-Three", AppName: "comp-three", url: "comp-three", icon: "person" });
    this.appList.push({ AppCode: "Comp-Four", AppName: "comp-four", url: "comp-four", icon: "person" });
  }

  getLanguageList() {
    this.languageList.push({ name: "English", code: 'en', icon: "g_translate", selected: false });
    this.languageList.push({ name: "French", code: 'fr', icon: "g_translate", selected: false });
    this.languageList.push({ name: "Spanish", code: 'es', icon: "g_translate", selected: false });
    this.languageList.push({ name: "Arabic", code: 'ar', icon: "g_translate", selected: false });
    this.checkCurrentLanguage();
  }

  onLogout() {
    // this.commonService.logout(localStorage.getItem("Token"))
    //   .subscribe((response: any) => {
    //     this.redirectToLoginPage();
    //   },
    //     error => {
    //       this.toastr.errorToastr(error.error.error.message);
    //     })
  }

  redirectToModule(url) {
    // this.routeService.redirectToURL(url);
    this.router.navigate([url]);
  }

  getClassName(menu) {
    var className = this.pageName == menu ? "sidenav-active" : "";
    return className;
  }

  redirectToLoginPage() {
    localStorage.clear();
    this.autenticated = false;
    //this.routeService.redirectToURL("login");
    this.router.navigate(["login"]);
  }

  changeLanguage(lang) {
    this.translateConfigService.changeLanguage(lang);
    this.checkCurrentLanguage();
  }

  checkCurrentLanguage() {
    let currentLang = this.translateConfigService.getCurrentLanguage();
    // let result = this.languageList.find(x => x.code == lang);
    // if (result != undefined) {
    //   result.selected = true
    //   this.currentLang = result.name;
    // };

    for (let lang of this.languageList) {
      if (lang.code == currentLang) {
        lang.selected = true;
        this.currentLang = lang.name;
      }
      else {
        lang.selected = false;
      }
    }
  }




}