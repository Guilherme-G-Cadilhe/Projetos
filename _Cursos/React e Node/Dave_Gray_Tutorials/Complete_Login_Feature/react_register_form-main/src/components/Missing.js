import { Link } from "react-router-dom"

const Missing = () => {
  return (
    <article style={{ padding: "100px" }}>
      <h1>Oops!</h1>
      <p>Página não Encontrada</p>
      <div className="flexGrow">
        <Link to="/">Visite nossa Página</Link>
      </div>
    </article>
  )
}

export default Missing