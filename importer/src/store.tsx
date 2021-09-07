import { createStore, combineReducers } from "redux";
import templateReducer from "./reducers/template-reducer";

const reducers = combineReducers({
  template: templateReducer,
});

const store = createStore(reducers);

export default store;
