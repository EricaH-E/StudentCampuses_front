export const REQUEST_CAMPUS_LIST = 'REQUEST_CAMPUS_LIST';
export const REQUEST_STUDENT_LIST = 'REQUEST_STUDENT_LIST';
export const ADD_CAMPUS = 'ADD_CAMPUS';
export const DELETE_CAMPUS = 'DELETE_CAMPUS';
export const EDIT_CAMPUS ='EDIT_CAMPUS'

/*import into container */
 export function request_campus_list(){
    return {
        type: REQUEST_CAMPUS_LIST,
        payload: {data: [
    
            {
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
    }
}

let campusId = 3;
export function add_campus(name,numberOfStudents,image){

    return {
        type: ADD_CAMPUS,
        id: campusId++,
        name,
        numberOfStudents,
        image
    }
    
}

export function delete_campus(id){
 return {
     type: DELETE_CAMPUS,
     id
 };
}


export function edit_campus(id){
    return {
        type: DELETE_CAMPUS,
        id
    }
   }
   





/*thunks should be created here  with axios calls*/
