import React from 'react';
import '../styles/App.css';
import NavBar from './navbar.js';


class Students extends React.Component{
    render(){
        return(
            <div>
                <header>
                     <h1>Students</h1>
                     <br/>
                     <NavBar />
                </header>
            </div>
        )
    }
}

export default Students;