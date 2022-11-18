import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@components/Header';
import theme from '@libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
