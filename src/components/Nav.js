import piggy from '../porco.png'
import React from 'react'

const Nav = (props) => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<a href="https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231">
					<img src={piggy} className="App-logo" alt="piggy" />
				</a>
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<div className="FilterButtons">
				<div className="filter">
					<label>Filter By:</label>
					<select name="filter" value={props.stateStuff.greased} onChange={props.filterChange}>
						<option name="ungreased" value="ungreased">All</option>
						<option name="greased" value="greased">Greased</option>
					</select>
				</div>
				<div className="sort" >
					<form>					
					<span>Sort By:</span>
					<label> Name:</label>
						<input 
						type="radio" 
						name="sort" 
						value="name" 
						checked={props.stateStuff.filter === "name"} 
						onChange={props.sortChange} ></input>
					<label> Weight:</label>
						<input 
						type="radio" 
						name="sort" 
						value="weight" 
						checked={props.stateStuff.filter === "weight"} 
						onChange={props.sortChange}></input>
					</form>
				</div>
			</div>
		</div>
		
	)
}

export default Nav
