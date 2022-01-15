export const getRandomNumber = (min = 1, max = 50) => Math.floor(Math.random() * (max - min) + min);

export const parseUserInput = (input = '', divider = ' ') => input.split(divider);
