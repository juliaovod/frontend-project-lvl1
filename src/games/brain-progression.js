import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const generateProgression = (initialNum, diff, length) => {
  const progression = [];

  for (let i = 0; i <= length; i += 1) {
    const number = initialNum + ((i - 1) * diff);
    progression.push(number);
  }

  return progression;
};

const generateRandomProgression = () => {
  const initialNum = getRandomNumber();
  const diff = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  return generateProgression(initialNum, diff, length);
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
