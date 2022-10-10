import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {
  CaptchaResponse,
} from './captcha.service.types'

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  private callbackURL: string;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': "https://idcs-oda-278c27aea07d48a8b8ac413aa8aa67c1-da2.data.digitalassistant.oci.oraclecloud.com/",
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers':
        'X-Requested-With, content-type, Authorization',
    }),
  };
  constructor(private http: HttpClient) {
    this.callbackURL = "";
   }

   setcallbackURL(callbackURL: string) {
    this.callbackURL = callbackURL;
  }

   sendResponse(captchaResponse: any) {
    const url = this.callbackURL;
    console.log(this.callbackURL);
    return this.http.post<any>(url,captchaResponse,this.httpOptions);
  }
}
