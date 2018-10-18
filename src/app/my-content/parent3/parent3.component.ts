import { Component, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-parent3',
  templateUrl: './parent3.component.html',
  styleUrls: ['./parent3.component.css']
})
export class Parent3Component implements OnInit {
  title='parent';
  //传递给子组件的值
  appData=['Apple','Banana','watermelon','pear'];
  //
  @Output() major2:number;//接收数据的接口
  constructor() { }
  fatherFunction(data){
    alert('我是子组件传递过来的值'+data);
  }
  ngOnInit() {

  }

}
