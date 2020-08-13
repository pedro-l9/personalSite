import * as React from 'react';
import { startGame } from '@pedro-l9/functional-snake';
import { Frame, Input } from '@pedro-l9/functional-snake/dist/types';

interface Props {
  isGameRunning: boolean;
}

const GAME_REFRESH_RATE = 100;
const CANVAS = { cols: 20, rows: 14 };

const getPositionInPlane = (planeSize: number, divisions: number) => (
  slot: number
) => Math.round((slot * planeSize) / divisions);

function SnakeGame({ isGameRunning = true }: Props) {
  const [currentFrame, setFrame] = React.useState<Frame>();

  const keyBuffer = React.useRef<Input[]>([]);
  const getFrame = React.useRef(startGame(CANVAS));
  const requestRef = React.useRef<number>();
  const previousTimeRef = React.useRef(0);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  const draw = React.useCallback(
    (returnFrame: any) => (currentTime: number) => {
      if (currentTime - previousTimeRef.current > GAME_REFRESH_RATE) {
        const [frame, nextFrame] = getFrame.current(keyBuffer.current);

        getFrame.current = nextFrame;
        keyBuffer.current = [];
        previousTimeRef.current = currentTime;

        returnFrame(frame);
      }

      requestAnimationFrame(draw(returnFrame));
    },
    []
  );

  const handleKeyPress = React.useCallback((e: KeyboardEvent) => {
    const currentBuffer = keyBuffer.current;

    switch (e.key) {
      case 'w':
      case 'ArrowUp':
        keyBuffer.current = [...currentBuffer, 'UP'];
        break;
      case 'a':
      case 'ArrowLeft':
        keyBuffer.current = [...currentBuffer, 'LEFT'];
        break;
      case 's':
      case 'ArrowDown':
        keyBuffer.current = [...currentBuffer, 'DOWN'];
        break;
      case 'd':
      case 'ArrowRight':
        keyBuffer.current = [...currentBuffer, 'RIGHT'];
        break;
    }
  }, []);

  React.useEffect(() => {
    if (isGameRunning) {
      requestRef.current = requestAnimationFrame(draw(setFrame));
    }

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isGameRunning, setFrame, draw, handleKeyPress]);

  if (canvasRef.current && currentFrame) {
    const context = canvasRef.current.getContext('2d');
    if (context) {
      if (currentFrame.gameOver && currentFrame.snake.length === 1) {
        context.fillStyle = 'rgb(255,50,0)';
        context.fillRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );
      } else {
        context.fillStyle = '#232323';
        context.fillRect(
          0,
          0,
          canvasRef.current.width,
          canvasRef.current.height
        );

        const getX = getPositionInPlane(canvasRef.current.width, CANVAS.cols);
        const getY = getPositionInPlane(canvasRef.current.height, CANVAS.rows);

        // draw snake
        context.fillStyle = 'rgb(0,200,50)';
        currentFrame.snake.forEach((pixel) =>
          context.fillRect(getX(pixel.x), getY(pixel.y), getX(1), getY(1))
        );

        // draw apples
        context.fillStyle = 'rgb(255,50,0)';
        context.fillRect(
          getX(currentFrame.apple.x),
          getY(currentFrame.apple.y),
          getX(1),
          getY(1)
        );
      }
    }
  }

  return (
    <>
      <canvas ref={canvasRef} width="700" height="500"></canvas>
    </>
  );
}

export default SnakeGame;
