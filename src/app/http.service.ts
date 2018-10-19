import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import 'rxjs/Rx'
@Injectable()
export class HttpService {

  constructor(private _http: Http) { }
  getWeather(city){
    console.log('aaaaaaaaaaaaa',city);
    return this._http.get("https://api.github.com/orgs/angular/members?page=1&per_page=20").map(data=>data.json()).toPromise()
  }
  /**
   * 注册
   * **/
  registered(form){
    /**
     * from是post请求传递过来的参数
     * **/
    /**添加请求头**/
    let headers = new Headers();
    headers.append('ApiVersion','v1');
    /**请求头添加结束**/
    return this._http.post("http://192.168.10.13:3000/api/user?type=register",form,{
      headers}).map(data=>data.json()).toPromise()
  }
  /**
   * 登陆
   * **/
  login(form){
    let headers = new Headers();
    headers.append('ApiVersion','v1');
    return this._http.post("http://192.168.10.13:3000/api/user?type=login",form,{
      headers}).map(data=>data.json()).toPromise()
  }
}
