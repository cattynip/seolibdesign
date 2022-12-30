import { AspectRatio, Box, Heading, Stack } from '@chakra-ui/react';
import Description from '@components/Description';
import PostElement from '@components/PostElement';
import PostImage from '@components/PostImage';
import Section from '@components/Section';
import Separator from '@components/Separator';
import Gallery from '@components/Gallery';
import ThreeDModel from '@components/ThreeDModel';
import { IPostData } from '@data/websiteData';

interface IPostLayout {
  datas: IPostData[];
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
                  <Heading as={'h2'} size={'xl'}>
                    {value.title}
                  </Heading>
                  <Description
                    description={value.shortDescription}
                    textAlign={'right'}
                  />
                </Box>
              </Section>
              <Box
                display="flex"
                flexDir={'column'}
                alignItems="flex-start"
                justifyContent={'center'}
              >
                {value.datas.map((content, idx) => (
                  <Section delay={0.8} key={idx}>
                    <Box py={3}>
                      {content.sectionTitle ? (
                        <Heading as={'h3'} size="lg" pb={3}>
                          {content.sectionTitle}
                        </Heading>
                      ) : null}
                      {content.content ? (
                        <PostElement>{content.content}</PostElement>
                      ) : content.image ? (
                        <PostImage
                          url={content.image.src}
                          explaination={content.image.explaination}
                          key={idx}
                          width={'50%'}
                        />
                      ) : content.threeD ? (
                        <PostElement description={content.threeD.explaination}>
                          <AspectRatio ratio={16 / 9}>
                            <ThreeDModel src={content.threeD.src} />
                          </AspectRatio>
                        </PostElement>
                      ) : content.gallery ? (
                        <PostElement description={content.gallery.explaination}>
                          <Gallery images={content.gallery.src} />
                        </PostElement>
                      ) : null}
                    </Box>
                  </Section>
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
