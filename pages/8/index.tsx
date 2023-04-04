import { NextPage } from 'next';
import Separator from '@components/Separator';
import Description from '@components/Description';
import Section from '@components/Section';
import ProjectPillCard from '@components/ProjectPillCard';
import ProjectData from '@data/data';

const GradeEightHome: NextPage = () => {
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

      <Section title={'Grade 8 Projects'} delay={0.4}>
        {Object.values(ProjectData.ProjectData8).map((currentProject, idx) => (
          <ProjectPillCard
            key={currentProject.title}
            title={currentProject.title}
            isAvailable={currentProject.finished}
            iconType={currentProject.iconType}
            description={''}
            linkTo={currentProject.link}
            isEven={idx % 2 === 1}
          />
        ))}
      </Section>
    </div>
  );
};

export default GradeEightHome;
