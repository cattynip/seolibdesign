import { Box } from '@chakra-ui/react';
import {
  getImageMore,
  ImageNumberPerWidth,
  screenWidthChanger
} from '@libs/imageUrl';
import { useEffect, useState } from 'react';
import HeaderGalleryElement from './HeaderGalleryElement';
import useWidth from './useWidth';

const HeaderGallery = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  screenWidthChanger(useWidth());

  useEffect(() => {
    setUrls(getImageMore(ImageNumberPerWidth));
    setIsShow(true);
  }, [ImageNumberPerWidth]);

  return (
    <Box as="div" display="inline-flex">
      {isShow ? (
        <>
          <HeaderGalleryElement urls={urls} isExtra={false} />
          <HeaderGalleryElement urls={urls} isExtra={true} />
        </>
      ) : null}
    </Box>
  );
};

export default HeaderGallery;
