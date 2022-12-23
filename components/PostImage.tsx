import { ImgProps } from '@chakra-ui/react';
import Description from './Description';
import ExpandableImage from './ExpandableImage';

interface IPostImage {
  url: string;
  explaination?: string;
}

const PostImage = ({ url, explaination, ...props }: IPostImage & ImgProps) => {
  return (
    <>
      <ExpandableImage url={url} expandable={false} {...props} />
      <Description description={'↑ ' + explaination} />
    </>
  );
};

export default PostImage;
