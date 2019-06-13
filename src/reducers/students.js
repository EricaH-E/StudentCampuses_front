import {REQUEST_STUDENT_LIST, ADD_STUDENT, DELETE_STUDENT} from '../actions/index'


/*const initialState ={
    data: [
        {
            id: 1, 
            first_name: 'Shanjida', 
            last_name: 'Akhter'
        },
        {
            id: 2, 
            first_name: 'Erica', 
            last_name: 'Helliston'
        },
        {
            id: 3, 
            first_name: 'Josh', 
            last_name: 'Hutcherson'
        }
    ]
}*/

/* reducer for all Students */

export default function(state = [], action){
    switch(action.type){
        case REQUEST_STUDENT_LIST:
                return action.payload
        case ADD_STUDENT:
            return action.payload;

        case DELETE_STUDENT:
            return {}
        default: return state;
    }
}

