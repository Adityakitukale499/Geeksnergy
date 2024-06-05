import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Nav.css";
import { toast } from "react-toastify";
import { CgMenu } from "react-icons/cg";

const Nav = () => {
  const auth = localStorage.getItem("login") == "yes";
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.setItem("login", "no");
    toast.success("User logout successfully");
    navigate("/register");
  };

  return (
    <div className="nav">
      <div className="nav-box">
        {auth ? (
          <ul className="nav-ul">
            <li>
              <Link
                to="/"
                className={`${location.pathname === "/" ? "active" : "btn"}`}
                exact
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/info"
                title="company-info"
                className={`${
                  location.pathname === "/info" ? "active" : "btn"
                }`}
              >
                About
              </Link>
            </li>
            <li style={{ float: "right" }}>
              <Link onClick={handleLogout} to="/login">
                Logout
              </Link>
            </li>
          </ul>
        ) : (
          <ul className="nav-ul nav-right">
            <li style={{ float: "right" }}>
              {location.pathname === "/register" ? (
                <Link to="/login" className="active">
                  Login
                </Link>
              ) : (
                <Link to="/register" className="active">
                  Register
                </Link>
              )}
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Nav;
