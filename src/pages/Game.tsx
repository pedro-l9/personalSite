import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { startGame } from '@pedro-l9/functional-snake';
import { Frame, Input } from '@pedro-l9/functional-snake/dist/types';

import SnakeFrame from '../components/SnakeFrame/SnakeFrame';
import { getInputForKey, isGameFinished } from '../components/SnakeFrame/utils';

interface Props {
  canPlay: boolean;
  setDismissed: Function;
}

const GAME_REFRESH_RATE = 100;
const CANVAS_HEIGHT = 400;
const CANVAS_WIDTH = 720;
const PIXEL_SIZE = 40;

function Game({ canPlay, setDismissed }: Props) {
  const { t } = useTranslation();
  const [hasStarted, setStarted] = useState(false);
  const [currentFrame, setFrame] = useState<Frame>();

  const frameDimensions = {
    cols: CANVAS_WIDTH / PIXEL_SIZE,
    rows: CANVAS_HEIGHT / PIXEL_SIZE,
  };

  const keyBufferRef = useRef<Input[]>(['LEFT']);
  const getFrameRef = useRef(startGame(frameDimensions));
  const previousTimeRef = useRef(0);
  const requestAnimationRef = useRef<number>();
  const dialogRef = useRef<HTMLDialogElement>(null);

  const updateFrame = useCallback(
    (currentTime: number) => {
      if (currentTime - previousTimeRef.current > GAME_REFRESH_RATE) {
        const [frame, getFrame] = getFrameRef.current(keyBufferRef.current);

        keyBufferRef.current = [];
        getFrameRef.current = getFrame;
        previousTimeRef.current = currentTime;

        setFrame(frame);

        if (isGameFinished(frame)) {
          if (dialogRef.current && !dialogRef.current.open)
            dialogRef.current.showModal();

          return;
        }
      }

      requestAnimationFrame(updateFrame);
    },
    [setFrame]
  );

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    const currentBuffer = keyBufferRef.current;

    keyBufferRef.current = [...currentBuffer, getInputForKey(e.key)];
  }, []);

  const restartGame = useCallback(() => {
    keyBufferRef.current = ['LEFT'];
    previousTimeRef.current = 0;
    getFrameRef.current = startGame(frameDimensions);

    updateFrame(GAME_REFRESH_RATE + 1);
  }, [frameDimensions, updateFrame]);

  useEffect(() => {
    if (hasStarted) {
      requestAnimationRef.current = requestAnimationFrame(updateFrame);

      window.addEventListener('keydown', handleKeyPress);
    }

    return () => {
      const animationFrame = requestAnimationRef.current;
      animationFrame && cancelAnimationFrame(animationFrame);

      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [hasStarted, updateFrame, handleKeyPress]);

  return (
    <div className="play-button-container">
      {hasStarted && currentFrame ? (
        <>
          <SnakeFrame
            canvasHeight={CANVAS_HEIGHT}
            canvasWidth={CANVAS_WIDTH}
            frame={currentFrame}
          />
          <dialog
            ref={dialogRef}
            className="nes-dialog is-dark"
            id="dialog-dark"
          >
            <form method="dialog">
              <p className="title">{t('gameOver')}</p>
              <h2>{t('score')}</h2>
              <h1>{currentFrame.score}</h1>
              <menu className="dialog-menu">
                <button className="nes-btn" onClick={() => setDismissed(0)}>
                  {t('goBack')}
                </button>
                <button className="nes-btn is-primary" onClick={restartGame}>
                  {t('restart')}
                </button>
              </menu>
            </form>
          </dialog>
        </>
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
