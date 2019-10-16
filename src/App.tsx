import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "firebase/analytics";

import PresentationCard from "./components/PresentationCard/PresentationCard";

import "./App.css";

const mobileWidthThreshold = 800;

function handleResize(setIsMobile: Function) {
  setIsMobile(window.innerWidth <= mobileWidthThreshold);
}

const handleDismiss = (setDismissed: Function) => () => {
  firebase.analytics().logEvent("dismissed");

  setDismissed(true);
};

const App: React.FC = () => {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileWidthThreshold
  );

  const [isDismissed, setDismissed] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => handleResize(setIsMobile));

    return () =>
      window.removeEventListener("resize", () => handleResize(setIsMobile));
  });

  return (
    <div className="App">
      <section
        className={`technologies ${isDismissed ? "animated fadeOutLeft" : ""}`}
      >
        <section className="good-at nes-container is-dark with-title is-centered">
          <p className="title">I'm really good with</p>
          <section className="tech-list">
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </section>
        </section>
        <section className="played-with nes-container is-dark with-title is-centered">
          <p className="title">I've played around with</p>
          <section className="tech-list">
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </section>
        </section>
        <section className="will-learn nes-container is-dark with-title is-centered">
          <p className="title">I plan on learning</p>
          <section className="tech-list">
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </section>
        </section>
      </section>
      <PresentationCard
        isMobile={isMobile}
        isDismissed={isDismissed}
        dismiss={handleDismiss(setDismissed)}
      />
      <section
        className={`acomplishments ${
          isDismissed ? "animated fadeOutRight" : ""
        }`}
      >
        <section className="acomplishments-container nes-container is-dark with-title is-centered">
          <p className="title">Acomplishments</p>
        </section>
      </section>
    </div>
  );
};
export default App;
