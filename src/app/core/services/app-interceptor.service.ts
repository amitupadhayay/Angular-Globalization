import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { RouteService } from './route.service';
import { TranslateConfigService } from './translate-config.service';

@Injectable({
  providedIn: 'root'
})
export class AppInterceptorService {

  Token: string = "";
  //lang: string = 'ar';

  constructor(
    //public toastr: ToastrManager,
    private routeService: RouteService,
    //private translateConfigService: TranslateConfigService,
  ) {
    // var tokenData = localStorage.getItem("Token")
    // if (tokenData != null) {
    //   this.Token = localStorage.getItem("Token").toString();
    // }

    //this.lang = this.translateConfigService.getCurrentLanguage();
  }

  intercept(request: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    // var tokenData = localStorage.getItem("Token")
    // if (tokenData != null) {
    //   this.Token = localStorage.getItem("Token").toString();
    // }

    // const headers = new HttpHeaders({
    //   'Accept-Language': this.lang,
    //   'Token': this.Token,
    // })

    const lang = 'fr-CA';

    request = request.clone({
      setHeaders: {
        'Accept-Language': lang,
      }
    });

    return next.handle(request);
  }






}
