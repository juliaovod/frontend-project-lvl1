import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

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
  return progression.join(' ');
};

const getExpectedAnswer = (progression) => {
  const parsedProgression = parseUserInput(progression)
    .map((value) => (value === PROGRESSION_GAP ? value : Number(value)));

  const gapIndex = parsedProgression.indexOf(PROGRESSION_GAP);
  const expectedAnswer = getMissedNumberInProgression(parsedProgression, gapIndex);

  return String(expectedAnswer);
};

const startBrainProgression = () => startGame(
  gameInstructions,
  getQuestion,
  getExpectedAnswer,
);

export default startBrainProgression;
