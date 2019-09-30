import React, { Component } from 'react'



class StoreCurrency extends Component {
    
    constructor(props) {
        super(props)

        this.state = {

            name: '',
            location: '',
            currency: null,
            game: ''

        }}


    

    componentDidMount() {
        fetch('http://localhost:3000/stores')
        .then(res => res.json())
        .then(fetchedStuffs => {
    
     console.log(fetchedStuffs)
          

    
        })
        }


render(){
 
    // const searchResults = this.props.searchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)


   
    return (

        <div>GC Lowest container: {this.state.currency}
      <div className="row"> 
      <div className="col">
      <div className="header"><p>Currency: test</p></div>
     <button onClick={this.props.handleGameChange}>{this.props.handleGameChange}</button> 
      <div className="text"> Hello</div>
      </div>
      </div>
      </div>


    )
}

}


export default StoreCurrency
