import React, { Component } from 'react'
import augustus_gloop from '../hog-imgs/augustus_gloop.jpg'
import bay_of_pigs from '../hog-imgs/bay_of_pigs.jpg'
import cherub from '../hog-imgs/cherub.jpg'
import galaxy_note from '../hog-imgs/galaxy_note.jpg'
import leggo_my_eggo from '../hog-imgs/leggo_my_eggo.jpg'
import mudblood from '../hog-imgs/mudblood.jpg'
import piggy_smalls from '../hog-imgs/piggy_smalls.jpg'
import porkchop from '../hog-imgs/porkchop.jpg'
import rainbowdash from '../hog-imgs/rainbowdash.jpg'
import sobriety from '../hog-imgs/sobriety.jpg'
import the_prosciutto_concern from '../hog-imgs/the_prosciutto_concern.jpg'
import trouble from '../hog-imgs/trouble.jpg'
import truffleshuffle from '../hog-imgs/truffleshuffle.jpg'

const piggyImages = {
    "augustus_gloop": augustus_gloop,
    "bay_of_pigs": bay_of_pigs,
    "cherub": cherub,
    "galaxy_note": galaxy_note,
    "leggo_my_eggo": leggo_my_eggo,
    "mudblood": mudblood,
    "piggy_smalls": piggy_smalls,
    "porkchop": porkchop,
    "rainbowdash": rainbowdash,
    "sobriety": sobriety,
    "the_prosciutto_concern": the_prosciutto_concern,
    "trouble": trouble,
    "truffleshuffle": truffleshuffle
}

export default class HogTile extends Component{
    constructor(props){
        super(props)
        this.state={
            descriptionShown: false
        }
    }

    makeToImageSrc = () => {
        return piggyImages[`${this.props.hogInfo.name.toLowerCase().split(' ').join('_')}`]
    }

    showDescriptionInfo = () => {
        this.setState({
            descriptionShown: !this.state.descriptionShown
        })
    }

    renderDescription = () => {
        return (<div className="description">
            <p><b>Specialty:</b> {this.props.hogInfo.specialty}</p>
            <p><b>Greased?:</b> {this.props.hogInfo.greased ? 'Yes' : 'No'}</p>
            <p><b>Weight Ratio:</b> {this.props.hogInfo.weight}</p>
            <p><b>Highest Medal Achieved:</b> {this.props.hogInfo['highest medal achieved']}</p>
        </div>)
    }

    render(){
        return(
            <div className = "card" onClick={this.showDescriptionInfo}>
                <div className="image">
                    <img src={ this.makeToImageSrc() } alt={`${this.props.hogInfo.name}'s profile`} />
                </div>
                <div className="content">
                    <h1 className="header">{ this.props.hogInfo.name }</h1>
                </div>
                    {this.state.descriptionShown ? this.renderDescription() : <div className="description" >Click to Description</div>} 
            </div>
        )
    }
}