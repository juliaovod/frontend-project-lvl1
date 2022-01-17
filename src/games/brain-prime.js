import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

// Helpers

const isPrime = (num) => {
  if (num <= 3) {
    return num > 1;
  }
  if (num % 2 === 0 || num % 3 === 0) {
    return false;
  }

  let counter = num;
  for (let i = num - 1; i > 1; i -= 1) {
    if (num % i === 0) {
      counter -= 1;
    }
  }

  return counter === num;
};

// Game

const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getExpectedAnswer = (number) => (isPrime(Number(number)) ? 'yes' : 'no');

const startBrainPrime = () => startGame(
  gameInstructions,
  getRandomNumber,
  getExpectedAnswer,
);

export default startBrainPrime;
