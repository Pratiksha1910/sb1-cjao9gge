import * as React from "react";
import { memo } from "react";

interface DisplayProps {
  equation: string;
  result: string;
}

export const Display = memo(({ equation, result }: DisplayProps) => {
  return (
    <flexboxLayout className="flex-1 p-4">
      <label className="text-gray-500 text-right w-full">{equation}</label>
      <label className="text-white text-right text-4xl w-full mt-2">{result}</label>
    </flexboxLayout>
  );
});