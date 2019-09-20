import React, { Component } from 'react'
import HogTile from './HogTile'
import FilteringHogs from './FilteringHogs'


export default class HogContainer extends Component{
    state = {
        filter: 'all'
    }
    
    sortByName = () => {
        return this.props.hogs.slice().sort(function (hog1, hog2) {
            if (hog1.name < hog2.name) return -1
            else if (hog1.name > hog1.name) return 1
            return 0
        })
    }

    sortByWeight = () => {
        return this.props.hogs.slice().sort(function (hog1, hog2) {
            if (hog1.weight < hog2.weight) return -1
            else if (hog1.weight > hog1.weight) return 1
            return 0
        })
    }

    //!! This makes everything in the pig data (from the props) into a component 
    renderHogs = () => {
        switch (this.state.filter) {
            case 'all':
                return this.props.hogs.map( (hog, key) => <HogTile key={ key } hogInfo={hog}/>)
            case 'name':
                return this.sortByName().map( (hog, key) => <HogTile key={ key } hogInfo={hog}/>)
            case 'greased':
                return this.props.hogs.filter((hog) => hog.greased).map( (hog, key) => <HogTile key={ key } hogInfo={hog}/>)
            case 'weight':
                return this.sortByWeight().map( (hog, key) => <HogTile key={ key } hogInfo={hog}/>)
            default:
                console.log('Sorry there was an error')
        }
    }

    selectingFilter = (e) => {
        e.preventDefault()
        this.setState({
            filter: e.target.value
        })
    }

    render(){
        return(
            <main>
                <FilteringHogs selectingFilter={this.selectingFilter}/>
                <section className = "ui link cards" >
                    { this.renderHogs() }
                </section>
            </main>
        )
    }
} 