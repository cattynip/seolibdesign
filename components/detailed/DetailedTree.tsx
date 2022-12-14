import { Box, Container, Heading, useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';

interface IDetailedTree {
  stageType: TDataType;
}

const DetailedTree = ({
  stageType,
  images,
  ...props
}: IDetailedTree & BoxProps) => {
  return (
    <Box
      display={'flex'}
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      pb={8}
      {...props}
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
      </Box>
    </Box>
  );
};

export default DetailedTree;
