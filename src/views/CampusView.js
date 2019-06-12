import React from 'react';
import '../styles/App.css';
import def from '../imgs/def.png'

const CampusView = (props) => {
    return(
          <div className="multi-view">
              <h3>{props.campus.name}</h3>
              <img src={def} alt="student"></img>
             <p className="numOfStud">Students: {props.campus.numberOfStudents}</p>

          </div>
        )
    }
    

    export default CampusView ; 
