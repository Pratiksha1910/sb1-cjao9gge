import * as React from "react";
import { useState, useCallback } from "react";
import { Button } from "./Button";
import { Display } from "./Display";
import { calculate } from "../utils/calculator";

export function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");
  const [shouldResetDisplay, setShouldResetDisplay] = useState(false);

  const handleNumber = useCallback((num: string) => {
    if (display === "0" || shouldResetDisplay) {
      setDisplay(num);
      setShouldResetDisplay(false);
    } else {
      setDisplay(display + num);
    }
  }, [display, shouldResetDisplay]);

  const handleOperator = useCallback((operator: string) => {
    setShouldResetDisplay(true);
    setEquation(display + " " + operator + " ");
  }, [display]);

  const handleCalculate = useCallback(() => {
    const result = calculate(equation, display);
    setDisplay(result);
    setEquation("");
    setShouldResetDisplay(true);
  }, [equation, display]);

  const handleClear = useCallback(() => {
    setDisplay("0");
    setEquation("");
    setShouldResetDisplay(false);
  }, []);

  return (
    <flexboxLayout className="flex-1 bg-gray-900">
      <Display equation={equation} result={display} />
      
      <gridLayout rows="auto, auto, auto, auto, auto" columns="*, *, *, *" className="bg-gray-800 p-2">
        <Button row={0} col={0} text="C" variant="clear" onTap={handleClear} />
        <Button row={0} col={1} text="/" variant="operator" onTap={() => handleOperator('/')} />
        <Button row={0} col={2} text="×" variant="operator" onTap={() => handleOperator('*')} />
        <Button row={0} col={3} text="-" variant="operator" onTap={() => handleOperator('-')} />
        
        {/* Numbers 7-9 */}
        <Button row={1} col={0} text="7" onTap={() => handleNumber('7')} />
        <Button row={1} col={1} text="8" onTap={() => handleNumber('8')} />
        <Button row={1} col={2} text="9" onTap={() => handleNumber('9')} />
        <Button row={1} col={3} text="+" variant="operator" onTap={() => handleOperator('+')} />
        
        {/* Numbers 4-6 */}
        <Button row={2} col={0} text="4" onTap={() => handleNumber('4')} />
        <Button row={2} col={1} text="5" onTap={() => handleNumber('5')} />
        <Button row={2} col={2} text="6" onTap={() => handleNumber('6')} />
        
        {/* Numbers 1-3 */}
        <Button row={3} col={0} text="1" onTap={() => handleNumber('1')} />
        <Button row={3} col={1} text="2" onTap={() => handleNumber('2')} />
        <Button row={3} col={2} text="3" onTap={() => handleNumber('3')} />
        
        {/* Zero and decimal */}
        <Button row={4} col={0} text="0" colSpan={2} onTap={() => handleNumber('0')} />
        <Button row={4} col={2} text="." onTap={() => handleNumber('.')} />
        
        {/* Equals button */}
        <Button 
          row={2} 
          col={3} 
          rowSpan={3} 
          text="=" 
          variant="equals" 
          onTap={handleCalculate} 
        />
      </gridLayout>
      
      <label className="text-gray-400 text-center p-4">Calc by Vijay</label>
    </flexboxLayout>
  );
}