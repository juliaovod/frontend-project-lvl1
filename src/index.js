import {
  getUserAnswer,
  getUserName,
  printCongratulations,
  printCorrect,
  printExpectedAnswer,
  printQuestion,
  printTryAgain,
} from './cli.js';

const GAME_MAX_ROUNDS = 3;

const isLastRound = (round) => round === GAME_MAX_ROUNDS;
const isWrongAnswer = (userAnswer, expectedAnswer) => userAnswer !== expectedAnswer;

const startGame = (gameInstructions, getQuestion, getExpectedAnswer) => {
  const userName = getUserName();

  console.log(gameInstructions);

  for (let round = 1; round <= GAME_MAX_ROUNDS; round += 1) {
    const roundQuestion = getQuestion();
    printQuestion(roundQuestion);

    const userAnswer = getUserAnswer();
    const expectedAnswer = getExpectedAnswer(roundQuestion);

    if (isWrongAnswer(userAnswer, expectedAnswer)) {
      printTryAgain(userName);
      printExpectedAnswer(userAnswer, expectedAnswer);

      return;
    }

    printCorrect();

    if (isLastRound(round)) {
      printCongratulations(userName);
    }
  }
};

export default startGame;
