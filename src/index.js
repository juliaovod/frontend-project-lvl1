import readlineSync from 'readline-sync';

import isEven from './utils/is-even.js';
import random from './utils/random.js';

export const welcomeMessage = () => console.log('Welcome to the Brain Games!');

export const getUserName = () => {
  const message = 'May I have your name? ';
  return readlineSync.question(message);
};

export const greetUser = () => {
  const username = getUserName();
  console.log(`Hello, ${username}!`);
};

export const checkParity = () => {
  const username = getUserName();
  console.log(`Hello, ${username}!`);

  console.log('Answer "yes" if the number is even, otherwise response "no".');

  const game = (attempts) => {
    if (attempts === 0) {
      console.log(`Congratulations, ${username}!`);
      return;
    }

    const num = random(0, 100);
    console.log('Question:', num);

    const response = readlineSync.question();
    console.log('Your response:', response);

    const isCorrectResponse = (isEven(num) && response === 'yes') || (!isEven(num) && response === 'no');

    if (isCorrectResponse) {
      console.log('Correct!');
      game(attempts - 1);
    } else {
      console.log(`"yes" is wrong response ;(. Correct response was "no".\nLet's try again, ${username}!`);
    }
  };

  game(3);
};
