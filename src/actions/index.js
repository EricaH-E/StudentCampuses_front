export const REQUEST_CAMPUS_LIST = 'REQUEST_CAMPUS_LIST';
export const REQUEST_STUDENT_LIST = 'REQUEST_STUDENT_LIST';

/*import into container */
 export function request_campusList(){
    console.log("in campus action");
    return {
        type: REQUEST_CAMPUS_LIST
    }
}


/*thunks should be created here  with axios calls*/
