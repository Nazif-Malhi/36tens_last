import {
  COMPETENCIES_STATEMENTS_REQUEST,
  COMPETENCIES_STATEMENTS_FAIL,
  COMPETENCIES_STATEMENTS_SUCCESS,
  COMPETENCIES_STATEMENTS_CLEAR_ERRORS,
} from "../Constants/competency_statements_constants";

export const competency_statments_reducer = (
  state = {
    competency_statements: [],
  },
  action
) => {
  switch (action.type) {
    case COMPETENCIES_STATEMENTS_REQUEST:
      return {
        loading: true,
        competency_statements: [],
      };
    case COMPETENCIES_STATEMENTS_SUCCESS:
      return {
        loading: false,
        competency_statements: action.payload.data,
      };
    case COMPETENCIES_STATEMENTS_FAIL:
      return {
        loading: false,
        competency_statements: null,
        comp_state_error: action.payload,
      };

    case COMPETENCIES_STATEMENTS_CLEAR_ERRORS:
      return {
        ...state,
        comp_state_error: null,
      };
    default:
      return state;
  }
};
