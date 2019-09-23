import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';


class App extends Component {
  
  state = {
    hogs:hogs,
    greased: null,
    sortBy: "all"
  }

  handleChange = (event) => {
    console.log(event.target.value)
  }

handleSort = (sortBy,unorderedHogs) =>{
    if (sortBy === "name") {
      console.log("sort by name")
      return this.sortByName(unorderedHogs)
      //sortedHogs = 
    }
    else if (sortBy === "weight") {
      console.log("sort by weight")
      return this.sortByWeight(unorderedHogs)
      //sortedHogs = this.sortByWeight(this.state.hogs)
      // sortedHogs = unorderedHogs.sort(function (a, b) {
      //   return a.weight - b.weight
      // })
    } else {
      return unorderedHogs
    }
}

  handleSortChange = (event) => {
    console.log("I am sorting by ", event.target.value)
    let oldState = this.state
    let unorderedHogs = this.state.hogs//[...this.state.hogs]//[...hogs]
    let sortedHogs = this.handleSort(event.target.value, unorderedHogs)//[]
    
    console.log("i may be sorted idk", sortedHogs)
    this.setState({
      ...oldState,
      hogs: sortedHogs,
      sortBy: event.target.value
    },()=>{console.log("on sort", this.state)})
    //return sortedHogs
  }

  sortByWeight = (unorderedHogs) => {
     return unorderedHogs.sort(function (a, b) {
      return a.weight - b.weight
    })
  }

  sortByName = (unorderedHogs)=>{
      return unorderedHogs.sort(function (a, b) {
      var nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase()
      if (nameA < nameB) //sort string ascending
        return -1
      if (nameA > nameB)
        return 1
      return 0 //default return value (no sorting)
    })
  }

  handleFilterChange = (event) => {
    console.log("I am filtering by ",event.target.value)
    let oldState = this.state
    //let unfilteredHogs = this.state.hogs
    let filteredValue = false
    event.target.value === "greased"? filteredValue = true : filteredValue = false
    //console.log(filteredValue)
    this.setState({
      ...oldState,
      hogs: this.filteredHogs(hogs, event.target.value),
      greased: filteredValue
    }, () => {console.log("on filter",this.state)})
  }

  filteredHogs = (unfilteredHogs, value) => {
    //console.log("unfiltered", unfilteredHogs)
    let desiredValue = false
    if (value === "greased")
      desiredValue = true
    else if (value === "ungreased") {
      desiredValue = false
    } else if (value === "all") {
      desiredValue = "all"
    }
    //let boi = unfilteredHogs
    let filteredHogs = []
    //console.log("event value", value)
    //console.log("desired", desiredValue)
    

    if (desiredValue === "all"){
      filteredHogs = hogs
    } else {
      filteredHogs = unfilteredHogs.filter(
        (hog) => {
          return hog.greased === desiredValue
          //desiredValue === "all" ? hog.greased === true || hog.greased === false : hog.greased === value 
        }
      )
    }


    //console.log("filtered array", filteredHogs)
    return this.handleSort(this.state.sortBy,filteredHogs)
  }

  render() {
    return (
      <div className="App">
        <Nav handleFilterChange={this.handleFilterChange} handleSortChange={this.handleSortChange} handleChange={this.handleChange}/>
          
          <HogContainer hogs={this.state.hogs}/>
          
          
      </div>
    )
  }
}

export default App;
