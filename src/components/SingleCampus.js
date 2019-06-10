import React from 'react';
import NavBar from '../components/navbar';

class SingleCampus extends React.Component{
    render(){
        console.log(this.props.location.state);
        const {name, students, image} = this.props.location.state;
        return(
        <div>
            <header>
                <h1>{name}</h1>
                <NavBar />
            </header>
            <p className="campus-icon">{image}</p>
             <p className="numOfStud">Students: {students}</p>
             <button onClick>EDIT</button> <button>DELETE</button> <button>ADD STUDENTS</button>
        </div>
        )
    }
}

export default SingleCampus;