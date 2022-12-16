import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { MagazineDataCover } from '@data/magazineData';

const MagazineCover: NextPage = () => {
  const data = MagazineDataCover;

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

export default MagazineCover;
