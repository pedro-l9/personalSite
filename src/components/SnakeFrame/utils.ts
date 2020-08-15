import { Frame, Input } from '@pedro-l9/functional-snake/dist/types';

export const getPositionInPlane = (
  planeSize: number,
  divisions: number,
  padding: number = 2
) => (pixel: number) => Math.round((pixel * planeSize) / divisions) - padding;

export function isGameFinished(frame: Frame) {
  return frame.gameOver && frame.snake.length === 1;
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
