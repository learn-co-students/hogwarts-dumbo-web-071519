import React, { Component } from 'react'
//import HogImageLibrary from '../hog-imgs'

export default class HogTile extends Component{
    makeToImageSrc = () => {
        return `../hog-imgs/${this.props.hogInfo.name.toLowerCase().split(" ").join("_")}.jpg`
        //! TODO: import all the images and give them to the respective piggy
    }
    render(){
        return(
            <div>
                {/* <img src={ this.makeToImageSrc() }/> */}
                <h1>{ this.props.hogInfo.name }</h1> 
            </div>
        )
    }
}