import { Component, OnInit,Injectable } from '@angular/core';
@Injectable()
@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})

export class ChildrenComponent implements OnInit {

  constructor() { }
  greeting(name:string){
    alert("我是子组件中的事件"+name);
  }
  //
  onParent(){}
  ngOnInit() {

  }

}
