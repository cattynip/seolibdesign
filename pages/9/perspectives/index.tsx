import { NextPage } from 'next';
import MagazineProjectData from '@data/magazineData';
import Separator from '@components/Separator';
import SectionTop from '@components/section/SectionTop';
import PerspectivesData from '@data/perspectivesData';
import PostLayout from '@components/layouts/PostLayout';
import { IPostData } from '@data/websiteData';

const Home: NextPage = () => {
  const projectDatas: IPostData[] = [];

  for (const key in PerspectivesData.data) {
    const currentData = PerspectivesData.data[key];

    projectDatas.push(currentData);
  }

  return (
    <>
      <SectionTop
        title={MagazineProjectData.title + ' Project'}
        description={MagazineProjectData.description}
      />

      <Separator />

      <PostLayout projects={projectDatas} />
    </>
  );
};

export default Home;
