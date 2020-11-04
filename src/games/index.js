/* eslint-disable class-methods-use-this */
import { greetPlayer, stdout } from '../cli.js';

class BrainGame {
  constructor(generator, validator) {
    this.generator = generator;
    this.validator = validator;

    this.name = 'Player';
    this.attempts = 3;
  }

  play() {
    stdout('Question: ', this.generator());
  }

  say(message) {
    stdout(message);
  }

  async greetPlayer() {
    await greetPlayer();
  }

  start() {
    this.play();
  }
}

export default BrainGame;
