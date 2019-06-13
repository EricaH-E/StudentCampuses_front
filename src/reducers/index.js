import { combineReducers } from 'redux';
import studentReducer from './students'; 
import campusReducer from './campuses';
import currentCampusReducer from './campus';
import currentStudentReducer from './student';

//combineReducers function creates a single object that contains
//a bunch of reducers 
const rootReducer = combineReducers({
    StudentList: studentReducer,
    CampusList: campusReducer,
    CurrentCampus: currentCampusReducer,
    CurrentStudent: currentStudentReducer
}); 

export default rootReducer; 

/* REMINDER: reducers are simply functions responsible for transforming and returning the store of our application.*/