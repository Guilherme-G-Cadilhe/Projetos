import { useRef, useState, useEffect, useContext } from "react";
import AuthContext from "./context/AuthProvider";

import axios from './api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
  const { setAuth } = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

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
      console.log('response', response?.data)
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles
      setAuth({ user, pwd, roles, accessToken });
      setUser('');
      setPwd('');
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
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
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/">Go to Home</a>
          </p>
        </section>
      ) : (
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
            Need an Account?<br />
            <span className="line">
              {/*put router link here*/}
              <a href="/register">Sign Up</a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}
