import { mode } from '@chakra-ui/theme-tools';
import {
  extendTheme,
  ThemeComponents,
  type ThemeConfig
} from '@chakra-ui/react';
import type { StyleFunctionProps } from '@chakra-ui/styled-system';

const styles = {
  global: (props: StyleFunctionProps) => ({
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
  heading: 'Lato'
};

const themeConfig: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
  disableTransitionOnChange: false
};

const theme = extendTheme({ themeConfig, componenets, styles, fonts });

export default theme;
