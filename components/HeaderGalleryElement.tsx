import { Img, Stack } from '@chakra-ui/react';
import {
  ImageHeight,
  ImageNumberPerWidth,
  ImageWidth,
  ScreenWidth
} from '@libs/imageUrl';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface IHeaderGalleryElement {
  urls: string[];
  isExtra: boolean;
}

const HeaderGalleryElement = ({ urls, isExtra }: IHeaderGalleryElement) => {
  const [imageWidth] = useState<number>(ScreenWidth / ImageNumberPerWidth);
  const [speed] = useState<number>(12);

  return (
    <AnimatePresence>
      <Stack
        bg={isExtra ? 'yellow' : 'blue'}
        as={motion.div}
        width={ScreenWidth}
        height={ImageHeight}
        display="flex"
        flexDir="row"
        experimental_spaceY={0}
        initial={{ x: isExtra ? 0 : ScreenWidth }}
        animate={{
          x: isExtra ? -ScreenWidth * 2 : -ScreenWidth,
          transition: {
            delay: isExtra ? speed / 2 - 0.03 : 0,
            ease: 'linear',
            duration: speed,
            repeat: Infinity
          }
        }}
      >
        {urls.map((url, index) => (
          <Img
            key={index}
            width={imageWidth}
            height={ImageHeight}
            src={url}
            alt="Image"
          />
        ))}
      </Stack>
    </AnimatePresence>
  );
};

export default HeaderGalleryElement;
