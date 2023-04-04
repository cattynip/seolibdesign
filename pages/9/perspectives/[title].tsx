import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import getPaths from '@libs/getPaths';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';
import SectionTop from '@components/section/SectionTop';
import Section from '@components/Section';
import Separator from '@components/Separator';

const PerspectiveDocumentPage: NextPage<IGetStaticPropsReturn> = ({
  title,
  description,
  content
}) => {
  return (
    <div>
      <SectionTop title={title} description={description} />
      <Separator />

      <Section delay={0.4}>
        <div className="post" dangerouslySetInnerHTML={{ __html: content }} />
      </Section>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPaths(true).map(route => {
    return {
      params: { title: route }
    };
  });

  return {
    paths,
    fallback: false
  };
};

interface IGetStaticPropsReturn {
  title: string;
  description: string;
  content: string;
}

export const getStaticProps: GetStaticProps = async ctx => {
  const { data, content } = matter.read(`./posts/9.${ctx.params?.title}.md`);

  const { value } = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);

  return {
    props: {
      content: value,
      title: data?.title,
      description: data?.description
    }
  };
};

export default PerspectiveDocumentPage;
