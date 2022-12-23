import { Box, BoxProps } from '@chakra-ui/react';
import { getRandomNumber } from '@libs/math';
import { motion, Variants } from 'framer-motion';

export type appearDirectionType = 'top' | 'left' | 'bottom' | 'right';

export const expandableComponentVariatns: Variants = {
  initial: ({ direction }) => ({
    scale: 1,
    x: direction === 'left' ? -2000 : direction === 'right' ? 2000 : 0,
    y: direction === 'top' ? -2000 : direction === 'bottom' ? 2000 : 0
  }),
  animate: ({ duration, delay }) => ({
    x: 0,
    y: 0,
    transition: {
      delay: getRandomNumber(1, delay, false),
      bounce: 0.25,
      duration: duration,
      type: 'spring'
    }
  }),
  whileHover: ({ hoverAnimation }) =>
    hoverAnimation
      ? {
          borderRadius: '3%',
          scale: [1, 0.95, 1.75, 1.7],
          zIndex: [0, 0, 0, 10],
          transition: {
            type: 'spring',
            duration: 0.4
          }
        }
      : {}
};

interface IExpandableBox {
  id: string;
  hoverAnimation?: boolean;
  appearDirection: appearDirectionType;
  appearDuration: number;
  appearDelay: number;
  children: React.ReactNode;
}

const ExpandableBox = ({
  id,
  hoverAnimation,
  appearDirection,
  appearDuration,
  appearDelay,
  children,
  ...props
}: IExpandableBox & BoxProps) => {
  return (
    <Box
      as={motion.div}
      layoutId={id}
      custom={{
        direction: appearDirection,
        duration: appearDuration,
        delay: appearDelay,
        hoverAnimation
      }}
      variants={expandableComponentVariatns}
      initial={'initial'}
      animate={'animate'}
      whileHover={'whileHover'}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ExpandableBox;
