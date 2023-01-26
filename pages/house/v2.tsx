import PostLayout from '@components/layouts/PostLayout';
import SectionTop from '@components/section/SectionTop';
import Separator from '@components/Separator';
import House from '@data/houseData';
import { IPostData } from '@data/websiteData';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const projectDatas: IPostData[] = [];

  for (const key in House.data) {
    const currentData = House.data[key];

    projectDatas.push(currentData);
  }
  console.log(projectDatas);

  return (
    <>
      <SectionTop
        title={House.title + ' Project'}
        description={House.description}
      />

      <Separator />

      <PostLayout datas={projectDatas} />
    </>
  );
};

export default Home;
