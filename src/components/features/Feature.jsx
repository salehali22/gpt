import React from "react";
import "./feature.css";

const Feature = ({ value, text, className }) => {
  return (
    <>
      <div className={className}>
        <hr />
        <h3>{value}</h3>
      </div>
      <div className={className + "__text"}>
        <p>{text}</p>
      </div>
    </>
  );
};

export default Feature;
