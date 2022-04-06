import { useState, useEffect } from 'react';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from 'react-router-dom'


const Users = () => {

  const [users, setUsers] = useState([])
  const axiosPrivate = useAxiosPrivate()
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController()

    const getUsers = async () => {
      try {
        const res = await axiosPrivate.get('/users', {
          signal: controller.signal
        });

        isMounted && setUsers(res.data);

      } catch (error) {
        console.error(error);
        navigate('/login', { state: { from: location }, replace: true })
      }
    }

    getUsers();

    return () => {
      isMounted = false
      controller.abort()
    }
  }, [axiosPrivate, navigate, location])

  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (<ul>
        {users.map((user, index) => {
          return <li key={index}>{user?.username}</li>
        })}
      </ul>)
        : <p>Não foi encontrado Usuários.</p>}
      <br />
    </article>
  )
}

export default Users