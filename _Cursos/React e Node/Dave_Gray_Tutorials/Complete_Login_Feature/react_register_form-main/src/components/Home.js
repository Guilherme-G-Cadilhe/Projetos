import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/linkpage');
  }

  return (
    <section>
      <h1>Home</h1>
      <br />
      <p>Você está logado!</p>
      <br />
      <Link to="/editor">Vá para a página de Editor</Link>
      <br />
      <Link to="/admin">Vá para a página de Admin</Link>
      <br />
      <Link to="/lounge">Vá para a Recreação</Link>
      <br />
      <Link to="/linkpage">Vá para a página de Links</Link>
      <div className="flexGrow">
        <button onClick={logout}>Desconectar</button>
      </div>
    </section>
  )
}

export default Home