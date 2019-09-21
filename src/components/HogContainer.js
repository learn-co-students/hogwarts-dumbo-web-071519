import React, { Component } from 'react'
import HogTile from './HogTile'



export default class HogContainer extends Component{
    state = {
        filter: 'all'
    }

        //!! This makes everything in the pig data (from the props) into a component 
    renderHogs = () => {
        return this.props.hogs.map( (hog) => <HogTile key={ hog.id } hogInfo={hog}/>)
    }

    render(){
        return(
            <main>
                {/* <FilteringHogs selectingFilter={this.selectingFilter}/> */}
                <section className = "ui link cards" >
                    { this.renderHogs() }
                </section>
            </main>
        )
    }
} 