import { AspectRatio, Box, Img } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Overlay from '@components/Overlay';
import React, { useState } from 'react';
import ExpandableBox from './ExpandableBox';
import * as CSS from 'csstype';

export const ImageWidth = 130;
export const ImageHeight = (ImageWidth * 4) / 3;

interface IExpandableImage {
  url: string;
  expandable?: boolean;
  id?: string;
  children?: React.ReactNode;
  alt?: string;
  width?: CSS.Property.Width | number;
  height?: CSS.Property.Height | number;
  /* eslint-disable @typescript-eslint/no-explicit-any */
  display?: any;
  borderLeftRadius?:
    | CSS.Property.BorderTopLeftRadius
    | CSS.Property.BorderBottomLeftRadius;
  position?: CSS.Property.Position;
  top?: CSS.Property.Top | number;
  left?: CSS.Property.Left | number;
  shadow?: CSS.Property.BoxShadow;
  zIndex?: CSS.Property.ZIndex;
}

const ExpandableImage = ({
  url,
  id,
  alt,
  expandable = true,
  width,
  height,
  display,
  borderLeftRadius,
  position,
  top,
  left,
  shadow
}: IExpandableImage) => {
  const [isOverlayShown, setIsOverlayShown] = useState<boolean>(false);

  return (
    <>
      <ExpandableBox
        display="flex"
        alignItems="center"
        justifyContent="center"
        hoverAnimation={expandable ? true : false}
        id={url + id + alt + expandable}
        appearDirection={'top'}
        appearDuration={1}
        appearDelay={2}
      >
        <Img
          src={url}
          cursor={expandable ? 'pointer' : 'default'}
          onClick={() => setIsOverlayShown(true)}
          width={width ? width : 'auto'}
          height={height ? height : 'auto'}
          display={display ? display : 'auto'}
          borderLeftRadius={borderLeftRadius ? borderLeftRadius : 'auto'}
          position={position ? position : 'inherit'}
          top={top ? top : 'inherit'}
          left={left ? left : 'inherit'}
          shadow={shadow ? shadow : 'none'}
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
                layoutId={url + id + alt + expandable}
                mx={'auto'}
                width="100%"
                height={height ? height : 'auto'}
                borderLeftRadius={borderLeftRadius ? borderLeftRadius : 'auto'}
                position={position ? position : 'inherit'}
                top={top ? top : 'inherit'}
                left={left ? left : 'inherit'}
                shadow={shadow ? shadow : 'none'}
                src={url}
                zIndex={10}
              />
            </AspectRatio>
          </Box>
        </Overlay>
      ) : null}
    </>
  );
};

export default ExpandableImage;
