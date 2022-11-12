import { Img, Stack } from '@chakra-ui/react';
import { ImageNumberPerWidth, ScreenWidth } from '@libs/imageUrl';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';

interface IHeaderGalleryElement {
  urls: string[];
  isExtra: boolean;
}

const HeaderGalleryElement = ({ urls, isExtra }: IHeaderGalleryElement) => {
  const [imageWidth] = useState<number>(ScreenWidth / ImageNumberPerWidth);
  const [speed] = useState<number>(10);

  const ImageVariant: Variants = {
    initial: {
      x: isExtra ? 0 : ScreenWidth
    },
    animate: {
      x: isExtra ? -ScreenWidth * 2 : -ScreenWidth,
      transition: {
        delay: isExtra ? speed / 2 - 0.03 : 0,
        ease: 'linear',
        duration: speed,
        repeat: Infinity
      }
    }
  };

  console.log(ScreenWidth);
  return (
    <AnimatePresence>
      <Stack
        bg={isExtra ? 'yellow' : 'transparent'}
        as={motion.div}
        width={ScreenWidth}
        display="flex"
        flexDir="row"
        experimental_spaceY={0}
        variants={ImageVariant}
        initial="initial"
        animate="animate"
      >
        {urls.map((url, index) => (
          <Img key={index} width={imageWidth} src={url} alt="Image" />
        ))}
      </Stack>
    </AnimatePresence>
  );
};

export default HeaderGalleryElement;
