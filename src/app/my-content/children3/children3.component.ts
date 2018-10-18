import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-children3',
  templateUrl: './children3.component.html',
  styleUrls: ['./children3.component.css']
})
export class Children3Component implements OnInit {
  title='children';
  constructor() { }
  //获取父组件中传递过来的值
  @Input() childData:any;//接收数据的接口
  //
  @Output() childEvent = new EventEmitter<string>();
  clickThis(){
    let data='aaaa';
    this.childEvent.emit(data);
  }
  ngOnInit() {
    console.log('aaaaaaaaaaa',this.childData)
  }

}
