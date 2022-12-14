import { Box, Img } from '@chakra-ui/react';

interface IHeaderGalleryElement {
  url: string;
}

const HeaderGalleryElement = ({ url }: IHeaderGalleryElement) => {
  return (
    <Box>
      <Img width={100} height={100 * 1.38} src={url}></Img>
    </Box>
  );
};

export default HeaderGalleryElement;
