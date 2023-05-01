import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import BlogsLayout from "../Layouts/BlogsLayout";
import Blogs from "../pages/Blogs/Blogs";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      }
    ]
  },
  {
    path: '/blogs',
    element: <BlogsLayout></BlogsLayout>,
    children: [
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      }
    ]
  }
])

export default router;