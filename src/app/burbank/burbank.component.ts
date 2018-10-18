import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { CookieService } from "ngx-cookie-service";
@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  weather = {};
  user: { username: string ,password:string};
  constructor(private cookieService: CookieService,private _httpservice:HttpService) {

  }
  save(data){
    this._httpservice.getWeather(data)
    .then(res => {
      console.log(res);
    }).catch( err => {
      console.log(err)
    });
    this.cookieService.set( 'username', data.username);
    //this.cookieService.get(key);
    //this.cookieService.getAll();
    //this.cookieService.delete(key);
  }
  ngOnInit() {
    this.user = { username: 'Semlinker' ,password:'1236'};
    // this.cookieService.set( 'appCookie', 'This is hello apps.' );
  }
}
