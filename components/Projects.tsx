import { Box } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Anchor from './Anchor';
import ProjectPillCard from './ProjectPillCard';

export interface Project {
  linkTo: string;
  iconType: string;
  title: string;
  description: string;
  available: boolean;
}

interface IProjects {
  projects: Project[];
}

const Projects = ({ projects }: IProjects) => {
  return (
    <AnimatePresence>
      {projects.map((value, idx) => (
        <Box key={idx}>
          {value.available ? (
            <Anchor href={value.linkTo}>
              <ProjectPillCard
                title={value.title}
                description={value.description}
                iconType={value.iconType}
                isAvailable={value.available}
                isEven={idx % 2 === 0}
              />
            </Anchor>
          ) : (
            <ProjectPillCard
              title={value.title}
              description={value.description}
              iconType={value.iconType}
              isAvailable={value.available}
              isEven={idx % 2 === 0}
            />
          )}
        </Box>
      ))}
    </AnimatePresence>
  );
};

export default Projects;
