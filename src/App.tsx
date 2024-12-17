import React, { useState } from 'react';
import { Board } from './components/Board';
import { GameState } from './types';
import { calculateWinner, isBoardFull } from './utils/gameLogic';
import { RotateCcw } from 'lucide-react';

function App() {
  const [squares, setSquares] = useState<GameState[]>(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);
  const isDraw = !winner && isBoardFull(squares);

  const handleClick = (index: number) => {
    if (squares[index] || winner) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const getStatus = () => {
    if (winner) return `Winner: ${winner}`;
    if (isDraw) return "It's a draw!";
    return `Next player: ${xIsNext ? 'X' : 'O'}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Tic Tac Toe
        </h1>
        
        <div className="mb-6">
          <div className="text-xl font-semibold text-center mb-4 text-gray-700">
            {getStatus()}
          </div>
          <Board squares={squares} onSquareClick={handleClick} />
        </div>

        <button
          onClick={resetGame}
          className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center gap-2"
        >
          <RotateCcw className="w-4 h-4" />
          Reset Game
        </button>
      </div>
    </div>
  );
}

export default App;