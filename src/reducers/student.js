/* single student reducer */

import {REQUEST_STUDENT, EDIT_STUDENT} from '../actions/index';


export default function(state={}, action){
    switch(action.type) {
        case REQUEST_STUDENT:
            return action.payload
            
        case EDIT_STUDENT:
            return action.payload
    
        default:
            return state;
    }
}