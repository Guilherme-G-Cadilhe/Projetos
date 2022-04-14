import { useRef, useState, useEffect } from "react";
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useInput from '../hooks/useInput'
import useToggle from '../hooks/useToggle'

import axios from '../api/axios';
const LOGIN_URL = '/auth';

export const Login = () => {
  const { setAuth } = useAuth()


  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/"

  const userRef = useRef();
  const errRef = useRef();

  const [user, resetUser, userAttributes] = useInput('user', '')
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [check, toggleCheck] = useToggle('persistReactLogin', false)

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

      const accessToken = response?.data?.accessToken;
      const roles = [response?.data?.roles]
      setAuth({ user, pwd, roles, accessToken });

      //setUser('');
      resetUser()
      setPwd('');
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        console.log('err', err)
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

  // const togglePersist = () => {
  //   setPersist(prev => !prev)
  // }

  // useEffect(() => {
  //   localStorage.setItem('persistReactLogin', persist)
  // }, [persist])

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
          {...userAttributes}
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
        <div className="persistCheck">
          <input
            type="checkbox"
            id="persist"
            onChange={toggleCheck}
            checked={check}
          />
          <label htmlFor="persist">Confiar nesse dispositivo.</label>
        </div>
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