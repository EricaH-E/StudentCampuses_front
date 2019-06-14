import React from 'react';
import def from '../imgs/def.png'
import '../styles/App.css';

const StudentView = (props) => {
 let image =  props.student.imageUrl === ""? def : props.student.imageUrl;
    return(
          <div className="multi-view">
            <img src={def} alt="student"></img>
            <h3>{props.student.firstName}</h3>
             <h3> {props.student.lastName}</h3>
             <p> GPA: {props.student.gpa}</p>
             <p> email: {props.student.email}</p>
          </div>
        )
    }
    

    export default StudentView ; 
