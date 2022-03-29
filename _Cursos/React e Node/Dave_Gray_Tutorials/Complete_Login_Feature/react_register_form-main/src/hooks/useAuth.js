import { useContext, useDebugValue } from 'react';
import AuthContext from '../context/AuthProvider';

const useAuth = () => {
  const { auth } = useContext(AuthContext)
  useDebugValue(auth?.user ? "Atualmente logado" : "Deslogado")


  return useContext(AuthContext);
}

export default useAuth;