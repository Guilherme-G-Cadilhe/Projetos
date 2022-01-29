import React from "react";

import "./card.styles.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="Killer" src={`${props.killer.icon.preview_portrait}`} />
      <h2>{props.killer.name}</h2>
      <p>{props.killer.alias}</p>
    </div>
  );
};
