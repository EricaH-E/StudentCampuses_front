import React from 'react';
import NavBar from './navbar.js';


/* add student form */
class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first_name: ' ',
            last_name: ' ',
            email: ' ',
            imageUrl: ' ',
            gpa: ' '
        }
    }  

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      submitted = () => {
          let  newstudent=  this.state;
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
        <form>
            <label> First Name:
            <input type="text" name="first_name"  required/>
            </label>
            <br />
            <label> Last Name:
            <input type="text"  name="last_name"  required/>
            </label>
            <br />
            <label>Email:
            <input type="email"  name="email" />
            </label>
            <br />
            <label>Image:
            <select>
                 <option value="default" name="imageUrl">default</option>
            </select>
            </label>
            <br />
            <label>GPA:
            <input type="number"  name="gpa" required/>
            </label>
            <br />
            <input type="submit" value="SUBMIT" /> <button onClick={this.props.cancel}>CANCEL</button>
        </form>
    </div>
    )
}

}

export default AddStudent;