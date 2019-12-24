import React, {Component} from 'react'

export default class CardBack extends Component {

    render(){
        return(
            <div onClick={this.props.onClicked}>
                Specialty: {this.props.info.specialty}<br/>
                Greased?: {this.props.info.greased}<br/>
                Weight: {this.props.info.weight}<br/>
                Highest Medal Achieved: {this.props.info['highest medal achieved']}<br/>
            </div>

        )
    }

}