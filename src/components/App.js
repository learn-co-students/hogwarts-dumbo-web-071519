import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import Detail from './Detail';
import hogs from '../porkers_data'

class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />
          < Detail />
      </div>
    )
  }
}

export default App;
