import { NextPage } from 'next';
import { Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Heading as={"h1"} size={"xl"}>Hello World</Heading>
    </div>
  );
};

export default Home;
