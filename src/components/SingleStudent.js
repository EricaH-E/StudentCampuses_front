import React from 'react';
import def from '../imgs/def.png';
import {Redirect} from 'react-router-dom';
import NavBar from '../components/navbar';
import {withRouter} from 'react-router';
import StudentEdit from './StudentEdit'
import {connect} from 'react-redux';
import {getSingleStudentThunk, editStudentThunk, deleteStudentThunk}from '../actions/index';

class SingleStudent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            edit: false,
            delete: false,
            currentId: '',
            redirect: false
        }
    }

    componentDidMount(){
        const {id} = this.props.match.params
        this.setState({currentId: id})
        this.props.request_student(id);
    }

    triggerEdit = () =>{
        this.setState({edit: true});
    }

    triggerDelete = () =>{
        this.props.delete_student(this.state.currentId);
        this.setState({delete: true});
    }

    handleDelete = () =>{
        /*trigger delete thunk*/
        this.props.delete_student(this.state.currentId);
    }

    handleEdit = (obj) =>{
        /*trigger edit thunk and pass object */
        this.props.edit_student(this.state.currentId, obj);
        //if success
        this.setState({redirect: true});
    }


    render(){
        let imageUrl = this.props.CurrentStudent.imageUrl === "" ? def : this.props.CurrentStudent.imageUrl ;
        if(this.state.edit){
            return( 
                <StudentEdit student={this.props.CurrentStudent}  grabChanges={this.handleEdit} />
            )
        }


        if(this.state.delete){
            return(
                <Redirect to="/Students" />
            )
        }

        
        return(
            <div>
                <header>
                    <NavBar />
                </header>
            <div className="multi-view">
              <img src={imageUrl} alt="student"></img>
              <h3>{this.props.CurrentStudent.firstName}{" "}{this.props.CurrentStudent.lastName}</h3>
              <p> GPA: {this.props.CurrentStudent.gpa}</p>
              <p>Email: {this.props.CurrentStudent.email}</p>
             <button onClick={this.triggerEdit}>EDIT</button> <button onClick={this.triggerDelete}>DELETE</button>
          </div>
          <br />
          <button>ADD/CHANGE CAMPUS</button>
          </div>
        )
    }
}

function mapStateToProps(state){
    return{
        CurrentStudent: state.CurrentStudent,
        CampusList: state.CampusList
    }
}

function mapDispatchToProps(dispatch){
        return{
            request_student: (id) => dispatch(getSingleStudentThunk(id)),
            edit_student: (id, update) => dispatch(editStudentThunk(id,update)),
            delete_student: (id) => dispatch(deleteStudentThunk(id))
            
        }
}


export default  withRouter(connect(mapStateToProps,mapDispatchToProps)(SingleStudent));

/* if student campus_id foreign key is null render no campus assigned*/
//campus finder
/*
    let campus;
   let campusid =  this.props.campusList.find(camp => this.state.currentId ==  camp.id);
   if(campus != undefined || null){
       campus = ( <Link
             key={campus.id}
              to={`/Campuses/${campus.id}`}>
                <CampusView campus={campus}  />
            </Link>})
   }
   else {
       no assigned campus
   }
 */