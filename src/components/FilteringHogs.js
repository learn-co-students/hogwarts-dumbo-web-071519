import React, { Component } from 'react'


export default class FilteringHogs extends Component{
    render(){
        return(
            <form>
                <label className="label">Show and/or Organize by:</label>
                <select className="ui search dropdown" onChange={(e) => this.props.selectingFilter(e)}>
                    <option value="all">All</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                    <option value="greased">Greased</option>
                </select>
            </form>
        )
    }
}