import { combineReducers } from 'redux';
import studentReducer from './students'; 

//combineReducers function creates a single object that contains
//a bunch of reducers 
const rootReducer = combineReducers({
    StudentList: studentReducer
}); 

export default rootReducer; 

/* REMINDER: reducers are simply functions responsible for transforming and returning the store of our application.*/