import {
    DELETE_MSG,
    LOGOUT,
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    FETCH_LOGGED_USER_START,
    FETCH_LOGGED_USER_SUCCESS,
    FETCH_LOGGED_USER_FAIL,
    LOAD_POST
  } from "../Actions/index";
  
  export const initialState = {
      user: {username: "user placeholder"},
      userlist: {},
      isFetching: false,
      error: "",
     
    };
  
  export const reducer = (state = initialState, action) => {
      switch (action.type) {
        case LOGIN_START:
          return {
            ...state,
            isFetching: true
          };
  
        case LOGIN_SUCCESS:
          console.log(action.payload);
          return {
            ...state,
            isFetching: false,
            user: action.payload,
            err: ""
          };
  
        case LOGIN_FAIL:
          return {
            ...state,
            
            isFetching: false,
            error: action.payload.error
          };
  
        case FETCH_LOGGED_USER_START:
          return {
            ...state,
            isFetching: true
          };
  
        case FETCH_LOGGED_USER_SUCCESS:
          return {
            ...state,
            user: action.payload,
            isFetching: false,
            err: ""
          };
  
        case FETCH_LOGGED_USER_FAIL:
          return {
            ...state,
            user: action.payload,
            isFetching: false,
            error: action.payload.error
          };
  
        case DELETE_MSG:
          return {
            ...state,
            user: action.payload //replacing current state with the state that's deleted with message
          };
  
        case LOGOUT:
          return {
            ...state,
            user: ""
          };
  
          case LOAD_POST:
          return {
            ...state,
            isFetching: action.payload
          }
        default:
          return state;
      }
  }
  
 