import React from 'react';
import campus from '../imgs/campus.png';
import student from '../imgs/student.png';
import add from '../imgs/add.png';
import NavBar from './navbar.js'
import { Link}from 'react-router-dom';
import '../styles/App.css';


class Home extends React.Component{
    render(){
        return(
            <div>
              <header>
                 <h1>Welcome to Campus & Student Listings</h1> 
                 <br />
                   <NavBar />
              </header>
              <div className="site-info">
              <Link to="/Campuses"> 
                <div>
                  <img src={campus} alt="campus icon"></img>
                  <br/>
                   <h4>View our List of Campuses</h4>
               </div>
               </Link>
               <Link to="/Students">
                 <div>
                    <img src={student} alt="student icon"></img>
                    <br/>
                   <h4>Search our Directory of Students</h4>
                 </div> 
               </Link>
               
                <div>
                 <img src={add} alt="add icon"></img>
                 <h4>Keep up up to date!  Add students and campuses</h4>
                 <br/>
                </div>
             </div>
            </div>
        )
    }
}

export default Home;