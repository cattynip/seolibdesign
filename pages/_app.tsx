import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@components/Header';
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
