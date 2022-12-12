import { NextPage } from 'next';
import DashboardLayout from '@components/layouts/DashboardLayout';
import dataManagement from '@libs/dataManagement';
import { IProjectCard } from '@components/ProjectCard';
import { ProjectsData } from '@data/data';

const Home: NextPage = () => {
  const projectData = dataManagement({ area: 'all' });
  const projectDatas: IProjectCard[] = [];
  const currentProject = ProjectsData['magazine'];

  projectData.map(value => {
    if (!value) return;
    projectDatas.push({
      title: value.name,
      description: value.description,
      linkTo: `/magazine/${value.kind}`,
      imageUrl: `/${value.kind}/1-1${
        value.kind === 'middle' ? '-' + '1' : ''
      }.jpeg`
    });
  });

  return (
    <DashboardLayout
      title={currentProject.title}
      description={currentProject.description}
      projects={projectDatas}
    />
  );
};

export default Home;
