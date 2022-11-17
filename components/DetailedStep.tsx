import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import { TDataType } from '@data/data';
import DetailedImage from './DetailedImage';

interface IDetailedStep {
  stageType: TDataType;
  images: string[];
}

const DetailedStep = ({ stageType, images }: IDetailedStep) => {
  return (
    <Box
      display={'flex'}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      pb={3}
    >
      <Container>
        <Heading
          textAlign="center"
          fontWeight={300}
          fontSize="lg"
          cursor="default"
          transition="color .2s linear"
          pb={3}
          textColor={useColorModeValue('gray.600', 'whiteAlpha.700')}
          _hover={{ textColor: useColorModeValue('black', 'whiteAlpha.900') }}
        >
          {stageType}
        </Heading>
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

export default DetailedStep;
