import { GET_CONFIRMATION_MSG,GET_ERRORS } from './types.js';

export const ClearMessage = (message,is_admin) => dispatch =>{
    dispatch({type: GET_CONFIRMATION_MSG, payload: message})
    dispatch({type: GET_ERRORS, payload: {error:''}})
}