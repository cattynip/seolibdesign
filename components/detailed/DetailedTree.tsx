import { Box, BoxProps, Container, useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';
import ExpandableImage, {
  ImageHeight,
  ImageWidth
} from '@components/ExpandableImage';
import { TMagazineArea, TMagazinePart } from '@data/magazineData';
import { firstCapitalize } from '@libs/math';
import { AnimatePresence, motion } from 'framer-motion';

interface IDetailedTree {
  stageType: TMagazinePart;
  section: TMagazineArea;
  images: string[] | string[][];
  changeVariableFn?: () => void;
}

const DetailedTree = ({
  stageType,
  images,
  ...props
}: IDetailedTree & BoxProps) => {
  const backgroundColor = useColorModeValue('#f0e7db', '#202023');
  const hoverBackgroundColor = useColorModeValue('#202023', '#f0e7db');

  const textColor = useColorModeValue('black', 'white');
  const hoverTextColor = useColorModeValue('white', 'black');

  const borderColor = useColorModeValue('black', 'whiteAlpha.500');

  return (
    <AnimatePresence mode="popLayout">
      <Box
        as={motion.div}
        initial={{ x: 0, y: -20, opacity: 0 }}
        animate={{
          x: 0,
          y: 0,
          opacity: 1,
          backgroundColor: backgroundColor,
          color: textColor,
          transition: {
            delay: 0.4,
            duration: 0.3
          }
        }}
        exit={{ x: 0, y: -20, opacity: 0, backgroundColor: 'red' }}
        whileHover={{
          backgroundColor: hoverBackgroundColor,
          color: hoverTextColor,
          transition: {
            duration: 0.2
          }
        }}
        cursor="pointer"
        display={'flex'}
        flexDir="column"
        alignItems="center"
        justifyContent="center"
        pb={typeof images[0] === 'object' ? 10 : 5}
        border={'1px'}
        borderColor={borderColor}
        borderRadius={'lg'}
        py={10}
        mb={'4'}
        {...props}
      >
        <Container>
          <Description
            textAlign="center"
            fontSize="lg"
            pb={3}
            description={firstCapitalize(stageType)}
          />
        </Container>
        <Box
          w="100%"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          {stageType === 'intermediate' && <Box />}

          {images.map((value, index) => {
            if (typeof value === 'object') {
              return (
                <Box
                  key={index}
                  position="relative"
                  width={ImageWidth}
                  height={ImageHeight}
                >
                  {value.map((value, index) => {
                    const isOdd = index % 2 !== 0;

                    return (
                      <ExpandableImage
                        url={value}
                        key={index}
                        position={'absolute'}
                        width={ImageWidth}
                        height={ImageHeight}
                        top={isOdd ? 5 : 0}
                        left={isOdd ? 5 : 0}
                        shadow="2xl"
                        zIndex={isOdd ? 1 : 2}
                      />
                    );
                  })}
                </Box>
              );
            } else {
              return (
                <ExpandableImage
                  url={value}
                  key={index}
                  width={ImageWidth}
                  height={ImageHeight}
                />
              );
            }
          })}

          {stageType === 'intermediate' && <Box />}
        </Box>
      </Box>
    </AnimatePresence>
  );
};

export default DetailedTree;
