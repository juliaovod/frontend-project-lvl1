import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const OPERATORS = {
  MINUS: '-',
  MULTIPLY: '*',
  PLUS: '+',
};

const getRandomOperator = () => Object.values(OPERATORS)[getRandomNumber(2)];

const calcExpression = (expressionStr) => {
  const expressionArr = expressionStr.split(' ');

  const [a, , b] = expressionArr.map(Number);
  const [, operator] = expressionArr;

  switch (operator) {
    case OPERATORS.PLUS:
      return a + b;
    case OPERATORS.MINUS:
      return a >= b ? a - b : b - a;
    case OPERATORS.MULTIPLY:
      return a * b;
    default:
      return null;
  }
};

const MAX_RANDOM_NUMBER = 50;
const makeExpression = () => {
  const operands = [getRandomNumber(MAX_RANDOM_NUMBER), getRandomNumber(MAX_RANDOM_NUMBER)];

  operands.sort((a, b) => b - a);

  const operator = getRandomOperator();

  return operands.join(` ${operator} `);
};

const gameInstruction = 'What is the result of the expression?';

const startBrainCalc = () => startGame(
  gameInstruction,
  makeExpression,
  calcExpression,
);

export default startBrainCalc;
