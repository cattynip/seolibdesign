import { Divider, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Separator = () => {
  const dividerBorderColor = useColorModeValue('black', 'white');

  return (
    <Divider
      as={motion.hr}
      initial={{
        x: 0,
        scaleX: 0
      }}
      animate={{
        x: 0,
        scaleX: 1,
        borderWidth: 100,
        transition: {
          duration: 0.7
        }
      }}
      py={3}
      borderColor={dividerBorderColor}
    />
  );
};

export default Separator;
