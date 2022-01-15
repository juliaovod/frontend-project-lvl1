import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

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

const gameInstructions = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (expression) => {
  const [x, y] = parseUserInput(expression).map(Number);
  const greatestCommonDivisor = getGreatestCommonDivisor(x, y);

  return String(greatestCommonDivisor);
};

const startBrainGcd = () => startGame(
  gameInstructions,
  generateExpression,
  getRightAnswer,
);

export default startBrainGcd;
