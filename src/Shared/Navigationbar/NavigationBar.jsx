import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/Authproviders";

const NavigationBar = () => {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <>
      <div className="navbar bg-white shadow-lg p-3">
        <div className="flex-1">
          <Link to="/">
            <h1 className="text-2xl font-bold">
              The <span className="text-secondary">Food</span> Hunter
            </h1>
          </Link>
        </div>
        <div className="flex-none gap-4">
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-md font-bold" : "text-md font-semibold"
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "text-md font-bold" : "text-md font-semibold"
            }
            to="/blogs"
          >
            Blogs
          </NavLink>
          <div className="dropdown dropdown-end">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <>
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img
                        src={user?.photoURL}
                        title={user?.displayName}
                      />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <li>
                      <a onClick={handleSignOut}>Logout</a>
                    </li>
                  </ul>
                </>
              ) : (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-md font-bold" : "text-md font-semibold"
                  }
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
