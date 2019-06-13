import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import NavBar from './navbar.js'
import '../styles/App.css';
import CampusView from '../views/CampusView';
import def from '../imgs/def.png';
import AddCampus from './AddCampus';
import {connect} from 'react-redux';
import {getAllCampusesThunk, addCampusThunk }from '../actions/index';
  
class Campuses extends React.Component{
    constructor(props){
        super(props);
        this.state={
            addCampus: false,
            redirect: false
            } 
  }
  componentDidMount(){
      this.props.request_campus_list();
  }
    addNewCampus = () => {
        this.setState({addCampus: true});
    }  

    handleSubmit = (obj) =>{
        this.props.add_campus(obj);
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
            return(<Redirect to={`Campuses/${this.props.CurrentCampus.id}`} /> )
        }

           const singleCampus= this.props.CampusList.map(campus=>{
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
                {this.props.CampusList.length === 0? <h3>There are no campuses to display</h3> : <div className="campus-wrapper">{singleCampus}</div> } 
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        CampusList: state.CampusList,
        StudentList:state.StudentList,
        CurrentCampus: state.CurrentCampus
    }
}

 function mapDispatchToProps(dispatch){
     return {
         request_campus_list: () => dispatch(getAllCampusesThunk()),
         add_campus: (obj) => dispatch(addCampusThunk(obj)),
     }
 }



export default connect(mapStateToProps,mapDispatchToProps)(Campuses);