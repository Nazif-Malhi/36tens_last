import axios from "axios";
import {
  COMPETENCIES_STATEMENTS_REQUEST,
  COMPETENCIES_STATEMENTS_FAIL,
  COMPETENCIES_STATEMENTS_SUCCESS,
  COMPETENCIES_STATEMENTS_CLEAR_ERRORS,
} from "../Constants/comp_statements_constants";

export const get_competencyStatements = () => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_STATEMENTS_REQUEST,
    });
    const competency_statements = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/statements/`
    );
    dispatch({
      type: COMPETENCIES_STATEMENTS_SUCCESS,
      payload: competency_statements,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_STATEMENTS_FAIL,
      payload: error.response,
    });
  }
};

export const add_competencyStatements =
  (competency_statements_payload) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_STATEMENTS_REQUEST,
      });
      await axios.post(
        `${process.env.REACT_APP_API_URL}/competency/statements/`,
        competency_statements_payload
      );
      const competency_statements = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/statements/`
      );

      dispatch({
        type: COMPETENCIES_STATEMENTS_SUCCESS,
        payload: competency_statements,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_STATEMENTS_FAIL,
        payload: error.response,
      });
    }
  };

export const update_competencyStatements =
  (competency_statements_payload, id) => async (dispatch) => {
    try {
      dispatch({
        type: COMPETENCIES_STATEMENTS_REQUEST,
      });
      await axios.put(
        `${process.env.REACT_APP_API_URL}/competency/statements/${id}/`,
        competency_statements_payload
      );
      const competency_statements = await axios.get(
        `${process.env.REACT_APP_API_URL}/competency/statements/`
      );

      dispatch({
        type: COMPETENCIES_STATEMENTS_SUCCESS,
        payload: competency_statements,
      });
    } catch (error) {
      dispatch({
        type: COMPETENCIES_STATEMENTS_FAIL,
        payload: error.response,
      });
    }
  };

export const delete_competencyStatements = (id) => async (dispatch) => {
  try {
    dispatch({
      type: COMPETENCIES_STATEMENTS_REQUEST,
    });
    await axios.delete(
      `${process.env.REACT_APP_API_URL}/competency/statements/${id}/`
    );
    const competency_statements = await axios.get(
      `${process.env.REACT_APP_API_URL}/competency/statements/`
    );

    dispatch({
      type: COMPETENCIES_STATEMENTS_SUCCESS,
      payload: competency_statements,
    });
  } catch (error) {
    dispatch({
      type: COMPETENCIES_STATEMENTS_FAIL,
      payload: error.response,
    });
  }
};
export const competencyStatment_clearErrors = () => async (dispatch) => {
  dispatch({
    type: COMPETENCIES_STATEMENTS_CLEAR_ERRORS,
  });
};
