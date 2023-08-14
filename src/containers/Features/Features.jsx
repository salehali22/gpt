import React from "react";
import "./Features.css";
import Feature from "../../components/features/Feature";

const Features = () => {
  return (
    <div className="gpt3__features section__margin" id="features">
      <div className="gpt3__features-container">
        <div className="gpt3__features-container__heading">
          <h1 className="gradient__text">
            The Future is Now and You Just Need To Realize It. Step into Future
            Today & Make it Happen.
          </h1>
          <p>Request Early Access to Get Started</p>
        </div>
        <div className="gpt3__features-container__contents">
          <div className="gpt3__features-container__contents-subcontent one">
            <Feature
              value="Improving end distrusts instantly"
              text={
                "Fostering transparency and communication, bridging gaps in understanding leads to immediate trust enhancement"
              }
              className={"gpt3__features-feature"}
            />
          </div>
          <div className="gpt3__features-container__contents-subcontent two">
            <Feature
              value="Become the tended active"
              text={
                "Emerge as the nurtured catalyst, propelling transformative change through purposeful action"
              }
              className={"gpt3__features-feature"}
            />
          </div>
          <div className="gpt3__features-container__contents-subcontent three">
            <Feature
              value="Ignite Limitless Innovation"
              text={
                "Unlock the untapped possibilities within, harnessing newfound capabilities to achieve remarkable outcomes"
              }
              className={"gpt3__features-feature"}
            />
          </div>
          <div className="gpt3__features-container__contents-subcontent four">
            <Feature
              value="Inspire Shared Growth"
              text={
                " Nurture an environment of collaboration, where shared insights and diverse perspectives flourish for collective progress"
              }
              className={"gpt3__features-feature"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
