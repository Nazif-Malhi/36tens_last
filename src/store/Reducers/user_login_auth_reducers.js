import {
  USER_AUTH_LOGIN_CLEAR_ERRORS,
  USER_AUTH_LOGIN_FAIL,
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
} from "../Constants/user_login_auth_constants";

export const user_auth_login_reducer = (
  state = {
    user_auth_login: [],
  },
  action
) => {
  switch (action.type) {
    case USER_AUTH_LOGIN_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case USER_AUTH_LOGIN_SUCCESS:
      return {
        loading: false,
        isAuthenticated: true,
        user_auth_login: action.payload,
        token_set: action.token_set,
      };
    case USER_AUTH_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        isAuthenticated: false,
        user_auth_login: null,
        user_auth_login_error: action.payload,
      };
    case USER_AUTH_LOGIN_CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
