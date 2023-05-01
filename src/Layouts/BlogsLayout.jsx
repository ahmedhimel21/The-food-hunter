import React from 'react';
import NavigationBar from '../Shared/Navigationbar/NavigationBar';
import Blogs from '../pages/Blogs/Blogs';
import Footer from '../Shared/Footer/Footer';

const BlogsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Blogs></Blogs>
      <Footer></Footer>
    </div>
  );
};

export default BlogsLayout;