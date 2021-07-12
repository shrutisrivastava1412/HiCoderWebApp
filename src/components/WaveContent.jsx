import React from "react";
import "../StyleSheets/Navbar.css";
import AssignmentIcon from "@material-ui/icons/Assignment";
import GroupIcon from "@material-ui/icons/Group";
import RedeemIcon from "@material-ui/icons/Redeem";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function WaveContent() {
  return (
    <>
      <div className="waveBgDiv text-white text-center">
        <div className="row">
          <div className="col-md-3 col-10 mx-auto col-lg-3 col-sm-6">
            <i>
              <AssignmentIcon style={{fontSize:"5rem", color:"rgb(31, 250, 115)"}} />
            </i>
            <h1>34 +</h1>
            <h6>PROJECTS COMPLETED</h6>
          </div>
          <div className="col-md-3 col-10 mx-auto col-lg-3 col-sm-6">
            <i>
              <GroupIcon style={{fontSize:"5rem", color:"rgb(31, 250, 115)"}} />
            </i>
            <h1>47 +</h1>
            <h6>INDUSTRY EXPERTS</h6>
          </div>
          <div className="col-md-3 col-10 mx-auto col-lg-3 col-sm-6">
            <i>
              <RedeemIcon style={{fontSize:"5rem", color:"rgb(31, 250, 115)"}} />
            </i>
            <h1>30 +</h1>
            <h6>QUALITY DEVELOPERS</h6>
          </div>
          <div className="col-md-3 col-10 mx-auto col-lg-3 col-sm-6">
            <i>
              <InsertEmoticonIcon style={{fontSize:"5rem", color:"rgb(31, 250, 115)"}} />
            </i>
            <h1>40,000,00 +</h1>
            <h6>APPLICATION USERS</h6>
          </div>
        </div>
      </div>
    </>
  );
}

export default WaveContent;
