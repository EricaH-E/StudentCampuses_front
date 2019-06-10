import React from 'react';
import '../styles/App.css';

class CampusView  extends React.Component{

    render(){
      
        return(
          <div>
          <div className="multi-view">
            <h3>{this.props.name}</h3>
             <p className="campus-icon">{this.props.image}</p>
             <p className="numOfStud">Students: {this.props.numberOfStudents}</p>
             <button onClick>EDIT</button> <button>DELETE</button>
          </div>
          </div>
        )
    }
    
    }

    export default CampusView ; 
