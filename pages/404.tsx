import { NextPage } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';
import Description from '@components/Description';
import Section from '@components/Section';
import Separator from '@components/Separator';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 5000);
  });

  return (
    <>
      <Section delay={0.2}>
        <Heading as={'h1'} size={'xl'}>
          NOT FOUND
        </Heading>
        <Description description="The page where you are does not exist." />
      </Section>

      <Separator />

      <Section delay={0.4} title="YOU WILL GO TO HOME PAGE!">
        <Box
          as={motion.div}
          initial={{ width: 0, backgroundColor: 'rgb(255, 255, 255)' }}
          animate={{
            width: '100%',
            backgroundColor: [
              'rgb(255, 0, 0)',
              'rgb(0, 255, 0)',
              'rgb(255, 0, 0)',
              'rgb(0, 0, 255)',
              'rgb(0, 255, 0)',
              'rgb(255, 0, 0)',
              'rgb(0, 0, 255)',
              'rgb(0, 255, 0)'
            ],
            transition: {
              duration: 5,
              ease: 'linear'
            }
          }}
          height={'100'}
          bg="red"
          position={'relative'}
          overflow="hidden"
        >
          <Text
            position="absolute"
            left={0}
            top={0}
            width="container.md"
            fontSize={'6xl'}
            textAlign="center"
            fontWeight={900}
          >
            YOU WILL BE ON HOME.
          </Text>
        </Box>
      </Section>
    </>
  );
};

export default Home;
