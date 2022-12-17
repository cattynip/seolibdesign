import { NextPage } from 'next';
import DashboardLayout from '@components/layouts/DashboardLayout';
import { IProjectCard } from '@components/ProjectCard';
import MagazineProjectData from '@data/magazineData';
import Separator from '@components/Separator';
import SectionTop from '@components/section/SectionTop';

const Home: NextPage = () => {
  const projectDatas: IProjectCard[] = [];

  for (const key in MagazineProjectData.data) {
    const currentData = MagazineProjectData.data[key];

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
    <>
      <SectionTop
        title={MagazineProjectData.title + ' Project'}
        description={MagazineProjectData.description}
      />

      <Separator />

      <DashboardLayout projects={projectDatas} />
    </>
  );
};

export default Home;
