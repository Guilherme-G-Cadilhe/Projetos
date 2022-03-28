import { Link } from "react-router-dom"

const LinkPage = () => {
  return (
    <section>
      <h1>Links</h1>
      <br />
      <h2>Publicos</h2>
      <Link to="/login">Entrar</Link>
      <Link to="/register">Registrar</Link>
      <br />
      <h2>Privados</h2>
      <Link to="/">Home</Link>
      <Link to="/editor">Página de Editor</Link>
      <Link to="/admin">Página de Admin</Link>
    </section>
  )
}

export default LinkPage