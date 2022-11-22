import {
  USER_DATA_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  USER_DATA_CLEAR_ERRORS,
} from "../Constants/user_constants";

export const user_data_reducer = (
  state = {
    user_data: [],
  },
  action
) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        user_data: [],
      };

    case USER_DATA_SUCCESS:
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        user_data: action.payload.data,
        user_last_login: action.payload.data.last_login,
        updated: true,
      };
    case USER_DATA_FAIL:
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        user_data: null,
        user_data_error: action.payload,
        updated: false,
      };

    case USER_DATA_CLEAR_ERRORS:
      return {
        ...state,
        user_data_error: null,
      };
    default:
      return state;
  }
};
