/*single campus reducer */

import {REQUEST_CAMPUS, EDIT_CAMPUS} from '../actions/index';


export default function(state= {}, action){
    switch(action.type){
        case REQUEST_CAMPUS:
            return action.payload;

              
            
        case  EDIT_CAMPUS:
            return action.payload
        default:
            return state;
    }
}