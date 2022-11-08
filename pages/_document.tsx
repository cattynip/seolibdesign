import { ColorModeScript } from '@chakra-ui/react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import theme from '@libs/theme';

class SpecialDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <body>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <Main />
            <NextScript />
          </body>
        </Head>
      </Html>
    );
  }
}

export default SpecialDocument;
