import React from "react";
import logo from "../assets/logo-dark.png";
import "../StyleSheets/thoughtsDiv.css";
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

function Footer() {
  return (
    <>
      <div className="footerMain py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-lg-5 col-sm-5 col-10 mx-auto px-3 py-5 FooterImageLogo">
              <img src={logo} height="15%" width="35%" />
              <br />
              <br />
              <p>
                HiCoder enables students in being capable to develop production
                grade application by availing full stack development, Soft
                skills, Analytics and project management skills to get a core
                software job in the Industry.
              </p>
              <br />
              <button className="btn btn-primary py-3 px-4 fw-bold">
                APPLY NOW
              </button>
            </div>
            <div className="col-md-1 col-lg-1 col-sm-1 mx-auto"></div>

            <div className="col-md-2 col-lg-2 col-sm-2 col-12 mx-auto mt-4">
              <h2 style={{ color: "rgb(11, 54, 150)" }}>Info</h2>
              <br />
              <p>Home</p>
              <p>About</p>
              <p>Blog</p>
              <p>FAQ</p>
              <p>Contact</p>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-4 col-12 mx-auto mt-4">
              <h2 style={{ color: "rgb(11, 54, 150)" }}>Contact</h2>
              <br />
              <div className="row">
                <div className="col-md-1 col-2">
                  <PinDropIcon />
                </div>
                <div className="col-md-11 col-10">
                  264/L3, Kavuri Hills Phase 2, HiTech City, Madhapur,
                  Telangana, India, PIN: 500033
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-1 col-2">
                  <PhoneInTalkIcon />
                </div>
                <div className="col-md-11 col-10">(+91) 9206 980 980</div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-1 col-2">
                  <AccessTimeIcon />
                </div>
                <div className="col-md-11 col-10">admission@hicoder.in</div>
              </div>
              <br />
              <div className="row">
                <div className="col-md-1 col-2">
                  <MailOutlineIcon />
                </div>
                <div className="col-md-11 col-10">10:00AM - 06:00PM</div>
              </div>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-6 col-lg-6 col-12 col-sm-10 mx-auto">
              <p>© Copyright | 2020 HiCoder Pvt. Ltd. | All Rights Reserved.</p>
              <p>
                <span style={{ color: "rgb(11, 54, 150)" }}>
                  Privacy Policy
                </span>
                |
                <span style={{ color: "rgb(11, 54, 150)" }}>
                  Terms of Service
                </span>
                | * Registration Charges Applied
              </p>
            </div>
            <div style={{textAlign:"center"}} className="col-md-6 col-lg-6 col-12 col-sm-10 mx-auto">
              <FaFacebookSquare style={{color:"rgb(11, 54, 150)"}} className="px-md-2 fs-1" />
              <FaTwitterSquare style={{color:"rgb(11, 54, 150)"}} className="px-md-2 fs-1" />
              <FaInstagramSquare style={{color:"rgb(11, 54, 150)"}} className="px-md-2 fs-1" />
              <FaLinkedin style={{color:"rgb(11, 54, 150)"}} className="px-md-2 fs-1" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
