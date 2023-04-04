import { useColorModeValue } from '@chakra-ui/react';
import classJoin from '@libs/classJoin';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Anchor from './Anchor';
import Description from './Description';
import ProjectIcon, { TIconType } from './ProjectIcon';

interface IProjectPillCard {
  title: string;
  description?: string;
  iconType: TIconType;
  isAvailable: boolean;
  linkTo?: string;
  isEven: boolean;
}

const ProjectPillCard = ({
  isAvailable,
  isEven,
  iconType,
  title,
  linkTo,
  description = ''
}: IProjectPillCard) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const boxBgColor = useColorModeValue('#202023', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');

  return (
    <AnimatePresence>
      <Anchor href={linkTo ? linkTo : `/${title.toLowerCase()}`}>
        <motion.div
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
          className={'relative shadow-2xl rounded-full cursor-pointer z-10'}
          style={{
            backgroundColor: boxBgColor,
            color: textColor
          }}
        >
          <div
            className={classJoin([
              'flex items-center p-2 mb-4',
              isEven
                ? 'justify-start flex-row pl-2 pr-14'
                : 'justify-start flex-row-reverse p-2 pl-14',
              isAvailable ? '' : 'blur-md'
            ])}
          >
            <motion.div
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
              className={classJoin([
                'text-black p-7 rounded-full',
                isAvailable ? 'bg-gray-400' : 'bg-gray-600'
              ])}
            >
              <ProjectIcon iconType={iconType} />
            </motion.div>
            <div
              className={classJoin([
                'flex flex-col justify-center px-6',
                isEven ? 'items-start' : 'items-end'
              ])}
            >
              <h2 className="text-3xl font-semibold">{title}</h2>
              <Description
                description={description}
                extraClassName={`text-${isEven ? 'left' : 'right'}`}
              />
            </div>
          </div>
          {isAvailable ? null : (
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center text-center z-10">
              <p className="text-4xl font-bold">It will be back!</p>
            </div>
          )}
        </motion.div>
      </Anchor>
    </AnimatePresence>
  );
};

export default ProjectPillCard;
