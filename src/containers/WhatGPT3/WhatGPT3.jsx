import React from "react";
import "./WhatGPT3.css";
import Feature from "../../components/features/Feature";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="whgpt3">
      <div className="gpt3__whatgpt3-contianer">
        <div className="gpt3__whatgpt3-feature__main">
          <Feature
            value="What is GPT-3"
            text={
              "GPT-3, short for 'Generative Pre-trained Transformer 3,' is a state-of-the-art language processing AI model developed by OpenAI. It's designed to understand and generate human-like text based on the input it receives. With its massive number of parameters and advanced architecture, GPT-3 can perform tasks such as language translation, content creation, code generation, and more. Its capabilities have the potential to revolutionize various industries and applications, making it a cutting-edge tool in the world of artificial intelligence"
            }
            className="gpt3__whatgpt3-feature"
          />
        </div>
        <div className="gpt3__whatgpt3-heading">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>Explore The Library</p>
        </div>
        <div className="gpt3__whatgpt3-content">
          <div className="gpt3__whatgpt3-content__subcontent one">
            <Feature
              value="ChatBots"
              text={
                "Unlock conversations that flow effortlessly—meet your new virtual friend who's always ready to chat"
              }
              className="gpt3__whatgpt3-feature"
            />
          </div>
          <div className="gpt3__whatgpt3-content__subcontent two">
            <Feature
              className="gpt3__whatgpt3-feature"
              value="KnowlwdgeBased"
              text={
                " Revolutionizing user engagement, chatbots leverage AI to simulate human-like conversations, enhancing customer support and automating routine tasks"
              }
            />
          </div>
          <div className="gpt3__whatgpt3-content__subcontent three">
            <Feature
              className="gpt3__whatgpt3-feature"
              value="Education"
              text={
                "Empowering minds and shaping futures, education is the cornerstone of progress, fostering lifelong learning and personal growth"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
