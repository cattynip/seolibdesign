import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import React from 'react';
import HeaderGallery from './HeaderGallery';
import ProjectCard, { IProjectCard } from './ProjectCard';

interface IDashboardLayout {
  title: string;
  description?: string;
  projects: IProjectCard[];
  children?: React.ReactNode;
}

const DashboardLayout = ({
  title,
  description,
  projects
}: IDashboardLayout) => {
  const titleColor = useColorModeValue('black', 'white');
  const descriptionColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const descriptionHoverColor = useColorModeValue('black', 'whiteAlpha.900');

  return (
    <Box m={0} width="100%">
      <Container maxW="container.lg" width="100%" px={8}>
        <HeaderGallery />
        <Flex
          bottom={10}
          width="100%"
          flexDir={'column'}
          alignItems="center"
          justifyContent="center"
          position="relative"
        >
          <Heading
            as="h1"
            size={{ md: '4xl', sm: '3xl' }}
            textColor={titleColor}
            textAlign="center"
            width="container.md"
            maxW="100%"
            mx="auto"
            cursor="default"
            pb={4}
          >
            {title}
          </Heading>
          <Text
            textColor={descriptionColor}
            textAlign="center"
            transitionDuration="500ms"
            cursor="default"
            _hover={{ textColor: descriptionHoverColor }}
          >
            {description}
          </Text>
        </Flex>
      </Container>
      <Container maxW="container.lg" width="100%" px={8}>
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="start"
          experimental_spaceY={10}
        >
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default DashboardLayout;
