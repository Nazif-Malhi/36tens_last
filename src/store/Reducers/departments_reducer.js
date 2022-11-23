import {
  DEPARTMENT_REQUEST,
  DEPARTMENT_SUCCESS,
  DEPARTMENT_FAIL,
  DEPARTMENT_CLEAR_ERRORS,
} from "../Constants/departments_constants";

export const department_reducer = (
  state = {
    department: [],
  },
  action
) => {
  switch (action.type) {
    case DEPARTMENT_REQUEST:
      return {
        loading: true,
        department: [],
      };
    case DEPARTMENT_SUCCESS:
      return {
        loading: false,
        department: action.payload.data,
      };
    case DEPARTMENT_FAIL:
      return {
        loading: false,
        department: null,
        department_error: action.payload,
      };

    case DEPARTMENT_CLEAR_ERRORS:
      return {
        ...state,
        department_error: null,
      };
    default:
      return state;
  }
};
