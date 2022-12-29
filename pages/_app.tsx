import '../styles/globals.css';
import type { AppProps } from 'next/app';
import theme from '@libs/theme';
import { ChakraProvider } from '@chakra-ui/react';
import Footer from '@components/Footer';
import { AnimatePresence } from 'framer-motion';
import Layout from '@components/layouts/Layout';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence
        exitBeforeEnter
        mode="wait"
        initial={true}
        onExitComplete={() => {
          if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Layout>
          <Component {...pageProps} />
          <Footer />
        </Layout>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App;
