import { GET_AGEGROUP,GET_GOALS,GET_ACTIVITY_LEVEL,GET_EATING_HABBIT } from "../actions/types";

const initialState = {
  user_age: null,
  user_goal: null,
  user_activity: null,
  user_eatinghabbit:null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_AGEGROUP:
      return {
        ...state,
        user_age: action.payload
      };
      case GET_GOALS:
      return {
        ...state,
        user_goal: action.payload
      };
      case GET_ACTIVITY_LEVEL:
      return {
        ...state,
        user_activity: action.payload
      };
    case GET_EATING_HABBIT:
      return {
        ...state,
        user_eatinghabbit: action.payload
      };
    default:
      return state;
  }
}
