import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import getPaths from '@libs/getPaths';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkHtml from 'remark-html';
import remarkParse from 'remark-parse/lib';

const PerspectiveDocumentPage: NextPage<IGetStaticPropsReturn> = ({
  title,
  description,
  content
}) => {
  console.log(title, description, content);

  return (
    <div>
      <span>Hello World</span>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const paths = getPaths(true).map(route => {
    return {
      params: { title: route }
    };
  });

  console.log(paths);

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
      post: value,
      title: data?.title,
      description: data?.description
    }
  };
};

export default PerspectiveDocumentPage;
