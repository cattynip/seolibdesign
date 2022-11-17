import {
  Heading,
  Img,
  Container,
  Box,
  Text,
  Link,
  useColorModeValue,
  Flex
} from '@chakra-ui/react';
import NextLink from 'next/link';

export interface IProjectCard {
  title: string;
  description: string;
  linkTo: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  linkTo,
  imageUrl
}: IProjectCard) => {
  const boxBgColor = useColorModeValue('#383831', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');

  return (
    <NextLink href={linkTo} passHref legacyBehavior>
      <Link
        width={{ md: 'container.sm', sm: '100%' }}
        bg={boxBgColor}
        textColor={textColor}
        borderRadius="lg"
        style={{ textDecoration: 'none' }}
      >
        <Box as={Flex}>
          <Img
            src={imageUrl}
            borderLeftRadius="lg"
            height={250}
            display={{ md: 'block', sm: 'none' }}
          />
          <Container p={4} experimental_spaceY={2}>
            <Heading as="h2">{title}</Heading>
            <Text>{description}</Text>
          </Container>
        </Box>
      </Link>
    </NextLink>
  );
};

export default ProjectCard;
