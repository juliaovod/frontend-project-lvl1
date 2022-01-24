import playGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const isEven = (number) => number % 2 === 0;

// Game

const gameInstruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const randomNum = getRandomNumber();
  const expectedAnswer = isEven(randomNum) ? 'yes' : 'no';

  return { expectedAnswer, question: String(randomNum) };
};

const playBrainEven = () => playGame(gameInstruction, getQuestionAndAnswer);

export default playBrainEven;
