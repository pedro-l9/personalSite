import React from "react";

import PresentationCard from "./components/PresentationCard/PresentationCard";

import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <div className="technologies">
      <section className="good-at nes-container is-dark with-title is-centered">
        <p className="title">I'm really good with</p>
        <section className="tech-list">
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
        </section>
      </section>
      <section className="played-with nes-container is-dark with-title is-centered">
        <p className="title">I've played around with</p>
        <section className="tech-list">
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
        </section>
      </section>
      <section className="will-learn nes-container is-dark with-title is-centered">
        <p className="title">I plan on learning</p>
        <section className="tech-list">
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
          <i className="nes-icon youtube is-medium" />
        </section>
      </section>
    </div>
    <PresentationCard />
    <div className="acomplishments"></div>
  </div>
);
export default App;
