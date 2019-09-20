import React, { Component } from 'react'
// import images from '../hog-imgs'

// import agg from '../src/hog-imgs/augustus_gloop.jpg'
// import bay from '../src/hog-imgs/bay_of_pigs.jpg'
// import cher from '../src/hog-imgs/cherub.jpg'
// import cher2 from '../src/hog-imgs/cherub.png'
// import galaxy from '../src/hog-imgs/galaxy_note.jpg'
// import leggo from '../src/hog-imgs/leggo_my_eggo.jpg'
// import muddy from '../src/hog-imgs/mudblood.jpg'
// import piggy from '../src/hog-imgs/piggy_smalls.jpg'
// import pork from '../src/hog-imgs/porkchop.jpg'
// import rainbow from '../src/hog-imgs/rainbowdash..jpg'
// import sober from '../src/hog-imgs/sobriety.jpg'
// import prosc from '../src/hog-imgs/the_prosciutto_concern.jpg'
// import troub from '../src/hog-imgs/trouble.jpg'
// import truf from '../src/hog-imgs/truffleshuffle.jpg'




// export default class PigTile extends Component {

 


//     render() {
//         let { hog } = this.props
//         return (
//             <ul>
//                 <h3> {hog.name} </h3>
//                 <img src = { this.formatName(hog.name) }></img>
//                 <li> {hog.specialty}</li>
//                 <li> {hog.weight}</li>
//                 <li> {hog.greased} </li> 
//             </ul>
            
//         )
//     }
// }

// const formatName = (hogName) => {
//     let image = hogName.toLowerCase().split(" ").join("_")
//     // console.log(image, "image on 25")
//     image = require(`../hog-imgs/${image}.jpg`)
//     //     console.log(image, "image on 28")
//     //    console.log("../hog-imgs/"+image+".jpg")
//     return image
// }


// refactored a bit here and made our tiles into a functional component. 
// also moved our nice format name into a very hacky interpolation one liner
const PigTile = props => {

    return (
        <div className="ui card eight wide column pigTile" onClick={props.handlePigTileClick}>
            <div className="content">
                <h2>{props.hog.name}</h2>
                <p> Specialty: {props.hog.specialty}</p>
                <p>{props.hog.weight} lbs</p>
            </div>
            <div className="image">
                <img alt={props.hog.name} src={require(`../hog-imgs/${props.hog.name.toLowerCase().split(" ").join("_")}.jpg`)} />
            </div>
        </div>
    );
};

export default PigTile;
