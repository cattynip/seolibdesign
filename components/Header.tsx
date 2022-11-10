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
import { IoHome, IoNewspaper, IoLogoGithub } from 'react-icons/io5';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  return (
    <Box position="fixed" top={3} px={3} as="nav" w="100%" zIndex={100}>
      <Container
        display="flex"
        py="1.5"
        px={5}
        pr={2.5}
        width="100%"
        maxW="container.lg"
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
        <Flex width="container.lg">
          <Heading alignSelf="center">
            <Logo />
          </Heading>

          <Stack
            direction={{ base: 'column', lg: 'row' }}
            display={{ base: 'none', lg: 'flex' }}
            width={{ base: 'full', lg: 'auto' }}
            alignItems="center"
            mt={{ base: 5, lg: 0 }}
            flexGrow={1}
          >
            <LinkItem
              href="/"
              header={{ layoutId: 'headerLink', pathName: router.pathname }}
            >
              <IoHome />
              <Text ml={1.5}>Home</Text>
            </LinkItem>
            <LinkItem
              href="/magazine"
              header={{ layoutId: 'headerLink', pathName: router.pathname }}
            >
              <IoNewspaper />
              <Text ml={1.5}>Magazine</Text>
            </LinkItem>
            <LinkItem
              href="https://github.com/cattynip/seolibdesign"
              target="_blank"
            >
              <IoLogoGithub />
              <Text ml={1.5}>Source</Text>
            </LinkItem>
          </Stack>

          <Spacer />
          <Box display="flex">
            <ThemeChanger />

            <Box display={{ base: 'inline', lg: 'none' }}>
              <Menu isLazy>
                <MenuButton
                  as={Button}
                  transition="all 0.2s"
                  bg={useColorModeValue('#bfbfbf', '#435270')}
                  textColor={useColorModeValue('black', 'white')}
                  borderRightRadius="full"
                  borderLeftRadius="none"
                  borderWidth={1}
                  p={0}
                  _hover={{
                    bg: useColorModeValue('gray.300', 'blue.700'),
                    textColor: useColorModeValue('black', 'white')
                  }}
                  _expanded={{
                    bg: useColorModeValue('gray.300', 'blue.700'),
                    textColor: useColorModeValue('black', 'white')
                  }}
                  _focus={{ boxShadow: 'outline' }}
                >
                  <Box pr={2}>
                    <HamburgerIcon />
                  </Box>
                </MenuButton>
                <MenuList bg={useColorModeValue('gray.300', 'blue.700')}>
                  <Link href={'/'}>
                    <MenuItem>
                      <IoHome />
                      <Text ml={1.5}>Home</Text>
                    </MenuItem>
                  </Link>
                  <Link href="/magazine">
                    <MenuItem>
                      <IoNewspaper />
                      <Text ml={1.5}>Magazine</Text>
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
