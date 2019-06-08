import React from 'react';
import '../styles/App.css';

class CampusView  extends React.Component{

    render(){
        return(
          <div>
             <div className="campus-icon">{this.props.image}</div>
              <div className="campus-name">{this.props.name}</div>
               <div className="numOfStud">{this.props.numberOfStudents}</div>
          </div>
        )
    }
    
    }

    export default CampusView ; 
