import {
  DESIGNATION_REQUEST,
  DESIGNATION_SUCCESS,
  DESIGNATION_FAIL,
  DESIGNATION_CLEAR_ERRORS,
} from "../Constants/designation_constants";

export const designation_reducer = (
  state = {
    designations: [],
  },
  action
) => {
  switch (action.type) {
    case DESIGNATION_REQUEST:
      return {
        loading: true,
        designations: [],
      };
    case DESIGNATION_SUCCESS:
      return {
        loading: false,
        designations: action.payload.data,
      };
    case DESIGNATION_FAIL:
      return {
        loading: false,
        designations: null,
        designation_error: action.payload,
      };

    case DESIGNATION_CLEAR_ERRORS:
      return {
        ...state,
        designation_error: null,
      };
    default:
      return state;
  }
};
