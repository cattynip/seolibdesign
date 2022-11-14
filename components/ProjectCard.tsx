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
    <Link
      href={linkTo}
      width={{ md: 'container.md', sm: '100%' }}
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
        <Container p={4}>
          <Heading as="h2">{title}</Heading>
          <Text>{description}</Text>
        </Container>
      </Box>
    </Link>
  );
};

export default ProjectCard;
