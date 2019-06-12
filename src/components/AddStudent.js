import React from 'react';
import NavBar from './navbar.js';


/* add student form */
class AddStudent extends React.Component{
    constructor(props){
        super(props);
        this.state={
            first: ' ',
            last: ' ',
        }
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
            <input type="text"  />
            </label>
            <br />
            <label> Last Name:
            <input type="text"   />
            </label>
            <br />
            <label>Email:
            <input type="email"  />
            </label>
            <br />
            <label>Image:
            <select>
                 <option value="default">default</option>
            </select>
            </label>
            <br />
            <label>GPA:
            <input type="number" />
            </label>
            <br />
            <input type="submit" value="SUBMIT" /> <button>CANCEL</button>
        </form>
    </div>
    )
}

}

export default AddStudent;