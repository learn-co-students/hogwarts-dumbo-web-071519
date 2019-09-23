import React, { Component } from "react";
import HogTile from "./HogTile.js"

export default class HogContainer extends Component {

    render(){
        return(
            <ul className="ui grid container">
                {
                    this.props.hogs.map((hog) => {
                        return <HogTile 

                            key={hog.name}
                            name={hog.name}
                            specialty={hog.specialty}
                            greased={hog.greased}
                            weight={hog.weight}
                            highestMedalAchieved={hog['highest medal achieved']}
                            />
                    })
                }
            </ul>

            
        )
    }
}