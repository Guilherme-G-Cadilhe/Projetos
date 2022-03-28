import { Link } from "react-router-dom"

const Lounge = () => {
  return (
    <section>
      <h1>Recreação</h1>
      <br />
      <p>Administradores e Editores podem convesar aqui.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Lounge