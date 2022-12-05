import {
    USER_DATA_REQUEST,
    USER_DATA_SUCCESS,
    USER_DATA_FAIL,
    USER_DATA_CLEAR_ERRORS,

    UPDATE_USER_REQUEST,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAIL,
    UPDATE_USER_CLEAR_ERRORS,

    USER_AUTH_REQUEST,
    USER_AUTH_SUCCESS,
    USER_AUTH_FAIL,
    USER_AUTH_CLEAR_ERRORS,

    USER_REG_REQUEST,
    USER_REG_SUCCESS,
    USER_REG_FAIL,
    USER_REG_CLEAR_ERRORS,

    CHANGE_PASSWORD_REQUEST,
    CHANGE_PASSWORD_SUCCESS,
    CHANGE_PASSWORD_FAIL,
    CHANGE_PASSWORD_CLEAR_ERRORS,

  } from "../Constants/user_constants";

  
export const user_register_reducer = (
    state = {
      user_reg: [],
      is_reg: null,
      user_reg_error: null,
    },
    action
  ) => {
    switch (action.type) {
      case USER_REG_REQUEST:
        return {
          loading: true,
          user_reg: [],
        };
      case USER_REG_SUCCESS:
        return {
          loading: false,
          user_reg: action.payload.data,
          status: action.payload.statusText,
          is_reg: true,
        };
      case USER_REG_FAIL:
        return {
          loading: false,
          user_reg: null,
         user_reg_error: action.payload,
          is_reg: false,
        };
  
      case USER_REG_CLEAR_ERRORS:
        return {
          ...state,
          user_reg_error: null,
        };
      default:
        return state;
    }
  };
  
  
export const user_auth_reducer = (
    state = {
      user_auth: [],
    },
    action
  ) => {
    switch (action.type) {
      case USER_AUTH_REQUEST:
        return {
          loading: true,
          isAuthenticated: false,
        };
      case USER_AUTH_SUCCESS:
        return {
          loading: false,
          isAuthenticated: true,
          user_auth: action.payload,
          token_set: action.token_set,
        };
      case USER_AUTH_FAIL:
        return {
          ...state,
          loading: false,
          isAuthenticated: false,
          user_auth: null,
          user_auth_login_error: action.payload,
        };
      case USER_AUTH_CLEAR_ERRORS:
        return {
          ...state,
          error: null,
        };
      default:
        return state;
    }
  };


  
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
  
  export const update_user_reducer = (
    state={
      update_user:[],
    },
    action
  ) => {
    switch (action.type) {
      case UPDATE_USER_REQUEST:
        return {
          loading: true,
          update_user: [],
        };
      case UPDATE_USER_SUCCESS:
        return {
          loading: false,
          update_user: action.payload.data,
          is_updated_user: true,
        };
      case UPDATE_USER_FAIL:
        return {
          loading: false,
          update_user: null,
          update_user_error: action.payload,
          is_updated_user: false,
        };
  
      case UPDATE_USER_CLEAR_ERRORS:
        return {
          ...state,
          update_user_error: null,
        };
      default:
        return state;
    }
  }

  export const change_pass_reducer = (
    state = {
      change_pass: [],
    },
    action
  ) => {
    console.log(action.payload)

    switch (action.type) {
      case CHANGE_PASSWORD_REQUEST:
        return {
          loading: true,
          change_pass: [],
        };
      case CHANGE_PASSWORD_SUCCESS:
        return {
          loading: false,
          change_pass: action.payload.data.status,
          status: action.payload.data.message,
          pass_status: true,
        };
      case CHANGE_PASSWORD_FAIL:
        return {
          loading: false,
          change_pass: null,
          change_pass_error: action.payload,
          pass_status:false,
        };
  
      case CHANGE_PASSWORD_CLEAR_ERRORS:
        return {
          ...state,
          change_pass_error: null,
        };
      default:
        return state;
    }
  };