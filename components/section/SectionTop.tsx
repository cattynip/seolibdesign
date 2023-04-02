import { useColorModeValue } from '@chakra-ui/react';
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
        <div className="flex pt-10 flex-col items-center justify-center">
          <h1
            className="mx-auto cursor-default pb-4 text-4xl md:text-6xl font-bold"
            style={{
              color: titleColor
            }}
          >
            {title}
          </h1>
          <Description
            extraClassName="w-full max-w-full text-center"
            description={description}
          />
        </div>
      </Section>
    </>
  );
};

export default SectionTop;
