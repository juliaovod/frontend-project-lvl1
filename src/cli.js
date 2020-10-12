import promptly from 'promptly';

export default async () => {
  const name = await promptly.prompt('Welcome to the Brain Games! \nMay I have your name? \nYour answer: ');
  console.log('Hello, ', name);
};
