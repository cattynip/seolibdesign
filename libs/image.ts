import { shuffleArray } from './math';

type TImageType = 'cover' | 'middle' | 'back';
const ImageExtension = '.jpeg';
const AllImageType: TImageType[] = ['cover', 'middle', 'back'];

const FlexibleImageUrls: string[] = fillImageUrls([]);
const StaticImageUrls: string[] = fillImageUrls([]);

export const GalleryEffectHeight = 240;

export const MaximumElementWidth = 100;
export const MinimumElementWidth = 50;

export function getImageMore(howMany?: number): string[] {
  if (!howMany) howMany = 10;
  shuffleArray(FlexibleImageUrls);
  const returnArray = FlexibleImageUrls.slice(0, howMany);
  return returnArray;
}

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