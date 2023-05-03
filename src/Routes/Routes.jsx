import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../pages/Home/Home";
import BlogsLayout from "../Layouts/BlogsLayout";
import Blogs from "../pages/Blogs/Blogs";
import LoginLayouts from "../Layouts/LoginLayouts";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ChefRecipesLayout from "../Layouts/ChefRecipesLayout";
import ChefRecipes from "../pages/ChefRecepes/ChefRecipes";
import PrivateRoutes from "./PrivateRoutes";


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
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chef')
      },
    ]
  },
  {
    path: '/chefRecipes',
    element: <ChefRecipesLayout></ChefRecipesLayout>,
    children: [
      {
        path: ':id',
        element: <PrivateRoutes><ChefRecipes></ChefRecipes></PrivateRoutes>,
        loader: ({params}) => fetch(`http://localhost:5000/chef/${params.id}`)
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
  },
  {
    path: '*',
    element: <ErrorPage></ErrorPage>
  }
])

export default router;