import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-moment',
  templateUrl: './moment.component.html',
  styleUrls: ['./moment.component.css']
})
export class MomentComponent implements OnInit {
  time='';
  constructor() {

  }

  ngOnInit() {
    this.time=moment(new Date()).format("YYYY-MM-DD HH:mm:ss")
  }

}
