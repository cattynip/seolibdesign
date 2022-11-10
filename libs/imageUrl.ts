type TImageType = 'cover' | 'middle' | 'back';
const extension = '.jpeg';
const AllImageType: TImageType[] = ['cover', 'middle', 'back'];

const imageUrls: string[] = [];

function fillImageUrls() {
  for (let i = 0; i < AllImageType.length; i++) {
    const currentImageType = AllImageType[i];

    for (let j = 1; j <= 3; j++) {
      for (let k = 1; k <= (j === 1 ? 3 : j === 2 ? 2 : 1); k++) {
        if (currentImageType === 'middle') {
          for (let l = 1; l <= 2; l++) {
            imageUrls.push(
              `${currentImageType}/${j}-${j !== 3 ? k : l}${
                j !== 3 ? '-' + String(l) : ''
              }${extension}`
            );
          }
        } else {
          imageUrls.push(
            `${currentImageType}/${j}${
              j !== 3 ? '-' + String(k) : ''
            }${extension}`
          );
        }
      }
    }
  }
}

fillImageUrls();

export default imageUrls;
