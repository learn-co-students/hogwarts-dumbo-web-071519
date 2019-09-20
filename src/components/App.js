import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigTileContainer from './PigTileContainer';

import Mudblood from "../hog-imgs/mudblood.jpg";
import Porkchop from "../hog-imgs/porkchop.jpg";
import Cherub from "../hog-imgs/cherub.jpg";
import PiggySmalls from "../hog-imgs/piggy_smalls.jpg";
import Trouble from "../hog-imgs/trouble.jpg";
import Sobriety from "../hog-imgs/sobriety.jpg";
import Rainbowdash from "../hog-imgs/rainbowdash.jpg";
import TruffleShuffle from "../hog-imgs/truffleshuffle.jpg";
import BayOfPigs from "../hog-imgs/bay_of_pigs.jpg";
import Prosciutto from "../hog-imgs/the_prosciutto_concern.jpg";
import GalaxyNote from "../hog-imgs/galaxy_note.jpg";
import Leggo from "../hog-imgs/leggo_my_eggo.jpg";
import agloop from '../hog-imgs/augustus_gloop.jpg';

const hogPicObj = {
    "Mudblood": Mudblood,
    "Porkchop": Porkchop,
    "Cherub": Cherub,
    "Piggy smalls": PiggySmalls,
    "Trouble": Trouble,
    "Sobriety": Sobriety,
    "Rainbowdash": Rainbowdash,
    "TruffleShuffle": TruffleShuffle,
    "Bay of Pigs": BayOfPigs,
    "The Prosciutto Concern": Prosciutto,
    "Galaxy Note": GalaxyNote,
    "Leggo My Eggo": Leggo,
    "Augustus Gloop": agloop
}

class App extends Component {

  state = {
    hogsCol: [...hogs],
    greased: "ungreased",
    sortBy: "all"
  }

  filterHogs = (wantGreased) => {
    if(wantGreased === "greased"){
      return this.state.hogsCol.filter(
        (hog) => {
          return hog.greased
        }
      )
    } else{
      return hogs
    }
     
  }

  sortPigsByName(hogsToSort){
    return hogsToSort.sort(this.compareName)
  }
  sortPigsByWeight(hogsToSort){
    return hogsToSort.sort(this.compareWeight)
  }

  compareName = (a, b) => {
    if(a.name > b.name){
      return 1;
    } else if(a.name < b.name){
      return -1;
    }
  }
  compareWeight = (a,b) => {
  if(a.weight > b.weight){
      return 1;
    } else if (a.weight < b.weight){
     return -1;
  }
  }

  handleSort = (sortBy, hogsToSort) => {
    if(sortBy === 'name'){
      return this.sortPigsByName(hogsToSort);
    } else if( sortBy === 'weight'){
      return this.sortPigsByWeight(hogsToSort);
    } else{
      return hogsToSort
    }
  }

  handleGreaseChange = (event) => {
    const filteredHogs = this.filterHogs(event.target.value);
    const newHogs = this.handleSort(this.state.sortBy, filteredHogs);
    this.setState({
      hogsCol: newHogs,
      greased: event.target.value
    })
  }

  handleSortChange = (event) =>{
    const newHogs = this.handleSort(event.target.value, this.state.hogsCol)
   this.setState({
      hogsCol: newHogs,
      sortBy: event.target.value
   })
  }
  

  render() {
    console.log(this.state);
    return (
      <div className="App">
          <Nav sortChange={this.handleSortChange} filterChange={this.handleGreaseChange} stateStuff={this.state}/>
          <PigTileContainer pigs={this.state.hogsCol} pigImgs={hogPicObj}/>
      </div>
    )
  }
}

export default App;
