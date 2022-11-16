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
import ThemeChanger from './ThemeChanger';
import { HamburgerIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import Logo from './Logo';
import { IoHome, IoNewspaper, IoLogoGithub } from 'react-icons/io5';
import { useRouter } from 'next/router';
import HeaderLinkItem from './HeaderLinkItem';

const Header = () => {
  const router = useRouter();

  return (
    <Box position="fixed" top={3} px={3} as="nav" w="100%" zIndex={100}>
      <Container
        display="flex"
        py={1}
        px={7}
        pr={1}
        width="100%"
        maxW="container.md"
        height="auto"
        flexWrap="wrap"
        alignItems="center"
        justifyContent="space-between"
        bg={useColorModeValue('#3a404760', '#52526160')}
        css={{ backdropFilter: 'blur(10px)' }}
        borderRadius="full"
        textColor={useColorModeValue('black', 'white')}
      >
        <Flex width="container.lg">
          <Heading alignSelf="center" textColor={'unset'}>
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
            <HeaderLinkItem
              href="/"
              header={{ layoutId: 'headerLink', pathName: router.pathname }}
            >
              <IoHome />
              <Text ml={1.5}>Home</Text>
            </HeaderLinkItem>
            <HeaderLinkItem
              href="/magazine"
              header={{ layoutId: 'headerLink', pathName: router.pathname }}
            >
              <IoNewspaper />
              <Text ml={1.5}>Magazine Project</Text>
            </HeaderLinkItem>
            <HeaderLinkItem
              href="https://github.com/cattynip/seolibdesign"
              target="_blank"
            >
              <IoLogoGithub />
              <Text ml={1.5}>Source</Text>
            </HeaderLinkItem>
          </Stack>

          <Spacer />
          <Box display="flex">
            <ThemeChanger />

            <Box display={{ base: 'inline', md: 'none' }}>
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  transition="all 0.2s"
                  bg={useColorModeValue('#bfbfbf', 'blackAlpha.50')}
                  textColor={useColorModeValue('black', 'white')}
                  borderRightRadius="full"
                  borderLeftRadius="none"
                  borderWidth={1}
                  p={0}
                  _hover={{
                    bg: useColorModeValue('gray.300', 'blackAlpha.500'),
                    textColor: useColorModeValue('black', 'white')
                  }}
                  _expanded={{
                    bg: useColorModeValue('gray.300', 'blackAlpha.500'),
                    textColor: useColorModeValue('black', 'white')
                  }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <Box pr={2}>
                    <HamburgerIcon />
                  </Box>
                </MenuButton>
                <MenuList bg={useColorModeValue('gray.300', 'blackAlpha.800')}>
                  <Link href={'/'}>
                    <MenuItem>
                      <IoHome />
                      <Text ml={1.5}>Home</Text>
                    </MenuItem>
                  </Link>
                  <Link href="/magazine">
                    <MenuItem>
                      <IoNewspaper />
                      <Text ml={1.5}>Magazine Project</Text>
                    </MenuItem>
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
