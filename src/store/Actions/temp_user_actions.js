import { FaTheRedYeti } from "react-icons/fa";
import {
    TEMP_USER_REQUEST,
    TEMP_USER_SUCCESS,
    TEMP_USER_FAIL,
    TEMP_USER_CLEAR_ERRORS,
} from "../Constants/temp_user_constants";

export const add_temp_user = (temp_user_name) => async(dispatch) => {
    try {
        dispatch({
            type: GROUPS_REQUEST,
          });
          
    } catch (error) {
        dispatch({
            type: TEMP_USER_FAIL,
            payload: error.response,
          });
    }
}

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
  