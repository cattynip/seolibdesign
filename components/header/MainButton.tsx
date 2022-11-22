import { Box, Link, useColorModeValue } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import NextLink from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';

interface IMainButton {
  root: string;
}

const MainButton = ({ root }: IMainButton) => {
  const bgColor = useColorModeValue('blackAlpha.800', 'whiteAlpha.800');

  return (
    <NextLink href={root} passHref legacyBehavior>
      <Link
        as={motion.div}
        initial={{
          y: -60
        }}
        animate={{
          y: 0,
          transition: {
            type: 'spring'
          }
        }}
        exit={{
          y: -60
        }}
        bg={bgColor}
        textColor="white"
        borderWidth={1}
        borderRadius="full"
        height={10}
        width={10}
        mr={5}
        display="flex"
        justifyContent={'center'}
        alignItems={'center'}
        position="fixed"
        left={1}
        top={1}
        _hover={{
          backgroundColor: 'whiteAlpha.700'
        }}
      >
        <Box>
          <AiOutlineArrowLeft size={20} color="black" />
        </Box>
      </Link>
    </NextLink>
  );
};

export default MainButton;
