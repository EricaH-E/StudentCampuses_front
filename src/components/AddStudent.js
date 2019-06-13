import React from 'react';
import def from '../imgs/def.png';
import NavBar from './navbar.js';


/* add student form */
class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            firstName: ' ',
            lastName: ' ',
            email: ' ',
            imageUrl: def,
            gpa: ' '
        }
    }  

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      submitted = (event) => {
          event.preventDefault();
          let  newstudent=  this.state;
          console.log("form", newstudent)
          this.props.submit(newstudent);
      }


    render(){
    return(
    <div>
        <header>
            <h1>Add New Student</h1>
            <br />
            <NavBar />
            </header>
        <form onSubmit={this.submitted}>
            <label> First Name:
            <input type="text" name="firstName" onChange={this.handleChange} required/>
            </label>
            <br />
            <label> Last Name:
            <input type="text"  name="lastName" onChange={this.handleChange}  required/>
            </label>
            <br />
            <label>Email:
            <input type="email"  name="email"  onChange={this.handleChange} />
            </label>
            <br />
            <label>Image:
            <select>
                 <option value="default" name="imageUrl">default</option>
            </select>
            </label>
            <br />
            <label>GPA:
            <input type="number"  step="0.01" name="gpa"  onChange={this.handleChange} required/>
            </label>
            <br />
            <input type="submit" value="SUBMIT" /> <button onClick={this.props.cancel}>CANCEL</button>
        </form>
    </div>
    )
}

}

export default AddStudent;