import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const generateProgression = (start, step, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    const number = start + ((i - 1) * step);
    progression.push(number);
  }

  return progression;
};

const generateRandomProgression = () => {
  const start = getRandomNumber();
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  return generateProgression(start, step, length);
};

// Game

const progressionGap = '..';

const gameInstructions = 'What number is missing in the progression?';

const getQuestion = () => {
  const progression = generateRandomProgression();

  const randomIndex = getRandomNumber(0, progression.length - 1);
  const expectedAnswer = progression[randomIndex];

  progression[randomIndex] = progressionGap;

  return [progression.join(' '), String(expectedAnswer)];
};

const startBrainProgression = () => startGame(gameInstructions, getQuestion);

export default startBrainProgression;
