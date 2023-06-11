import { combineReducers } from "redux";
import githubReducer from "plugins/redux/reducers/githubReducer";

const rootReducer = combineReducers({
  githubReducer,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
