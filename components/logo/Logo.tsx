import { Box, useColorModeValue } from '@chakra-ui/react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import LogoS from './LogoS';

export type TLogoSVGMode = 'dark' | 'light';

interface ILogoSVG {
  mode: TLogoSVGMode;
  size?: number;
  rounded?: boolean;
}

const LogoSVG = ({ mode, size = 10, rounded = true }: ILogoSVG) => {
  const mainColor = mode === 'dark' ? '#000000' : '#ffffff';
  const sideColor = mode === 'dark' ? '#ffffff' : '#000000';

  return (
    <Box
      width={size}
      height={size}
      borderRadius={rounded ? 'full' : 'none'}
      overflow={'hidden'}
    >
      <motion.svg
        initial={{
          fillOpacity: 0
        }}
        animate={{
          fillOpacity: 1,
          transition: {
            delay: 0.1,
            duration: 0.6
          }
        }}
        viewBox="0 0 1024 1024"
      >
        <g opacity="1">
          <path
            d="M2.84217e-14 0L1024 0L1024 1024L2.84217e-14 1024L2.84217e-14 0Z"
            fill={mainColor}
          />
          {[...Array(3)].map((_, index) => (
            <LogoS key={index} index={index} sideColor={sideColor} />
          ))}
        </g>
      </motion.svg>
    </Box>
  );
};

const Logo = () => {
  const mode = useColorModeValue('light', 'dark');

  return (
    <Link href="/">
      <LogoSVG mode={mode} />
    </Link>
  );
};

export default Logo;
