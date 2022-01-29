import React from "react";

import {Card} from "../card/card-component"
import "./card-list.styles.css"

export const CardList = (props) => {
    return(<div className="card-list">
    {props.killers.map((killer, i) => {
      return <Card key={killer._id} killer={killer}/>
    }
    )}
    </div>)
}