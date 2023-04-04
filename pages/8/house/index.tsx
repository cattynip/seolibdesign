import PostLayout from '@components/layouts/PostLayout';
import SectionTop from '@components/section/SectionTop';
import Separator from '@components/Separator';
import HolidayData from '@data/holidayHouseData';
import { IPostData } from '@data/websiteData';
import { NextPage } from 'next';

const Home: NextPage = () => {
  const projectDatas: IPostData[] = [];

  for (const key in HolidayData.data) {
    const currentData = HolidayData.data[key];

    projectDatas.push(currentData);
  }
  console.log(projectDatas);

  return (
    <>
      <SectionTop
        title={HolidayData.title + ' Project'}
        description={HolidayData.description}
      />

      <Separator />

      <PostLayout datas={projectDatas} />
    </>
  );
};

export default Home;
