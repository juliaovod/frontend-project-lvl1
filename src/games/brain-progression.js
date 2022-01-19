import startGame from '../index.js';
import getRandomNumber from '../get-random-number.js';

// Helpers

const PROGRESSION_GAP = '..';

const generateProgression = () => {
  const progression = [getRandomNumber()];
  const randomLength = getRandomNumber(5, 10);

  const [firstNumber] = progression;
  const diff = getRandomNumber(1, 5);

  const startWithSecondNumber = 2;

  for (let i = startWithSecondNumber; i <= randomLength; i += 1) {
    const number = firstNumber + ((i - 1) * diff);
    progression.push(number);
  }

  return progression;
};

const generateProgressionWithGap = (gapValue) => {
  const progression = generateProgression();

  const randomIndex = getRandomNumber(0, progression.length - 1);
  progression[randomIndex] = gapValue;

  return progression;
};

const getMissedNumberInProgression = (progression, gapIndex) => {
  let missedNumber;

  if (gapIndex === 0 || gapIndex === progression.length - 1) {
    const [, x, y] = progression;
    const diff = y - x;

    missedNumber = x - diff;
  } else {
    const x = progression[gapIndex - 1];
    const y = progression[gapIndex + 1];
    const diff = (y - x) / 2;

    missedNumber = x + diff;
  }

  return missedNumber;
};

// Game

const gameInstructions = 'What number is missing in the progression?';

const getQuestion = () => {
  const progression = generateProgressionWithGap(PROGRESSION_GAP);
  const question = progression.join(' ');

  const gapIndex = progression.indexOf(PROGRESSION_GAP);
  const expectedAnswer = getMissedNumberInProgression(progression, gapIndex);

  return [question, String(expectedAnswer)];
};

const startBrainProgression = () => startGame(gameInstructions, getQuestion);

export default startBrainProgression;
