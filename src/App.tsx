import React from "react";

import PresentationCard from "./components/PresentationCard/PresentationCard";

import "./App.css";

const App: React.FC = () => (
  <div className="App">
    <div className="technologies"></div>
    <PresentationCard />
    <div className="acomplishments"></div>
  </div>
);
export default App;
