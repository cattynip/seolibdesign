const capitalizeString = (str: string): string => {
  const words = str.split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }

  const returnedString = words.join(' ');

  return returnedString;
};

export default capitalizeString;
