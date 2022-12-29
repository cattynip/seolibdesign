import {
  Box,
  Container,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue
} from '@chakra-ui/react';
import ThemeChanger from '@components/ThemeChanger';
import { HamburgerIcon } from '@chakra-ui/icons';
import Logo from './Logo';
import { useRouter } from 'next/router';
import HeaderLinkItem from './HeaderLinkItem';
import HeaderMenuItem from './HeaderMenuItem';
import ProjectsData from '@data/data';
import { firstCapitalize } from '@libs/math';

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
              width="full"
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
              {Object.values(ProjectsData).map((value, idx) => (
                <HeaderLinkItem
                  key={idx}
                  href={value.link}
                  pathName={router.pathname}
                  icon={value.iconType}
                  text={firstCapitalize(value.iconType)}
                />
              ))}
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
                  transition="all 0.2s"
                  bg={useColorModeValue('#bfbfbf', 'blackAlpha.50')}
                  textColor={useColorModeValue('black', 'white')}
                  width={10}
                  height={10}
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
                <MenuList
                  bg={useColorModeValue('gray.300', 'blackAlpha.800')}
                  p={0}
                  borderWidth={1}
                >
                  <HeaderMenuItem
                    href="/"
                    iconType="home"
                    text="Home"
                    index={1}
                  />
                  <HeaderMenuItem
                    href="/magazine"
                    iconType="magazine"
                    text="Magazine"
                    index={2}
                  />
                  <HeaderMenuItem
                    href="/website"
                    iconType="website"
                    text="Website"
                    index={3}
                  />
                  <HeaderMenuItem
                    href="/house"
                    iconType="house"
                    text="House"
                    index={4}
                  />
                  <HeaderMenuItem
                    href="https://github.com/cattynip/seolibdesign"
                    iconType="github"
                    text="GitHub"
                    index={5}
                  />
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
