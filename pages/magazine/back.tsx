import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { DataObjectBack } from '@data/data';

const MagazineMiddle: NextPage = () => {
  const data = DataObjectBack;

  return (
    <DetailedLayout
      title={data.name}
      description={data.description}
      section={data.kind}
      datas={{
        initial: {
          explaination: data.initial,
          urls: ['/back/1-1.jpeg', '/back/1-2.jpeg', '/back/1-3.jpeg']
        },
        intermediate: {
          explaination: data.intermediate,
          urls: ['/back/2-1.jpeg', '/back/2-2.jpeg']
        },
        final: {
          explaination: data.final,
          urls: ['/back/3.jpeg']
        }
      }}
    />
  );
};

export default MagazineMiddle;
