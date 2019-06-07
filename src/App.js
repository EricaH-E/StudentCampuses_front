import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from './navbar.js';
import Home from './Home.js';
import Students from './Students';
import Campuses from './Campuses.js'



class App extends React.Component{
  render(){
    const campusList = [
      { name:"Campus1", numberOfStudents:"5 ",image:"SomeImage "},
      { name:"Campus2", numberOfStudents:"2 ",image:"SomeImage2"}
    ];
    const CampusesComponent = <Campuses campuses={campusList} />
    return(
      <Router>
      <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/Students" component={Students}/>
          <Route exact={true} path="/Campuses" render={CampusesComponent}/>
      </div>
      </Router>
     
    )
  }
}

export default App;


