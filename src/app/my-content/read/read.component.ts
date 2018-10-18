import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../store/models/tutorial.model';
import { AppState } from '../../turorial.state';
import * as TutorialActions from '../../store/actions/toturial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {
  // 监听数据状态
  tutorials: Observable<Tutorial[]>;

  constructor(private store: Store<AppState>) {
    // 选择一个store为tutorial名字
    this.tutorials = store.select('tutorial');
  }

  ngOnInit() {
  }
  // 点击用户删除方法
  delTutorial(index) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(index))
  }
}
