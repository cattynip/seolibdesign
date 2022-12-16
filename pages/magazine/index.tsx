import { NextPage } from 'next';
import DashboardLayout from '@components/layouts/DashboardLayout';
import { IProjectCard } from '@components/ProjectCard';
import ProjectsData from '@data/magazineData';

const Home: NextPage = () => {
  const projectData = ProjectsData;
  const projectDatas: IProjectCard[] = [];
  const currentProject = ProjectsData['magazine'];

  for (const key in projectData.data) {
    const currentData = projectData.data[key];

    projectDatas.push({
      title: currentData.name,
      description: currentData.description,
      linkTo: `/magazine/${currentData.kind}`,
      imageUrl:
        typeof currentData.final.imageUrls[0] === 'string'
          ? currentData.final.imageUrls[0]
          : currentData.final.imageUrls[0][0]
    });
  }

  return (
    <DashboardLayout
      title={ProjectsData.title}
      description={ProjectsData.description}
      projects={projectDatas}
    />
  );
};

export default Home;
