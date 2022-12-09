import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';
import { TArea } from '@data/data';

interface IDetailedTop {
  area: TArea | string;
  description: string;
  finalImageUrl: string;
}

const DetailedTop = ({ area, description, finalImageUrl }: IDetailedTop) => {
  return (
    <Box width="100%" display="flex" justifyContent={'space-between'}>
      <Box width={{ base: 'max', sm: '100%' }}>
        <Heading as="h1" size="3xl" pb={3}>
          {area}
        </Heading>
        <Description description="This is a description of a cover page." />
      </Box>
    </Box>
  );
};

export default DetailedTop;
