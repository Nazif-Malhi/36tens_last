import axios from "axios";
import {
  USER_DATA_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  USER_DATA_CLEAR_ERRORS,
} from "../Constants/user_constants";

export const getUserData = () => async (dispatch) => {
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

export const updateUserData = (update_payload, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });
    await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/users/${id}/`,
      update_payload
    );
    const user_data = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth-user/`
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: user_data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response,
    });
  }
};
export const deleteUserData = (id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_PROFILE_REQUEST,
    });
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/users/${id}/`);
    const user_data = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/auth-user/`
    );
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: user_data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
      payload: error.response,
    });
  }
};
export const user_data_clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_DATA_CLEAR_ERRORS,
  });
};
