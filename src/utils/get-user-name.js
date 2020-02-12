import readlineSync from 'readline-sync';

const getUserName = () => {
  const message = 'May I have your name?';
  return readlineSync.question(message);
};

export default getUserName;
