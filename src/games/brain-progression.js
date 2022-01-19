import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const generateProgression = (startFrom, diff, length) => {
  const progression = [startFrom];
  const startIndex = 2;

  for (let i = startIndex; i <= length; i += 1) {
    const number = startFrom + ((i - 1) * diff);
    progression.push(number);
  }

  return progression;
};

const generateRandomProgression = () => {
  const startFrom = getRandomNumber();
  const diff = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);

  return generateProgression(startFrom, diff, length);
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
