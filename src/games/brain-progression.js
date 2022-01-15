import startGame from '../index.js';
import { getRandomNumber, parseUserInput } from '../utils.js';

const progressionGap = '..';

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

const generateProgressionWithGap = () => {
  const progression = generateProgression();

  const randomIndex = getRandomNumber(0, progression.length - 1);
  progression[randomIndex] = progressionGap;

  return progression;
};

const getMissedNumberInProgression = (progression) => {
  const gapIndex = progression.indexOf(progressionGap);

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

const gameInstructions = 'What number is missing in the progression?';

const getQuestion = () => {
  const progression = generateProgressionWithGap();
  return progression.join(' ');
};

const getExpectedAnswer = (progression) => {
  const parsedProgression = parseUserInput(progression)
    .map((value) => (value === progressionGap ? value : Number(value)));

  const expectedAnswer = getMissedNumberInProgression(parsedProgression);
  return String(expectedAnswer);
};

const startBrainProgression = () => startGame(
  gameInstructions,
  getQuestion,
  getExpectedAnswer,
);

export default startBrainProgression;
