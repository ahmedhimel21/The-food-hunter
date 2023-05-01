import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <>
      <div className="navbar bg-white shadow-lg p-3">
        <div className="flex-1">
          <Link to="/">
            <button className="btn  btn-secondary normal-case text-xl">
              The food Hunter
            </button>
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
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="../../../public/logo.jpg" />
              </div>
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
