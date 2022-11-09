import { Box } from '@chakra-ui/react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Box width="100%" maxW="container.md" mx="auto" pt={20}>
      {children}
    </Box>
  );
};

export default Layout;
