import { useColorModeValue } from '@chakra-ui/react';
import Anchor from './Anchor';
import Description from './Description';
import ExpandableImage from './ExpandableImage';

export interface IProjectCard {
  title: string;
  description: string;
  linkTo: string;
  imageUrl: string;
}

const ProjectCard = ({
  title,
  description,
  linkTo,
  imageUrl
}: IProjectCard) => {
  const boxBgColor = useColorModeValue('#202023', '#f0e7db');
  const textColor = useColorModeValue('white', 'black');

  return (
    <div className="pt-3">
      <Anchor href={linkTo}>
        <div
          className="w-full md:w-4/6 decoration-transparent rounded-lg"
          style={{
            backgroundColor: boxBgColor,
            color: textColor
          }}
        >
          <ExpandableImage
            url={imageUrl}
            height={250}
            alt="Project Image"
            display={{ base: 'none', md: 'block' }}
            borderLeftRadius="lg"
          />
          <div className="p-4">
            <h2 className="text-2xl font-bold">{title}</h2>
            <Description description={description} />
          </div>
        </div>
      </Anchor>
    </div>
  );
};

export default ProjectCard;
