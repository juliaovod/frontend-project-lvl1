import playGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  for (let i = Math.floor(num / 2); i > 1; i -= 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

// Game

const gameInstruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNum = getRandomNumber();
  const expectedAnswer = isPrime(randomNum) ? 'yes' : 'no';

  return { expectedAnswer, question: String(randomNum) };
};

const playBrainPrime = () => playGame(gameInstruction, getQuestionAndAnswer);

export default playBrainPrime;
