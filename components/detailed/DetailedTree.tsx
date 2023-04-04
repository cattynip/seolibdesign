import { useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';
import ExpandableImage, {
  ImageHeight,
  ImageWidth
} from '@components/ExpandableImage';
import { TMagazineArea, TMagazinePart } from '@data/magazineData';
import classJoin from '@libs/classJoin';
import { firstCapitalize } from '@libs/math';
import { AnimatePresence, motion } from 'framer-motion';
import { HTMLAttributes } from 'react';

interface IDetailedTree {
  stageType: TMagazinePart;
  section: TMagazineArea;
  images: string[] | string[][];
  changeVariableFn?: () => void;
}

const DetailedTree = ({
  stageType,
  images
}: IDetailedTree & HTMLAttributes<HTMLDivElement>) => {
  const backgroundColor = useColorModeValue('#f0e7db', '#202023');
  const hoverBackgroundColor = useColorModeValue('#202023', '#f0e7db');

  const textColor = useColorModeValue('black', 'white');
  const hoverTextColor = useColorModeValue('white', 'black');

  const borderColor = useColorModeValue('black', 'whiteAlpha.500');

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
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
        className={classJoin([
          'cursor-pointer flex flex-col items-center justify-center border-2 rounded-lg py-10 mb-4',
          typeof images[0] === 'object' ? 'pb-10' : 'pb-5'
        ])}
        style={{
          borderColor: borderColor
        }}
      >
        <div>
          <Description
            extraClassName="text-center text-lg pb-3"
            description={firstCapitalize(stageType)}
          />
        </div>
        <div className="w-full flex items-center justify-around">
          {stageType === 'intermediate' && <div />}

          {images.map((value, index) => {
            if (typeof value === 'object') {
              return (
                <div
                  key={index}
                  className="relative"
                  style={{
                    width: ImageWidth,
                    height: ImageHeight
                  }}
                >
                  {value.map((value, idx) => {
                    const isOdd = idx % 2 !== 0;

                    return (
                      <ExpandableImage
                        url={value}
                        key={idx}
                        position="absolute"
                        top={isOdd ? 8 : 1}
                        left={isOdd ? 7 : 0}
                        width={ImageWidth}
                        height={ImageHeight}
                        shadow="2xl"
                        zIndex={isOdd ? 1 : 2}
                      />
                    );
                  })}
                </div>
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

          {stageType === 'intermediate' && <div />}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DetailedTree;
