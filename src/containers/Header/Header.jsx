import React from "react";
import "./Header.css";
import people from "../../assets/people.png";
import AI from "../../assets/ai.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">
        Let&apos;s Build Something amazing with GPT-3 OpenAI
      </h1>
      <p>
        Discover the limitless possibilities of GPT-3, an advanced language
        model developed by OpenAI. Unleash its power to generate human-like
        text, assist in creative writing, provide expert advice, and much more.
        Whether you're a developer, writer, or enthusiast, GPT-3 can help you
        bring your ideas to life like never before
      </p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={AI} />
    </div>
  </div>
);

export default Header;
