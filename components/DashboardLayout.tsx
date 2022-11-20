import {
  Box,
  Container,
  Heading,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  Divider
} from '@chakra-ui/react';
import React from 'react';
import Layout from './Layout';
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
    <Layout>
      <Box>
        {/* <HeaderGallery /> */}
        <Flex
          py={10}
          flexDir={'column'}
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            as="h1"
            size={{ md: '4xl', sm: '3xl' }}
            textColor={titleColor}
            textAlign="center"
            mx="auto"
            cursor="default"
            pb={4}
          >
            {title}
          </Heading>
          <Text
            width="100%"
            maxW="container.sm"
            textColor={descriptionColor}
            textAlign="center"
            transitionDuration="500ms"
            cursor="default"
            _hover={{ textColor: descriptionHoverColor }}
          >
            {description}
          </Text>
        </Flex>
      </Box>
      <Box>
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="start"
          experimental_spaceY={10}
        >
          {projects.map(project => (
            <Box
              key={project.title}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="start"
              experimental_spaceY={10}
            >
              <ProjectCard {...project} />
              <Divider />
            </Box>
          ))}
        </Stack>
      </Box>
    </Layout>
  );
};

export default DashboardLayout;
