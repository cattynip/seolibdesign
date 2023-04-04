import { useColorModeValue } from '@chakra-ui/react';
import Anchor from './Anchor';
import Description from './Description';
import { motion, AnimatePresence } from 'framer-motion';

interface IDocumentCard {
  title: string;
  description: string;
  link: string;
  idx: number;
}

/*
 * feature suggestion:
 * If the use hovers over this component,
 * this component will wait for a second and be expanded to become
 * a document that is showing the preview of it.
 */

const DocumentCard = ({ title, description, link, idx }: IDocumentCard) => {
  const boxBgColor = useColorModeValue('#202023', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');

  return (
    <Anchor href={link}>
      <AnimatePresence>
        <motion.div
          initial={{
            x: (idx + 1) % 2 === 0 ? 100 : -100,
            opacity: 0
          }}
          animate={{
            x: 0,
            opacity: 1,
            transition: {
              type: 'spring',
              delay: idx
            }
          }}
          exit={{
            x: 100,
            opacity: 0
          }}
          whileHover={{
            scaleY: 1.3,
            scaleX: 1.2,
            transition: {
              delay: 0,
              type: 'spring',
              bounce: 0.2,
              duration: 0.4
            }
          }}
          className="rounded-md p-5 mb-5"
          style={{ backgroundColor: boxBgColor, color: textColor }}
        >
          <h2 className="text-xl font-bold">
            Term {idx + 1}. {title}
          </h2>
          <Description description={description} />
        </motion.div>
      </AnimatePresence>
    </Anchor>
  );
};

export default DocumentCard;
