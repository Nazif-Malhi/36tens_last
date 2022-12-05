import {
  USER_DATA_FAIL,
  USER_DATA_REQUEST,
  USER_DATA_SUCCESS,
  UPDATE_PROFILE_REQUEST,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  USER_DATA_CLEAR_ERRORS,
  UPDATE_USER_DATA_CLEAR_ERRORS
} from "../Constants/user_constants";

export const user_data_reducer = (
  state = {
    user_data: [],
  },
  action
) => {
  switch (action.type) {
    case USER_DATA_REQUEST:
      return {
        loading: true,
        user_data: [],
      };

    case USER_DATA_SUCCESS:
      return {
        loading: false,
        user_data: action.payload.data,
        user_last_login: action.payload.data.last_login,
        user_data_succeed:true,
      };
    case USER_DATA_FAIL:
      return {
        loading: false,
        user_data: null,
        user_data_error: action.payload,
        user_data_succeed:false,

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

export const update_user_data_reducer = (
  state={
    update_user_data:[],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_PROFILE_REQUEST:
      return {
        loading: true,
        update_user_data: [],
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        loading: false,
        update_user_data: action.payload.data,
        is_updated_user: true,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        loading: false,
        update_user_data: null,
        update_user_data_error: action.payload,
        is_updated_user: false,
      };

    case UPDATE_USER_DATA_CLEAR_ERRORS:
      return {
        ...state,
        update_user_data_error: null,
      };
    default:
      return state;
  }
}
