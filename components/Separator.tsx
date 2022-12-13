import { Divider, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Separator = () => {
  const dividerBorderColor = useColorModeValue(
    'blackAlpha.600',
    'whiteAlpha.500'
  );

  return (
    <Divider
      as={motion.hr}
      initial={{
        x: -100000
      }}
      animate={{
        x: 0,
        transition: {
          duration: 3
        }
      }}
      py={3}
      borderColor={dividerBorderColor}
    />
  );
};

export default Separator;
