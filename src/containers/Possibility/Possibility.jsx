import React from "react";
import "./Possibility.css";
import { PossibilityImg } from "./imports";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__margin" id="possibility">
      <div className="gpt3__possibility-container">
        <div className="gpt3__possibility-container__image">
          <img src={PossibilityImg} />
        </div>
        <div className="gpt3__possibility-container__content">
          <div className="gpt3__possibility-container__content-header">
            <p>Request Early Access to Get Started</p>
            <h1 className="gradient__text">
              The possibilities are beyond your imagination
            </h1>
          </div>
          <div className="gpt3__possibility-container__content-footer">
            <h5>
              Embark on a journey where the horizons of what can be achieved
              extend beyond the limits of your wildest dreams. Brace yourself
              for an awe-inspiring tapestry of endless opportunities and
              unforeseen paths, each waiting to be discovered in the uncharted
              territories of the extraordinary.
            </h5>
            <p>Request Early Access to Get Started</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Possibility;
