import Description from '@components/Description';
import { TIconType } from '@components/ProjectIcon';
import ProjectPillCard from '@components/ProjectPillCard';
import Section from '@components/Section';
import Separator from '@components/Separator';
import { readdirSync } from 'fs';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';

const GradesPage: NextPage<GradesPath> = ({ grades }) => {
  return (
    <div>
      <Section delay={0.2}>
        <h1 className="font-bold text-3xl">Grades</h1>
        <Description description="These are grades. Select the grade to see what I have done int he Design Class." />
      </Section>

      <Separator />

      <Section title={'Grades'} delay={0.4}>
        {grades.map((value, idx) => (
          <ProjectPillCard
            key={idx}
            title={value.title}
            isAvailable={true}
            iconType={value.iconType}
            description={''}
            linkTo={`/${value.grade}`}
            isEven={idx % 2 === 1}
          />
        ))}
      </Section>
    </div>
  );
};

interface GradeInfo {
  title: string;
  grade: number;
  iconType: TIconType;
}

interface GradesPath {
  grades: GradeInfo[];
}

export const getStaticProps: GetStaticProps = () => {
  const grades = readdirSync('./posts', 'utf-8');
  const contents: GradeInfo[] = [];

  for (let i = 0; i < grades.length; i++) {
    const currentGrade = grades[i];
    const { data } = matter.read(`./posts/${currentGrade}/index.md`);
    contents.push({
      title: data.title,
      grade: data.grade,
      iconType: `number${data.grade}`
    });
  }

  return {
    props: {
      grades: contents
    }
  };
};

export default GradesPage;
