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

const LinkItem = ({
  href,
  target = '_self',
  header,
  children,
  ...props
}: INavigationElement) => {
  const boxBgColor = useColorModeValue('orange.400', 'purple.500');
  return (
    <Box display="flex" alignItems="center" position="relative">
      {href === header?.pathName ? (
        <Box
          as={motion.div}
          layoutId={header?.layoutId}
          bg={boxBgColor}
          position="absolute"
          width="100%"
          height={8}
          zIndex={-10}
          borderRadius={10}
        />
      ) : null}
      <NextLink href={href} target="_blank" passHref legacyBehavior>
        <Link
          display="flex"
          alignItems="center"
          py={2}
          px={2.5}
          textColor={href === header?.pathName ? 'white' : ''}
          {...props}
        >
          {children}
        </Link>
      </NextLink>
    </Box>
  );
};

export default LinkItem;
