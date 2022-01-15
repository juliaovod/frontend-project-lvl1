import {
  getUserAnswer,
  getUserName,
  printCongratulations,
  printCorrect,
  printQuestion,
  printTryAgain,
  printRightAnswer,
} from './cli.js';

const GAME_MAX_ROUNDS = 3;

const isLastRound = (round) => round === GAME_MAX_ROUNDS;
const isWrongAnswer = (userAnswer, rightAnswer) => userAnswer !== rightAnswer;

const startGame = (gameInstructions, getQuestion, getRightAnswer) => {
  const userName = getUserName();

  console.log(gameInstructions);

  for (let round = 1; round <= GAME_MAX_ROUNDS; round += 1) {
    const roundQuestion = getQuestion();
    printQuestion(roundQuestion);

    const userAnswer = getUserAnswer();
    const rightAnswer = getRightAnswer(roundQuestion);

    if (isWrongAnswer(userAnswer, rightAnswer)) {
      printTryAgain(userName);
      printRightAnswer(userAnswer, rightAnswer);

      return;
    }

    printCorrect();

    if (isLastRound(round)) {
      printCongratulations(userName);
    }
  }
};

export default startGame;
