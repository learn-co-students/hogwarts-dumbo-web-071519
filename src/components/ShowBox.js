import React, { Component } from 'react'
import PigTile from './PigTile'


export default class ShowBox extends Component {
    
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

    render() {
        return (
            <div> {this.makePigTiles()} </div>
        )
    }
}
