import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';

/*
 * Helped by: https://github.com/craftzdog/craftzdog-homepage/blob/master/components/theme-toggle-button.js
 */

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onButtonClick = () => {
    toggleColorMode();
  };

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        key={colorMode}
        initial={{ y: useColorModeValue(-10, 10), opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: useColorModeValue(-10, 10), opacity: 0 }}
        transition={{
          duration: 0.3,
          type: 'spring',
          bounce: 0.2
        }}
      >
        <IconButton
          aria-label="theme-chagner"
          backgroundColor={useColorModeValue('orange.400', 'purple.500')}
          borderRadius={{ base: 0, md: 'full' }}
          borderLeftRadius="full"
          pl={{ base: 1, md: 0 }}
          textColor={'white'}
          onClick={onButtonClick}
          icon={useColorModeValue(<SunIcon />, <MoonIcon />)}
          _hover={{
            backgroundColor: useColorModeValue('orange.200', 'purple.300')
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeChanger;
