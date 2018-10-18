import { Component, OnInit,ViewChild } from '@angular/core';
import {ChildrenComponent} from '../children/children.component';
@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {
  constructor() { }
  @ViewChild('child1')
  child1:ChildrenComponent;

  ngOnInit() {
  }

}
