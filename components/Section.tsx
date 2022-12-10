import {
  BoxProps,
  chakra,
  Heading,
  HTMLChakraComponents,
  shouldForwardProp
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

interface ISection {
  children: React.ReactNode;
  title?: string;
  delay: number;
}

const SectionDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    return shouldForwardProp(prop) || prop === 'transition';
  }
});

const Section = ({ children, title, delay, ...props }: ISection) => {
  return (
    <SectionDiv
      initial={{
        y: 30,
        opacity: 0
      }}
      animate={{
        y: 0,
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
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
    </SectionDiv>
  );
};

export default Section;
