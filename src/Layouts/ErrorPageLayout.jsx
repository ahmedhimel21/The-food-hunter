import React from 'react';
import NavigationBar from '../Shared/Navigationbar/NavigationBar';
import { Outlet } from 'react-router-dom';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const ErrorPageLayout = () => {
  return (
    <div>
      {/* <NavigationBar></NavigationBar> */}
      <ErrorPage></ErrorPage>
    </div>
  );
};

export default ErrorPageLayout;