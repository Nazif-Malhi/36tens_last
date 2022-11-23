import axios from "axios";
import {
  USER_IMPORT_REQUEST,
  USER_IMPORT_SUCCESS,
  USER_IMPORT_FAIL,
  USER_IMPORT_CLEAR_ERRORS,
} from "../Constants/employees_import_constants";

export const add_BulkAdd = (bulk_payload) => async (dispatch) => {
  var formData = new FormData();
  formData.append("file", bulk_payload);
  try {
    dispatch({
      type: USER_IMPORT_REQUEST,
    });
    const newdata = await axios.post(
      `${process.env.REACT_APP_API_URL}/api/user-import/`,
      formData
    );
    dispatch({
      type: USER_IMPORT_SUCCESS,
      payload: newdata,
    });
  } catch (error) {
    dispatch({
      type: USER_IMPORT_FAIL,
      payload: error.response,
    });
  }
};
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: USER_IMPORT_CLEAR_ERRORS,
  });
};
