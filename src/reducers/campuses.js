import {ADD_CAMPUS, REQUEST_CAMPUS_LIST, DELETE_CAMPUS} from '../actions/index';

/*const initialState ={ 
  data: [{ 
     id: 1,
     name:"Campus1", 
     numberOfStudents:"5 ",
     image:"SomeImage "
   },
             
   { 
       id:2,
       name:"Campus2", 
       numberOfStudents:"2 ",
       image:"SomeImage2"
   }

 ] 
}*/

/* campuses reducer  for all actions related to campuses */
export default function(state= [], action){
    switch(action.type){
      case  REQUEST_CAMPUS_LIST:
       return action.payload;
       
      case ADD_CAMPUS:
         return [...state, action.payload ]
      
      case DELETE_CAMPUS:
        return [...state, state.filter(campus => campus.id !== action.payload.id ) ]
       default:
        return state;
    }
}
