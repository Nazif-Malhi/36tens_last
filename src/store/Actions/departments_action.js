import axios from "axios";
import {
  DEPARTMENT_REQUEST,
  DEPARTMENT_SUCCESS,
  DEPARTMENT_FAIL,
  DEPARTMENT_CLEAR_ERRORS,
} from "../Constants/departments_constants";

export const get_Departments = () => async (dispatch) => {
  try {
    dispatch({
      type: DEPARTMENT_REQUEST,
    });
    const department = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/department/`
    );
    dispatch({
      type: DEPARTMENT_SUCCESS,
      payload: department,
    });
  } catch (error) {
    dispatch({
      type: DEPARTMENT_FAIL,
      payload: error.response,
    });
  }
};

export const add_Department = (department_payload) => async (dispatch) => {
  try {
    dispatch({
      type: DEPARTMENT_REQUEST,
    });
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/department/`,
      department_payload
    );
    const department = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/department/`
    );

    dispatch({
      type: DEPARTMENT_SUCCESS,
      payload: department,
    });
  } catch (error) {
    dispatch({
      type: DEPARTMENT_FAIL,
      payload: error.response,
    });
  }
};

export const update_Department =
  (department_payload, id) => async (dispatch) => {
    try {
      dispatch({
        type: DEPARTMENT_REQUEST,
      });
      await axios.put(
        `${process.env.REACT_APP_API_URL}/api/department/${id}/`,
        department_payload
      );
      const department = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/department/`
      );

      dispatch({
        type: DEPARTMENT_SUCCESS,
        payload: department,
      });
    } catch (error) {
      dispatch({
        type: DEPARTMENT_FAIL,
        payload: error.response,
      });
    }
  };

export const delete_Department = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DEPARTMENT_REQUEST,
    });
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/api/department/${id}/`
    );
    const department = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/department/`
    );

    dispatch({
      type: DEPARTMENT_SUCCESS,
      payload: department,
    });
  } catch (error) {
    dispatch({
      type: DEPARTMENT_FAIL,
      payload: error.response,
    });
  }
};
export const department_clearErrors = () => async (dispatch) => {
  dispatch({
    type: DEPARTMENT_CLEAR_ERRORS,
  });
};
