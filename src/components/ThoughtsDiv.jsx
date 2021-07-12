import React from "react";
import "../StyleSheets/thoughtsDiv.css";
import { FaQuoteLeft } from "react-icons/fa";

function ThoughtsDiv() {
  return (
    <>
      <div className="thoughtsDivMain">
        <div className="upperContent text-center fw-bold">
          <h6>THOUGHTS ON HICODER SYLLABUS</h6>
          <h1>Reviews by Industry Experts</h1>
        </div>
        <div className="container py-5">
          <div className="row m-0 p-0">
            <div className="col-md-6 col-lg-6 col-sm-6 col-12 mx-auto">
              <img
                src="https://hicoder.in/assets/images/testimonial/left-img.jpg"
                height="100%"
                width="100%"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-sm-6 col-12 mx-auto">
              <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active carousel-indicators-color bg-primary" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" class="carousel-indicators-color bg-primary" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="carousel-indicators-color bg-primary" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" class="carousel-indicators-color bg-primary" aria-label="Slide 4"></button>
                </div>
                <div class="carousel-inner text-dark">
                  <div class="carousel-item active">
                    <FaQuoteLeft style={{ fontSize:"3.2rem", color:"rgba(9, 71, 240, 0.05)"}} />
                    <br /><br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quasi nihil molestias fuga distinctio magnam, in et
                      ipsam provident ex neque.
                    </p><br /><br />
                    <img src="https://hicoder.in/assets/images/testimonial/avatar/1.jpg" />
                    <br /><br />
                    <h4>Ashish Vishwakarma</h4>
                    <h5>Software Developer</h5>
                    <br /><br />
                  </div>
                  <div class="carousel-item">
                  <FaQuoteLeft style={{ fontSize:"3.2rem", color:"rgba(9, 71, 240, 0.05)"}} />
                    <br /><br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quasi nihil molestias fuga distinctio magnam, in et
                      ipsam provident ex neque.
                    </p><br /><br />
                    <img src="https://hicoder.in/assets/images/testimonial/avatar/2.jpg" />
                    <br /><br />
                    <h4>Ashish Vishwakarma</h4>
                    <h5>Software Developer</h5>
                    <br /><br />
                  </div>
                  <div class="carousel-item">
                  <FaQuoteLeft style={{ fontSize:"3.2rem", color:"rgba(9, 71, 240, 0.05)"}} />
                    <br /><br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quasi nihil molestias fuga distinctio magnam, in et
                      ipsam provident ex neque.
                    </p><br /><br />
                    <img src="https://hicoder.in/assets/images/testimonial/avatar/3.jpg" />
                    <br /><br />
                    <h4>Ashish Vishwakarma</h4>
                    <h5>Software Developer</h5>
                    <br /><br />
                  </div>
                  <div class="carousel-item">
                  <FaQuoteLeft style={{ fontSize:"3.2rem", color:"rgba(9, 71, 240, 0.05)"}} />
                    <br /><br />
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iure, quasi nihil molestias fuga distinctio magnam, in et
                      ipsam provident ex neque.
                    </p><br /><br />
                    <img src="https://hicoder.in/assets/images/testimonial/avatar/2.jpg" />
                    <br /><br />
                    <h4>Ashish Vishwakarma</h4>
                    <h5>Software Developer</h5>
                    <br /><br />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}

export default ThoughtsDiv;
