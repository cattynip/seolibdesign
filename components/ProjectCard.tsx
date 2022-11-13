import {
  Heading,
  Img,
  Container,
  Flex,
  useColorModeValue,
  Text
} from '@chakra-ui/react';
import LinkItem from './LinkItem';

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

  const titleText = title.charAt(0).toUpperCase() + title.slice(1);

  return (
    <LinkItem href={linkTo}>
      <Flex
        bg={boxBgColor}
        width="container.sm"
        maxW="90%"
        textColor="black"
        borderRadius="lg"
      >
        <Img height={250} m={0} borderLeftRadius="lg" src={imageUrl}></Img>
        <Container px={5} pt={5} experimental_spaceY={1}>
          <Heading as="h2" size="xl" textColor={textColor}>
            {titleText}
          </Heading>
          <Text textColor={textColor}>{description}</Text>
        </Container>
      </Flex>
    </LinkItem>
  );
};

export default ProjectCard;
