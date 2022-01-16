import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

// Helpers

const isEven = (number) => number % 2 === 0;

// Game

const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

const getExpectedAnswer = (number) => (isEven(Number(number)) ? 'yes' : 'no');

const startBrainEven = () => startGame(
  gameInstructions,
  getRandomNumber,
  getExpectedAnswer,
);

export default startBrainEven;
