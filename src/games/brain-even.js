import startGame from '../index.js';
import { getRandomNumber } from '../utils.js';

export const isEven = (number) => Number(number) % 2 === 0;

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const getRightAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const startBrainEven = () => startGame(
  gameInstruction,
  getRandomNumber,
  getRightAnswer,
);

export default startBrainEven;
