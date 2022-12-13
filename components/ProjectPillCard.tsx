import {
  Box,
  Heading,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { isDate } from 'util/types';
import Description from './Description';
import ProjectIcon from './ProjectIcon';

interface IProjectPillCard {
  title: string;
  description: string;
  iconType: string;
  isAvailable: boolean;
  isEven: boolean;
}

const ProjectPillCard = ({
  isAvailable,
  isEven,
  iconType,
  title,
  description
}: IProjectPillCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const boxBgColor = useColorModeValue('#202023', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');
  const isDark = useColorMode();

  return (
    <>
      <Box
        as={motion.div}
        initial={{ opacity: 0, x: isEven ? -30 : 30, filter: 'blur(15rem)' }}
        animate={{
          opacity: 1,
          x: 0,
          filter: 'blur(0px)',
          transition: { delay: 3, type: 'spring', bounce: 0.2 }
        }}
        whileHover={
          isAvailable
            ? {
                scale: 1.2,
                transition: { delay: 0.2, type: 'spring', bounce: 0.7 }
              }
            : {
                scale: 0.9,
                transition: { delay: 0.2, type: 'spring', bounce: 0.7 }
              }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        position="relative"
        shadow="dark-lg"
        bg={boxBgColor}
        textColor={textColor}
        borderRadius="full"
        cursor={isAvailable ? 'pointer' : 'not-allowed'}
        zIndex={10}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent={isEven ? 'start' : 'end'}
          flexDir={isEven ? 'row' : 'row-reverse'}
          experimental_spaceX={7}
          p={2}
          mb={4}
          zIndex={-1}
          filter={isAvailable ? 'blur(0px)' : 'blur(10px)'}
        >
          <Box
            as={motion.div}
            initial={{}}
            animate={
              isHovered
                ? {
                    rotateX: 720,
                    rotateY: 720,
                    rotateZ: 720,
                    transition: {
                      delay: 0.1,
                      duration: 0.4
                    }
                  }
                : {}
            }
            bg={isAvailable ? 'gray.400' : 'gray.600'}
            textColor={'blackAlpha.700'}
            p={7}
            borderRadius="full"
          >
            <ProjectIcon iconType={iconType} />
          </Box>
          <Box
            display="flex"
            flexDir="column"
            alignItems={isEven ? 'start' : 'end'}
            justifyContent="center"
            experimental_spaceY={0}
          >
            <Heading as={'h2'} textColor={isAvailable ? textColor : 'white'}>
              {title}
            </Heading>
            <Description
              description={description}
              colors={
                isAvailable
                  ? {
                      unHovered:
                        isDark.colorMode === 'dark'
                          ? 'gray.500'
                          : 'whiteAlpha.600',
                      hovered:
                        isDark.colorMode === 'dark'
                          ? 'gray.900'
                          : 'whiteAlpha.900'
                    }
                  : undefined
              }
              cursor={isAvailable ? 'default' : 'not-allowed'}
            />
          </Box>
        </Box>
        {isAvailable ? null : (
          <Box
            position={'absolute'}
            left={0}
            top={0}
            width="100%"
            height={'100%'}
            display="flex"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            zIndex={10}
          >
            <Heading size={'2xl'}>It will be back!</Heading>
          </Box>
        )}
      </Box>
    </>
  );
};

export default ProjectPillCard;
