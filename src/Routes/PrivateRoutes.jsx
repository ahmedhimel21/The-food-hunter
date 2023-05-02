import React, { useContext } from 'react';
import { AuthContext } from '../providers/Authproviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
  const {user,loading} = useContext(AuthContext);
  const location = useLocation();
  if(loading){
    return <progress className='progress w-56'></progress>
  }
  if(user){
    return children;
  }
  return (
    <Navigate to='/login' replace={true}></Navigate>
  );
};

export default PrivateRoutes;