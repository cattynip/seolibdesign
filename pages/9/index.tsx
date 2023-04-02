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
        <h1 className="font-bold text-3xl">Grade 8</h1>
        <Description
          description="Year of 2022. It was the first time when I came to Canada first, and
        also I was Grade 8. Below elements are the activities that I had done
        since I was grade 8."
        />
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
              linkTo={'abcdef'}
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

  console.log(filteredProjects);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(filteredProjects))
    }
  };
};

export default GradeNineHome;
