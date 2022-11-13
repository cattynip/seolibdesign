import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Header from '@components/Header';
import theme from '@libs/theme';
import { ChakraProvider } from '@chakra-ui/react';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
