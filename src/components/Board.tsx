import React from 'react';
import { Square } from './Square';
import { GameState } from '../types';

interface BoardProps {
  squares: GameState[];
  onSquareClick: (index: number) => void;
}

export function Board({ squares, onSquareClick }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-2 w-72">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={value}
          onClick={() => onSquareClick(index)}
        />
      ))}
    </div>
  );
}