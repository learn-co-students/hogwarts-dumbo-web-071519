import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import ShowBox from './ShowBox'


class App extends Component {
  state = {
    clicked: false
  }

  render() {
    return (
      <div className="App">
          <Nav />
          {/* pass props below and add key to pass to tiles */}
          <ShowBox key={hogs.id} hogs={hogs} /> 
      </div>
    )
  }
}

export default App;
