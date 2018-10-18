import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import {error} from "selenium-webdriver";

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  weather = {};
  username :string='123123';
  email:string='123123';
  password:string='123123';
  constructor(private _httpservice: HttpService) {

  }
  save(){
    let form={
      username:this.username,
      email:this.email,
      password:this.password
    };
    this._httpservice.registered(form).then(res =>{
      console.log(res)
    }).catch(error =>{
      console.log(error)
    } )
  }
  ngOnInit() {
    this._httpservice.getWeather("sanjose")
    .then(weather => {this.weather = weather; console.log(this.weather)})
    .catch( err => {console.log(err)})
  }
}
