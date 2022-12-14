import { shuffleArray } from './math';

export type TImageType = 'cover' | 'middle' | 'back';
const ImageExtension = '.jpeg';
const AllImageType: TImageType[] = ['cover', 'middle', 'back'];

const FlexibleImageUrls: string[] = fillImageUrls([]);
const StaticImageUrls: string[] = fillImageUrls([]);

export const GalleryEffectHeight = 240;

export const MaximumElementWidth = 100;
export const MinimumElementWidth = 50;

export const MatrixArray = [
  '0.74217 0.670211 -0.670211 0.74217 799.349 -474.65',
  '0.74217 0.670211 -0.670211 0.74217 519.962 -243.396',
  '0.760726 0.649074 -0.649074 0.760726 219.738 -18.5546'
];

export function getImageMore(howMany?: number): string[] {
  if (!howMany) howMany = 10;
  shuffleArray(FlexibleImageUrls);
  const returnArray = FlexibleImageUrls.slice(0, howMany);
  return returnArray;
}

export function getMatrixResult(index: number) {
  return MatrixArray[index];
}

/* eslint-disable @typescript-eslint/no-explicit-any */
function fillImageUrls(array: any[]): string[] {
  for (let i = 0; i < AllImageType.length; i++) {
    const currentImageType = AllImageType[i];
    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= (j === 1 ? 3 : j === 2 ? 2 : 1); k++) {
        if (currentImageType === 'middle') {
          for (let l = 1; l <= 2; l++) {
            array.push(
              `${currentImageType}/${j}-${j !== 3 ? k : l}${
                j !== 3 ? '-' + String(l) : ''
              }${ImageExtension}`
            );
          }
        } else {
          array.push(
            `${currentImageType}/${j}${
              j !== 3 ? '-' + String(k) : ''
            }${ImageExtension}`
          );
        }
      }
    }
  }

  return array;
}

export default StaticImageUrls;
