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
  
  constructor(private http: HttpClient) {
    this.callbackURL = "";
   }

   setcallbackURL(callbackURL: string) {
    this.callbackURL = callbackURL;
  }

   sendResponse(captchaResponse: any) {
    const url = this.callbackURL;
    console.log(this.callbackURL);
    return this.http.post<any>(url,captchaResponse);
  }
}
