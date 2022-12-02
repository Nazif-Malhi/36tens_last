import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_REGISTER_CLEAR_ERRORS,
} from "../Constants/user_register_constants";
import { user_errors } from "../ErrorsHandler";

export const register = (register_payload) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });
    const user_reg_data = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/users/`,
      register_payload
    );
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: user_reg_data,
    });
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: user_errors(error.response.data),
    });
  }
};
export const user_reg_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_REGISTER_CLEAR_ERRORS,
  });
};
