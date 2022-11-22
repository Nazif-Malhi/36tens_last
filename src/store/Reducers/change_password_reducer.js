import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_CLEAR_ERRORS,
} from "../Constants/change_password_constants";

export const change_pass_reducer = (
  state = {
    change_pass: [],
  },
  action
) => {
  switch (action.type) {
    case CHANGE_PASSWORD_REQUEST:
      return {
        loading: true,
        change_pass: [],
      };
    case CHANGE_PASSWORD_SUCCESS:
      return {
        loading: false,
        change_pass: action.payload.data.status,
        status: action.payload.data.message,
        pass_status: true,
      };
    case CHANGE_PASSWORD_FAIL:
      return {
        loading: false,
        change_pass: null,
        error: action.payload.code,
      };

    case CHANGE_PASSWORD_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
