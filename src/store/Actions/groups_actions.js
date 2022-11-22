import axios from "axios";
import {
  GROUPS_REQUEST,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_CLEAR_ERRORS,
} from "../Constants/groups_constants";

export const getGroups = () => async (dispatch) => {
  try {
    dispatch({
      type: GROUPS_REQUEST,
    });
    const groups = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/group/`
    );

    dispatch({
      type: GROUPS_SUCCESS,
      payload: groups,
    });
  } catch (error) {
    dispatch({
      type: GROUPS_FAIL,
      payload: error.response,
    });
  }
};

export const addNewGroup = (group_payload) => async (dispatch) => {
  try {
    dispatch({
      type: GROUPS_REQUEST,
    });
    await axios.post(
      `${process.env.REACT_APP_API_URL}/api/group/`,
      group_payload
    );
    const groups = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/group/`
    );
    dispatch({
      type: GROUPS_SUCCESS,
      payload: groups,
    });
  } catch (error) {
    dispatch({
      type: GROUPS_FAIL,
      payload: error.response,
    });
  }
};

export const updateGroup = (group_payload, id) => async (dispatch) => {
  try {
    dispatch({
      type: GROUPS_REQUEST,
    });
    await axios.put(
      `${process.env.REACT_APP_API_URL}/api/group/${id}/`,
      group_payload
    );

    const groups = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/group/`
    );
    dispatch({
      type: GROUPS_SUCCESS,
      payload: groups,
    });
  } catch (error) {
    dispatch({
      type: GROUPS_FAIL,
      payload: error.response,
    });
  }
};

export const deleteGroup = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GROUPS_REQUEST,
    });
    await axios.delete(`${process.env.REACT_APP_API_URL}/api/group/${id}/`);
    const groups = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/group/`
    );
    dispatch({
      type: GROUPS_SUCCESS,
      payload: groups,
    });
  } catch (error) {
    dispatch({
      type: GROUPS_FAIL,
      payload: error.response,
    });
  }
};
export const groups_clearErrors = () => async (dispatch) => {
  dispatch({
    type: GROUPS_CLEAR_ERRORS,
  });
};
