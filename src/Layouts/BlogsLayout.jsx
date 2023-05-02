import React from 'react';
import NavigationBar from '../Shared/Navigationbar/NavigationBar';
import Blogs from '../pages/Blogs/Blogs';

const BlogsLayout = () => {
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Blogs></Blogs>
    </div>
  );
};

export default BlogsLayout;