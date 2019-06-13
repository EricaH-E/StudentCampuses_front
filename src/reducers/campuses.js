import {ADD_CAMPUS, REQUEST_CAMPUS_LIST, DELETE_CAMPUS} from '../actions/index';

/* campuses reducer  for all actions related to campuses */
export default function(state= [], action){
    switch(action.type){
      case  REQUEST_CAMPUS_LIST:
       return action.payload;
      case ADD_CAMPUS:
         return [...state, action.payload] ;
      
      case DELETE_CAMPUS:
        return [...state, state.filter(campus => campus.id !== action.payload.id ) ];
       default:
        return state;
    }
}
