import { Box } from '@chakra-ui/react';
import {
  getImageMore,
  ImageHeight,
  ImageNumberPerWidth,
  screenWidthChanger
} from '@libs/imageUrl';
import { useEffect, useState } from 'react';
import HeaderGalleryElement from './HeaderGalleryElement';
import useWidth from './useWidth';

const HeaderGallery = () => {
  const [urls, setUrls] = useState<string[]>([]);
  const [extraUrls, setExtraUrls] = useState<string[]>([]);
  const [isShow, setIsShow] = useState<boolean>(false);

  screenWidthChanger(useWidth());

  useEffect(() => {
    setUrls(getImageMore(ImageNumberPerWidth));
    setExtraUrls(getImageMore(ImageNumberPerWidth));
    setIsShow(true);
  }, [ImageNumberPerWidth]);

  return (
    <>
      <Box as="div" display="inline-flex" position="fixed">
        {isShow ? (
          <>
            <HeaderGalleryElement urls={urls} isExtra={false} />
            <HeaderGalleryElement urls={extraUrls} isExtra={true} />
          </>
        ) : null}
      </Box>
      <Box height={ImageHeight} />
    </>
  );
};

export default HeaderGallery;
