import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import FilteringHogs from './FilteringHogs';

class App extends Component {

  state = {
    filter: 'all',
    hogs : hogs
  }

  sortByName = () => {
        return hogs.slice().sort(function (hog1, hog2) {
            if (hog1.name < hog2.name) return -1
            else if (hog1.name > hog1.name) return 1
            return 0
        })
    }

  sortByWeight = () => {
      return hogs.slice().sort(function (hog1, hog2) {
          if (hog1.weight < hog2.weight) return -1
          else if (hog1.weight > hog1.weight) return 1
          return 0
      })
  }

  changeHogs = (e) => {
  let results
    switch (e.target.value) {
        case 'all':
            results = hogs
            break
        case 'name':
            results = this.sortByName()
            break
        case 'greased':
            results = hogs.filter((hog) => hog.greased)
            break
        case 'weight':
            results = this.sortByWeight()
            break
        default:
            console.error('Sorry there was an error')
            results = hogs
    }
    this.setState({
      hogs: results
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <FilteringHogs changeHogs={this.changeHogs}/>
          <HogContainer hogs={this.state.hogs} />
      </div>
    )
  }
}

export default App;
