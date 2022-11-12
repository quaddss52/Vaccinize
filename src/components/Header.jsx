import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Vaccinize</Link>
      </div>

      <ul className="navbar">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/help-center">Help Center</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>

      <div className="main">
        <Link to="/login" className=" btn-0 btn-secondary btn-1">
          Login
        </Link>

        <Link to="/signUp" className="btn-0 btn-primary btn-2">
          SignUp
        </Link>
      </div>
    </header>
  );
}

export default Header;
