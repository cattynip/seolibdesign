import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { MagazineDataBack } from '@data/magazineData';

const MagazineMiddle: NextPage = () => {
  const data = MagazineDataBack;

  return (
    <DetailedLayout
      title={data.name}
      description={data.description}
      section={data.kind}
      datas={{
        initial: {
          explaination: data.initial.explaination,
          urls: data.initial.imageUrls
        },
        intermediate: {
          explaination: data.intermediate.explaination,
          urls: data.intermediate.imageUrls
        },
        final: {
          explaination: data.final.explaination,
          urls: data.final.imageUrls
        }
      }}
    />
  );
};

export default MagazineMiddle;
