import { Box, Divider } from '@chakra-ui/react';
import DetailedTree from '@components/detailed/DetailedTree';
import DetailedTop from '@components/detailed/DetailedTop';
import DetailedInfor from '@components/detailed/DetailedInfor';
import Head from 'next/head';

interface IDataKind {
  explaination: string;
  urls: string[];
}

interface IData {
  initial: IDataKind;
  intermediate: IDataKind;
  final: IDataKind;
}

interface IDetailedLayout {
  title: string;
  description: string;
  datas: IData;
}

const DetailedLayout = ({ title, description, datas }: IDetailedLayout) => {
  return (
    <>
      <Head>
        <title>Seol IB Design - Magazine</title>
        <meta
          name="description"
          content={`This page is about the ${title} of Magazine Project`}
        />
      </Head>
      <Box>
        <Box width={'100%'} m={0} p={0}>
          <DetailedTop
            area={title}
            description={description}
            finalImageUrl={datas.final.urls[0]}
          />
        </Box>

        <Divider p={3} />

        <Box pt={3}>
          <DetailedTree stageType="initial" images={datas.initial.urls} />
          <DetailedTree
            stageType="intermediate"
            images={datas.intermediate.urls}
          />
          <DetailedTree stageType="final" images={datas.final.urls} />
        </Box>

        <Divider />

        <Box>
          <DetailedInfor defaultType="final" />
        </Box>
      </Box>
    </>
  );
};

export default DetailedLayout;
