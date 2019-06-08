import { combineReducers } from 'redux';
import studentReducer from './students'; 

//combineReducers function creates a single object that contains
//a bunch of reducers 
const rootReducer = combineReducers({
    campusList: studentReducer
}); 

export default rootReducer; 