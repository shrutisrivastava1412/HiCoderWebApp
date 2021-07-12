import React from "react";
import "../StyleSheets/content1.css";

const Content1 = () => {
  return (
    <>
      {/* This is the first div  */}
      <div className="img_text_wrapper">
        <img
          src="https://hicoder.in/assets/images/slider/6.jpg"
          alt="First Man Image"
        />
        <div className="contentFirstDiv">
          <p style={{ color: "rgb(11, 54, 110)", fontWeight: "bold" }}>
            YOUR TIME, OUR EFFORTS
          </p>
          <h1>
            Pay After Job Full Stack <br /> Development Course
          </h1>
          <button className="c1btn ">KNOW MORE</button>
        </div>
      </div>

      {/* This is the Next batch div */}
      <div className="nextBatch">
        <p>NEXT BATCH: 27 July | Apply Now</p>
      </div>

      {/* This is the second content div */}
      <div className="how-section1">
        <div className="row m-0 p-0">
          <div className="col-md-6 col-lg-6 col-10 mx-auto col-sm-6 how-img">
            <img
              src="https://hicoder.in/assets/images/about/h8-left-img.jpg"
              style={{height:"100%", width:"100%"}}
              alt="Second image for this component"
            />
          </div>
          <div className="col-md-6 col-lg-6 col-10 mx-auto col-sm-6 secondDivCenter">
            <p style={{ fontWeight: "bold" }}>HICODER</p>
            <h1>We help students learn</h1>
            <h1 style={{ color: "rgb(11, 54, 110)" }}>
              Full Stack Development
            </h1>
            <p>
              Freedom to work on ideal projects. On GetLance, you run your own
              business and choose your own clients and projects. Just complete
              your profile and we’ll highlight ideal jobs. Also search projects,
              and respond to client invitations. Wide variety and high pay.
              Clients are now posting jobs in hundreds of skill categories,
              paying top price for great work. More and more success. The
              greater the success you have on projects, the more likely you are
              to get hired by clients that use GetLance.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />

        {/* This is the  third div content */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-10 mx-auto col-sm-6 thirdDivCenter">
            <h1>Trained on the most in-demand Technology Skills</h1>
            <br />
            <p>
              At the end of the course, every student becomes capable to develop
              their own create a web application, host on their own domain,
              enable advanced technologies and observe people's actions on their
              website and represent themselves as a HiCoder that matters.
            </p>
            <ul>
              <li>End to End Project Analysis, Design & Development</li>
              <li>Authentication, Geo Tracking, Payment Gateway</li>
              <li>Analytics, SEO, Data Representation, Industry Standards</li>
              <li>
                Max Pro Resume, Soft Skills, Client Expectation Management
              </li>
            </ul>
            <button className="btn btn-primary">APPLY NOW</button>
          </div>
          <div className="col-md-6 col-lg-6 col-10 mx-auto col-sm-6 chinese">
            <img
              src="https://hicoder.in/assets/images/home/2.jpg"
              alt="Third Image"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Content1;
