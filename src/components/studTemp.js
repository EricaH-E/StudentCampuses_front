import React from 'react'; 

//passing the state 
const studTemp = ({studentList}) => {
    //student is just a parameter 
    const studentId = studentList.map((student) => { 
        return(
            <li key={student.student_id} student={student.first_name} student={student.last_name}>
            </li>
        ); 
    }); 

    return (
       <ul className ="student-list">{studentId}</ul>
    ); 
}; 

export default studTemp; 