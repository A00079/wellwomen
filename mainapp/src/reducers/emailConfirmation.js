import { GET_CONFIRMATION_MSG } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONFIRMATION_MSG:
      return action.payload;
    default:
      return state;
  }
}
