import React from 'react';
import '../styles/App.css';
import NavBar from './navbar.js';

// const StudentsList = (props) => {
//     const studentList = props.studentList.map((student) => {
//         return <Students key={student.student_id} student={student.first_name} student={student.last_name}/> 
//     ); 
// }); 

// render() {
//     return (
//         <div>
//             <StudentsList student_id={this.state.studentList} />
//         </div>
//     ); 
// }; 

// export default StudentId; 
//passing the state 
const StudentId = ({studentList}) => {
    //student is just a parameter 
    const studentId = studentList.map((student) => { 
        return(
            <div>
            <li key={student.student_id} student={student.first_name} student={student.last_name}>
            </li>
            <button onClick>EDIT</button> <button>DELETE</button> <button>ADD STUDENTS</button>
            </div>
        ); 
    }); 

    return (
       <ul className ="student-list">{studentId}</ul>
    ); 
}; 

export default StudentId; 