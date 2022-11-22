import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_CLEAR_ERRORS,
} from "../Constants/user_register_constants";

export const user_regiser_reducer = (
  state = {
    user_reg: [],
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
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        user_reg: null,
        user_reg_error: action.payload,
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
