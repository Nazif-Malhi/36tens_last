import {
  GROUPS_REQUEST,
  GROUPS_SUCCESS,
  GROUPS_FAIL,
  GROUPS_CLEAR_ERRORS,
} from "../Constants/groups_constants";

export const groups_reducer = (
  state = {
    groups: [],
  },
  action
) => {
  switch (action.type) {
    case GROUPS_REQUEST:
      return {
        loading: true,
        groups: [],
      };
    case GROUPS_SUCCESS:
      return {
        loading: false,
        groups: action.payload.data,
      };
    case GROUPS_FAIL:
      return {
        loading: false,
        groups: null,
        group_error: action.payload,
      };

    case GROUPS_CLEAR_ERRORS:
      return {
        ...state,
        group_error: null,
      };
    default:
      return state;
  }
};
