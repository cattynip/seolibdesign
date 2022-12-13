import { Box, BoxProps, Stack } from '@chakra-ui/react';
import ExpandableImage from '@components/ExpandableImage';
import { motion } from 'framer-motion';

interface IDetailedImage {
  imageData: string[];
}

export const ImageWidth = 120;
export const ImageHeight = (ImageWidth * 4) / 3;

const DetailedImage = ({ imageData, ...props }: IDetailedImage & BoxProps) => {
  return (
    <Box {...props}>
      <Stack as={motion.div} position="relative" m={0} cursor="pointer">
        {imageData.map((value, index) => (
          <ExpandableImage
            url={value}
            position={index === 1 ? 'absolute' : 'static'}
            top={index === 1 ? 1.5 : 0}
            left={index === 1 ? 5 : 0}
            zIndex={index === 1 ? -10 : 10}
            key={index}
            alt={value}
            shadow={index === 0 ? '2xl' : 'sm'}
            width={ImageWidth}
            height={ImageHeight}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default DetailedImage;
