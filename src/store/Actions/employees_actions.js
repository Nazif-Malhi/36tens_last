import axios from "axios";
import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAIL,
  EMPLOYEES_CLEAR_ERRORS,
} from "../Constants/employees_constants";

export const get_Employees = (company) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEES_REQUEST,
    });
    const employees = await axios.get(
      `${process.env.REACT_APP_API_URL}/api/user-get/?`,
      {
        params: { company_name: company },
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
export const employees_clearErrors = () => async (dispatch) => {
  dispatch({
    type: EMPLOYEES_CLEAR_ERRORS,
  });
};