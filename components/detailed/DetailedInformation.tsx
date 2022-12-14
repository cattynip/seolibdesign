import { Box, Text } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

interface IDetailedInformation {
  information: string | React.ReactNode;
}

const DetailedInformation = ({ information }: IDetailedInformation) => {
  return (
    <AnimatePresence>
      <Box
        as={motion.div}
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
          transition: {
            delay: 0.4,
            duration: 0.8,
            type: 'spring',
            bounce: 0.6
          }
        }}
      >
        <Text lineHeight={1.6}>{information}</Text>
      </Box>
    </AnimatePresence>
  );
};

export default DetailedInformation;
