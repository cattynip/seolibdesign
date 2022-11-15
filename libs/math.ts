export const Chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

export function randomId(): string {
  let result = '';

  for (let i = 0; i < 10; i++) {
    result += Chars.charAt(Math.floor(Math.random() * Chars.length));
  }

  return result;
}

export function getRandomNumber(
  min: number,
  max: number,
  floor: boolean
): number {
  let returnValue = 0;

  if (floor) {
    returnValue = Math.floor(Math.random() * (max - min)) + min;
  } else {
    returnValue = Math.random() * (max - min) + min;
  }

  return returnValue;
}

export function shuffleArray<T>(array: T[]): T[] {
  // Source from : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex]
    ];
  }

  return array;
}
