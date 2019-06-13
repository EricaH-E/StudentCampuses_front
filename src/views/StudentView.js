import React from 'react';
import def from '../imgs/def.png'
import '../styles/App.css';

const StudentView = (props) => {
    return(
          <div className="multi-view">
            <img src={def} alt="student"></img>
            <h3>{props.student.first_name}</h3>
             <h3> {props.student.last_name}</h3>
          </div>
        )
    }
    

    export default StudentView ; 
