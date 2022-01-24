import playGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    const number = start + (i * step);
    progression.push(number);
  }

  return progression;
};

// Game

const progressionGap = '..';

const gameInstruction = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  const progression = generateProgression(start, step, length);

  const randomIndex = getRandomNumber(0, progression.length - 1);
  const expectedAnswer = progression[randomIndex];

  progression[randomIndex] = progressionGap;

  return { expectedAnswer: String(expectedAnswer), question: progression.join(' ') };
};

const playBrainProgression = () => playGame(gameInstruction, getQuestionAndAnswer);

export default playBrainProgression;
