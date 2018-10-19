import { Component, OnInit } from '@angular/core';
import {EditorConfig} from './model/editor-config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  conf = new EditorConfig();
  markdown = 'z';
  constructor() {
  }


// 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
  submit(){
    //获取富文本中的内容
    alert(this.markdown);
  }
  ngOnInit() {
    //设置富文本中的内容
    this.markdown = 'boonook';
  }

}
