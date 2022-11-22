import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';
import Header from '@components/header/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box as="main">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Seol IB Design Homepage" />
        <meta name="author" content="Seol SO" />
        <meta name="author" content="cattynip" />
        <meta property="og:site_name" content="Seol IB Design" />
        <meta name="og:title" content="Seol SO" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Seol IB Design</title>
      </Head>

      <Header />

      <Container maxW="container.md">{children}</Container>
    </Box>
  );
};

export default Layout;
