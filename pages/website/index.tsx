import PostLayout from '@components/layouts/PostLayout';
import SectionTop from '@components/section/SectionTop';
import Separator from '@components/Separator';
import WebsiteProjectData, { IPostData } from '@data/websiteData';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const projectDatas: IPostData[] = [];

  for (const key in WebsiteProjectData.data) {
    const currentData = WebsiteProjectData.data[key];

    projectDatas.push(currentData);
  }

  return (
    <>
      <SectionTop
        title={WebsiteProjectData.title + ' Project'}
        description={WebsiteProjectData.description}
      />

      <Separator />

      <PostLayout datas={projectDatas} />
    </>
  );
};

export default Home;
