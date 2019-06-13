import React from 'react';
import NavBar from './navbar.js';


/* edit campus form */

class StudentEdit extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: this.props.student.firsName,
            lastName: this.props.student.lastName,
            email: this.props.student.email,
            image: this.props.student.imageUrl,
            gpa: this.props.student.gpa,
        }
    }
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    save = (event) =>{
        event.preventDefault();
        let update = this.state;
        this.props.grabChanges(update);
    }

    render(){
    const email  = this.props.student.email === ' '? "input email here" : this.props.student.email;
    const gpa  = this.props.student.gpa === ' '? "input GPA here" : this.props.student.gpa;
    return(
        <div>
        <header>
            <h1>Edit Student</h1>
            <br />
            <NavBar />
        </header>
        <form>
            <label> First Name:
            <input type="text" name="first" placeholder={this.props.student.firstName}  onChange={this.handleChange} />
            </label>
            <br />
            <label> Last Name:
            <input type="text"  name="last" placeholder={this.props.student.lastName}  onChange={this.handleChange} />
            </label>
            <br />
            <label>Email:
            <input type="email"  name="email" placeholder={email} onChange={this.handleChange}/>
            </label>
            <br />
            <label>Image:
            <select>
                 <option value="default" name="image" onChange={this.handleChange}>default</option>
            </select>
            </label>
            <br />
            <label>GPA:
            <input type="number" step="0.01"  name="gpa" placeholder={gpa} onChange={this.handleChange} />
            </label>
            <br />
            <button onClick={this.save}>Save</button>
        </form>
        </div>
    )
}

}

//save should link to  single student
//onclick should trigger edit campus action

export default StudentEdit;