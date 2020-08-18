import * as React from 'react';
import { Frame } from '@pedro-l9/functional-snake';

import './SnakeFrame.css';
import { isGameFinished, getPositionInPlane } from './utils';
import {
  GAME_OVER_BACKGROUND,
  SNAKE_FILL,
  APPLE_FILL,
  GAME_BACKGROUND,
} from './constants';

interface Props {
  canvasHeight: number;
  canvasWidth: number;
  frame: Frame;
}

function drawFrame(canvas: HTMLCanvasElement, frame: Frame) {
  const context = canvas.getContext('2d');

  if (context) {
    if (isGameFinished(frame)) {
      context.fillStyle = GAME_OVER_BACKGROUND;
      context.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      context.fillStyle = GAME_BACKGROUND;
      context.fillRect(0, 0, canvas.width, canvas.height);

      const getX = getPositionInPlane(canvas.width, frame.dimensions.cols);
      const getY = getPositionInPlane(canvas.height, frame.dimensions.rows);

      context.fillStyle = SNAKE_FILL;
      frame.snake.forEach((pixel) =>
        context.fillRect(getX(pixel.x), getY(pixel.y), getX(1), getY(1))
      );

      context.fillStyle = APPLE_FILL;
      context.fillRect(
        getX(frame.apple.x),
        getY(frame.apple.y),
        getX(1),
        getY(1)
      );
    }
  }
}

function SnakeFrame({ canvasHeight, canvasWidth, frame }: Props) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    if (canvasRef.current) drawFrame(canvasRef.current, frame);
  }, [canvasRef, frame]);

  return (
    <>
      <canvas
        id="canvas"
        className="nes-container is-dark is-centered is-rounded"
        ref={canvasRef}
        height={canvasHeight}
        width={canvasWidth}
      ></canvas>
    </>
  );
}

export default SnakeFrame;
