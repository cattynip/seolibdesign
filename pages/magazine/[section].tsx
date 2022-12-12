import { NextPage } from 'next';
import DetailedLayout from '@components/layouts/DetailedLayout';
import { DataObjectBack, DataObjectCover, DataObjectMiddle } from '@data/data';
import { useRouter } from 'next/router';

const MagazineSection: NextPage = () => {
  const router = useRouter();
  const section = router.query.section;
  const data =
    section === 'cover'
      ? DataObjectCover
      : section === 'middle'
      ? DataObjectMiddle
      : DataObjectBack;

  return (
    <DetailedLayout
      title={data.name}
      description={data.description}
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

export default MagazineSection;
