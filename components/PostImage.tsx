import { ImgProps } from '@chakra-ui/react';
import Description from './Description';
import ExpandableImage from './ExpandableImage';
import PostElement from './PostElement';

interface IPostImage {
  url: string;
  explaination?: string;
}

const PostImage = ({ url, explaination, ...props }: IPostImage & ImgProps) => {
  return (
    <PostElement description={explaination}>
      <ExpandableImage url={url} expandable={false} {...props} />
    </PostElement>
  );
};

export default PostImage;
