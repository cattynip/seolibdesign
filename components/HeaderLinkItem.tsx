import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { HTMLAttributeAnchorTarget } from 'react';

interface IHeaderNavigation {
  layoutId: string;
  pathName: string;
}

interface INavigationElement {
  href: string;
  target?: HTMLAttributeAnchorTarget;
  header?: IHeaderNavigation;
  children: React.ReactNode;
}

const HeaderLinkItem = ({ href, header, children }: INavigationElement) => {
  const boxBgColor = useColorModeValue('orange.400', 'purple.500');

  return (
    <Box display="flex" alignItems="center" position="relative">
      {href === header?.pathName && header ? (
        <Box
          as={motion.div}
          layoutId={header?.layoutId}
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
          textColor={href === header?.pathName ? 'white' : ''}
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
