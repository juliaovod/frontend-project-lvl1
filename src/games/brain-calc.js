import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

const OPERATORS = ['*', '+', '-'];
const getRandomOperator = () => OPERATORS[getRandomNumber(OPERATORS.length)];

const getExpressionResult = (expression) => {
  const expressionArr = parseUserInput(expression);

  const [x, , y] = expressionArr.map(Number);
  const [, operator] = expressionArr;

  let result = null;

  switch (operator) {
    case '*':
      result = x * y;
      break;
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    default:
      return result;
  }

  return String(result);
};

const generateExpression = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();

  const operator = getRandomOperator();

  return `${x} ${operator} ${y}`;
};

const gameInstructions = 'What is the result of the expression?';

const startBrainCalc = () => startGame(
  gameInstructions,
  generateExpression,
  getExpressionResult,
);

export default startBrainCalc;
