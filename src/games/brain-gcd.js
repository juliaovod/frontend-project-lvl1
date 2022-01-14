import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const getGreatestCommonDivisor = (x, y) => {
  let counter = x > y ? x : y;

  while (counter !== 1) {
    if (x % counter === 0 && y % counter === 0) {
      return counter;
    }

    counter -= 1;
  }

  return counter;
};

const generateExpression = () => `${getRandomNumber()} ${getRandomNumber()}`;

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (expressionStr) => {
  const [x, y] = expressionStr.split(' ').map(Number);
  return String(getGreatestCommonDivisor(x, y));
};

const startBrainGcd = () => startGame(
  gameInstruction,
  generateExpression,
  getRightAnswer,
);

export default startBrainGcd;
