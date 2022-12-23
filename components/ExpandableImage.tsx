import { AspectRatio, Box, Img, ImgProps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Overlay from '@components/Overlay';
import React, { useState } from 'react';
import ExpandableBox, { appearDirectionType } from './ExpandableBox';

export const ImageWidth = 130;
export const ImageHeight = (ImageWidth * 4) / 3;

interface IExpandableImage {
  url: string;
  expandable?: boolean;
  id?: string;
  children?: React.ReactNode;
  alt?: string;
  appearDirection?: appearDirectionType;
  appearTime?: number;
}

const ExpandableImage = ({
  url,
  id,
  alt,
  expandable = true,
  appearDirection = 'top',
  appearTime = 2,
  ...props
}: IExpandableImage & ImgProps) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);

  return (
    <>
      <ExpandableBox
        id={url + id + alt + expandable + appearDirection + appearTime}
        appearDirection={appearDirection}
        appearDuration={1}
        appearDelay={2}
      >
        <Img
          src={url}
          alt={alt}
          cursor={expandable ? 'pointer' : 'default'}
          onClick={() => setIsOverlayShown(true)}
          {...props}
        />
      </ExpandableBox>
      {isOverlayShown && expandable ? (
        <Overlay onClick={() => setIsOverlayShown(false)}>
          <Box
            position="fixed"
            top={70}
            width="100%"
            zIndex={'overlay'}
            px={5}
            experimental_spaceY={3}
          >
            <AspectRatio
              maxW={'100%'}
              maxH={'90vh'}
              ratio={ImageWidth / ImageHeight}
              width="container.md"
              mx="auto"
            >
              <Img
                as={motion.img}
                layoutId={
                  url + id + alt + expandable + appearDirection + appearTime
                }
                mx={'auto'}
                width="100%"
                src={url}
                zIndex={10}
                {...props}
              />
            </AspectRatio>
          </Box>
        </Overlay>
      ) : null}
    </>
  );
};

export default ExpandableImage;
