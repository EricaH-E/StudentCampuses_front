import React from 'react';
import {link, Redirect} from 'react-router-dom';
import NavBar from './navbar.js'
import '../styles/App.css';
import CampusView from '../views/CampusView';


  
class Campuses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            numberOfStudents: 0,
            image:"SomeImage",
            addCampus: false,
            redirect: false
            } 
  }
  /*componentDidMount(){
      this.props.actions.request_campus_list();
  }*/
    addNewCampus = () => {
        this.setState({addCampus: true});
    }  

    getName = (event) => {
        this.setState({name: event.target.value});
    }
    
    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.actions.add_campus(this.state.name,this.state.numberOfStudents, this.state.image);
        this.setState({addCampus: false});
        /*redirect to single campus view */
        this.setState({redirect: true});
        
    }
    
    render(){
        /*console.log(typeof this.props.campusList);
        console.log(this.props.campusList);*/
        if(this.state.redirect){
            return(
            <Redirect to={{
                pathname: 
                state: { 
                    name: this.state.name,
                    students:  this.state.numberOfStudents,
                    image: this.state.image

                }
            }} />
            
            )
    }

        if(this.state.addCampus){
            return(
                <div>
                <header>
                    <h1>Add New Campus</h1>
                    <br />
                    <NavBar />
                    </header>
                <br/>
                <br />
                <form onSubmit={this.handleSubmit}>
                   Name:  <input type="text"  onChange={this.getName} required /> {' '}
                   <input type="submit" value="SUBMIT" />
                </form>
                </div>
            )
        }

           const singleCampus= this.props.campusList.map(campus=>{
               return(<CampusView  name={campus.name}
                numberOfStudents={campus.numberOfStudents}
                image={campus.image}
                key={campus.id}
                id={campus.id}
            />)
            }); 
        return(
            <div>
                <header>
                     <h1>Campuses</h1>
                     <br />
                     <NavBar />  
                </header>
                <div id="add-campus"><button onClick={this.addNewCampus}>Add Campus</button></div>
                {this.props.campusList.length === 0? <h3>There are no campuses to display</h3> : <div className="campus-wrapper">{singleCampus}</div> } 
            </div>
        )
    }
}


export default Campuses;