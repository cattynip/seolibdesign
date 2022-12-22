import { Box, Text, useColorModeValue } from '@chakra-ui/react';
import Anchor from '@components/Anchor';
import ProjectIcon, { TIconType } from '@components/ProjectIcon';
import { compareRouter } from '@libs/math';
import { motion } from 'framer-motion';
import { HTMLAttributeAnchorTarget } from 'react';

interface INavigationElement {
  href: string;
  icon: TIconType;
  text: string;
  target?: HTMLAttributeAnchorTarget;
  pathName: string;
}

const HeaderLinkItem = ({
  href,
  icon,
  text,
  pathName,
  target
}: INavigationElement) => {
  const boxBgColor = useColorModeValue('orange.400', 'purple.500');
  // This code does not use useState hook becuase this hook did not change the value of it strangly. So, I use this code temporarily.
  let isMatched = false;

  if (href === pathName) {
    isMatched = true;
  } else {
    isMatched = Boolean(compareRouter({ first: href, second: pathName }));
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
      <Anchor href={href} target={target}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          textColor={isMatched ? 'white' : ''}
          style={{ textDecoration: 'none' }}
          py={2}
          px={2.5}
          transition="color .8s ease"
          cursor={'pointer'}
        >
          <ProjectIcon iconType={icon} size={20} />
          <Text ml={1.5}>{text}</Text>
        </Box>
      </Anchor>
    </Box>
  );
};

export default HeaderLinkItem;
