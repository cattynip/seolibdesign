import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Flex,
  useColorModeValue
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
  return (
    <Box m={0} width="100%">
      <Container p={0} minW="100%" position="relative">
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
            size="4xl"
            textAlign="center"
            textColor={titleColor}
            width="container.md"
            mx="auto"
            pb={2}
          >
            {title}
          </Heading>
          <Text textAlign="center">{description}</Text>
        </Flex>
      </Container>
      <Container maxW="container.lg" width="100%">
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="start"
          experimental_spaceY={5}
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
