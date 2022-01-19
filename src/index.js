import readlineSync from 'readline-sync';
import setUserName from './cli.js';

const GAME_MAX_ROUNDS = 3;

const isLastRound = (round) => round === GAME_MAX_ROUNDS;

const startGame = (gameInstructions, getQuestion) => {
  const userName = setUserName();

  console.log(gameInstructions);

  for (let round = 1; round <= GAME_MAX_ROUNDS; round += 1) {
    const [question, expectedAnswer] = getQuestion();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== expectedAnswer) {
      console.log(`Let's try again, ${userName}!`);
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);

      return;
    }

    console.log('Correct!');

    if (isLastRound(round)) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default startGame;
