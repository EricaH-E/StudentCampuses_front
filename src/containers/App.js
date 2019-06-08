import React from 'react';
import '../styles/App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import NavBar from '../components/navbar.js';
import Home from '../components/Home.js';
import Students from '../components/Students';
import Campuses from '../components/Campuses'



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
          <Route exact={true} path="/Campuses" component={Campuses}/>
      </div>
      </Router>
     
    )
  }
}

export default App;


