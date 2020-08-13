import React, { useState, useEffect } from "react";

import "./App.css";
import PersonalPage from "./pages/PersonalPage";
import Game from "./pages/Game";

const mobileWidthThreshold = 800;

function handleResize(setIsMobile: Function) {
  setIsMobile(window.innerWidth <= mobileWidthThreshold);
}

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= mobileWidthThreshold
  );
  const [dismissedState, setDismissed] = useState(2);

  useEffect(() => {
    window.addEventListener("resize", () => handleResize(setIsMobile));

    return () =>
      window.removeEventListener("resize", () => handleResize(setIsMobile));
  });
  switch (isMobile ? 0 : dismissedState) {
    case 0:
      return (
        <PersonalPage
          isMobile={isMobile}
          dismissedState={dismissedState}
          setDismissed={setDismissed}
        />
      );
    case 1:
      return (
        <>
          <PersonalPage
            isMobile={isMobile}
            dismissedState={dismissedState}
            setDismissed={setDismissed}
          />
          <Game />
        </>
      );
    case 2:
      return <Game />;
    default:
      return <></>;
  }
}

export default App;
