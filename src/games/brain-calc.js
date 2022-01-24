import playGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const OPERATORS = ['*', '+', '-'];
const getRandomOperator = () => OPERATORS[getRandomNumber(0, OPERATORS.length)];

const calcExpression = (x, y, operator) => {
  let result;

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
      return null;
  }

  return result;
};

// Game

const gameInstruction = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();
  const operator = getRandomOperator();

  const question = `${x} ${operator} ${y}`;
  const expectedAnswer = calcExpression(x, y, operator);

  return { expectedAnswer: String(expectedAnswer), question };
};

const playBrainCalc = () => playGame(gameInstruction, getQuestionAndAnswer);

export default playBrainCalc;
