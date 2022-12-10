import { Box, Divider } from '@chakra-ui/react';
import DetailedTree from '@components/detailed/DetailedTree';
import DetailedTop from '@components/detailed/DetailedTop';
import Section from '@components/Section';

export interface IDataKind {
  explaination: string;
  urls: string[];
}

export interface IData<T> {
  initial: T;
  intermediate: T;
  final: T;
}

interface IDetailedLayout {
  title: string;
  description: string;
  datas: IData<IDataKind>;
}

const DetailedLayout = ({ title, description, datas }: IDetailedLayout) => {
  return (
    <>
      <Box>
        <Section delay={0.4}>
          <DetailedTop
            area={title}
            description={description}
            finalImageUrl={datas.final.urls[0]}
          />
        </Section>

        <Divider py={3} />

        <Section delay={0.8} title="Drafts Tree">
          <DetailedTree stageType="initial" images={datas.initial.urls} />
          <DetailedTree
            stageType="intermediate"
            images={datas.intermediate.urls}
          />
          <DetailedTree stageType="final" images={datas.final.urls} />
        </Section>

        <Divider py={3} />
      </Box>
    </>
  );
};

export default DetailedLayout;
