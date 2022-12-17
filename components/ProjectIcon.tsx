import { IoHome, IoLogoGithub, IoNewspaper } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { HiHomeModern } from 'react-icons/hi2';

interface IProjectIcon {
  iconType: string;
  size?: number;
}

const ProjectIcon = ({ iconType, size = 60 }: IProjectIcon) => {
  return (
    <>
      {iconType === 'home' ? <IoHome size={size} /> : null}
      {iconType === 'magazine' ? <IoNewspaper size={size} /> : null}
      {iconType === 'website' ? <CgWebsite size={size} /> : null}
      {iconType === 'house' ? <HiHomeModern size={size} /> : null}
      {iconType === 'github' ? <IoLogoGithub size={size} /> : null}
    </>
  );
};

export default ProjectIcon;
