import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from "ngx-cookie-service";
import * as $ from 'jquery';
@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  weather = {};
  content = '点击提交改变这里的文本值';
  constructor(private _httpservice: HttpService,private cookieService: CookieService) { }

  ngOnInit() {
    //设置cookie
    this.cookieService.set( 'cookie', 'cookie');
    //localStorage的使用
    localStorage.setItem('name','boonook');
    /**
     * localStorage.getItem(key):获取指定key本地存储的值
     localStorage.setItem(key,value)：将value存储到key字段
     localStorage.removeItem(key):删除指定key本地存储的值
     localStorage.length是localStorage的项目数
     * **/
    const vm = this;
    $('#jquery_button').on('click',function () {
      vm.content = '你好欢迎光临！'
    });
    vm._httpservice.getWeather("seattle,wa")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}

