import { Box } from '@chakra-ui/react';
import Description from './Description';

interface IPostElement {
  description?: string | false;
  children: React.ReactNode;
}

const PostElement = ({ description, children }: IPostElement) => {
  return (
    <Box
      display="flex"
      alignItems={'center'}
      justifyContent="center"
      flexDir={'column'}
      experimental_spaceY={3}
      width={'100%'}
    >
      <Box width="100%" height="auto">
        {children}
      </Box>
      {description ? <Description description={'↑ ' + description} /> : null}
    </Box>
  );
};

export default PostElement;
