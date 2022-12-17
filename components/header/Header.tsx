import {
  Box,
  Button,
  Container,
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
import { CgWebsite } from 'react-icons/cg';
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
          px={1}
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
          <Box display="flex" flexDir={'row'} justifyContent="space-between">
            <Heading alignSelf="center">
              <Logo />
            </Heading>
          </Box>

          <Container
            display={{ base: 'none', md: 'flex' }}
            flexDir="row"
            alignItems="center"
            position={'relative'}
          >
            <Stack
              width={{ base: 'full', md: 'auto' }}
              mt={{ base: 5, md: 0 }}
              flexGrow={1}
              flexDir="row"
              alignItems="center"
              justifyContent="center"
              experimental_spaceY={0}
            >
              <HeaderLinkItem
                href="/"
                pathName={router.pathname}
                icon="home"
                text="Home"
              />
              <HeaderLinkItem
                href="/magazine"
                pathName={router.pathname}
                icon="magazine"
                text="Magazine"
              />
              <HeaderLinkItem
                href="/website"
                pathName={router.pathname}
                icon="website"
                text="Website"
              />
              <HeaderLinkItem
                href="https://github.com/cattynip/seolibdesign"
                pathName={router.pathname}
                target="_blank"
                icon="github"
                text="GitHub"
              />
            </Stack>
          </Container>

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
                  <Anchor href="/website">
                    <MenuItem>
                      <CgWebsite />
                      <Text ml={1.5}>Website</Text>
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
