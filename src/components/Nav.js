import piggy from '../porco.png'
import React from 'react'

const Nav = () => {
	return (
		<div className="navWrapper">
			<span className="headerText">Hogwarts</span>
			<div className="TwirlyPig">
				<img src={piggy} className="App-logo" alt="piggy" />
			</div>
			<span className="normalText">A React App for County Fair Hog Fans</span>
			<button className="GreaseButton">Grease Button</button>
			<select className="Dropdown">
				<option value="volvo">Sort by Name</option>
				<option value="saab">Sort by Weight</option>
			</select>

		</div>
	)
}

export default Nav
