import React from 'react';
import '../styles/App.css';
import {Link, Redirect} from 'react-router-dom';
import StudentView from '../views/StudentView';
import NavBar from './navbar.js';
import AddStudent from './AddStudent';


class Students extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newStudent: false,
            redirect:  false
        }
    }
    componentDidMount(){
        //call request student list thunk
        this.props.actions.getAllStudentsThunk()
    }
    addNewStudent = () =>{
        this.setState({newStudent: true});
    }

    handleSubmit = (obj) =>{
            this.props.action.addStudentThunk(obj);
            this.setState({newStudent: false});
            this.setState({redirect: true});
    }

    handleCancel = () => {
        this.setState({newStudent: false})
    }

    render(){
        if(this.state.newStudent){
            return (
                <AddStudent  submit={this.handleSubmit} cancel={this.handleCancel} />
            )
        }
        if(this.state.redirect){
           return( <Redirect to={`Students/${this.props.student}`} /> )
        }
        const singleStudent= this.props.studentList.map(student=>{
            return(
          <Link
          key={student.id}
           to={`/Students/${student.id}`}>
             <StudentView student={student}/>
         </Link>
 
         )
         }); 
        return(
            <div>
                <header>
                     <h1>Students</h1>
                     <br/>
                     <NavBar />
                </header>
                <br />
                <div id="add-campus"><button onClick={this.addNewStudent}>Add Student</button></div>
                {this.props.studentList.length === 0? <h3>There are no students to display</h3> : <div className="campus-wrapper">{singleStudent}</div> } 
            </div>
        )
    }
}

export default Students;