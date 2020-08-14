import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SnakeGame from '../components/SnakeGame/SnakeGame';

interface Props {
  canPlay: boolean;
}

function Game({ canPlay }: Props) {
  const { t } = useTranslation();
  const [hasStarted, setStarted] = useState(false);

  return (
    <div className="play-button-container">
      {hasStarted ? (
        <SnakeGame
          canvasHeight={400}
          canvasWidth={720}
          pixelSize={40}
          isGameRunning={hasStarted}
        />
      ) : (
        <button
          type="button"
          className={`nes-btn is-success play-button ${
            canPlay ? '' : 'is-disabled'
          }`}
          onClick={() => canPlay && setStarted(true)}
        >
          {t('play')}
        </button>
      )}
    </div>
  );
}

export default Game;
