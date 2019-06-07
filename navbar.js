import React from 'react';
import { Link, Route, Redirect} from 'react-router-dom';
import './App.css';



class NavBar extends React.Component {
    render(){
        return(
            <div id ="nav">
                <ul>
                 <li id="home"><Link to="/">Home</Link></li>
                 <li><Link to="/Campuses">Campuses</Link></li>
                 <li><Link to="/Students">Students</Link></li>   
                </ul>
            </div>
        )
    }

}

export default NavBar;