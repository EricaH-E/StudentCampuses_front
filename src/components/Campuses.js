import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import NavBar from './navbar.js'
import '../styles/App.css';
import CampusView from '../views/CampusView';
import def from '../imgs/def.png';
import AddCampus from './AddCampus';
  
class Campuses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            name: "",
            numberOfStudents: 0,
            image: def,
            addCampus: false,
            redirect: false
            } 
  }
  componentDidMount(){
      this.props.actions.getAllCampusesThunk();
  }
    addNewCampus = () => {
        this.setState({addCampus: true});
    }  

    getName = (event) => {
        this.setState({name: event.target.value});
    }
    
    handleSubmit = (obj) =>{
        this.props.actions.addCampusThunk(obj);
        this.setState({addCampus: false});
        this.setState({redirect: true});
        
    }
    
    handleCancel = () =>{
        this.setState({addCampus: false});
    }
    
    render(){
        if(this.state.addCampus){
            return(
                <AddCampus  cancel={this.handleCancel}  submit={this.handleSubmit}/>
            )
        }
        if(this.state.redirect){
            return(<Redirect to={`Campuses/${this.props.campus}`} /> )
        }

           const singleCampus= this.props.campusList.map(campus=>{
               return(
             <Link
             key={campus.id}
              to={`/Campuses/${campus.id}`}>
                <CampusView campus={campus} test="test" />
            </Link>
    
            )
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