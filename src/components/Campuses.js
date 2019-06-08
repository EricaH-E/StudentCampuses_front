import React from 'react';
import NavBar from './navbar.js'
import '../styles/App.css';


// const campusView = (props)=>{
//     {name, numberOfStudents, images} = props;
//     return(
//       <div>
//           <div className="campus-icon">{image}</div>
//           <div className="campus-name">{name}</div>
//           <div className="numOfStud">{numberOfStudents}</div>
//       </div>
//     )

// }
  
class Campuses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            campusList: this.props.campuses
        }
    }
    render(){
            
          /*  const singleCampus= this.props.campuses.map(campus=>{
               return(<campusView  name={campus.name}
                numberOfStudents={campus.name}
                image={campus.image}
            />)
            }); */
        return(
            <div>
                <header>
                     <h1>Campuses</h1>
                     <br />
                     <NavBar />  
                 </header>
                 <h3>No Campuses to Display</h3>
            </div>
        )
    }
}

export default Campuses;