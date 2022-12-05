import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { change_pass_reducer, update_user_reducer, user_auth_reducer, user_data_reducer, user_register_reducer, groups_reducer, department_reducer, designation_reducer, competency_name_reducer, competency_statments_reducer, competency_type_reducer } from "./Reducers";

const reducer = combineReducers({
    user_reg:user_register_reducer,
    user_auth:user_auth_reducer,
    user_data:user_data_reducer,
    update_user:update_user_reducer,
    change_pass:change_pass_reducer,
    groups: groups_reducer,
  designations: designation_reducer,
  departments: department_reducer,
  competency_types: competency_type_reducer,
  competency_names: competency_name_reducer,
  competency_statements: competency_statments_reducer,
});
let initialState = {};

const middleWare = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
