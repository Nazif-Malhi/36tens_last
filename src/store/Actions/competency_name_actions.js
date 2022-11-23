import axios from "axios";
import {
  COMPETENCIES_NAME_REQUEST,
  COMPETENCIES_NAME_SUCCESS,
  COMPETENCIES_NAME_FAIL,
  COMPETENCIES_NAME_CLEAR_ERRORS,
} from "../Constants/competency_name_constants";

export const get_competencyName = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_NAME_REQUEST,
    });
    const competency_name = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/list/`
    );
    dispatch({
      type: COMPETENCIES_NAME_SUCCESS,
      payload: competency_name,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_NAME_FAIL,
      payload: error.response,
    });
  }
};

export const add_competencyName =
  (competency_name_payload) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_NAME_REQUEST,
      });
      await axios.post(
        `${process.env.REACT_APP_API_URL}/competency/list/`,
        competency_name_payload
      );
      const competency_name = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/list/`
      );

      dispatch({
        type: COMPETENCIES_NAME_SUCCESS,
        payload: competency_name,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_NAME_FAIL,
        payload: error.response,
      });
    }
  };

export const update_competencyName =
  (competency_name_payload, id) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_NAME_REQUEST,
      });
      await axios.put(
        `${process.env.REACT_APP_API_URL}/competency/list/${id}/`,
        competency_name_payload
      );
      const competency_name = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/list/`
      );

      dispatch({
        type: COMPETENCIES_NAME_SUCCESS,
        payload: competency_name,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_NAME_FAIL,
        payload: error.response,
      });
    }
  };

export const delete_competencyName = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_NAME_REQUEST,
    });
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/competency/list/${id}/`
    );
    const competency_name = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/list/`
    );

    dispatch({
      type: COMPETENCIES_NAME_SUCCESS,
      payload: competency_name,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_NAME_FAIL,
      payload: error.response,
    });
  }
};
export const comp_name_clearErrors = () => async (dispatch) => {
  dispatch({
    type: COMPETENCIES_NAME_CLEAR_ERRORS,
  });
};
