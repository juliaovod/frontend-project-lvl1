import readlineSync from 'readline-sync';

import isEven from './utils/is-even.js';
import random from './utils/random.js';
import stdout from './log/sdtout.js';

export const welcomeMessage = () => stdout('Welcome to the Brain Games!');

export const getUserName = () => {
  const message = 'May I have your name?';
  return readlineSync.question(message);
};

export const greetUser = () => {
  const username = getUserName();
  stdout('Hello,', username, '!');
};

export const checkParity = () => {
  const username = getUserName();
  stdout('Hello,', username, '!');

  stdout('Answer "yes" if the number is even, otherwise response "no".');

  const game = (atempts) => {
    if (atempts === 0) {
      stdout('Congratulations, ', username, '!');
      return;
    }

    const num = random(0, 100);
    stdout('Question: ', num);

    const response = readlineSync.question();
    stdout('Your response: ', response);

    const isCorrectResponse = (isEven(num) && response === 'yes') || (!isEven(num) && response === 'no');

    if (isCorrectResponse) {
      stdout('Correct!');
      game(username, atempts - 1);
    } else {
      stdout('"yes" is wrong response ;(. Correct response was "no". \n', 'Let\'s try again,', username, '!');
    }
  };

  game(3);
};
