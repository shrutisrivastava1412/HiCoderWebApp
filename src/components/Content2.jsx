import React from "react";
import "../StyleSheets/content1.css";
import GroupIcon from "@material-ui/icons/Group";
import RedeemIcon from "@material-ui/icons/Redeem";

const Content2 = () => {
  return (
    <>
      {/* This is the second content div */}
      <div className="how-section1">
        <div className="row">
          <div className="p-md-5 p-3 col-md-6 col-lg-6 col-10 mx-auto col-sm-6 paragraphSpacing">
            <h1 style={{ fontWeight: "bold" }}>Why HiCoder?</h1>
            <br />
            <p>
              HiCoder enables students to think about real-world problems,
              design, and develop the right solution.
              <span className="text-primary">know more</span>
            </p>
            <br />
            <div className="row">
              <div className="col-md-2 col-lg-2 col-10 mx-auto col-sm-2 personalizedTraining">
                <RedeemIcon
                  style={{ fontSize: "4.5rem", color: "rgb(11, 54, 110)" }}
                />
              </div>
              <div className="col-md-10 col-lg-10 col-10 col-sm-10 mx-auto">
                <h1 style={{ fontSize: "150%" }}>Personalized Training</h1>
                <p>
                  We understand the weakness of students coming from poor
                  educational backgrounds. HiCoder avails resources and extra
                  after-class support to match the criteria and keep up with
                  tech.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 col-lg-2 col-10 mx-auto col-sm-2 personalizedTraining">
                <GroupIcon
                  style={{ fontSize: "4.5rem", color: "rgb(11, 54, 110)" }}
                />
              </div>
              <div className="col-md-10 col-lg-10 col-10 col-sm-10 mx-auto">
                <h1 style={{ fontSize: "150%" }}>Production Projects</h1>
                <p>
                  Every student ends up making around 3 projects that are
                  wholesome, cloud-hosted and can be used for a commercial
                  purpose.
                </p>
              </div>
            </div>
          </div>
          <div className="p-2 col-md-6 col-lg-6 col-10 mx-auto col-sm-6 how-img">
            <img
              src="https://hicoder.in/assets/images/whychooseus/style4/right-img.jpg"
              alt="Second image for this component"
            />
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />

      {/* This is the  second div content */}
      <div className="container">
        <div className="row">
        <div className="col-md-6 col-lg-6 col-10 mx-auto col-sm-6">
          <img
            src="https://hicoder.in/assets/images/home/1.jpg"
            style={{height:"100%", width:"100%"}}
            alt="Third Image"
          />
        </div>
        <div className="px-3 col-md-6 col-lg-6 col-10 mx-auto col-sm-6 secondDivCenter">
          <h1>How does HiCoder help?</h1>
          <br />
          <p style={{ fontWeight: "bold", color: "grey" }}>
            HiCoder resembeles software development and marketing altogether to
            develop applications that can be used by real user than keeping on
            Github.
          </p>
          <p>
            HiCoder understands the struggle, peer pressure an engineering
            student goes into throughout curriculum. We believe, Most
            engineering students who can be part of the core software industry
            end up having a tech support or customer care job just because
            college never taught trending technology, project Management or
            encouraged students to their own projects.
          </p>
          <button className="btn btn-primary py-3 px-4">KNOW MORE</button>
        </div>
        </div>
      </div>
    </>
  );
};
export default Content2;
