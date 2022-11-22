import axios from "axios";
import {
  CHANGE_PASSWORD_REQUEST,
  CHANGE_PASSWORD_FAIL,
  CHANGE_PASSWORD_SUCCESS,
  CHANGE_PASSWORD_CLEAR_ERRORS,
} from "../Constants/change_password_constants";

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
      payload: error.response,
    });
  }
};

export const change_password_clearErrors = () => async (dispatch) => {
  dispatch({
    type: CHANGE_PASSWORD_CLEAR_ERRORS,
  });
};
