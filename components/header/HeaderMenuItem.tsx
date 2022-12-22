import { Box, MenuItem, Text } from '@chakra-ui/react';
import Anchor from '@components/Anchor';
import ProjectIcon, { TIconType } from '@components/ProjectIcon';
import { motion } from 'framer-motion';

interface IHeaderMenuItem {
  href: string;
  iconType: TIconType;
  text: string;
  index: number;
}

const HeaderMenuItem = ({ href, iconType, text, index }: IHeaderMenuItem) => {
  return (
    <Box
      as={motion.div}
      initial={{ opacity: 0, x: -10 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          delay: index / 25
        }
      }}
      whileHover={{
        backgroundColor: 'rgb(255, 255, 255)',
        color: 'rgb(0, 0, 0)',
        transition: {
          duration: 0.15
        }
      }}
    >
      <Anchor href={href}>
        <MenuItem py={3} borderWidth={1}>
          <ProjectIcon iconType={iconType} size={23} />
          <Text ml={1.5}>{text}</Text>
        </MenuItem>
      </Anchor>
    </Box>
  );
};

export default HeaderMenuItem;
