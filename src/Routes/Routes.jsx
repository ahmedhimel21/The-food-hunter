import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import BlogsLayout from "../Layouts/BlogsLayout";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayouts from "../Layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";


const router = createBrowserRouter([
  {
    path: '/login',
    element: <LoginLayouts></LoginLayouts>,
    children: [
      {
        path: '/login',
        element: <Login></Login>
      }
    ]
  },
  {
    path:'/register',
    element: <LoginLayouts></LoginLayouts>,
    children: [
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
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