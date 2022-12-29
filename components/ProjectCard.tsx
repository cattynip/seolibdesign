import {
  Heading,
  Container,
  Box,
  Text,
  Link,
  useColorModeValue,
  BoxProps
} from '@chakra-ui/react';
import NextLink from 'next/link';
import ExpandableImage from './ExpandableImage';

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
  imageUrl,
  ...props
}: IProjectCard & BoxProps) => {
  const boxBgColor = useColorModeValue('#202023', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');

  return (
    <Box {...props} pt={3}>
      <NextLink href={linkTo} passHref legacyBehavior>
        <Link
          width={{ base: '100%', md: 'container.md' }}
          bg={boxBgColor}
          textColor={textColor}
          borderRadius="lg"
          style={{ textDecoration: 'none' }}
        >
          <Box display="flex">
            <ExpandableImage
              url={imageUrl}
              height={250}
              alt="Project Image"
              display={{ base: 'none', md: 'block' }}
              borderLeftRadius="lg"
            />
            <Container p={4} experimental_spaceY={2}>
              <Heading as="h2">{title}</Heading>
              <Text>{description}</Text>
            </Container>
          </Box>
        </Link>
      </NextLink>
    </Box>
  );
};

export default ProjectCard;
