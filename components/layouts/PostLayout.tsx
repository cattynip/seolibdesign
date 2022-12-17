import { Box, Heading, Stack, Text } from '@chakra-ui/react';
import Description from '@components/Description';
import PostImage from '@components/PostImage';
import Section from '@components/Section';
import Separator from '@components/Separator';
import { IWebsiteData } from '@data/websiteData';

interface IPostLayout {
  datas: IWebsiteData[];
}

const PostLayout = ({ datas }: IPostLayout) => {
  return (
    <>
      <Section delay={0.4}>
        <Stack width="100%" experimental_spaceY={4} pt={3}>
          {datas.map((value, index) => (
            <Box width="100%" key={index}>
              <Section delay={0.6}>
                <Box
                  width="100%"
                  display="flex"
                  alignItems="center"
                  justifyContent={'space-between'}
                >
                  <Heading as={'h2'} size={'2xl'}>
                    {value.title}
                  </Heading>
                  <Description description={value.shortDescription} />
                </Box>
              </Section>
              <Box
                display="flex"
                flexDir={'column'}
                alignItems="flex-start"
                justifyContent={'center'}
              >
                {value.datas.map((content, idx) => (
                  <Box key={idx} py={3}>
                    {content.content ? (
                      <Text>{content.content}</Text>
                    ) : content.image ? (
                      <Stack
                        display="flex"
                        flexDir={'column'}
                        alignItems="center"
                        justifyContent={'center'}
                      >
                        <PostImage
                          url={content.image.src}
                          explaination={content.image.explaination}
                          key={idx}
                          width={'70%'}
                        />
                      </Stack>
                    ) : null}
                  </Box>
                ))}
              </Box>

              <Separator />
            </Box>
          ))}
        </Stack>
      </Section>
    </>
  );
};

export default PostLayout;
