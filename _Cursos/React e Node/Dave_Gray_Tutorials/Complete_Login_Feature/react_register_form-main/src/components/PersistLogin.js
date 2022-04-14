import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import useRefreshToken from '../hooks/useRefreshToken';
import useAuth from '../hooks/useAuth';
import useLocalStorage from '../hooks/useLocalStorage';

const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refresh = useRefreshToken();
  const { auth } = useAuth();
  const [persist] = useLocalStorage('persistReactLogin', false);

  useEffect(() => {
    let isMounted = true;

    const verifyRefreshToken = async () => {
      try {
        await refresh();

      } catch (error) {
        console.log('error', error)

      } finally {
        isMounted && setIsLoading(false)
      }
    }

    !auth?.accessToken && persist ? verifyRefreshToken() : setIsLoading(false)

    return () => isMounted = false;

  }, [])


  return (
    <>
      {!persist
        ? <Outlet />
        : isLoading
          ? <p>Loading...</p>
          : <Outlet />}
    </>

  )
}

export default PersistLogin