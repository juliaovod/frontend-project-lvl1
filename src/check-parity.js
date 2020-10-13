import _ from 'lodash';
import promptly from 'promptly';

import greetUser, { stdout } from './cli.js';

export default async () => {
  const name = await greetUser();

  const iter = async (attempts) => {
    if (attempts === 0) {
      stdout(`Congratulations, ${name}!`);
    } else {
      const num = _.random(0, 100);

      stdout('Answer "yes" if the number is even, otherwise answer "no".');
      stdout('Question: ', num);

      const response = await promptly.prompt('Your answer: ');

      const isEven = num % 2 === 0;
      const isValid = (isEven && response === 'yes') || (!isEven && response === 'no');

      if (isValid) {
        stdout('Correct!');
        iter(attempts - 1);
      } else {
        stdout(`"yes" is wrong response ;(. Correct response was "no".\nLet's try again, ${name}!`);
      }
    }
  };

  iter(3);
};
