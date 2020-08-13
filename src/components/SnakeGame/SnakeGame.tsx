import * as React from 'react';
import { startGame } from '@pedro-l9/functional-snake';
import { Frame, Input } from '@pedro-l9/functional-snake/dist/types';

import './SnakeGame.css';
import { GAME_REFRESH_RATE } from './constants';
import { drawFrame, getInputForKey } from './utils';

interface Props {
  isGameRunning?: boolean;
  canvasHeight: number;
  canvasWidth: number;
  pixelSize: number;
}

function SnakeGame({
  isGameRunning = true,
  canvasHeight,
  canvasWidth,
  pixelSize,
}: Props) {
  const [currentFrame, setFrame] = React.useState<Frame>();
  const canvasDimensions = {
    cols: canvasWidth / pixelSize,
    rows: canvasHeight / pixelSize,
  };

  const keyBufferRef = React.useRef<Input[]>(['LEFT']);
  const getFrameRef = React.useRef(startGame(canvasDimensions));
  const requestAnimationRef = React.useRef<number>();
  const previousTimeRef = React.useRef(0);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const updateFrame = React.useCallback(
    (returnFrame: any) => (currentTime: number) => {
      if (currentTime - previousTimeRef.current > GAME_REFRESH_RATE) {
        const [frame, getFrame] = getFrameRef.current(keyBufferRef.current);

        keyBufferRef.current = [];
        getFrameRef.current = getFrame;
        previousTimeRef.current = currentTime;

        returnFrame(frame);
      }

      requestAnimationFrame(updateFrame(returnFrame));
    },
    []
  );

  const handleKeyPress = React.useCallback((e: KeyboardEvent) => {
    const currentBuffer = keyBufferRef.current;

    keyBufferRef.current = [...currentBuffer, getInputForKey(e.key)];
  }, []);

  React.useEffect(() => {
    if (isGameRunning) {
      requestAnimationRef.current = requestAnimationFrame(
        updateFrame(setFrame)
      );
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      const animationFrame = requestAnimationRef.current;
      animationFrame && cancelAnimationFrame(animationFrame);

      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isGameRunning, setFrame, updateFrame, handleKeyPress]);

  if (canvasRef.current && currentFrame) {
    drawFrame(canvasDimensions, canvasRef.current, currentFrame);
  }

  return (
    <canvas
      id="canvas"
      className="nes-container is-dark is-centered is-rounded"
      ref={canvasRef}
      height={canvasHeight}
      width={canvasWidth}
    ></canvas>
  );
}

export default SnakeGame;
