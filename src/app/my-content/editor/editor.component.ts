import { Component, OnInit } from '@angular/core';
import {EditorConfig} from './model/editor-config';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {

  constructor() { }
  conf = new EditorConfig();
  markdown = '<h1>测试语句</h1>';

// 同步属性内容
  syncModel(str): void {
    this.markdown = str;
  }
  ngOnInit() {
  }

}
