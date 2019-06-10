import React from 'react';
import '../styles/App.css';
import {withRouter} from 'react-router-dom';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from '../components/Home.js';
import Students from '../components/Students';
import Campuses from '../components/Campuses';
import {connect} from 'react-redux'; /*links react and redux */
import { bindActionCreators } from 'redux';
import SingleCampus from '../components/SingleCampus';
import * as Actions from '../actions/index.js';



class App extends React.Component{
  render(){
       const CampusesComponent = () => (<Campuses campusList={this.props.CampusList} actions={this.props.actions}/>)
    return(
      <Router>
      <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/Students" component={Students}/>
          <Route exact={true} path="/Campuses" render={CampusesComponent}/>
          <Route exact={true} path="/SingleCampus" component={SingleCampus} />
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
    CampusList: state.CampusList.data
  };
}

/*passes data from container to store */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

/*export default App;*/

export default connect(mapStateToProps,mapDispatchToProps)(App);


/*<Route exact={true} path="/CampusView/:id" component={CampusView}/>*/
