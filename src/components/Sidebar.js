import React, { Component } from 'react'
import Game from './Game'


export default class Sidebar extends Component {    
    constructor(props) {
        super(props)

        this.state = {

            name: [],
            location: '',
            currency: [],
            game: []

        }}


        componentDidMount() {
            fetch('http://localhost:3000/games/')
            .then(res => res.json())
            .then(gamesearchResults => {
              this.setState({ 
                game: gamesearchResults })
                 console.log(this.state.game)
            })
            }


render(){
  const gameItems = this.state.game.map( (game, index) => <Game key={index} game={game} />)


    // const gamesearchResults = this.props.gamesearchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)



  return (
    <aside id="sidebar">
    <div className="sidebar">
   
        <div></div>

          {gameItems} 

          </div>
          </aside>
  )

}

}


  

    




