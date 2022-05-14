import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header class="header">
      <div class="container flex-between">
        <div class="logo">
          <a href="/">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <nav class="main-navgation flex-between flex-ver-top">
          <div class="nav-links">
            <a href="#features">Scouting</a>
            <a href="#pricing">Tournaments</a>
            <a href="#resources">Discussion Forums</a>
          </div>
          <div class="nav-buttons">
            <Link to="/login" class="log-in">
              Login
            </Link>
            <Link to="/register" class="sign-up btn btn-sm">
              Sign Up
            </Link>
          </div>
        </nav>
        <div class="burger-menu">
          <i class="fa-regular fa-bars icon"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
