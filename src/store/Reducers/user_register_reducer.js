import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_CLEAR_ERRORS,
} from "../Constants/user_register_constants";

export const user_regiser_reducer = (
  state = {
    user_reg: [],
    is_reg: null,
    user_reg_error: null,
  },
  action
) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
        user_reg: [],
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        user_reg: action.payload.data,
        status: action.payload.statusText,
        is_reg: true,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        user_reg: null,
       user_reg_error: action.payload.data.email[0],
        is_reg: false,
      };

    case USER_REGISTER_CLEAR_ERRORS:
      return {
        ...state,
        user_reg_error: null,
      };
    default:
      return state;
  }
};
