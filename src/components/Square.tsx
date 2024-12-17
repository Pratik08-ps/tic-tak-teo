import React from 'react';
import { X, Circle } from 'lucide-react';
import { GameState } from '../types';

interface SquareProps {
  value: GameState;
  onClick: () => void;
}

export function Square({ value, onClick }: SquareProps) {
  return (
    <button
      className="w-24 h-24 bg-white rounded-lg shadow-md flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
      onClick={onClick}
    >
      {value === 'X' && <X className="w-12 h-12 text-blue-500" />}
      {value === 'O' && <Circle className="w-12 h-12 text-red-500" />}
    </button>
  );
}