import PostLayout from '@components/layouts/PostLayout';
import SectionTop from '@components/section/SectionTop';
import Separator from '@components/Separator';
import HolidayHouseData from '@data/holidayHouseData';
import { IPostData } from '@data/websiteData';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const projectDatas: IPostData[] = [];

  for (const key in HolidayHouseData.data) {
    const currentData = HolidayHouseData.data[key];

    projectDatas.push(currentData);
  }
  console.log(projectDatas);

  return (
    <>
      <SectionTop
        title={HolidayHouseData.title + ' Project'}
        description={HolidayHouseData.description}
      />

      <Separator />

      <PostLayout datas={projectDatas} />
    </>
  );
};

export default Home;
