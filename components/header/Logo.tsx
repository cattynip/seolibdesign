import { Img, Text, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';

const Logo = () => {
  const iconSrc = useColorModeValue('/logo-light.svg', '/logo-dark.svg');

  return (
    <Link href="/">
      <Img src={iconSrc} width={'10'} borderRadius="full" />
    </Link>
  );
};

export default Logo;
