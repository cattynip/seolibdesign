import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

const ThemeChanger = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const onButtonClick = () => {
    toggleColorMode();
  };

  const bgColor = useColorModeValue('purple.500', 'orange.400');

  return (
    <Button
      onClick={onButtonClick}
      bg={bgColor}
      textColor="white"
      borderWidth={1}
      borderRadius="md"
      _hover={{
        backgroundColor: useColorModeValue('orange.400', 'purple.500')
      }}
      p={0}
    >
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};

export default ThemeChanger;
