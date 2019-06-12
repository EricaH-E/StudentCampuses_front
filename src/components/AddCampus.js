import React from 'react';
import NavBar from './navbar.js';

/* add campus form */
class AddCampus extends React.Component{

    constructor(props){
        super(props);
            this.setState ={
                name: '',
                address: '',
                image: '',
                description: ''
            }
        }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      submitted = () => {
          let  newcampus=  this.state;
          this.props.submit(newcampus);
      }

    render(){
    return(
        <div>
        <header>
            <h1>Add New Campus</h1>
            <br />
            <NavBar />
        </header>
        <br/>
        <br />
        <form  onSubmit={this.submitted}>
        <label>Name:{" "}
            <input type="text" name="name"  />
         </label>

         <br />

            <label>Address:{" "}
            <input type="text"  name = "address"/>
            </label>

            <br />

            <label>Image:{" "}
            <select>
                <option value="default" name="image">default</option>
            </select>
            
            </label>

            <br />

            <label>Description:{" "}
            <input type="text" name="description" />
            </label>
            <br />
           <input type="submit" value="SUBMIT" /> <button onClick={this.props.cancel}>CANCEL</button>
        </form>
        </div>
    ) 
}
}

export default AddCampus;

