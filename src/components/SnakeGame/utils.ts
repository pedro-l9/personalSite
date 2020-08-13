import { Frame, Canvas, Input } from '@pedro-l9/functional-snake/dist/types';

import {
  GAME_OVER_BACKGROUND,
  SNAKE_FILL,
  APPLE_FILL,
  GAME_BACKGROUND,
} from './constants';

const getPositionInPlane = (planeSize: number, divisions: number) => (
  pixel: number
) => Math.round((pixel * planeSize) / divisions);

export function drawFrame(
  canvasDimensions: Canvas,
  canvas: HTMLCanvasElement,
  frame: Frame
) {
  const context = canvas.getContext('2d');

  if (context) {
    if (frame.gameOver && frame.snake.length === 1) {
      context.fillStyle = GAME_OVER_BACKGROUND;
      context.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      context.fillStyle = GAME_BACKGROUND;
      context.fillRect(0, 0, canvas.width, canvas.height);

      const getX = getPositionInPlane(canvas.width, canvasDimensions.cols);
      const getY = getPositionInPlane(canvas.height, canvasDimensions.rows);

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

export function getInputForKey(key: string): Input {
  switch (key) {
    case 'w':
    case 'ArrowUp':
      return 'UP';
    case 'a':
    case 'ArrowLeft':
      return 'LEFT';
    case 's':
    case 'ArrowDown':
      return 'DOWN';
    case 'd':
    case 'ArrowRight':
      return 'RIGHT';
    default:
      return 'LEFT';
  }
}
