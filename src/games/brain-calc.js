import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

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

const generateExpression = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();

  const operator = getRandomOperator();

  return [x, y, operator];
};

// Game

const gameInstructions = 'What is the result of the expression?';

const getQuestion = () => {
  const [x, y, operator] = generateExpression();
  const question = `${x} ${operator} ${y}`;

  const expectedAnswer = calcExpression(x, y, operator);

  return [question, expectedAnswer];
};

const startBrainCalc = () => startGame(gameInstructions, getQuestion);

export default startBrainCalc;
