import { Box, Heading } from '@chakra-ui/react';
import Description from '@components/Description';
import { TMagazineArea } from '@data/magazineData';

interface IDetailedTop {
  area: TMagazineArea | string;
  description: string;
}

const DetailedTop = ({ area, description }: IDetailedTop) => {
  return (
    <Box width="100%" display="flex" justifyContent={'space-between'}>
      <Box width={{ base: 'max', sm: '100%' }}>
        <Heading as="h1" size="3xl" pb={3}>
          {area}
        </Heading>
        <Description description={description} />
      </Box>
    </Box>
  );
};

export default DetailedTop;
