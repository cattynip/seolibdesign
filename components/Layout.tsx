import { Container } from '@chakra-ui/react';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <Container width="100%" maxW="container.md" pt={20}>
      {children}
    </Container>
  );
};

export default Layout;
