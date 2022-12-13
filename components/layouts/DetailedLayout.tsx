import { Box } from '@chakra-ui/react';
import DetailedTree from '@components/detailed/DetailedTree';
import DetailedTop from '@components/detailed/DetailedTop';
import Section from '@components/Section';
import { useState } from 'react';
import { TArea, TDataType } from '@data/data';
import Separator from '@components/Separator';

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
  section: TArea;
  datas: IData<IDataKind>;
}

const DetailedLayout = ({
  title,
  section,
  description,
  datas
}: IDetailedLayout) => {
  const [currentExplaination, _setCurrentExplaination] =
    useState<TDataType>('description');

  return (
    <>
      <Box>
        <Section delay={0.4}>
          <DetailedTop area={title} description={description} />
        </Section>

        <Separator />

        <Section delay={0.8} title="Drafts Tree">
          <DetailedTree stageType="initial" images={datas.initial.urls} />
          <DetailedTree
            stageType="intermediate"
            images={datas.intermediate.urls}
          />
          <DetailedTree stageType="final" images={datas.final.urls} />
        </Section>

        <Separator />
      </Box>
    </>
  );
};

export default DetailedLayout;
