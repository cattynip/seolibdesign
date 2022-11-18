import { Box, Img, Stack } from '@chakra-ui/react';
import ExpandableImage from './ExpandableImage';

interface IDetailedImage {
  imageData: string[];
}

const ImageWidth = 120;
const ImageHeight = (ImageWidth * 4) / 3;

const DetailedImage = ({ imageData }: IDetailedImage) => {
  return (
    <Box>
      {imageData.length === 1 ? (
        <ExpandableImage
          url={imageData[0]}
          width={ImageWidth}
          height={ImageHeight}
        />
      ) : (
        <Stack position="relative" m={0} cursor="pointer">
          {imageData.map((value, index) => (
            <Img
              position={index === 1 ? 'absolute' : 'static'}
              top={index === 1 ? 1.3 : 0}
              left={index === 1 ? 3 : 0}
              zIndex={index === 1 ? -10 : 10}
              key={index}
              src={value}
              alt={value}
              width={ImageWidth}
              height={ImageHeight}
            />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default DetailedImage;
