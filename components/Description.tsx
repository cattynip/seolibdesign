import { Text, TextProps, useColorModeValue } from '@chakra-ui/react';

interface IDescription {
  description?: string;
}

const Description = ({ description, ...props }: IDescription & TextProps) => {
  const descriptionColor = useColorModeValue('gray.600', 'whiteAlpha.700');
  const descriptionHoverColor = useColorModeValue('black', 'whiteAlpha.900');

  if (!description) description = '';

  return (
    <Text
      cursor="default"
      textColor={descriptionColor}
      transitionDuration="500ms"
      _hover={{ textColor: descriptionHoverColor }}
      {...props}
    >
      {description}
    </Text>
  );
};

export default Description;
