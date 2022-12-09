import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';
import { TDataType } from '@data/data';
import DetailedImage from './DetailedImage';

interface IDetailedTree {
  stageType: TDataType;
  images: string[];
}

const DetailedTree = ({ stageType, images }: IDetailedTree) => {
  return (
    <Box
      display={'flex'}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      pb={8}
    >
      <Container>
        <Description
          textAlign="center"
          fontSize="lg"
          pb={3}
          description={stageType}
        ></Description>
      </Container>
      <Box
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="space-around"
      >
        {stageType === 'intermediate' ? <Box /> : null}
        {images.map(image => (
          <DetailedImage key={image} imageData={[image]} />
        ))}
        {stageType === 'intermediate' ? <Box /> : null}
      </Box>
    </Box>
  );
};

export default DetailedTree;
