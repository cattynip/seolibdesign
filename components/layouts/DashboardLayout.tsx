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
        <div className="flex flex-col items-center justify-start">
          {projects.map((project, idx) => (
            <Section key={project.title} delay={idx / 3}>
              <ProjectCard {...project} />
              <Separator />
            </Section>
          ))}
        </div>
      </Section>
    </>
  );
};

export default DashboardLayout;
