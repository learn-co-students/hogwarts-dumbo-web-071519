import React, { Component } from 'react'
import HogTile from './HogTile'


export default class HogContainer extends Component{
    renderHogs = () => {
        return this.props.hogs.map( (hog, key) => <HogTile key={ key } hogInfo={hog}/>)
    }

    render(){
        return(
            <section className="ui eight wide column">
                { this.renderHogs() }
            </section>
        )
    }
} 