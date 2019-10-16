import React from "react";

import "./PresentationCard.css";

function dismissCard() {
  const card = document.querySelector(".card");
  if (card) card.classList.add("animated", "hinge");
}

const PresentationCard = () => (
  <div className="card nes-container with-title is-dark is-rounded is-centered">
    <p className="title">Hello!</p>
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
        <h1>Pedro Lacerda</h1>I'm a Backend Engineer at{" "}
        <span id="dito">Dito</span>
      </div>
      <div className="checkMeOut">Check me out on:</div>
      <div className="dismiss">
        <button
          type="button"
          className="nes-btn is-error"
          onClick={dismissCard}
        >
          Dismiss
        </button>
      </div>
      <div className="social">
        <i className="nes-icon github is-large" />
        <i className="nes-icon linkedin is-large" />
        <i className="nes-icon instagram is-large" />
      </div>
    </div>
  </div>
);

export default PresentationCard;
