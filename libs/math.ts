export const Chars =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

interface ICompareRouter {
  first: string;
  second: string;
  standard?: string;
}

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

export function compareRouter({
  first,
  second,
  standard = '/'
}: ICompareRouter): boolean {
  if (!standard) standard = '/';
  const firstSplitedArray = splitIntoArray(first, standard, (value: string) => {
    if (value === '') {
      return false;
    }
    return true;
  });

  const secondSplitedArray = splitIntoArray(
    second,
    standard,
    (value: string) => {
      if (value === '') {
        return false;
      }
      return true;
    }
  );

  const difference = getDifference(secondSplitedArray, firstSplitedArray);

  if (difference.length !== 0) {
    return true;
  }
  return false;
}

export function getDifference<T>(first: T[], second: T[]): T[] {
  return first.filter(element => {
    return second.includes(element);
  });
}

export function splitIntoArray(
  strings: string,
  standard: string,
  filterFunction?: (value: string) => boolean
): string[] {
  const splitedArr = strings.split(standard);

  if (filterFunction) {
    return splitedArr.filter(filterFunction);
  } else {
    return splitedArr;
  }
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

export function firstCapitalize(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function makeOrdinalNumbers(number: number): string {
  let string: string;

  if (number === 1) {
    string = 'first';
  } else if (number === 2) {
    string = 'second';
  } else if (number === 3) {
    string = 'third';
  } else {
    string = '';
  }

  return string;
}

export function changeToAngle(angle: number): number {
  return (angle * Math.PI) / 180;
}
