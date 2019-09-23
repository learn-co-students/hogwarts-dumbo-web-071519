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
					<span> Filter Grease Level: </span>
					<select onChange={props.handleFilterChange}>
						
						<option value="all" name="all"> All </option>
						<option value="greased" name="greased"> Greased</option>
						<option value="ungreased" name="ungreased"> Not Greased</option>
					</select>
				</div>
				<div className="sort">
					<form onChange={props.handleSortChange}>
						<span>Sort By:</span>
						<input type="radio" name="sort" value="name" /> 
						<label> Name: </label>
						
						<input type="radio" name="sort" value="weight" /> 
						<label> Weight: </label>

						{/* <input type="radio" name="sort" value="all" /> 
						<label> All: </label>
						 */}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Nav
