import React from 'react';
import {Redirect} from 'react-router-dom';
import NavBar from './navbar.js';

/* edits a campus*/

class  CampusEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.campus.name,
            address: this.props.campus.address,
            imageUrl: this.props.campus.image,
            description: this.props.campus.description,
            redirect: false

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
        delete update.redirect;
        console.log(update);
       this.props.grabChanges(update);
       this.setState({redirect: true})
    }


    render(){
    const address  = this.props.campus.address === ' '? "input address here" : this.props.campus.address;
    const description  = this.props.campus.description === ' '? "input address here" : this.props.campus.description;

    if(this.state.redirect){
        return(<Redirect to={`Campuses/${this.props.campus.id}`} /> )
    }

    return(
        <div>
        <header>
            <h1>Edit Campus</h1>
            <br />
            <NavBar />
        </header>
        <form>
            <label>Name:
            <input type="text"  name="name" placeholder={this.props.campus.name} onChange={this.handleChange}  />
            </label>
            <br />
            <label>Address:
            <input type="text"  name="address" placeholder={address} onChange={this.handleChange}/>
            </label>
            <br />
            <label>Image:
            <select>
               <option value="default" name="imageUrl" onChange={this.handleChange}>default</option>
            </select>
            </label>
            <br />
            <label>Description:
            <input type="text" name="description"  placeholder={description} onChange={this.handleChange}/>
            </label>
            <br />
            <button onClick={this.save}>Save</button>
        </form>
        </div>
    )
}

}

export default CampusEdit;