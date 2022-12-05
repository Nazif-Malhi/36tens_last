import axios from "axios";
import {
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAIL,
    USER_DATA_CLEAR_ERRORS,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_CLEAR_ERRORS,

    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_AUTH_CLEAR_ERRORS,

    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    USER_REG_FAIL,
    USER_REG_CLEAR_ERRORS,

    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_CLEAR_ERRORS,

} from "../Constants/user_constants";


import { user_errors } from "../ErrorsHandler";
import { isHandled_AuthToken } from "../../utils";



export const register = (register_payload) => async (dispatch) => {
  try {
    dispatch({
      type:USER_REG_REQUEST,
    });
    const user_reg_data = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/users/`,
      register_payload
    );
    console.log(user_reg_data)
    dispatch({
      type: USER_REG_SUCCESS,
      payload: user_reg_data,
    });
  } catch (error) {
    console.log(error)

    dispatch({
      type: USER_REG_FAIL,
      payload: user_errors(error.response.data),
    });
  }
};
export const user_reg_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_REG_CLEAR_ERRORS,
  });
};

export const login = (login_payload) => async (dispatch) => {
  try {
    dispatch({
      type: USER_AUTH_REQUEST,
    });
    const user_auth_login_data = await axios.post(
      `${process.env.REACT_APP_API_URL}/auth/token/`,
      login_payload
    );
    dispatch({
      type: USER_AUTH_SUCCESS,
      payload: user_auth_login_data.data,
      token_set: isHandled_AuthToken(user_auth_login_data.data),
    });
  } catch (err) {
    dispatch({
      type: USER_AUTH_FAIL,
      payload: err.response,
    });
  }
};

export const login_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_AUTH_CLEAR_ERRORS,
  });
};

export const get_user = () => async (dispatch) => {
  try {
    dispatch({
      type: USER_DATA_REQUEST,
    });
    const user_data = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth-user/`
    );
    dispatch({
      type: USER_DATA_SUCCESS,
      payload: user_data,
    });
  } catch (error) {
    dispatch({
      type: USER_DATA_FAIL,
      payload: error.response,
    });
  }
};

export const user_data_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_DATA_CLEAR_ERRORS,
  });
};

export const update_user = (update_payload, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_USER_REQUEST,
    });
    const update_user = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/users/${id}/`,
      update_payload
    );
    dispatch({
      type: UPDATE_USER_SUCCESS,
      payload: update_user,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_USER_FAIL,
      payload: user_errors(error.response.data),
    });
  }
};
export const update_user_clearErrors = () => async (dispatch) => {
  dispatch({
    type: UPDATE_USER_CLEAR_ERRORS,
  });
};


export const changePassword = (password_payload) => async (dispatch) => {
  try {
    dispatch({
      type: CHANGE_PASSWORD_REQUEST,
    });
    const change_pass = await axios.put(
      `${process.env.REACT_APP_API_URL}/api/change-password/`,
      password_payload
    );
    console.log(change_pass);
    dispatch({
      type: CHANGE_PASSWORD_SUCCESS,
      payload: change_pass,
    });
  } catch (error) {
    dispatch({
      type: CHANGE_PASSWORD_FAIL,
      payload: user_errors(error.response.data),
    });
  }
};

export const change_password_clearErrors = () => async (dispatch) => {
  dispatch({
    type: CHANGE_PASSWORD_CLEAR_ERRORS,
  });
};
