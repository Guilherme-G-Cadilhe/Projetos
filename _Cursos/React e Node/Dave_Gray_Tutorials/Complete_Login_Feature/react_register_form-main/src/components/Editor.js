import { Link } from "react-router-dom"

const Editor = () => {
  return (
    <section>
      <h1>Pagina do Editor</h1>
      <br />
      <p>Você deve ter um cargo de Editor.</p>
      <div className="flexGrow">
        <Link to="/">Home</Link>
      </div>
    </section>
  )
}

export default Editor