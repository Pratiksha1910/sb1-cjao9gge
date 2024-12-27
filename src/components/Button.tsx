import * as React from "react";
import { memo } from "react";

interface ButtonProps {
  text: string;
  onTap: () => void;
  variant?: 'number' | 'operator' | 'equals' | 'clear';
  colSpan?: number;
  rowSpan?: number;
  row: number;
  col: number;
}

export const Button = memo(({ 
  text, 
  onTap, 
  variant = 'number',
  colSpan,
  rowSpan,
  row,
  col 
}: ButtonProps) => {
  const getButtonClass = () => {
    switch (variant) {
      case 'operator':
        return 'bg-gray-700';
      case 'equals':
        return 'bg-green-500';
      case 'clear':
        return 'bg-gray-700';
      default:
        return 'bg-gray-600';
    }
  };

  return (
    <button
      row={row}
      col={col}
      colSpan={colSpan}
      rowSpan={rowSpan}
      className={`${getButtonClass()} text-white text-2xl p-4 m-1 rounded-lg`}
      onTap={onTap}
    >
      {text}
    </button>
  );
});