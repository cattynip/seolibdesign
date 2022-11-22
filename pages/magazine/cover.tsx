import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';

const Home: NextPage = () => {
  return (
    <DetailedLayout
      title="Cover Page"
      description="This is a description of the Cover Page."
      datas={{
        initial: {
          explaination:
            'This is a explaination and demonstration of the Cover page, initial drafts',
          urls: ['/cover/1-1.jpeg', '/cover/1-2.jpeg', '/cover/1-3.jpeg']
        },
        intermediate: {
          explaination:
            'This is a explaination and demonstration of the Cover page, intermediate drafts',
          urls: ['/cover/2-1.jpeg', '/cover/2-2.jpeg']
        },
        final: {
          explaination:
            'This is a explaination and demonstration of the Cover page, initial drafts',
          urls: ['/cover/3.jpeg']
        }
      }}
    />
  );
};

export default Home;
