import React from 'react';
import '../styles/App.css';
import def from '../imgs/def.png'

const CampusView = (props) => {
   let image =  props.campus.imageUrl === ""? def : props.campus.imageUrl;
    return(
          <div className="multi-view">
              <h3>{props.campus.name}</h3>
              <img src={props.campus.imageUrl} alt="student"></img>
             <p>Address: {props.campus.address}</p>
             <p>Description: {props.campus.description} </p>


          </div>
        )
    }
    

    export default CampusView ; 
