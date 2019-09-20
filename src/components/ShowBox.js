import React, { Component } from 'react'
import PigTile from './PigTile'


export default class ShowBox extends Component {

    //this needs state still and bc pigtile is written as an FC right now, will probably need to pass state there as well
    
    // function that we pass to switch state on click
    handlePigTileClick = () => {
            this.setState({ clicked: !this.state.clicked  })
    }
    
    // maps thru the hogs array passed in props and adds a single hog and key to each tile
    makePigTiles = () => {
        return this.props.hogs.map((hog, key) => {
            
            return <PigTile hog = {hog} key= {key} onClick={this.handlePigTileClick}/>
        })
    }
    //makes our one showbox component
    render() {
        return (
            <div className="ui grid container"> {this.makePigTiles()} </div>
        )
    }
}
