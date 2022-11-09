import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import LinkItem from './LinkItem';
import ThemeChanger from './ThemeChanger';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Logo from './Logo';
import { IoLogoGithub } from 'react-icons/io5';

const Header = () => {
  return (
    <Box position="fixed" top={3} px={2} as="nav" w="100%">
      <Container
        display="flex"
        py={2}
        px={5}
        pr={8}
        width="100%"
        maxW="container.md"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        bg={useColorModeValue('#A0AEBF60', '#2B6CB060')}
        css={{ backdropFilter: 'blur(6px)' }}
        borderRadius="full"
      >
        {
          /* This code will be filled if I create the logo. */
          // <Flex></Flex>
        }
        <Flex width="container.md">
          <Heading alignSelf="center">
            <Logo />
          </Heading>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            mt={{ base: 5, md: 0 }}
            flexGrow={1}
          >
            <LinkItem href="/" inHeader>
              Home
            </LinkItem>
            <LinkItem href="/magazine" inHeader>
              Magazine
            </LinkItem>
            <LinkItem href="https://github.com/cattynip/seolibdesign" inHeader>
              <IoLogoGithub />
              <Text ml={1.5}>Source</Text>
            </LinkItem>
          </Stack>

          <Spacer />
          <Box display="flex">
            <ThemeChanger />

            <Box display={{ base: 'inline', md: 'none' }} ml={15}>
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  transition="all 0.2s"
                  bg={useColorModeValue('gray.300', 'white')}
                  textColor="black"
                  borderRadius="md"
                  borderWidth={1}
                  p={0}
                  _hover={{
                    bg: '#435270',
                    textColor: 'white'
                  }}
                  _expanded={{
                    bg: '#435270',
                    textColor: 'white'
                  }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <HamburgerIcon />
                </MenuButton>
                <MenuList bg={useColorModeValue('#fffff', 'blue.800')}>
                  <Link href={'/'}>
                    <MenuItem>Home</MenuItem>
                  </Link>
                  <Link href="/magazine">
                    <MenuItem>Magazine</MenuItem>
                  </Link>
                  <Link href="https://github.com/cattynip/seolibdesign">
                    <MenuItem>
                      <IoLogoGithub />
                      <Text ml={1.5}>Source</Text>
                    </MenuItem>
                  </Link>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
