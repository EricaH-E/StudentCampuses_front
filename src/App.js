import React from 'react';
import './App.css';
import { Link, Route, Redirect} from 'react-router-dom';
import NavBar from './navbar.js';
import Home from './Home.js';
import Students from './Student.js';
import Campuses from './Campuses.js'

class App extends React.Component{
  render(){
    return(
      <div>
          <Route exact={true} path="/" component={Home}/>
          <Route exact={true} path="/Students" component={Students}/>
          <Route exact={true} path="/Campuses" component={Campuses}/>
          <header>
               <NavBar />
          </header>
      </div>
     
    )
  }
}

export default App;
