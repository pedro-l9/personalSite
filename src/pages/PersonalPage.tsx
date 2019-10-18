import React from "react";
import firebase from "firebase/app";
import "firebase/analytics";

import PresentationCard from "../components/PresentationCard/PresentationCard";

interface PersonalPageProps {
  setDismissed: Function;
  dismissedState: number;
  isMobile: boolean;
}

const handleDismiss = (setDismissed: Function) => () => {
  firebase.analytics().logEvent("dismissed");
  const presentationCard = document.querySelector("#presentation-card");

  if (presentationCard)
    presentationCard.addEventListener("animationend", function() {
      setDismissed(2);
    });

  setDismissed(1);
};

function PersonalPage(props: PersonalPageProps) {
  return (
    <div className="personal-page">
      <section
        className={`technologies ${
          props.dismissedState > 0 ? "animated fadeOutLeft" : ""
        }`}
      >
        <section className="good-at nes-container is-dark with-title is-centered">
          <p className="title">I'm really good with</p>
          <div className="tech-list">
            <i className="nes-icon youtube nes-pointer" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </div>
        </section>
        <section className="played-with nes-container is-dark with-title is-centered">
          <p className="title">I've played around with</p>
          <div className="tech-list">
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </div>
        </section>
        <section className="will-learn nes-container is-dark with-title is-centered">
          <p className="title">I plan on learning</p>
          <div className="tech-list">
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
            <i className="nes-icon youtube" />
          </div>
        </section>
      </section>
      <PresentationCard
        isMobile={props.isMobile}
        dismissedState={props.dismissedState}
        dismiss={handleDismiss(props.setDismissed)}
      />
      <section
        className={`acomplishments ${
          props.dismissedState > 0 ? "animated fadeOutRight" : ""
        }`}
      >
        <div className="acomplishments-container nes-container is-dark with-title is-centered">
          <p className="title">Acomplishments</p>
        </div>
      </section>
    </div>
  );
}

export default PersonalPage;
