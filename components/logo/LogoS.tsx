import { getMatrixResult } from '@libs/image';
import { motion } from 'framer-motion';

interface ILogoS {
  sideColor: string;
  index: number;
}

const LogoS = ({ sideColor, index }: ILogoS) => {
  const matrixNumber = getMatrixResult(index);

  return (
    <text
      fill={sideColor}
      fontFamily="HackNerdFontComplete-Regular"
      fontSize="1000"
      textAnchor="middle"
      transform={`matrix(${matrixNumber})`}
    >
      <motion.tspan
        initial={{
          opacity: 0
        }}
        animate={{
          opacity: 1,
          transition: {
            delay: index * 0.6,
            duration: 1
          }
        }}
        textLength={602.051}
        x="512"
        y="928"
      >
        S
      </motion.tspan>
    </text>
  );
};

export default LogoS;
