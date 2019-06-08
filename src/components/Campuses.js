import React from 'react';
import NavBar from './navbar.js'
import '../styles/App.css';
import CampusView from '../views/CampusView';


  
class Campuses extends React.Component{
    constructor(props){
        super(props);
        /*this.state={
            campusList: [
                { name:"Campus1", numberOfStudents:"5 ",image:"SomeImage "},
                { name:"Campus2", numberOfStudents:"2 ",image:"SomeImage2"}
              ]
            } */
        }
          
    
    render(){
        console.log(this.props.campusList);
            
           const singleCampus= this.props.campusList.map(campus=>{
               return(<CampusView  name={campus.name}
                numberOfStudents={campus.numberOfStudents}
                image={campus.image}
                key={campus.id}
            />)
            }); 
            console.log(singleCampus);
        return(
            <div>
                <header>
                     <h1>Campuses</h1>
                     <br />
                     <NavBar />  
                </header>
                {this.props.campusList.length === 0? <h3>No Campuses to Display</h3> : <div>{singleCampus}</div> } 
            </div>
        )
    }
}


export default Campuses;