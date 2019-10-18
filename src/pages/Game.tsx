import React from "react";
import { useTranslation } from "react-i18next";

function Game() {
  const { t } = useTranslation();

  return (
    <div className="play-button-container">
      <button type="button" className="nes-btn is-success play-button">
        {t("play")}
      </button>
    </div>
  );
}

export default Game;
