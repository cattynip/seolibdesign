import { NextPage } from 'next';
import MagazineProjectData from '@data/magazineData';
import Separator from '@components/Separator';
import SectionTop from '@components/section/SectionTop';

const Home: NextPage = () => {
  return (
    <>
      <SectionTop
        title={MagazineProjectData.title + ' Project'}
        description={MagazineProjectData.description}
      />

      <Separator />

      <p>This part is being developed.</p>
    </>
  );
};

export default Home;
