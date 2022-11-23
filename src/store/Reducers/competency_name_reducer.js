import {
  COMPETENCIES_NAME_REQUEST,
  COMPETENCIES_NAME_FAIL,
  COMPETENCIES_NAME_SUCCESS,
  COMPETENCIES_NAME_CLEAR_ERRORS,
} from "../Constants/competency_name_constants";

export const competency_name_reducer = (
  state = {
    competency_name: [],
  },
  action
) => {
  switch (action.type) {
    case COMPETENCIES_NAME_REQUEST:
      return {
        loading: true,
        competency_name: [],
      };
    case COMPETENCIES_NAME_SUCCESS:
      return {
        loading: false,
        competency_name: action.payload.data,
      };
    case COMPETENCIES_NAME_FAIL:
      return {
        loading: false,
        competency_name: null,
        comp_name_error: action.payload,
      };

    case COMPETENCIES_NAME_CLEAR_ERRORS:
      return {
        ...state,
        comp_name_error: null,
      };
    default:
      return state;
  }
};
