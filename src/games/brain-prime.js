import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const gameInstructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  if (number <= 3) {
    return number > 1;
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false;
  }

  let counter = number;

  for (let i = number - 1; i > 1; i -= 1) {
    if (number % i === 0) {
      counter += 1;
    }
  }

  return counter === number;
};

const getRightAnswer = (number) => (isPrime(Number(number)) ? 'yes' : 'no');

const startBrainPrime = () => startGame(
  gameInstructions,
  getRandomNumber,
  getRightAnswer,
);

export default startBrainPrime;
