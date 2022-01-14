import startGame from '../index.js';

const isEven = (number) => Number(number) % 2 === 0;

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';
const getRandomNumber = (max = 100) => Math.floor(Math.random() * max);
const getRightAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const startBrainEven = () => startGame(
  gameInstruction,
  getRandomNumber,
  getRightAnswer,
);

export default startBrainEven;
