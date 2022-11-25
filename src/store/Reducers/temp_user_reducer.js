import {
    TEMP_USER_REQUEST,
    TEMP_USER_SUCCESS,
    TEMP_USER_FAIL,
    TEMP_USER_CLEAR_ERRORS,
  } from "../Constants/temp_user_constants";
  
  export const temp_user = (
    state = {
      temp_user: [],
    },
    action
  ) => {
    switch (action.type) {
      case TEMP_USER_REQUEST:
        return {
          loading: true,
          temp_user: [],
        };
  
      case TEMP_USER_SUCCESS:
        return {
          loading: false,
          temp_user: action.payload,
          success: true,
        };
      case TEMP_USER_FAIL:
        return {
          loading: false,
          temp_user: null,
          success: false,
          temp_error:action.payload
        };
  
      case TEMP_USER_CLEAR_ERRORS:
        return {
          ...state,
          temp_error: null,
        };
      default:
        return state;
    }
  };
  