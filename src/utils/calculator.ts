export const calculate = (equation: string, display: string): string => {
  try {
    const result = eval(equation + display);
    return String(result);
  } catch (e) {
    return "Error";
  }
};