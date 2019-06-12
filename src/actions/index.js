import axios from 'axios';

export const REQUEST_CAMPUS_LIST = 'REQUEST_CAMPUS_LIST';
export const REQUEST_STUDENT_LIST = 'REQUEST_STUDENT_LIST';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const ADD_STUDENT = 'ADD_STUDENT';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const DELETE_STUDENT= 'DELETE_CAMPUS';
export const EDIT_CAMPUS ='EDIT_CAMPUS';
export const EDIT_STUDENT = 'EDIT_STUDENT';
export const REQUEST_CAMPUS = 'REQUEST_CAMPUS';
export const REQUEST_STUDENT = 'REQUEST_STUDENT';

/* Campus Actions */
 export function request_campus_list(list){
    return {
        type: REQUEST_CAMPUS_LIST,
        payload: list
    }
}

export function request_campus(obj){
    return {
        type: REQUEST_CAMPUS,
        payload:obj
    }
}

export function add_campus(list){
   return {
        type: ADD_CAMPUS,
        payload: list
    }
    
}

export function delete_campus(){
 return {
     type: DELETE_CAMPUS,
 };
}


export function edit_campus(obj){
    return {
        type: EDIT_CAMPUS,
        obj
    }
   }


/* Student Actions */

export function request_student_list(list){
    return {
        type: REQUEST_STUDENT_LIST,
        payload: list
    }
}
export function request_student(obj){
    return {
        type: REQUEST_STUDENT,
        payload:obj
    }
}

export function add_student(list){
    return{
    type: ADD_STUDENT,
    payload: list
    }
}

export function edit_student(student){
    return{
        type: EDIT_STUDENT,
        payload: student
    }
}

export function delete_student(){
    return{
        type: DELETE_STUDENT
    }
}


   





/*thunks should be created here  with axios calls*/

/****** campus thunks ******/
export const getAllCampusesThunk  = () => (dispatch) =>{
    return axios.get('/api/Campuses')
    .then( result => result.data)
    .then(data => dispatch(request_campus_list(data)))
    .catch (error => console.log(error));
}

export const getSingleCampusThunk = () => (dispatch) =>{ 
    return axios.get('api/Campuses/:id')
    .then(result => result.data)
    .then(data => dispatch(request_campus(data)))
    .catch (error => console.log(error));
}
    

export const addCampusThunk = (newCampus)=> (dispatch)=>{
    axios.post('/api/Campuses', newCampus)
    .then(result => result.data)
    .then(data => dispatch(add_campus(data[0])))
    .then(data => dispatch(request_campus(data[1])))
    .catch(error => console.log(error));
}

export const editCampusThunk = (id, update) => (dispatch)=>{
    axios.put(`/api/Campuses/${id}`, update)
    .then(result => result.data)
    .then(data => dispatch(edit_campus(data[0]))) //should return single campus from back end
    .then(data => dispatch(request_campus(data[1])))
    .catch(error => console.log(error));
}

export const deleteCampusThunk = (id) =>{
    return axios.delete(`api/Campuses/${id}`)
    .then(response => console.log(response))
    .catch(error =>console.log(error))
    
}

/****** student thunks  ******/
export const getAllStudentsThunk  = () => (dispatch)=>{
    return axios.get('/api/Students')
    .then( result => result.data)
    .then(data => dispatch(request_student_list(data)))
    .catch (error => console.log(error));

}

export const getSingleStudentThunk = (id) =>(dispatch)=>{
    return axios.get(`api/Students/${id}`)
    .then(result => result.data)
    .then(data => dispatch(request_student(data)))
    .catch (error => console.log(error));
}

export const addStudentThunk = (newStudent)=> (dispatch)=>{
    axios.post('/api/Students', newStudent)
    .then(result => result.data)
    .then(data => dispatch(add_student(data[0])))
    .then(data => dispatch(request_student(data[1])))
    .catch(error => console.log(error));

}

export const editStudentThunk = (id, update) => (dispatch)=>{
    axios.put(`/api/Students/${id}`, update)
    .then(result => result.data)
    .then(data => dispatch(edit_student(data[0]))) //should return single campus from back end
    .then(data => dispatch(request_student(data[1])))
    .catch(error => console.log(error));

} 

export const deleteStudentThunk = (id) => (dispatch)=>{
    return axios.delete(`api/Students/${id}`)
    .then(response => console.log(response))
    .then(dispatch(delete_student()))
    .catch(error =>console.log(error))
    
} 