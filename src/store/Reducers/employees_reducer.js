import {
  EMPLOYEES_REQUEST,
  EMPLOYEES_SUCCESS,
  EMPLOYEES_FAIL,
  EMPLOYEES_CLEAR_ERRORS,
} from "../Constants/employees_constants";

export const employees_reducer = (
  state = {
    employees: [],
  },
  action
) => {
  switch (action.type) {
    case EMPLOYEES_REQUEST:
      return {
        loading: true,
        employees: [],
      };
    case EMPLOYEES_SUCCESS:
      return {
        loading: false,
        employees: action.payload.data.result,
      };
    case EMPLOYEES_FAIL:
      return {
        loading: false,
        employees: null,
        employees_error: action.payload,
      };

    case EMPLOYEES_CLEAR_ERRORS:
      return {
        ...state,
        employees_error: null,
      };
    default:
      return state;
  }
};
