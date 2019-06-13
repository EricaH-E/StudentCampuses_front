import React from 'react';
import '../styles/App.css';
/*import {withRouter} from 'react-router-dom';*/
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from '../components/Home.js';
import Campuses from '../components/Campuses';
import Students from '../components/Students';
import {connect} from 'react-redux'; /*links react and redux */
import { bindActionCreators } from 'redux';
import SingleCampus from '../components/SingleCampus';
import SingleStudent from '../components/SingleStudent';
import * as Actions from '../actions/index.js';



class App extends React.Component{
  render(){
      /*console.log('The props',this.props)*/
      /* const CampusesComponent = () => (<Campuses campusList={this.props.CampusList} actions={this.props.actions} campus={this.props.CurrentCampus}/>)
       const Campus = () => (<SingleCampus  campusList={this.props.CampusList} campus={this.props.CurrentCampus} actions={this.props.actions} studentList={this.props.StudentList} /> )
       const Student = () => (<SingleStudent  studentList={this.props.StudentList} student={this.props.CurrentStudent} actions={this.props.actions} campusList={this.props.CampusList} />)
       const StudentsComponent = () => (<Students  studentList={this.props.StudentList} student={this.props.CurrentStudent} actions={this.props.actions}  />) */
    return(
      <Router>
      <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/Students" component ={Students}/>
          <Route exact={true} path="/Campuses" component={Campuses}/>
          <Route exact={true} path="/Campuses/:id" component={SingleCampus} />
          <Route exact={true} path="/Students/:id" component={SingleStudent} />
          
          
      </div>
      </Router>
     
    )
  }
}

/* passes data from store to container
returns an object that can be passed as props to App*/
function mapStateToProps(state) {
  return {
    StudentList: state.StudentList,
    CampusList: state.CampusList,
    CurrentCampus: state.CurrentCampus,
    CurrentStudent: state.CurrentStudent
  };
}

/*passes data from container to store */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(App);


