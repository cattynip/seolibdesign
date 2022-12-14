import { NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Heading as={'h1'} size={'xl'}>
        Hello World
      </Heading>
      <Text>This is a Not Found page.</Text>
    </>
  );
};

export default Home;
