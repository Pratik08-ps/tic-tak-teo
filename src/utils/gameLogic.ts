import { GameState, WinningCombination } from '../types';

const WINNING_COMBINATIONS: WinningCombination[] = [
  [0, 1, 2], // Rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // Columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // Diagonals
  [2, 4, 6],
];

export function calculateWinner(squares: GameState[]): GameState {
  for (const [a, b, c] of WINNING_COMBINATIONS) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function isBoardFull(squares: GameState[]): boolean {
  return squares.every((square) => square !== null);
}