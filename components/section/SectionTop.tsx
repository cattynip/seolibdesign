import { Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import Description from '@components/Description';
import Section from '@components/Section';

interface ISectionTop {
  title: string;
  description?: string;
}

const SectionTop = ({ title, description }: ISectionTop) => {
  const titleColor = useColorModeValue('black', 'white');

  return (
    <>
      <Section delay={0.2}>
        <Flex
          pt={10}
          flexDir={'column'}
          alignItems="center"
          justifyContent="center"
        >
          <Heading
            as="h1"
            size={{ md: '4xl', sm: '3xl' }}
            textColor={titleColor}
            textAlign="center"
            mx="auto"
            cursor="default"
            pb={4}
          >
            {title}
          </Heading>
          <Description
            width="100%"
            maxW="container.sm"
            textAlign="center"
            transitionDuration="500ms"
            description={description}
          />
        </Flex>
      </Section>
    </>
  );
};

export default SectionTop;
