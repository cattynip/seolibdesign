import { Stack } from '@chakra-ui/react';
import React from 'react';
import ProjectCard, { IProjectCard } from '@components/ProjectCard';
import Section from '@components/Section';
import Separator from '@components/Separator';

interface IDashboardLayout {
  projects: IProjectCard[];
}

const DashboardLayout = ({ projects }: IDashboardLayout) => {
  return (
    <>
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
