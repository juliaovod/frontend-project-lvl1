import readlineSync from 'readline-sync';

import greetUser from '../cli.js';

const MAX_ROUNDS = 3;

const getRandomNumber = () => Math.floor(Math.random() * 100);
const isEven = (number) => number % 2 === 0;

const startBrainEven = () => {
  const userName = greetUser();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let currentRound = 1;

  while (currentRound <= MAX_ROUNDS) {
    const value = getRandomNumber();

    console.log(`Question: ${value}`);

    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = isEven(value) ? 'yes' : 'no';

    if (answer !== rightAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }

    if (currentRound === MAX_ROUNDS) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    currentRound += 1;
  }
};

export default startBrainEven;
