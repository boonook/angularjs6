import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css'],
})
export class Parent2Component implements OnInit {
  onOpen(){
    alert('我是被子组件触发的');
  }
  ngOnInit() {
  }

}
