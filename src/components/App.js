import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Nav />
          {/* This is where pass the hogs data as props */}
          <HogContainer key={hogs.id} hogs={hogs} />
      </div>
    )
  }
}

export default App;
