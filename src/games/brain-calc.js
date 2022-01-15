import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

const OPERATORS = ['*', '+', '-'];
const getRandomOperator = () => OPERATORS[getRandomNumber(0, OPERATORS.length)];

const calcExpression = (x, y, operator) => {
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

  return result;
};

const gameInstructions = 'What is the result of the expression?';

const generateExpression = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();

  const operator = getRandomOperator();

  return [x, y, operator];
};

const getQuestion = () => {
  const [x, y, operator] = generateExpression();
  return `${x} ${operator} ${y}`;
};

const getExpectedAnswer = (expression) => {
  const parsedExpression = parseUserInput(expression);

  const [x, , y] = parsedExpression.map(Number);
  const [, operator] = parsedExpression;

  const result = calcExpression(x, y, operator);

  return String(result);
};

const startBrainCalc = () => startGame(
  gameInstructions,
  getQuestion,
  getExpectedAnswer,
);

export default startBrainCalc;
