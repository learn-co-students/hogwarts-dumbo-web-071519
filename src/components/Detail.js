import React, {Component} from 'react';
import HogCard from './HogCard.js';
import hogs from '../porkers_data';

imageMap = {
}


export default class Detail extends Component {

    generateHogCards = () => {
        return hogs.map((hog) => {
          return <HogCard info={hog} />
        })
      }
    
    
      render() {
        return (
          <div className="ui grid container">
            {this.generateHogCards()}
          </div>
        )
      }

}