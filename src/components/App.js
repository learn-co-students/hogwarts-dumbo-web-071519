import React from 'react'
import PortfolioContainer from './PortfolioContainer'
import GameContainer from './GameContainer'
import Sidebar from './Sidebar'
// import axios from 'axios'


// const csrfToken = document.querySelector('[name="csrf-token"]').content
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken






class App extends React.Component {


    
render() {

    return( 
        <div>

  
        <div></div>
        <PortfolioContainer/>
            <Sidebar/>
        </div>
        
    )
}}

export default App;
