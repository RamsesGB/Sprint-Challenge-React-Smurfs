import React, { Component } from 'react';



class SmurfForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: '',
        height: ''
      } 
    };
  }


  handleInputChange = e => {
    e.persist();
    let value = e.target.value;
    console.log(e.target);
    this.setState(prevState => ({
      smurf: {
        ...prevState.smurf,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    this.props.addSmurf(e, this.state.smurf);
    console.log(this.state.smurf);
    this.setState({
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    });
}
  

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.smurf.name}
            name="name"
            // type="string"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.smurf.age}
            name="age"
            // type="number"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.smurf.height}
            name="height"
            // type="number"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;