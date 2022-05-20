import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <div class="container flex-between">
        <div class="playr-logo">
          <a href="/">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <nav className="main-navgation flex-between flex-ver-top">
          <div className="nav-links">
            <a href="#features">Scouting</a>
            <a href="#pricing">Tournaments</a>
            <a href="#resources">Discussion Forums</a>
          </div>
          <div className="nav-buttons">
            <Link to="/login" className="log-in">
              Login
            </Link>
            <Link to="/register" className="sign-up btn btn-sm">
              Sign Up
            </Link>
          </div>
        </nav>
        <div className="burger-menu">
          <i className="fa-regular fa-bars icon"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
