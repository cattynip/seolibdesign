import { Img } from '@chakra-ui/react';

interface IExpandableImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

const ExpandableImage = ({ url, alt, width, height }: IExpandableImage) => {
  // TODO
  return (
    <Img src={url} alt={alt} width={width} height={height} cursor="pointer" />
  );
};

export default ExpandableImage;
