import { Tutorial } from './store/models/tutorial.model';

export interface AppState {
  readonly tutorial: Tutorial[];
}
