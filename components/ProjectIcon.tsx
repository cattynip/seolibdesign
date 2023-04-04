import { IoHome, IoLogoGithub, IoNewspaper } from 'react-icons/io5';
import { CgWebsite } from 'react-icons/cg';
import { HiHomeModern } from 'react-icons/hi2';
import {
  BsEyeSlashFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill
} from 'react-icons/bs';
import { TbCircle8, TbCircle9 } from 'react-icons/tb';

export type TIconType =
  | 'home'
  | 'magazine'
  | 'website'
  | 'house'
  | 'github'
  | 'leftArrow'
  | 'rightArrow'
  | 'perspectives'
  | 'number8'
  | 'number9';

interface IProjectIcon {
  iconType: TIconType;
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
      {iconType === 'leftArrow' ? (
        <BsFillArrowLeftCircleFill size={size} />
      ) : null}
      {iconType === 'rightArrow' ? (
        <BsFillArrowRightCircleFill size={size} />
      ) : null}
      {iconType === 'perspectives' ? <BsEyeSlashFill size={size} /> : null}
      {iconType === 'number8' ? <TbCircle8 size={size} /> : null}
      {iconType === 'number9' ? <TbCircle9 size={size} /> : null}
    </>
  );
};

export default ProjectIcon;
