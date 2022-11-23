import {
  USER_IMPORT_REQUEST,
  USER_IMPORT_SUCCESS,
  USER_IMPORT_FAIL,
  USER_IMPORT_CLEAR_ERRORS,
} from "../Constants/employees_import_constants";

export const bulk_user_reducer = (
  state = {
    bulk_user: [],
  },
  action
) => {
  switch (action.type) {
    case USER_IMPORT_REQUEST:
      return {
        loading: true,
        bulk_user: [],
      };
    case USER_IMPORT_SUCCESS:
      return {
        loading: false,
        bulk_user: action.payload.data,
        import_fail: false,
      };
    case USER_IMPORT_FAIL:
      return {
        loading: false,
        bulk_user: null,
        bulk_user_error: action.payload,
        import_fail: true,
      };

    case USER_IMPORT_CLEAR_ERRORS:
      return {
        ...state,
        bulk_user_error: null,
        import_fail: false,
      };
    default:
      return state;
  }
};
