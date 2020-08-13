import React, { useState, useEffect } from 'react';

import './App.css';
import PersonalPage from './pages/PersonalPage';
import Game from './pages/Game';

const MOBILE_WIDTH_THRESHOLD = 800;

const PLACED_STATE = 0;
const DANGLING_STATE = 1;
const FALLEN_STATE = 2;

function handleResize(setIsMobile: Function) {
  setIsMobile(window.innerWidth <= MOBILE_WIDTH_THRESHOLD);
}

function App() {
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_WIDTH_THRESHOLD
  );
  const [dismissedState, setDismissed] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', () => handleResize(setIsMobile));

    return () =>
      window.removeEventListener('resize', () => handleResize(setIsMobile));
  }, []);

  switch (isMobile ? 0 : dismissedState) {
    case PLACED_STATE:
      return (
        <PersonalPage
          isMobile={isMobile}
          dismissedState={dismissedState}
          setDismissed={setDismissed}
        />
      );
    case DANGLING_STATE:
      return (
        <>
          <PersonalPage
            isMobile={isMobile}
            dismissedState={dismissedState}
            setDismissed={setDismissed}
          />
          <Game canPlay={false} />
        </>
      );
    case FALLEN_STATE:
      return <Game canPlay={true} />;
    default:
      return <></>;
  }
}

export default App;
