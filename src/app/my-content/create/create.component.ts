import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from '../../store/models/tutorial.model';
import { AppState } from '../../turorial.state';
import * as TutorialActions from '../../store/actions/toturial.actions';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }
  // 向store派发添加的数据
  addTutorial(name, url) {
    // this.store.dispatch(new TutorialActions.AddTutorial({ name:name,url:url }));
    this.store.dispatch(new TutorialActions.UpdateTutorial({ name: name, url: url }));
  }
}
