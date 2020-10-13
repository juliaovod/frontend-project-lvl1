import promptly from 'promptly';

export const stdout = (...args) => {
  console.log(...args);
};

export default async () => {
  stdout('Welcome to the Brain Games! \nMay I have your name?');

  const name = await promptly.prompt('Your answer: ');

  stdout('Hello, ', name);

  return name;
};
