import '../styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';
import Layout from '@components/layouts/Layout';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
        <Footer />
      </Layout>
    </ChakraProvider>
  );
}

export default App;
