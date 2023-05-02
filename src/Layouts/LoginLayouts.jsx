import React from 'react';
import NavigationBar from '../Shared/Navigationbar/NavigationBar';
import { Outlet } from 'react-router-dom';

const LoginLayouts = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
    </div>
  );
};

export default LoginLayouts;