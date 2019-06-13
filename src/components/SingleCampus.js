import React from 'react';
import def from '../imgs/def.png'
import NavBar from '../components/navbar';
import {withRouter} from 'react-router';
import CampusEdit from './CampusEdit';
import {connect}  from 'react-redux';
import {editCampusThunk, deleteCampusThunk, getSingleCampusThunk} from '../actions/index';

class SingleCampus extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            edit: false,
            delete: false,
            currentId : ''
        }
    }
    componentDidMount(){

        const {id} = this.props.match.params;
        this.setState({currentId :id})
        this.props.request_campus(id);
    }

    triggerEdit = () =>{
        this.setState({edit: true});
    }

    triggerDelete = () =>{
        this.setState({delete: true});
    }

    handleDelete = () =>{
        /*trigger delete thunk */
        this.props.delete_campus(this.state.currentId);
    }

    handleEdit = (obj) =>{
        /*trigger edit thunk and pass object */
        this.props.edit_campus(this.state.currentId, obj);
    }

    render(){
        if(this.state.edit){
            return( 
                <CampusEdit  campus={this.props.CurrentCampus}  grabChanges={this.state.handleEdit}/>
            )
        }

        if(this.state.delete){
            return(
                <div>Deleted</div>
            )
        }

        return(
        <div>
            <header>
                <NavBar />
            </header>
            <div className="multi-view">
              <h3>{this.props.CurrentCampus.name}</h3>
              <img src={def} alt="campus"></img>
              <p>Address: {this.props.CurrentCampus.address}</p>
             <p>Description: {this.props.CurrentCampus.description} </p>
             <button onClick={this.triggerEdit}>EDIT</button> <button onClick={this.triggerDelete}>DELETE</button>
          </div>
            <br/>
          <div>
          <button>ADD STUDENT</button> <button>REMOVE STUDENT</button>
          <br />
             <h3>Students belonging to {this.props.CurrentCampus.name} : </h3>
              
              
          </div>
            
        </div>
        )
    }
}

function mapStateToProps(state){
    return{
        CurrentCampus: state.CurrentCampus,
        StudentList: state.StudentList

    }
}

function mapDispatchToProps(dispatch){
    return{
        request_campus: (id) => dispatch(getSingleCampusThunk(id)),
        edit_campus: (id, update) => dispatch(editCampusThunk(id,update)),
        delete_campus: (id) => dispatch(deleteCampusThunk(id))

    }
}



export default withRouter(connect(mapStateToProps,mapDispatchToProps)(SingleCampus));

//if no students assigned to campus render no students assigned

// export default SingleCampus;
// mapping students to this campus  via filter & find

/* let students= this.props.studentList.filter(student => student.campusId === this.state.currentId)
.map(student => {
    return (
         <Link
             key={student.id}
              to={`/Students/${student.id}`}>
                <StudentView student={student}  />
            </Link>
    )
}
    */