import { NextPage } from 'next';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <Box>
      <Heading as={'h1'} size={'xl'}>
        Hello World
      </Heading>
      <Text>This is the Home page.</Text>
    </Box>
  );
};

export default Home;
