import React, { Component } from 'react';

export default class PigTile extends Component{

state = {
    expanded: false
}
handleClick = (event) => {
   
    this.setState({
        expanded: !this.state.expanded
    })

}

returnProperElement = () => {
    if(this.state.expanded){
        return (
        <div className="details">
            <h3 className="ui sub header">Weight: {this.props.pig.weight}</h3>
            <h3 className="ui sub header">Specialty: {this.props.pig.specialty}</h3>
            <h3 className="ui sub header">Greased: {this.props.pig.greased ? "true" : "false"}</h3>
            <br></br>
            <div className="fuck">
                <p>Highest Medal Achieved: {this.props.pig['highest medal achieved']}</p>
            </div>
        </div>)
    }
}

render(){
    return(
        <li>
            <div className="ui eight wide column ui card" onClick={this.handleClick}>
                <div className="image">
                    <img src={this.props.pigImg} alt="Piggy" />
                </div>
                <div className="content">
                    <h2 className="header">{this.props.pig.name}</h2>
                </div>
                {this.returnProperElement()}
            </div>
        </li>
    )
}
}