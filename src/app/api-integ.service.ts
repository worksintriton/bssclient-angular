import { map } from 'rxjs/operators';
import { HttpClient, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Constant } from './Constant';

@Injectable({
    providedIn: 'root'
  })
export class ApiIntegService {



  constructor(private http: HttpClient, private _configuration: Constant) {

  }

 
}
@Injectable()
export class CustomInterceptor  {

    
}