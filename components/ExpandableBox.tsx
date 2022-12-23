import { Box, BoxProps } from '@chakra-ui/react';
import { getRandomNumber } from '@libs/math';
import { motion } from 'framer-motion';

export type appearDirectionType = 'top' | 'left' | 'bottom' | 'right';

interface IExpandableBox {
  id: string;
  appearDirection: appearDirectionType;
  appearDuration: number;
  appearDelay: number;
  children: React.ReactNode;
}

const ExpandableBox = ({
  id,
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
      initial={{
        scale: 1,
        y:
          appearDirection === 'top'
            ? -2000
            : appearDirection === 'bottom'
            ? 2000
            : 0,
        x:
          appearDirection === 'left'
            ? -2000
            : appearDirection === 'right'
            ? 2000
            : 0
      }}
      animate={{
        y: 0,
        x: 0,
        transition: {
          delay: getRandomNumber(1, appearDelay, false),
          bounce: 0.25,
          duration: appearDuration,
          type: 'spring'
        }
      }}
      whileHover={{
        borderRadius: '3%',
        scale: [1, 0.95, 1.75, 1.7],
        zIndex: [0, 0, 0, 10],
        transition: {
          type: 'spring',
          duration: 0.5
        }
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default ExpandableBox;
