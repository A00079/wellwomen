import { IS_ADMIN } from './types.js';

export const validateAdmin = message => dispatch =>{
    dispatch({type: IS_ADMIN, payload: message})
}