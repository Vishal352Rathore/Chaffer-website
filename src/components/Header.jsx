import React from "react";
import image1 from "../cab_images/logo.png";
import { useState, useEffect } from "react";
import { useNavigate ,Link } from "react-router-dom";
import "../CssStyle/Headers.css";

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);
  // const token = undefined;

  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Running useEffect");
    console.log("token before condition:", token);
    if (token) {
      setIsLogin(true);
      console.log("Setting isLogin to true");
    } else {
      setIsLogin(false);
      console.log("Setting isLogin to false");
    }
    console.log("token after condition:", token);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (isLogin) {
      localStorage.removeItem("token");
      setIsLogin(false);
    } else {
      navigate("./login");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container customheader">
          <Link className="navbar-brand" to="/">
            <img src={image1} alt="not found" className="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-4 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {/* disabled class remove from li to enable routing */}
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/history">
                  History
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/about"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  {" "}
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/help"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  {" "}
                  Help us
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link "
                  to="/services"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Services
                </Link>
              </li>
              <li className="nav-item">
              <Link
                  className="nav-link "
                  to="/cities"
                  // tabIndex="-1"
                  // aria-disabled="true"
                >
                  Cities
                </Link>
              </li>
            </ul>
            <form className="d-flex sign-form">
              
            <button className="sign-in-btn" onClick={(e)=>{handleLogin(e)}}>
                {isLogin ? "Logout" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </nav>
      {/* <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container customheader">
            <Link className="navbar-brand" href="/">
              <img
                src={image1}
                alt="not found"
                className="logo"
                // onClick={() => navigate("/")}
              />
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" href="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/history">
                    History
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/help">
                    Help
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/cities">
                    Cities
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="sign-in-btn" onClick={handleLogin}>
                    {isLogin ? "Logout" : "Sign In"}
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      {/* <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container nav-custom customheader">
          <Link class="navbar-brand" href="/">
            <img
              src={image1}
              alt="not found"
              className="logo"
              onClick={() => navigate("/")}
            />
          </Link>
          <button
            class="navbar-toggler collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mb-2 mb-lg-0">
              <li class="active">
                <Link class="nav-link" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link class="nav-link" href="/history">
                  History
                </Link>
              </li>

              <li>
                <Link class="nav-link" href="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/help">
                  Help
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link class="nav-link" href="/cities">
                  Cities
                </Link>
              </li>
            </ul>
            <form class="d-flex">
              <button className="sign-in-btn" onClick={handleLogin}>
                {isLogin ? "Logout" : "Sign In"}
              </button>
            </form>
          </div>
        </div>
      </nav> */}
    </div>
  );
};

export default Header;
