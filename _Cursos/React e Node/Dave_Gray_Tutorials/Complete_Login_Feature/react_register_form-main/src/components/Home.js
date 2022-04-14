import { useNavigate, Link } from "react-router-dom";
import useLogout from '../hooks/useLogout'

const Home = () => {
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout()
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
        <button onClick={signOut}>Desconectar</button>
      </div>
    </section>
  )
}

export default Home