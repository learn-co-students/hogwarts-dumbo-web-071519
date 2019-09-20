import React, { Component } from 'react';
import PigTile  from "./PigTile";

export default class PigTileContainer extends Component{

    getPigTiles = () => {
    return this.props.pigs.map(
        (pig) => {
             return(<PigTile pigImg={this.props.pigImgs[pig.name]} pig={pig} key={pig.name}/>)
            }
        )
    }

    render(){
        return (
            <ul className="ui grid container">
            {this.getPigTiles()}
            </ul>
        )
    }
}