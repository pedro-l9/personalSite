import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import SnakeGame from "../components/SnakeGame/SnakeGame";

function Game() {
  const { t } = useTranslation();
  const [hasStarted, setStarted] = useState(false)

  return (
    <div className="play-button-container">
      {hasStarted ? 
        <SnakeGame isGameRunning/> : 
        <button type="button" className="nes-btn is-success play-button" onClick={()=> setStarted(true)}>
          {t("play")}
        </button>}
    </div>
  );
}

export default Game;
