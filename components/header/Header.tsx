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
  Stack,
  Text,
  useColorModeValue
} from '@chakra-ui/react';
import ThemeChanger from '@components/ThemeChanger';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './Logo';
import { IoHome, IoNewspaper, IoLogoGithub } from 'react-icons/io5';
import { useRouter } from 'next/router';
import HeaderLinkItem from './HeaderLinkItem';
import Anchor from '@components/Anchor';

const Header = () => {
  const router = useRouter();

  return (
    <>
      <Box position="fixed" top={3} px={3} as="nav" w="100%" zIndex={100}>
        <Container
          py={1}
          pr={1}
          pl={1}
          width="100%"
          maxW="container.md"
          height="auto"
          flexWrap="wrap"
          bg={useColorModeValue('#3a404760', '#52526160')}
          css={{ backdropFilter: 'blur(10px)' }}
          borderRadius="full"
          textColor={useColorModeValue('black', 'white')}
          display="flex"
          flexDir="row"
          justifyContent="space-between"
        >
          <Flex
            display="flex"
            flexDir="row"
            alignItems="center"
            position={'relative'}
          >
            <Container display="flex" flexDir={'row'}>
              <Heading alignSelf="center">
                <Logo />
              </Heading>

              <Stack
                display={{ base: 'none', md: 'flex' }}
                width={{ base: 'full', md: 'auto' }}
                alignItems="center"
                mt={{ base: 5, md: 0 }}
                flexGrow={1}
                direction={{ base: 'column', md: 'row' }}
              >
                <HeaderLinkItem href="/" pathName={router.pathname}>
                  <IoHome />
                  <Text ml={1.5}>Home</Text>
                </HeaderLinkItem>
                <HeaderLinkItem href="/magazine" pathName={router.pathname}>
                  <IoNewspaper />
                  <Text ml={1.5}>Magazine</Text>
                </HeaderLinkItem>
                <HeaderLinkItem
                  href="https://github.com/cattynip/seolibdesign"
                  pathName={router.pathname}
                  target="_blank"
                >
                  <IoLogoGithub />
                  <Text ml={1.5}>Source</Text>
                </HeaderLinkItem>
              </Stack>
            </Container>
          </Flex>

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
                  <Anchor href={'/'}>
                    <MenuItem>
                      <IoHome />
                      <Text ml={1.5}>Home</Text>
                    </MenuItem>
                  </Anchor>
                  <Anchor href="/magazine">
                    <MenuItem>
                      <IoNewspaper />
                      <Text ml={1.5}>Magazine</Text>
                    </MenuItem>
                  </Anchor>
                  <Anchor href="https://github.com/cattynip/seolibdesign">
                    <MenuItem>
                      <IoLogoGithub />
                      <Text ml={1.5}>Source</Text>
                    </MenuItem>
                  </Anchor>
                </MenuList>
              </Menu>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box height="20" />
    </>
  );
};

export default Header;
