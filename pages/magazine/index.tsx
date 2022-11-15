import { NextPage } from 'next';
import DashboardLayout from '@components/DashboardLayout';
import dataManagement from '@libs/dataManagement';
import { IProjectCard } from '@components/ProjectCard';

const Home: NextPage = () => {
  const projectData = dataManagement({ area: 'all' });
  const projectDatas: IProjectCard[] = [];

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
      title="Magazine Project"
      description="This is a project which is to develop and design the perfect magazine what my client want to make. For this, I had made 3 initial, 2 intermediate and last one final drafts for each sections which are Cover, Middle(Main) and Back pages."
      projects={projectDatas}
    />
  );
};

export default Home;
