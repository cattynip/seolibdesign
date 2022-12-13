import { Heading, Stack, Flex, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import ProjectCard, { IProjectCard } from '@components/ProjectCard';
import Section from '@components/Section';
import Description from '@components/Description';
import Separator from '@components/Separator';

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
    <>
      <Section delay={0.2}>
        {/* <HeaderGallery /> */}
        <Flex
          pt={10}
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
          <Description
            width="100%"
            maxW="container.sm"
            textAlign="center"
            transitionDuration="500ms"
            description={description}
          />
        </Flex>
      </Section>

      <Separator />

      <Section delay={0.4}>
        <Stack display="flex" alignItems="center" justifyContent="start">
          {projects.map((project, idx) => (
            <Section key={project.title} delay={idx / 3}>
              <ProjectCard
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent="start"
                {...project}
              />
              <Separator />
            </Section>
          ))}
        </Stack>
      </Section>
    </>
  );
};

export default DashboardLayout;
