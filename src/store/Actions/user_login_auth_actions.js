import axios from "axios";
import { isHandled_AuthToken } from "../../utils";

import {
  USER_AUTH_LOGIN_CLEAR_ERRORS,
  USER_AUTH_LOGIN_FAIL,
  USER_AUTH_LOGIN_REQUEST,
  USER_AUTH_LOGIN_SUCCESS,
} from "../Constants/user_login_auth_constants";

export const login = (login_payload) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_LOGIN_REQUEST,
    });
    const user_auth_login_data = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/token/`,
      login_payload
    );
    dispatch({
      type: USER_AUTH_LOGIN_SUCCESS,
      payload: user_auth_login_data.data,
      token_set: isHandled_AuthToken(user_auth_login_data.data),
    });
  } catch (err) {
    dispatch({
      type: USER_AUTH_LOGIN_FAIL,
      payload: err.response.statusText,
    });
  }
};

export const login_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_AUTH_LOGIN_CLEAR_ERRORS,
  });
};
