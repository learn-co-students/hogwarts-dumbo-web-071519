import React, {Component} from 'react'

export default class CardFront extends Component {

    render(){
        return(
            <div onClick={this.props.onClicked} className="ui eight wide column">
                {this.props.info.name}
            </div>
        )
    }

}