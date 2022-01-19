import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

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

const getQuestion = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();

  const question = `${x} ${y}`;
  const expectedAnswer = getGcd(x, y);

  return [question, String(expectedAnswer)];
};

const startBrainGcd = () => startGame(gameInstructions, getQuestion);

export default startBrainGcd;
