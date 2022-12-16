import { NextPage } from 'next';
import { Box, Heading, Img, Text } from '@chakra-ui/react';
import Section from '@components/Section';
import Anchor from '@components/Anchor';
import { motion } from 'framer-motion';
import Projects, { Project } from '@components/Projects';
import Separator from '@components/Separator';
import ProjectsData from '@data/data';

const Home: NextPage = () => {
  const projects: Project[] = [];

  for (const [_key, value] of Object.entries(ProjectsData)) {
    projects.push({
      linkTo: value.link,
      iconType: value.iconType,
      title: value.title,
      description: value.shortDescription,
      available: value.finished
    });
  }

  return (
    <Box>
      <Section delay={0.2}>
        <Heading as={'h1'} size={'3xl'} fontWeight={'extrabold'} pb={3}>
          Seol IB Design Website
        </Heading>
        <Text>
          This is a website that is introducing about my Design Works on&nbsp;
          <Anchor href="https://www.bodwell.edu/" target="_blank" colored>
            Bodwell
          </Anchor>
        </Text>
      </Section>

      <Separator />

      <Section delay={0.4} title="About Me">
        <Box
          width={'100%'}
          display={'flex'}
          flexDir={{ md: 'row', sm: 'column-reverse' }}
          justifyContent={'space-between'}
          alignItems={{ md: 'center', sm: 'flex-start' }}
        >
          <Text textAlign={{ md: 'left', sm: 'center' }} width="100%">
            Hello, I am Seol SO from South Korea. I have been attending on&nbsp;
            <Anchor href="https://www.bodwell.edu/" target="_blank" colored>
              Bodwell
            </Anchor>
            , Canada Private High School since September 1, 2022, as a student
            who loves to write Codes and build Services. On the Design 8B class,
            which have been leaded by Mr. Gunn, I have been doing a lot of
            projects, such as Magazine Project, and GB House Project. And I am
            and will be working hard on the Design assignments and projects to
            be improved much better as a level of design.
          </Text>
          <Box>
            <Img
              as={motion.img}
              initial={{
                scale: 1,
                zIndex: 0,
                y: 0
              }}
              whileHover={{
                scale: [1, 0.9, 1.3, 1.25],
                zIndex: [0, 0, 0, 10],
                y: [0, -40, -30, -35],
                transition: {
                  type: 'spring',
                  bounce: 0.6,
                  duration: 0.4
                }
              }}
              shadow="2xl"
              src="/me.jpeg"
              borderRadius={'full'}
              mb={{ md: 0, sm: 7 }}
              mx={'auto'}
              width={{ md: 'auto', sm: '40%' }}
            />
          </Box>
        </Box>
      </Section>

      <Separator />

      <Section delay={0.6} title="Projects">
        <Projects projects={projects} />
      </Section>
    </Box>
  );
};

export default Home;
