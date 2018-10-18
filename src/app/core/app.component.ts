import { Component } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  weather = {};
  constructor(private _httpservice: HttpService) { };
  ngOnInit() {
    this._httpservice.getWeather("washington,dc")
      .then(weather => {this.weather = weather; console.log(this.weather)})
      .catch( err => {console.log(err)})
  }
}
