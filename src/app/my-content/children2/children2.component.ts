import { Component, OnInit ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-children2',
  templateUrl: './children2.component.html',
  styleUrls: ['./children2.component.css']
})
export class Children2Component implements OnInit {

  constructor() { }
  title = 'child';//子组件的变量
  visible: boolean = true;
  @Output() open: EventEmitter<any> = new EventEmitter();
  toggle(){//子组件的方法
      this.open.emit(null);
  }
  ngOnInit() {
  }

}
