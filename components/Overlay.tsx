import { Box, BoxProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';

export const imageZIndex = 30;

interface IOverlay {
  children?: React.ReactNode;
}

const Overlay = ({ children, ...props }: IOverlay & BoxProps) => {
  return (
    <>
      <Box
        as={motion.div}
        zIndex={20}
        position="fixed"
        width={'full'}
        height="full"
        bg={'blackAlpha.800'}
        blur="3xl"
        top={0}
        left={0}
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.4
          }
        }}
        exit={{
          opacity: 0
        }}
        {...props}
      >
        {children}
      </Box>
    </>
  );
};

export default Overlay;
