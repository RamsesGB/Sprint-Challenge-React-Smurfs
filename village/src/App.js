import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import {
  Route,
  NavLink,
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  componentDidMount() {
    axios
    .get('http://localhost:3333/smurfs')
    .then(res => this.setState({ smurfs: res.data}))
    .catch(error => console.log(error));
  }

  addSmurf = (event, smurf) => {
    event.preventDefault();
    axios
    .post(`http://localhost:3333/smurfs`, smurf)
    .then(res => {
      console.log(res.data);
      this.setState({ smurfs: res.data })
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div className="App">
        <div className="Nav">
          <NavLink exact to="/">Home</NavLink>
          <br></br>
          <NavLink exact to="/smurf-form">Add Smurf</NavLink>
        </div>
        <Route
          exact
          path="/"
          render={props => (<Smurfs {...props} smurfData={this.state.smurfs} />)}
        />
        <Route
          path="/smurf-form"
          render={props => (<SmurfForm {...props} addSmurf={this.addSmurf} />)}
        />
      </div>
    );
  }
}

export default App;
