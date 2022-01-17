import readlineSync from 'readline-sync';

export const setUserName = () => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

export const printQuestion = (questionText) => {
  console.log(`Question: ${questionText}`);
};

export const askUser = () => readlineSync.question('Your answer: ');

export const printCorrect = () => {
  console.log('Correct!');
};

export const printCongratulations = (userName) => {
  console.log(`Congratulations, ${userName}!`);
};

export const printTryAgain = (userName) => {
  console.log(`Let's try again, ${userName}!`);
};

export const printExpectedAnswer = (wrongAnswer, expectedAnswer) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
};
