import { readdirSync, readFileSync } from 'fs';
import matter from 'gray-matter';

const getPaths = (isFormatted?: boolean): string[] => {
  const files = readdirSync('./posts', 'utf-8').map(file => {
    return isFormatted ? cleanPath(file) : file;
  });

  return files;
};

export const cleanPath = (path: string): string => {
  return path.split('.')[1];
};

export interface IMarkdownShape {
  title: string;
  route: string;
  description: string;
  file: string;
}

type TGetContentsReturn = IMarkdownShape[];

export const getContents = (): TGetContentsReturn => {
  const documents = getPaths(false).map(file => {
    const markdown = readFileSync(`./posts/${file}`, 'utf-8');
    const content = matter(markdown);
    return {
      title: content.data?.title,
      route: content.data?.route,
      description: content.data?.description,
      file,
      extraData: { ...content.data }
    };
  });

  return documents;
};

export default getPaths;
