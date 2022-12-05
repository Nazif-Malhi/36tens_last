import axios from "axios";
import {
  COMPETENCIES_TYPE_REQUEST,
  COMPETENCIES_TYPE_SUCCESS,
  COMPETENCIES_TYPE_FAIL,
  COMPETENCIES_TYPE_CLEAR_ERRORS,
} from "../Constants/comp_type_constants";

export const get_competencyType = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_TYPE_REQUEST,
    });
    const competency_type = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/type/`
    );
    dispatch({
      type: COMPETENCIES_TYPE_SUCCESS,
      payload: competency_type,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_TYPE_FAIL,
      payload: error.response,
    });
  }
};

export const add_competencyType =
  (competency_type_payload) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_TYPE_REQUEST,
      });
      await axios.post(
        `${process.env.REACT_APP_API_URL}/competency/type/`,
        competency_type_payload
      );
      const competency_type = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/type/`
      );

      dispatch({
        type: COMPETENCIES_TYPE_SUCCESS,
        payload: competency_type,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_TYPE_FAIL,
        payload: error.response,
      });
    }
  };

export const update_competencyType =
  (competency_type_payload, id) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_TYPE_REQUEST,
      });
      await axios.put(
        `${process.env.REACT_APP_API_URL}/competency/type/${id}/`,
        competency_type_payload
      );
      const competency_type = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/type/`
      );

      dispatch({
        type: COMPETENCIES_TYPE_SUCCESS,
        payload: competency_type,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_TYPE_FAIL,
        payload: error.response,
      });
    }
  };

export const delete_competencyType = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_TYPE_REQUEST,
    });
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/competency/type/${id}/`
    );
    const competency_type = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/type/`
    );

    dispatch({
      type: COMPETENCIES_TYPE_SUCCESS,
      payload: competency_type,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_TYPE_FAIL,
      payload: error.response,
    });
  }
};
export const comp_type_clearErrors = () => async (dispatch) => {
  dispatch({
    type: COMPETENCIES_TYPE_CLEAR_ERRORS,
  });
};
