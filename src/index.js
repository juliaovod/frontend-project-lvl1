import readlineSync from 'readline-sync';

import _ from 'lodash';

import getUserName from './utils/get-user-name.js';

export const greeting = () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);
};

const gameEven = (userName, atempts) => {
  if (atempts === 0) {
    console.log(`Congratulations, ${userName}!`);
    return;
  }

  const isEven = (num) => num % 2 === 0;

  const num = _.random(0, 100);
  console.log(`Question: ${num}`);

  const answer = readlineSync.question();
  console.log(`Your answer: ${answer}`);

  if ((isEven(num) && answer === 'yes') || (!isEven(num) && answer === 'no')) {
    console.log('Correct!');
    gameEven(userName, atempts - 1);
  } else {
    console.log(`
      "yes" is wrong answer ;(. Correct answer was "no".
      Let's try again, ${userName}!
    `);
  }
};

export const isEvenNum = () => {
  const userName = getUserName();
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  gameEven(userName, 3);
};
