import React from 'react';
import NavigationBar from '../Shared/Navigationbar/NavigationBar';
import Blogs from '../pages/Blogs/Blogs';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const BlogsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default BlogsLayout;