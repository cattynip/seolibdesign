import { useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const Separator = () => {
  const dividerBorderColor = useColorModeValue('black', 'white');

  return (
    <motion.hr
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
      className={`py-3 border-t-2 mt-6 border-gray-400 border-${dividerBorderColor}`}
    />
  );
};

export default Separator;
