import {
  Box,
  Heading,
  Stack,
  Flex,
  useColorModeValue,
  Text,
  Divider
} from '@chakra-ui/react';
import React from 'react';
import ProjectCard, { IProjectCard } from '@components/ProjectCard';
import Section from '@components/Section';

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
    <>
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
          {projects.map((project, idx) => (
            <Section
              key={project.title}
              delay={idx / 3}
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="start"
              experimental_spaceY={10}
            >
              <ProjectCard {...project} />
              <Divider />
            </Section>
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default DashboardLayout;
