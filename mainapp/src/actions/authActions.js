import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { IS_ADMIN, GET_ERRORS, GET_CONFIRMATION_MSG, SET_CURRENT_USER, USER_LOADING } from "./types";


// Google Registration
export const googleRegister = (userData, history) => dispatch => {
  axios
    .post("/api/users/googlesignin", userData)
    .then(res => {
      // Save to localStorage
      // Set token to localStorage
      const { token, _isAdmin } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log('decoded', decoded)
      // Set current user
      dispatch(setCurrentUser(decoded));
      // Set admin role
      if (_isAdmin) {
        localStorage.setItem("authorizer", 'ghdglkglg-jioru5867-qroighn-heou-509');
      } else {
        localStorage.setItem("authorizer", 'lkuokuy97rjtjaopewr90464-4jfkdfoeiwt-jdjfiodfj');
      }
      if (localStorage.getItem("authorizer") === 'ghdglkglg-jioru5867-qroighn-heou-509') {
        dispatch({
          type: IS_ADMIN,
          payload: _isAdmin
        })
      }else {
        dispatch({
          type: IS_ADMIN,
          payload: _isAdmin
        })
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: (err.hasOwnProperty('response')) ? (err.response.hasOwnProperty('data')) ? err.response.data : "" : ""
      })
    );
};


// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => {
      dispatch({
        type: GET_CONFIRMATION_MSG,
        payload: res.data.msg
      })
      history.push("/login")
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: (err.hasOwnProperty('response')) ? (err.response.hasOwnProperty('data')) ? err.response.data : "" : ""
      })
    );
};

// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage

      // Set token to localStorage
      const { token, _isAdmin } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log('decoded', decoded)
      // Set current user
      dispatch(setCurrentUser(decoded));
      // Set admin role
      if (_isAdmin) {
        localStorage.setItem("authorizer", 'ghdglkglg-jioru5867-qroighn-heou-509');
      } else {
        localStorage.setItem("authorizer", 'lkuokuy97rjtjaopewr90464-4jfkdfoeiwt-jdjfiodfj');
      }
      if (localStorage.getItem("authorizer") === 'ghdglkglg-jioru5867-qroighn-heou-509') {
        dispatch({
          type: IS_ADMIN,
          payload: _isAdmin
        })
      } else {
        dispatch({
          type: IS_ADMIN,
          payload: _isAdmin
        })
      }
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.hasOwnProperty('response') ? err.response.hasOwnProperty('data') ? err.response.data : "" : ""
      })
    );
};

// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("authorizer");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};
