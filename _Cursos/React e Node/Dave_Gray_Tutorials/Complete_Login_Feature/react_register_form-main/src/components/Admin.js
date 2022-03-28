import { Link } from "react-router-dom"

const Admin = () => {
  return (
    <section>
      <h1>Página de Admin</h1>
      <br />
      <p>Você deve ter permissão de Admin.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Admin