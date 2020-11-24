import { GET_AGEGROUP,GET_GOALS,GET_ACTIVITY_LEVEL,GET_EATING_HABBIT } from './types.js';

export const StartJourney = (data,question) => dispatch =>{
    if(question == 'age'){
        dispatch({type: GET_AGEGROUP, payload: data})
    }
    if(question == 'goal'){
        dispatch({type: GET_GOALS, payload: data})
    }
    if(question == 'activity'){
        dispatch({type: GET_ACTIVITY_LEVEL, payload: data})
    }
    if(question == 'eathabbit'){
        dispatch({type: GET_EATING_HABBIT, payload: data})
    }
}