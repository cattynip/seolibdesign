import { IoNewspaper } from 'react-icons/io5';
import { HiHomeModern } from 'react-icons/hi2';

interface IProjectIcon {
  iconType: string;
}

const ProjectIcon = ({ iconType }: IProjectIcon) => {
  const sizeNumber = 60;

  return (
    <>
      {iconType === 'magazine' ? <IoNewspaper size={sizeNumber} /> : null}
      {iconType === 'house' ? <HiHomeModern size={sizeNumber} /> : null}
    </>
  );
};

export default ProjectIcon;
