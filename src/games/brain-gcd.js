import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

// Helpers

const getGcd = (x, y) => {
  let divisor = x > y ? x : y;

  while (divisor !== 1) {
    if (x % divisor === 0 && y % divisor === 0) {
      return divisor;
    }

    divisor -= 1;
  }

  return divisor;
};

// Game

const gameInstructions = 'Find the greatest common divisor of given numbers.';

const getQuestion = () => `${getRandomNumber()} ${getRandomNumber()}`;

const getExpectedAnswer = (expression) => {
  const [x, y] = parseUserInput(expression).map(Number);
  const divisor = getGcd(x, y);

  return String(divisor);
};

const startBrainGcd = () => startGame(
  gameInstructions,
  getQuestion,
  getExpectedAnswer,
);

export default startBrainGcd;
