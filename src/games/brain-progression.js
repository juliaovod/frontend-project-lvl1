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
  return progression.map((number, index) => (index === randomIndex ? progressionGap : number)).join(' ');
};

const getRightAnswer = (progression) => {
  const parsedProgression = parseUserInput(progression)
    .map((value) => (value === progressionGap ? value : Number(value)));

  const gapIndex = parsedProgression.indexOf(progressionGap);

  let missedNumber;

  if (gapIndex === 0 || gapIndex === parsedProgression.length - 1) {
    const [, x, y] = parsedProgression;
    const diff = y - x;

    missedNumber = x - diff;
  } else {
    const x = parsedProgression[gapIndex - 1];
    const y = parsedProgression[gapIndex + 1];
    const diff = (y - x) / 2;

    missedNumber = x + diff;
  }

  return String(missedNumber);
};

const gameInstructions = 'What number is missing in the progression?';

const startBrainProgression = () => startGame(
  gameInstructions,
  generateProgressionWithGap,
  getRightAnswer,
);

export default startBrainProgression;
