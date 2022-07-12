import { combineReducers } from 'redux';

import { courseReducer } from './courses/reducer';
import { AuthorsReducer } from './authors/reducer';
import { UserReducer } from './user/reducer';

export const rootReducer = combineReducers({
  courses: courseReducer,
  authors: AuthorsReducer,
  user: UserReducer,
});
