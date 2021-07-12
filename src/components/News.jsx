import React, { useState } from "react";
import NewsCardsData from "./NewsCardsData";
import logo from "../assets/logo-dark.png";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import '../StyleSheets/thoughtsDiv.css';

function News() {
  const [items, setItems] = useState(NewsCardsData);

  return (
    <>
      <div className="whatWeLearnBg">
        <div className="whatwelearn">
          <p>NEWS</p>
          <h1>#COVID19 Demands more full stack developers.</h1>
          <h1 className="text-primary">& Industry Updates</h1>
        </div>
        <br />
        <br />
        <div className="container">
          <div className="row m-0 p-0">
            {items.map((elem, index) => {
              const { id, image, name, date } = elem;
              return (
                <div className="col-md-4 col-lg-4 col-sm-4 col-12 mx-auto">
                  <div className="card shadow hoveredCard" style={{ width: "100%" }}>
                    <img src={image} class="card-img-top" />
                    <div className="card-body">
                      <h3 className="card-title">{name}</h3>
                    </div>
                    <div className="row px-4 py-2" style={{ textAlign: "right" }}>
                      <div className="col-5 NewsLogoImage">
                        <img src={logo} alt="" height="100%" width="100%" />
                      </div>
                      <div className="col-7 NewsLogoDate" style={{ lineHeight: "3rem" }}>
                        <AccessTimeIcon />
                        {date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <br /><br /><br />
      </div>
    </>
  );
}

export default News;
