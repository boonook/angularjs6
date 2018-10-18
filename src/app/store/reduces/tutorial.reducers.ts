import { Tutorial } from '../models/tutorial.model';
import * as TutorialActions from '../actions/toturial.actions';

// 初始化数据值
const initialState: Tutorial = {
  name: '',
  url: '',
};

// 累计器
// Tutorial[] = [initialState]这里将Tutorial的只转变成了数组
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.TutorialActions) {
  console.log('reducer>state:', state);
  console.log('reducer>action:', action);
  switch (action.type) {
    //追加值
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    // 删除值
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    //修改值
    case TutorialActions.UPDATE_TUTORIAL:
      state[0].name = action.payload.name;
      return state;
    default:
      return state;
  }
}
