import Description from '@components/Description';
import DocumentCard from '@components/DocumentCard';
import Section from '@components/Section';
import Separator from '@components/Separator';
import { readdirSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

const WatchGradePage: NextPage<IGetStaticPropsReturn> = ({
  description,
  projects
}) => {
  return (
    <div>
      <Section delay={0.2}>
        <h1 className="font-bold text-3xl">Projects</h1>
        <Description description={description} />
      </Section>

      <Separator />

      <Section delay={0.4} title={'Projects'}>
        {projects?.map((value, idx) => (
          <DocumentCard
            key={idx}
            idx={idx}
            title={value.title}
            description={value.description}
            link={value.title}
          />
        ))}
      </Section>
    </div>
  );
};

interface IPathsProps {
  params: {
    grades: string;
  };
}

export const getStaticPaths: GetStaticPaths = () => {
  const grades = readdirSync('./posts');
  const paths: IPathsProps[] = [];

  grades.map(value => {
    paths.push({
      params: {
        grades: value
      }
    });
  });

  return {
    paths,
    fallback: false
  };
};

interface Project {
  title: string;
  description: string;
  period: string;
}

interface IGetStaticPropsReturn {
  success: boolean;
  description?: string;
  projects?: Project[];
}

export const getStaticProps: GetStaticProps<IGetStaticPropsReturn> = ctx => {
  if (!ctx.params?.grades || typeof ctx.params.grades === 'object')
    return {
      props: {
        success: false
      }
    };

  const grade: string = ctx.params.grades;
  const readmeFolder = readdirSync(`./posts/${grade}`, 'utf-8');
  const projects: Project[] = Array(readmeFolder.length - 1);
  let description = '';

  for (let i = 0; i < readmeFolder.length; i++) {
    if (!ctx.params?.grades) continue;
    const currentFile = readmeFolder[i];

    const isConfigFile = currentFile === 'index.md';

    const contentData = matter.read(
      `./posts/${ctx.params.grades}/${currentFile}`
    ).data;

    if (isConfigFile) {
      description = contentData.description;
    } else {
      projects[contentData.period - 1] = {
        title: contentData.title,
        description: contentData.description,
        period: contentData.period
      };
    }
  }

  return {
    props: {
      projects,
      description,
      success: true
    }
  };
};

export default WatchGradePage;
