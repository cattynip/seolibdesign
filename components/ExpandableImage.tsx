import { Box, Img, ImgProps } from '@chakra-ui/react';
import { getRandomNumber } from '@libs/math';
import { motion } from 'framer-motion';
import Overlay from '@components/Overlay';
import { useState } from 'react';

type appearDirectionType = 'top' | 'left' | 'bottom' | 'right';

interface IExpandableImage {
  url: string;
  width?: number | string;
  height?: number | string;
  alt?: string;
  appearDirection?: appearDirectionType;
}

const ExpandableImage = ({
  url,
  alt,
  width,
  height,
  appearDirection = 'top',
  ...props
}: IExpandableImage & ImgProps) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);
  const [uniqueId, setUniqueId] = useState<string>(
    url + alt + width + height + appearDirection
  );

  return (
    <>
      <Img
        as={motion.img}
        layoutId={uniqueId}
        src={url}
        alt={alt}
        initial={{
          width: width ? width : 'auto',
          height: height ? height : 'auto',
          scale: 1,
          y:
            appearDirection === 'top'
              ? -1000
              : appearDirection === 'bottom'
              ? 1000
              : 0,
          x:
            appearDirection === 'left'
              ? -1000
              : appearDirection === 'right'
              ? 1000
              : 0
        }}
        animate={{
          y: 0,
          x: 0,
          transition: {
            delay: getRandomNumber(0, 2, false),
            duration: 1,
            type: 'spring'
          }
        }}
        whileHover={{
          borderRadius: '3%',
          scale: [1, 0.95, 1.75, 1.7],
          transition: {
            type: 'spring',
            duration: 0.5
          }
        }}
        onClick={() => setIsOverlayShown(true)}
        cursor="pointer"
        {...props}
      />
      {isOverlayShown ? (
        <Overlay onClick={() => setIsOverlayShown(false)}>
          <Box position="fixed" top={70} width="full">
            <Img
              as={motion.img}
              layoutId={uniqueId}
              mx="auto"
              width="2xl"
              height="90%"
              src={url}
              alt={alt}
              onClick={() => setIsOverlayShown(false)}
              cursor="pointer"
              {...props}
            />
          </Box>
        </Overlay>
      ) : null}
    </>
  );
};

export default ExpandableImage;
