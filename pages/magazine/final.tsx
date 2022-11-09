import { NextPage } from 'next';
import { Heading, Text } from '@chakra-ui/react';
import Layout from '@components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <Heading as={'h1'} size={'xl'}>
        Hello World
      </Heading>
      <Text>This is the Final Magazine page.</Text>
    </Layout>
  );
};

export default Home;
