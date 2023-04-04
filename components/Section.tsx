import { chakra, shouldForwardProp } from '@chakra-ui/react';
import { motion } from 'framer-motion';

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
      width={'100%'}
      {...props}
    >
      {title ? (
        <h1 className="text-center text-3xl font-semibold py-5 pb-7">
          {title}
        </h1>
      ) : null}
      {children}
    </SectionDiv>
  );
};

export default Section;
