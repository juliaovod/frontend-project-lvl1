import readlineSync from 'readline-sync';

const GAME_ROUNDS_COUNT = 3;

const playGame = (gameInstruction, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameInstruction);

  for (let round = 1; round <= GAME_ROUNDS_COUNT; round += 1) {
    const { expectedAnswer, question } = getQuestionAndAnswer();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== expectedAnswer) {
      console.log(`Let's try again, ${userName}!`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);

      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
