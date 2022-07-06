import "./card.styles.css";

const Card = ({ killer }) => {

  const { name, alias, icon } = killer

  return (<div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`${icon.preview_portrait}`} />
    <h2>{name}</h2>
    <p>{alias}</p>
  </div>
  )


}

export default Card;

// _____________________________________________________________________________
// import { Component } from 'react'

// import "./card.styles.css";

// class Card extends Component {
//   render() {
//     const { killer } = this.props

//     const { name, alias, icon } = killer

//     return (<div className="card-container">
//       <img
//         alt={`monster ${name}`}
//         src={`${icon.preview_portrait}`} />
//       <h2>{name}</h2>
//       <p>{alias}</p>
//     </div>
//     )

//   }
// }

// export default Card;

// _____________________________________________________________________________
// export const Card = (props) => {
//   return (
//     <div className="card-container">
//       <img alt="Killer" src={`${props.killer.icon.preview_portrait}`} />
//       <h2>{props.killer.name}</h2>
//       <p>{props.killer.alias}</p>
//     </div>
//   );
// };
