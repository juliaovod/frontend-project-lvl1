import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const isEven = (number) => number % 2 === 0;

// Game

const gameInstructions = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestion = () => {
  const randomNum = getRandomNumber();
  const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';

  return [String(randomNum), expectedAnswer];
};

const startBrainEven = () => startGame(gameInstructions, getQuestion);

export default startBrainEven;
