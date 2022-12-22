import { AspectRatio, Box, Img, ImgProps } from '@chakra-ui/react';
import { getRandomNumber } from '@libs/math';
import { motion } from 'framer-motion';
import Overlay from '@components/Overlay';
import React, { useState } from 'react';

type appearDirectionType = 'top' | 'left' | 'bottom' | 'right';

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
  expandable = true,
  id,
  children,
  alt,
  appearDirection = 'top',
  appearTime = 2,
  ...props
}: IExpandableImage & ImgProps) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);

  return (
    <>
      <Img
        as={motion.img}
        layoutId={expandable ? url + id : undefined}
        src={url}
        alt={alt}
        initial={{
          scale: 1,
          y:
            appearDirection === 'top'
              ? -2000
              : appearDirection === 'bottom'
              ? 2000
              : 0,
          x:
            appearDirection === 'left'
              ? -2000
              : appearDirection === 'right'
              ? 2000
              : 0
        }}
        animate={{
          y: 0,
          x: 0,
          transition: {
            delay: getRandomNumber(1, appearTime, false),
            bounce: 0.25,
            duration: 1,
            type: 'spring'
          }
        }}
        whileHover={
          expandable
            ? {
                borderRadius: '3%',
                scale: [1, 0.95, 1.75, 1.7],
                zIndex: [0, 0, 0, 10],
                transition: {
                  type: 'spring',
                  duration: 0.5
                }
              }
            : {}
        }
        cursor={expandable ? 'pointer' : 'default'}
        onClick={() => setIsOverlayShown(true)}
        {...props}
      />
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
              <>
                <Img
                  as={motion.img}
                  layoutId={url}
                  mx={'auto'}
                  width="100%"
                  src={url}
                  {...props}
                />
              </>
            </AspectRatio>
          </Box>
        </Overlay>
      ) : null}
    </>
  );
};

export default ExpandableImage;
