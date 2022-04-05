import { useState, useEffect } from 'react'
import axios from '../api/axios'
import useRefreshToken from "../hooks/useRefreshToken"

const Users = () => {

  const [users, setUsers] = useState([])
  const refresh = useRefreshToken()

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const res = await axios.get('/users', {
          signal: controller.signal
        });

        console.log('res.data', res.data);
        isMounted && setUsers(res.data);

      } catch (error) {
        console.error(error)
      }
    }

    getUsers();

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [])

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (<ul>
        {users.map((user, index) => {
          return <li key={index}>{user?.username}</li>
        })}
      </ul>)
        : <p>Não foi encontrado Usuários.</p>}
      <button onClick={() => { refresh() }}>Refresh</button>
      <br />
    </article>
  )
}

export default Users