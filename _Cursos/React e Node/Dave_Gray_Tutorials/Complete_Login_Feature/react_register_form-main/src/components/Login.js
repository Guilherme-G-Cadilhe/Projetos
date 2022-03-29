import { useRef, useState, useEffect } from "react";
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';

import axios from '../api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
  const { setAuth } = useAuth()


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        });

      const acessToken = response?.data?.acessToken;
      const roles = [response?.data?.roles]
      setAuth({ user, pwd, roles, acessToken });

      setUser('');
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        console.log('err', err)
        console.log('"teste" :>> ', "teste");
        setErrMsg('Sem Resposta do Servidor');
      } else if (err.response?.status === 400) {
        setErrMsg('Falta Usuário ou Senha');
      } else if (err.response?.status === 401) {
        setErrMsg('Não Autorizado');
      } else {
        setErrMsg('Erro ao Logar');
      }
      errRef.current.focus();
    }

  }


  return (

    <section>
      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Entrar</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Usuário:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />

        <label htmlFor="password">Senha:</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Logar</button>

      </form>
      <p>
        Precisa de uma conta?<br />
        <span className="line">
          <Link to="/register">Registre-se</Link>
        </span>
      </p>
    </section>

  )
}

export default Login