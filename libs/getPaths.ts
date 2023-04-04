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
  period: string;
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
      period: content.data?.period,
      file,
      extraData: { ...content.data }
    };
  });

  documents.sort((firstObj, secondObj) => {
    if (firstObj.period > secondObj.period) {
      return 1;
    } else if (firstObj.period < secondObj.period) {
      return -1;
    } else {
      return 0;
    }
  });

  return documents;
};

export default getPaths;
