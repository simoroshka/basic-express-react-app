import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = { message: 'Loading...' };
  componentDidMount = async () => {
    const res = await axios.get('/api');
    this.setState({ message: res.data });
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>{this.state.message}</p>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
