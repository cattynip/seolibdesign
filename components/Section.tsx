import { Box, BoxProps, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

interface ISection {
  children: React.ReactNode;
  title?: string;
  delay: number;
}

const Section = ({ children, title, delay, ...props }: ISection & BoxProps) => {
  return (
    <Box
      as={motion.div}
      initial={{
        y: 150,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.5,
          duration: 1.8,
          delay
        }
      }}
      {...props}
    >
      {title ? (
        <Heading textAlign="center" py={5} pb={7}>
          {title}
        </Heading>
      ) : null}
      {children}
    </Box>
  );
};

export default Section;
