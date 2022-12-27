import { Text, useColorModeValue } from '@chakra-ui/react';
import * as CSS from 'csstype';

interface IDescription {
  description?: string;
  colors?: {
    unHovered: string;
    hovered: string;
  };
  cursor?: CSS.Property.Cursor;
  textAlign?: CSS.Property.TextAlign;
  fontSize?: CSS.Property.FontSize;
  pb?: CSS.Property.PaddingBottom | number;
  width?: CSS.Property.Width;
  maxW?: CSS.Property.MaxWidth;
  transitionDuration?: CSS.Property.TransitionDuration;
}

const Description = ({
  description,
  colors,
  cursor,
  textAlign,
  fontSize,
  pb,
  width,
  maxW,
  transitionDuration
}: IDescription) => {
  const descriptionColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const descriptionHoverColor = useColorModeValue('black', 'whiteAlpha.900');

  if (!description) description = '';

  return (
    <Text
      cursor={cursor ? cursor : 'default'}
      textColor={colors ? colors.unHovered : descriptionColor}
      textAlign={textAlign ? textAlign : 'start'}
      fontSize={fontSize ? fontSize : 'md'}
      pb={pb ? pb : '0'}
      width={width ? width : 'auto'}
      maxW={maxW ? maxW : 'auto'}
      transitionDuration={transitionDuration ? transitionDuration : '500ms'}
      _hover={{ textColor: colors ? colors.hovered : descriptionHoverColor }}
    >
      {description}
    </Text>
  );
};

export default Description;
