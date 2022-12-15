import { Box } from '@chakra-ui/react';
import DetailedTree from '@components/detailed/DetailedTree';
import DetailedTop from '@components/detailed/DetailedTop';
import Section from '@components/Section';
import { useState } from 'react';
import { TMagazineArea, TMagazinePart } from '@data/magazineData';
import Separator from '@components/Separator';
import DetailedInformation from '@components/detailed/DetailedInformation';

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
  section: TMagazineArea;
  datas: IData<IDataKind>;
}

const DetailedLayout = ({
  title,
  section,
  description,
  datas
}: IDetailedLayout) => {
  const [currentExplaination, setCurrentExplaination] =
    useState<TMagazinePart>('description');

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
                onClick={() => {
                  setCurrentExplaination(prev =>
                    prev === 'initial' ? 'description' : 'initial'
                  );
                }}
              />
            )}

            {(currentExplaination === 'description' ||
              currentExplaination === 'intermediate') && (
              <DetailedTree
                stageType="intermediate"
                section={section}
                images={datas.intermediate.urls}
                id="intermediate"
                onClick={() =>
                  setCurrentExplaination(prev =>
                    prev === 'intermediate' ? 'description' : 'intermediate'
                  )
                }
              />
            )}

            {(currentExplaination === 'description' ||
              currentExplaination === 'final') && (
              <DetailedTree
                stageType="final"
                section={section}
                images={datas.final.urls}
                id="final"
                onClick={() =>
                  setCurrentExplaination(prev =>
                    prev === 'final' ? 'description' : 'final'
                  )
                }
              />
            )}
          </Box>

          {currentExplaination !== 'description' ? (
            <DetailedInformation
              information={datas[currentExplaination].explaination}
            />
          ) : null}
        </Section>

        <Separator />
      </Box>
    </>
  );
};

export default DetailedLayout;
