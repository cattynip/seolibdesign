import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Button, useColorMode, useColorModeValue } from '@chakra-ui/react';

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
      borderRadius="full"
      borderRightRadius={{ base: 0, md: 'full' }}
      height={10}
      width={10}
      p={0}
      _hover={{
        backgroundColor: useColorModeValue('orange.400', 'purple.500')
      }}
    >
      <Box pl={{ base: 2, md: 0 }}>
        {colorMode === 'light' ? <SunIcon w={4} /> : <MoonIcon w={4} />}
      </Box>
    </Button>
  );
};

export default ThemeChanger;
