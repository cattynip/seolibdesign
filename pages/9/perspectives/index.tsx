import { GetStaticProps, NextPage } from 'next';
import Separator from '@components/Separator';
import SectionTop from '@components/section/SectionTop';
import PerspectivesData from '@data/perspectivesData';
import { getContents, IMarkdownShape } from '@libs/getPaths';
import Section from '@components/Section';
import DocumentCard from '@components/DocumentCard';

const Home: NextPage<IGetStaticPropsReturn> = ({ contents }) => {
  return (
    <>
      <SectionTop
        title={'Perspective Project'}
        description={PerspectivesData.description}
      />

      <Separator />

      <Section delay={0.4} title="Projects">
        {contents.map((markdown, idx) => (
          <DocumentCard
            key={idx}
            title={markdown.title}
            description={markdown.description}
            idx={idx}
            link={`/9/perspectives/${markdown.route}`}
          />
        ))}
      </Section>
    </>
  );
};

interface IGetStaticPropsReturn {
  contents: IMarkdownShape[];
}

export const getStaticProps: GetStaticProps = () => {
  const contents = getContents();

  return {
    props: {
      contents
    }
  };
};

export default Home;
