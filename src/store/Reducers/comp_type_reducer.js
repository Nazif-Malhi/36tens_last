import {
  COMPETENCIES_TYPE_REQUEST,
  COMPETENCIES_TYPE_FAIL,
  COMPETENCIES_TYPE_SUCCESS,
  COMPETENCIES_TYPE_CLEAR_ERRORS,
} from "../Constants/comp_type_constants";

export const competency_type_reducer = (
  state = {
    competency_type: [],
  },
  action
) => {
  switch (action.type) {
    case COMPETENCIES_TYPE_REQUEST:
      return {
        loading: true,
        competency_type: [],
      };
    case COMPETENCIES_TYPE_SUCCESS:
      return {
        loading: false,
        competency_type: action.payload.data,
      };
    case COMPETENCIES_TYPE_FAIL:
      return {
        loading: false,
        competency_type: null,
        comp_type_error: action.payload,
      };

    case COMPETENCIES_TYPE_CLEAR_ERRORS:
      return {
        ...state,
        comp_type_error: null,
      };
    default:
      return state;
  }
};
