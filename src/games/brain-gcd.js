import playGame from '../index.js';
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

const gameInstruction = 'Find the greatest common divisor of given numbers.';

const getQuestionAndAnswer = () => {
  const x = getRandomNumber();
  const y = getRandomNumber();

  const question = `${x} ${y}`;
  const expectedAnswer = getGcd(x, y);

  return { expectedAnswer: String(expectedAnswer), question };
};

const playBrainGcd = () => playGame(gameInstruction, getQuestionAndAnswer);

export default playBrainGcd;
