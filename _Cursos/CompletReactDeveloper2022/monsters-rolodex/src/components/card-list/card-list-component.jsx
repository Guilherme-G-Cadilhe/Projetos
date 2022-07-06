import "./card-list.styles.css"
import Card from "../card/card-component"


const CardList = ({ killers }) => (
  <div className="card-list">
    {killers.map((killer, i) => {
      return <Card key={killer._id} killer={killer} />
    }
    )}
  </div>
)
export default CardList;

// _____________________________________________________________________________
// import { Component } from 'react'
// import "./card-list.styles.css"
// import Card from "../card/card-component"


// class CardList extends Component {
//   render() {
//     const { killers } = this.props
//     return (<div className="card-list">
//       {killers.map((killer, i) => {
//         return <Card key={killer._id} killer={killer} />
//       }
//       )}
//     </div>)
//   }
// }
// export default CardList;


// _____________________________________________________________________________
// import React from "react";

// import {Card} from "../card/card-component"
//import "./card-list.styles.css"

// export const CardList = (props) => {
//     return(<div className="card-list">
//     {props.killers.map((killer, i) => {
//       return <Card key={killer._id} killer={killer}/>
//     }
//     )}
//     </div>)
// }