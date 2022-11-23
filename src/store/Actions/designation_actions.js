import axios from "axios";
import {
  DESIGNATION_REQUEST,
  DESIGNATION_SUCCESS,
  DESIGNATION_FAIL,
  DESIGNATION_CLEAR_ERRORS,
} from "../Constants/designation_constants";

export const get_Designation = () => async (dispatch) => {
  try {
    dispatch({
      type: DESIGNATION_REQUEST,
    });
    const designation = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/designation/`
    );
    dispatch({
      type: DESIGNATION_SUCCESS,
      payload: designation,
    });
  } catch (error) {
    dispatch({
      type: DESIGNATION_FAIL,
      payload: error.response,
    });
  }
};

export const add_Designation = (designation_payload) => async (dispatch) => {
  try {
    dispatch({
      type: DESIGNATION_REQUEST,
    });

    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/designation/`,
      designation_payload
    );
    const designation = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/designation/`
    );

    dispatch({
      type: DESIGNATION_SUCCESS,
      payload: designation,
    });
  } catch (error) {
    dispatch({
      type: DESIGNATION_FAIL,
      payload: error.response,
    });
  }
};

export const update_Designation =
  (designation_payload, id) => async (dispatch) => {
    try {
      dispatch({
        type: DESIGNATION_REQUEST,
      });
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/designation/${id}/`,
        designation_payload
      );
      const designation = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/designation/`
      );

      dispatch({
        type: DESIGNATION_SUCCESS,
        payload: designation,
      });
    } catch (error) {
      dispatch({
        type: DESIGNATION_FAIL,
        payload: error.response,
      });
    }
  };

export const delete_Designation = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DESIGNATION_REQUEST,
    });
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/designation/${id}/`
    );
    const designation = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/designation/`
    );

    dispatch({
      type: DESIGNATION_SUCCESS,
      payload: designation,
    });
  } catch (error) {
    dispatch({
      type: DESIGNATION_FAIL,
      payload: error.response,
    });
  }
};

export const designation_clearErrors = () => async (dispatch) => {
  dispatch({
    type: DESIGNATION_CLEAR_ERRORS,
  });
};
