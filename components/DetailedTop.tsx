import { Box, Heading, Text } from '@chakra-ui/react';
import { TArea } from '@data/data';
import ExpandableImage from './ExpandableImage';

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
        <Text>{description}</Text>
      </Box>
      <Box
        width="sm"
        mx={0}
        display={{ base: 'flex', md: 'flex', sm: 'none' }}
        justifyContent="flex-end"
      >
        <ExpandableImage url={finalImageUrl} width="40%" />
      </Box>
    </Box>
  );
};

export default DetailedTop;
