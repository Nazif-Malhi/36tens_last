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

export const update_emp_reducer = (
  state = {
    update_emp:[],
  },
  action
) => {
  switch (action.type) {
    case UPDATE_EMPLOYEES_REQUEST:
      return {
        loading: true,
        update_emp: [],
      };
    case UPDATE_EMPLOYEES_SUCCESS:
      return {
        loading: false,
        update_emp: action.payload.data,
        is_updated_emp:true,
      };
    case UPDATE_EMPLOYEES_FAIL:
      return {
        loading: false,
        update_emp: null,
        update_emp_error: action.payload.data.email[0],
        is_updated_emp:false,

      };

    case UPDATE_EMPLOYEES_CLEAR_ERRORS:
      return {
        ...state,
        update_emp_error: null,

      };
    default:
      return state;
  }
}