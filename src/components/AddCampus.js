import React from 'react';
import NavBar from './navbar.js';

/* add campus form */
class AddCampus extends React.Component{

    constructor(props){
        super(props);
            this.state ={
                name: '',
                address: '',
                imageUrl: '',
                description: ''
            }
        }
    
    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }

      submitted = (event) => {
        event.preventDefault();
        /*let email= RegExp('^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$');
        let address = RegExp("A-Za-z0-9'\.\-\s\,"); */
        /*if( this.state.name === '' || this.state.address === ''){
            alert('Campus Name and address be filled out befor submitting New campus');
        }
        else{*/
          let  newcampus=  this.state;
          this.props.submit(newcampus);
       /* } */
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
            <input type="text" name="name" onChange={this.handleChange} required />
         </label>

         <br />

            <label>Address:{" "}
            <input type="text"  name = "address" onChange={this.handleChange} required/>
            </label>

            <br />

            <label>Image:{" "}
            <select>
                <option value="default" name="imageUrl">default</option>
            </select>
            
            </label>

            <br />

            <label>Description:{" "}
            <input type="text" name="description" onChange={this.handleChange} />
            </label>
            <br />
           <input type="submit" value="SUBMIT" /> <button onClick={this.props.cancel}>CANCEL</button>
        </form>
        </div>
    ) 
}
}

export default AddCampus;

