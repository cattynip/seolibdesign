import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { DataObjectMiddle } from '@data/data';

const MagazineMiddle: NextPage = () => {
  const data = DataObjectMiddle;

  return (
    <DetailedLayout
      title={data.name}
      description={data.description}
      section={data.kind}
      datas={{
        initial: {
          explaination: data.initial,
          urls: [
            ['/middle/1-1-1.jpeg', '/middle/1-1-2.jpeg'],
            ['/middle/1-2-1.jpeg', '/middle/1-2-2.jpeg'],
            ['/middle/1-3-1.jpeg', '/middle/1-3-2.jpeg']
          ]
        },
        intermediate: {
          explaination: data.intermediate,
          urls: [
            ['/middle/2-1-1.jpeg', '/middle/2-1-2.jpeg'],
            ['/middle/2-2-1.jpeg', '/middle/2-2-2.jpeg']
          ]
        },
        final: {
          explaination: data.final,
          urls: [['/middle/3-1.jpeg', '/middle/3-2.jpeg']]
        }
      }}
    />
  );
};

export default MagazineMiddle;
