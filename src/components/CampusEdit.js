import React from 'react';
import NavBar from './navbar.js';

/* edits a campus*/

class  CampusEdit extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            name: this.props.campus.name,
            address: this.props.campus.address,
            image: this.props.campus.image,
            description: this.props.campus.description
        }
    }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      }
    save = () =>{
        let update = this.state;
        this.props.grabChanges(update);
    }


    render(){
    const address  = this.props.campus.address === ' '? "input address here" : this.props.campus.address;
    const description  = this.props.campus.description === ' '? "input address here" : this.props.campus.description;
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
               <option value="default" name="image" onChange={this.handleChange}>default</option>
            </select>
            </label>
            <br />
            <label>Description:
            <input type="text" name="description"  placeholder={description} onChange={this.handleChange}/>
            </label>
            <br />
            <button>Save</button>
        </form>
        </div>
    )
}

}

export default CampusEdit;