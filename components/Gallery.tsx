import { AspectRatio, Box, Img } from '@chakra-ui/react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import { useState } from 'react';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';
import GalleryButton from './GalleryButton';

interface ISpaceImages {
  images: string[];
}

const imageCardVariants: Variants = {
  initial: (isBack: boolean) => ({
    x: isBack ? -500 : 500,
    opacity: 0,
    scale: 0
  }),
  animate: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.1,
      duration: 1
    }
  },
  exit: (isBack: boolean) => ({
    x: isBack ? 500 : -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.2
    }
  })
};

const Gallery = ({ images }: ISpaceImages) => {
  const [visible, setVisible] = useState<number>(0);
  const [back, setBack] = useState<boolean>(false);

  const next = () => {
    setBack(false);
    setVisible(prev => prev + 1);
  };

  const prev = () => {
    setBack(true);
    setVisible(prev => prev - 1);
  };

  return (
    <Box position={'relative'}>
      <AspectRatio ratio={4 / 3} overflow="hidden">
        <AnimatePresence custom={back}>
          <Img
            as={motion.img}
            src={images[visible]}
            custom={back}
            position="absolute"
            variants={imageCardVariants}
            width="100%"
            height={'100%'}
            initial={'initial'}
            animate={'animate'}
            exit={'exit'}
            key={visible}
          />
        </AnimatePresence>
      </AspectRatio>
      <Box
        position={'absolute'}
        display="flex"
        width={'100%'}
        left={0}
        top={'calc(50% - 30px)'}
        justifyContent="space-between"
        px={3}
      >
        <AnimatePresence>
          <GalleryButton
            direction="left"
            isShown={visible !== 0}
            onClickFn={prev}
          />
          <GalleryButton
            direction="right"
            isShown={images.length - 1 !== visible}
            onClickFn={next}
          />
        </AnimatePresence>
      </Box>
    </Box>
  );
};

export default Gallery;
