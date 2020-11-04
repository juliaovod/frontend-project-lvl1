import promptly from 'promptly';

export const stdout = (...args) => {
  console.log(...args);
};

export const greetPlayer = async () => {
  stdout('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?: ');
  stdout(`Hello, ${name}!`);

  return name;
};
