import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const OPERATORS = ['*', '+', '-'];
const getRandomOperator = () => OPERATORS[getRandomNumber(OPERATORS.length)];

const getExpressionResult = (expressionStr) => {
  const expressionArr = expressionStr.split(' ');

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

const MAX_RANDOM_NUMBER = 50;
const generateExpression = () => {
  const x = getRandomNumber(MAX_RANDOM_NUMBER);
  const y = getRandomNumber(MAX_RANDOM_NUMBER);

  const operator = getRandomOperator();

  return `${x} ${operator} ${y}`;
};

const gameInstruction = 'What is the result of the expression?';

const startBrainCalc = () => startGame(
  gameInstruction,
  generateExpression,
  getExpressionResult,
);

export default startBrainCalc;
