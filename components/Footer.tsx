import { Box, useColorModeValue } from '@chakra-ui/react';

const Footer = () => {
  const bgColor = useColorModeValue('blackAlpha.100', 'whiteAlpha.100');

  return (
    <Box mt={10} py={5} bgColor={bgColor} textAlign="center">
      &copy; {new Date().getFullYear()} Seol SO. All Rights Reserved.
    </Box>
  );
};

export default Footer;
