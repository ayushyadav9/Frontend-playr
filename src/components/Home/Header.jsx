import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../../api";

const Header = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("Token")) {
      fetch(`${baseURL}/auth/getDetails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("Token"),
        },
      })
        .then((res) => res.json())
        .then((result, err) => {
          if (err) {
            console.log(err);
            return;
          }
          if (result.success) {
            setUserData(result.user);
          } else {
          }
          console.log(userData);
        });
    }
  }, []);

  const handelLogOut = ()=>{
    localStorage.removeItem("Token")
    navigate("./login")
  }

  return (
    <header className="header">
      <div className="container flex-between">
        <div className="playr-logo">
          <a href="/">
            <img src="./logo.png" alt="" />
          </a>
        </div>
        <nav className="main-navgation flex-between flex-ver-top">
          <div className="nav-links">
            <Link to="scout">Scouting</Link>
            <Link to="tournaments">Tournaments</Link>
            <Link to="discussion-forums">Discussion Forums</Link>
          </div>
          {userData==null ? (
            <div className="nav-buttons">
              <Link to="/login" className="log-in">
                Login
              </Link>
              <Link to="/register" className="sign-up btn btn-sm">
                Sign Up
              </Link>
            </div>
          ) : (
            <div className="nav-buttons">
              <Link to="/dashboard" className="log-in">
                {userData.name}
              </Link>
              <button onClick={handelLogOut} className="sign-up btn btn-sm">
                Logout
              </button>
            </div>
          )}
        </nav>
        <div className="burger-menu">
          <i className="fa-regular fa-bars icon"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
