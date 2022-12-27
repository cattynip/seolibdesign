import Description from './Description';
import ExpandableImage from './ExpandableImage';
import PostElement from './PostElement';
import * as CSS from 'csstype';

interface IPostImage {
  url: string;
  explaination?: string;
  width?: CSS.Property.Width;
}

const PostImage = ({ url, explaination, width }: IPostImage) => {
  return (
    <PostElement description={explaination}>
      <ExpandableImage
        url={url}
        expandable={false}
        width={width ? width : 'auto'}
      />
      <Description description={'↑ ' + explaination} />
    </PostElement>
  );
};

export default PostImage;
