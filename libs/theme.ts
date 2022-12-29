import { mode, Styles, type GlobalStyleProps } from '@chakra-ui/theme-tools';
import {
  extendTheme,
  ThemeComponents,
  type ThemeConfig
} from '@chakra-ui/react';

const styles: Styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
};

const componenets: ThemeComponents = {
  Heading: {
    variants: {}
  },
  Link: {
    baseStyle: props => ({
      textColor: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
};

const fonts = {
  heading: 'Lato',
  body: 'Lato'
};

const themeConfig: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
  disableTransitionOnChange: false
};

const theme = extendTheme({ themeConfig, componenets, styles, fonts });

export default theme;
