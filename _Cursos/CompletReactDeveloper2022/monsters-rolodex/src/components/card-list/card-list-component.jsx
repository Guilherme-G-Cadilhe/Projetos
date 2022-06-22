import { Component } from 'react'
import "./card-list.styles.css"
import Card from "../card/card-component"


class CardList extends Component {
  render() {
    console.log("Render do CardList ")
    const { killers } = this.props
    return (<div className="card-list">
      {killers.map((killer, i) => {
        return <Card key={killer._id} killer={killer} />
      }
      )}
    </div>)
  }
}
export default CardList;




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