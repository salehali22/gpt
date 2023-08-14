import React from "react";
import "./Brand.css";
import { Google, Atlassian, Shopify, Slack, Dropbox } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brands section__padding">
      <div className="gpt3__brands-container">
        <img src={Google} />
        <img src={Slack} />
        <img src={Atlassian} />
        <img src={Dropbox} />
        <img src={Shopify} />
      </div>
    </div>
  );
};

export default Brand;
