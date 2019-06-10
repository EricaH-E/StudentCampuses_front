import {ADD_CAMPUS, REQUEST_CAMPUS_LIST} from '../actions/index';

const initialState ={ 
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
}

/* campuses reducer  for all actions related to campuses */
export default function(state= initialState, action){
    switch(action.type){
      case  REQUEST_CAMPUS_LIST:
       return {
         ...state, data: action.payload.data
       };
       case ADD_CAMPUS:
          console.log("adding campus");
      return{
           ...state, 
           data: [...state.data, {
             id: action.id,
             name: action.name,
             numberOfStudents: action.numberOfStudents,
             image: action.image
           }]
      }
       default:
        return state;
    }
}
