import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { DataObjectCover } from '@data/data';

const MagazineCover: NextPage = () => {
  const data = DataObjectCover;

  return (
    <DetailedLayout
      title={data.name}
      description={data.description}
      section={data.kind}
      datas={{
        initial: {
          explaination: data.initial,
          urls: ['/cover/1-1.jpeg', '/cover/1-2.jpeg', '/cover/1-3.jpeg']
        },
        intermediate: {
          explaination: data.intermediate,
          urls: ['/cover/2-1.jpeg', '/cover/2-2.jpeg']
        },
        final: {
          explaination: data.final,
          urls: ['/cover/3.jpeg']
        }
      }}
    />
  );
};

export default MagazineCover;
