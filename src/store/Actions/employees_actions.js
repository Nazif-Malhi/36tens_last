import axios from "axios";
import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAIL,
  EMPLOYEES_CLEAR_ERRORS,
  UPDATE_EMPLOYEES_CLEAR_ERRORS,
  UPDATE_EMPLOYEES_FAIL,
  UPDATE_EMPLOYEES_REQUEST,
  UPDATE_EMPLOYEES_SUCCESS,
} from "../Constants/employees_constants";
import { user_errors } from "../ErrorsHandler";

export const get_Employees = (company) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEES_REQUEST,
    });
    const employees = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user-get/?`,
      {
        params: { company_name: company === null ? "" : company },
      }
    );
    dispatch({
      type: EMPLOYEES_SUCCESS,
      payload: employees,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEES_FAIL,
      payload: error.response,
    });
  }
};

export const update_employee = (update_payload, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_EMPLOYEES_REQUEST,
    });

    const update_empl = await axios.patch(
      `${process.env.REACT_APP_API_URL}/api/users/${id}/`,
      update_payload
    );
    
    dispatch({
      type: UPDATE_EMPLOYEES_SUCCESS,
      payload: update_empl,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EMPLOYEES_FAIL,
      payload: user_errors(error.response.data),
    });
  }
};
export const employees_clearErrors = () => async (dispatch) => {
  dispatch({
    type: EMPLOYEES_CLEAR_ERRORS,
  });
};

export const update_emp_clearErrors = () => async(dispatch) => {
  dispatch({
    type:UPDATE_EMPLOYEES_CLEAR_ERRORS,
  })
}
