import React from "react";
import "./Article.css";

const Article = ({ imgUrl, date, title }) => {
  return (
    <>
      <div className="gpt3__article-container">
        <div className="gpt3__article-container__image">
          <img src={imgUrl} />
        </div>
        <div className="gpt3__article-container__text">
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </>
  );
};

export default Article;
