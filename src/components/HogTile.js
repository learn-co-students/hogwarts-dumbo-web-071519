import React, {Component} from "react";

export default class HogTile extends Component {
    state = {
        expanded: false
    }

    handleClick = () => {
        this.setState({
            expanded: !this.state.expanded
        })
    }

    imageUrl = () => {
        const name = this.props.name.split(" ").join("_").toLowerCase()
        //const name = this.props.name.toLowerCase().replace(' ', '_')
        const image = require(`../hog-imgs/${name}.jpg`)
        //console.log(image)
        return image
    }

    expandInfo = () => {
        if(this.state.expanded){
            return(
                <div>
                    <p>Greased: {this.props.greased ? "YAS GREASY BOI" : "Cl3@n B0I"}</p>
                    <p>Weight: {this.props.weight}</p>
                    <p>Specialty: {this.props.specialty}</p>
                    <p>Highest Medal Achieved: {this.props.highestMedalAchieved}</p>
                </div>
            )
        }
    }

    render(){
        return(
            <li>
                <div onClick={this.handleClick} className="ui eight link card">
                    <h1>Named: {this.props.name}</h1>
                    <img src={this.imageUrl()} alt=""/>
                    {this.expandInfo()}
                </div>
            </li>

        )
    }
}