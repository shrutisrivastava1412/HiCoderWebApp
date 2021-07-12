import React from "react";
import logo from "../assets/logo-dark.png";
import { NavLink } from "react-router-dom";
import "../StyleSheets/Navbar.css";
import PinDropIcon from "@material-ui/icons/PinDrop";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Navbar() {
  function sliderFromRight() {
    var x = document.getElementById("slideFromRight");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" to="#">
            <img src={logo} alt="Logo" width="fit-content" height="40" />
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HICODER<span> +</span>
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  COURSE<span> +</span>
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <NavLink
                  class="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  HIRE<span> +</span>
                </NavLink>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Action
                    </NavLink>
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Another action
                    </NavLink>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <NavLink class="dropdown-item" to="#">
                      Something else here
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link active" aria-current="page" to="#">
                  <button className="btn btn-primary py-1 px-3">
                    APPLY NOW
                  </button>
                </NavLink>
              </li>
              <li class="nav-item" onClick={sliderFromRight}>
                <NavLink class="nav-link active" aria-current="page" to="#">
                  <span id="nav-close" class="ninedots">
                    <span class="dot1"></span>
                    <span class="dot2"></span>
                    <span class="dot3"></span>
                    <span class="dot4"></span>
                    <span class="dot5"></span>
                    <span class="dot6"></span>
                    <span class="dot7"></span>
                    <span class="dot8"></span>
                    <span class="dot9"></span>
                  </span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div id="slideFromRight" className="p-4 w3-animate-right">
        <img src={logo} alt="Logo" height="50" width="fit-content" />
        <br />
        <div className="px-3 py-5 fw-bold">
          HiCoder enables students in being capable to develop production grade
          application by availing full stack development, Soft skills, Analytics
          and project management skills to get a core software job in the
          Industry.
        </div>
        <div className="row">
          <div className="col-md-1">
            <PinDropIcon />
          </div>
          <div className="col-md-11">
            264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur, Telangana,
            India, PIN: 500033
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-1">
            <PhoneInTalkIcon />
          </div>
          <div className="col-md-11">(+91) 9206 980 980</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-1">
            <AccessTimeIcon />
          </div>
          <div className="col-md-11">admission@hicoder.in</div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-1">
            <MailOutlineIcon />
          </div>
          <div className="col-md-11">10:00AM - 06:00PM</div>
        </div>
        <br />
        <div className="py-4">
          <FaFacebookSquare className="px-2 fs-1" />
          <FaTwitterSquare className="px-2 fs-1" />
          <FaInstagramSquare className="px-2 fs-1" />
          <FaLinkedin className="px-2 fs-1" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
