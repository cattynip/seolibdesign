import { Box } from '@chakra-ui/react';
import { motion, Variants } from 'framer-motion';
import ProjectIcon from './ProjectIcon';

interface IGalleryButton {
  direction: TGalleryButtonDirection;
  isShown: boolean;
  onClickFn: () => void;
}

type TGalleryButtonDirection = 'left' | 'right';

const distance = 5;
const galleryButtonVariants: Variants = {
  initial: (direction: TGalleryButtonDirection) => ({
    x: direction === 'left' ? distance : -distance,
    opacity: 0
  }),
  animate: {
    x: 0,
    opacity: 1,
    rotateZ: 360,
    transition: {
      delay: 0.3
    }
  },
  exit: (direction: TGalleryButtonDirection) => ({
    x: direction === 'left' ? -distance : distance,
    opacity: 0
  })
};

const GalleryButton = ({ direction, isShown, onClickFn }: IGalleryButton) => {
  return (
    <Box key={`${direction}`}>
      {isShown ? (
        <Box
          as={motion.div}
          custom={direction}
          variants={galleryButtonVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          cursor="pointer"
          onClick={onClickFn}
        >
          <ProjectIcon iconType={`${direction}Arrow`} size={30} />
        </Box>
      ) : null}
    </Box>
  );
};

export default GalleryButton;
