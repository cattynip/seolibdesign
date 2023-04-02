import { Box } from '@chakra-ui/react';
import ProjectData8 from '@data/data';
import Anchor from './Anchor';
import { TIconType } from './ProjectIcon';
import ProjectPillCard from './ProjectPillCard';

export interface Project {
  linkTo: string;
  iconType: TIconType;
  title: string;
  description: string;
  available: boolean;
}

const Projects = () => {
  return (
    <>
      {Object.values(ProjectData8).map((value, idx) => (
        <Box key={idx}>
          <Anchor href={value.link}>
            <ProjectPillCard
              title={value.title}
              description={value.shortDescription}
              iconType={value.iconType}
              isAvailable={value.finished}
              isEven={idx % 2 === 0}
            />
          </Anchor>
        </Box>
      ))}
    </>
  );
};

export default Projects;
