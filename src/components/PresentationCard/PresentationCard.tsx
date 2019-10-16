import React from "react";

import "./PresentationCard.css";

const PresentationCard = (props: {
  isMobile: boolean;
  isDismissed: boolean;
  dismiss: Function;
}) => {
  return (
    <div
      className={`
        card nes-container with-title is-dark is-centered 
        ${props.isMobile ? "" : "is-rounded"} 
        ${props.isDismissed ? "animated hinge" : ""}
      `}
    >
      <p className="title">Hello, world!</p>
      <div className="card-container">
        <div className="avatar">
          <img
            className="nes-avatar is-rounded"
            alt="Avatar"
            src="https://www.gravatar.com/avatar/1774f7db0ce16124fd9505f0e6851e6a?s=600"
          />
        </div>
        <div className="presentation">
          My name is
          <h1>Pedro Lacerda</h1>{" "}
          <span>
            I'm a Backend Engineer at{" "}
            <span id="dito">
              <a
                href="https://dito.com.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                Dito
              </a>
            </span>
          </span>
        </div>
        <div className="checkMeOut">Check me out on:</div>
        <div className="dismiss">
          <button
            type="button"
            className="nes-btn is-error"
            onClick={() => props.dismiss()}
          >
            Dismiss
          </button>
        </div>
        <div className="social">
          <a
            href="https://github.com/pedro-l9"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon github is-large" />
          </a>
          <a
            href="https://www.linkedin.com/in/phenriquel/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="nes-icon linkedin is-large" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PresentationCard;
