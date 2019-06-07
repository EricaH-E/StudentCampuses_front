import React from 'react';
import './App.css';
import NavBar from './navbar';





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