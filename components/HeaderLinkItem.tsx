import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { compareRouter } from '@libs/math';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget, useEffect, useState } from 'react';

interface INavigationElement {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  pathName: string;
  children: React.ReactNode;
}

const HeaderLinkItem = ({ href, pathName, children }: INavigationElement) => {
  const boxBgColor = useColorModeValue('orange.400', 'purple.500');
  // This code does not use useState hook becuase this hook did not change the value of it strangly. So, I use this code temporarily.
  let isMatched = false;

  if (href === pathName) {
    isMatched = true;
  } else {
    isMatched = compareRouter({ first: href, second: pathName });
  }

  return (
    <Box display="flex" alignItems="center" position="relative">
      {isMatched ? (
        <Box
          as={motion.div}
          layoutId={'headerLink'}
          bg={boxBgColor}
          position="absolute"
          width="100%"
          height={8}
          zIndex={-10}
          borderRadius={10}
          css={{ filter: 'invert(100%)' }}
        />
      ) : null}
      <NextLink href={href} target="_blank" passHref legacyBehavior>
        <Link
          display="flex"
          alignItems="center"
          justifyContent="center"
          textColor={href === pathName ? 'white' : ''}
          style={{ textDecoration: 'none' }}
          py={2}
          px={2.5}
          transition="color .8s ease"
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export default HeaderLinkItem;
