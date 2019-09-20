import React, {Component} from 'react';
import CardFront from './CardFront.js';
import CardBack from './CardBack.js'


export default class HogCard extends Component {

    constructor(){
        super()
        this.state = {
            side: 'front'
        }
    }

    showSide = () => {
        if (this.state.side === 'front')
            {return(
                <CardFront onClicked={this.onClicked} info={this.props.info} />
            )}
        else 
        {return(
            <CardBack onClicked={this.onClicked} info={this.props.info}/>
        )}
    }

    onClicked = () => {
        this.setState({
            side: ((this.state.side === 'front') ? 'back' : 'front')
        })
    }


    render() {
        console.log(this.props.info)
        return(
            <div className="ui eight wide column">
               {this.showSide()}
            </div>
        )
    }

}