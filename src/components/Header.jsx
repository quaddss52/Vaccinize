import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <NavLink to="/">Vaccinize</NavLink>
          </div>
          <ul className="navbar">
            <li>
              <NavLink
                to="/about"
                style={({ isActive }) => ({
                  color: isActive ? "#244b82" : "#898989",
                })}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/features"
                style={({ isActive }) => ({
                  color: isActive ? "#244b82" : "#898989",
                })}
              >
                Features
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help-center"
                style={({ isActive }) => ({
                  color: isActive ? "#244b82" : "#898989",
                })}
              >
                Help Center
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                style={({ isActive }) => ({
                  color: isActive ? "#244b82" : "#898989",
                })}
              >
                Blog
              </NavLink>
            </li>
          </ul>

          <div className="main">
            <NavLink to="/login" className=" btn-0 btn-secondary btn-1">
              Login
            </NavLink>

            <NavLink to="/signUp" className="btn-0 btn-primary btn-2">
              SignUp
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
