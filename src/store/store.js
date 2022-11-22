import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import {
  change_pass_reducer,
  groups_reducer,
  user_auth_login_reducer,
  user_data_reducer,
  user_regiser_reducer,
} from "./Reducers";

const reducer = combineReducers({
  user_auth_login: user_auth_login_reducer,
  user_data: user_data_reducer,
  user_reg: user_regiser_reducer,
  change_pass: change_pass_reducer,
  groups: groups_reducer,
});
let initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;