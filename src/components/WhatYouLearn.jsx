import React, { useState } from "react";
import "../StyleSheets/content1.css";
import CardsData from "./CardsData";

function WhatYouLearn() {
  const [items, setItems] = useState(CardsData);

  return (
    <>
      <div className="whatWeLearnBg">
        <div className="whatwelearn">
          <p>WHAT YOU LEARN</p>
          <h1>at HiCoder is useful</h1>
          <h1 className="text-primary">Technology, Management & more</h1>
        </div>
        <br />
        <br />
        <div className="container-fluid whatYouLearnpadding">
          <div className="row gy-4">
            {items.map((elem, index) => {
              const { id, image, name, content } = elem;
              return (
                <div className="col-md-3 col-lg-3 col-sm-4 col-10 mx-auto">
                  <div class="card text-center cardIcon">
                    <img
                      class="card-img-top"
                      src={image}
                      alt="Card image cap"
                    />
                    <br />
                    <div class="card-body">
                      <h5 class="card-title fw-bold">{name}</h5>
                      <br />
                      <p class="card-text">{content}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatYouLearn;
