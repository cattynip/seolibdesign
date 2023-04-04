import { readdirSync, readFileSync } from 'fs';
import { GetStaticProps, NextPage } from 'next';
import grayMatter from 'gray-matter';
import Section from '@components/Section';
import Description from '@components/Description';
import Separator from '@components/Separator';
import ProjectData from '@data/data';
import ProjectPillCard from '@components/ProjectPillCard';

const GradeNineHome: NextPage = () => {
  return (
    <div>
      <Section delay={0.2}>
        <h1 className="font-bold text-3xl">Grade 9</h1>
        <Description description="I have been a grade 9 student at Bodwell since the last semester was done. As I upgraded my grade, I wanted to write more descriptive expressions and improve my English skill. In this section, I want to record my Desgin Class's activities, not just explain what I have done until now. So you will be able to see the parts ordered by the date." />
      </Section>

      <Separator />

      <Section title={'Grade 9 Project'} delay={0.4}>
        {Object.values(ProjectData.ProjectData9).map((currentProject, idx) => {
          console.log(currentProject);
          return (
            <ProjectPillCard
              key={currentProject.title}
              title={currentProject.title}
              isAvailable={currentProject.finished}
              iconType={currentProject.iconType}
              description={''}
              linkTo={currentProject.link}
              isEven={idx % 2 === 1}
            />
          );
        })}
      </Section>
    </div>
  );
};

interface MarkdownPage {
  name: string;
  iconType: string;
  finished: boolean;
  description: string;
  shortDescription: string;
  file: string;
  slug: string[];
}

/* eslint-disable @typescript-eslint/no-unused-vars */
interface IGetStaticPropsReturn {
  posts: MarkdownPage[];
}

export const getStaticProps: GetStaticProps = async () => {
  const filteredProjects = [];

  const files = readdirSync('./posts');

  for (const file of files) {
    const content = readFileSync(`./posts/${file}`, 'utf-8');
    const slug = file.split('.');

    if (slug[0] === '8') {
      filteredProjects.push({ ...grayMatter(content).data, file, slug });
    }
  }

  return {
    props: {
      posts: JSON.parse(JSON.stringify(filteredProjects))
    }
  };
};

export default GradeNineHome;
