import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

interface IDescription {
  description?: string;
  colors?: {
    unHovered: string;
    hovered: string;
  };
}

const Description = ({
  description,
  colors,
  ...props
}: IDescription & TextProps) => {
  const descriptionColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const descriptionHoverColor = useColorModeValue('black', 'whiteAlpha.900');

  if (!description) description = '';

  return (
    <Text
      cursor="default"
      textColor={colors ? colors.unHovered : descriptionColor}
      transitionDuration="500ms"
      _hover={{ textColor: colors ? colors.hovered : descriptionHoverColor }}
      {...props}
    >
      {description}
    </Text>
  );
};

export default Description;
