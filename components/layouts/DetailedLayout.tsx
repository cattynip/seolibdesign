import { Box } from '@chakra-ui/react';
import DetailedTree from '@components/detailed/DetailedTree';
import DetailedTop from '@components/detailed/DetailedTop';
import Section from '@components/Section';
import { useState } from 'react';
import { TArea, TDataType } from '@data/data';
import Separator from '@components/Separator';

export interface IDataKind {
  explaination: string;
  urls: string[] | string[][];
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
          <Box>
            {(currentExplaination === 'description' ||
              currentExplaination === 'initial') && (
              <DetailedTree
                stageType="initial"
                section={section}
                images={datas.initial.urls}
                id="initial"
              />
            )}

            {(currentExplaination === 'description' ||
              currentExplaination === 'intermediate') && (
              <DetailedTree
                stageType="intermediate"
                section={section}
                images={datas.intermediate.urls}
                id="intermediate"
              />
            )}

            {(currentExplaination === 'description' ||
              currentExplaination === 'final') && (
              <DetailedTree
                stageType="final"
                section={section}
                images={datas.final.urls}
                id="final"
              />
            )}
          </Box>
        </Section>

        <Separator />
      </Box>
    </>
  );
};

export default DetailedLayout;
