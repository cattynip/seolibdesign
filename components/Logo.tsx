import { Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/">
      <Text
        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
        align="center"
        px={2}
        pr={8}
        justifyContent="center"
        fontSize={19}
        fontFamily='M PLUS Rounded 1c", "sans-serif'
        fontWeight="bold"
      >
        Seol IB Design
      </Text>
    </Link>
  );
};

export default Logo;
