import { TIconType } from '@components/ProjectIcon';
import HolidayHouseData from './holidayHouseData';
import MagazineProjectData from './magazineData';
import WebsiteProjectData from './websiteData';

type TProjects = 'magazine' | 'website' | 'house';

type IProject = {
  [key in TProjects]: IProjectData;
};

export interface IProjectDataEnum<T> {
  [key: string]: T;
}

export interface IProjectData<T = any> {
  title: string;
  description: string;
  shortDescription: string;
  link: string;
  iconType: TIconType;
  finished: boolean;
  data: IProjectDataEnum<T>;
}

const ProjectsData: IProject = {
  magazine: MagazineProjectData,
  website: WebsiteProjectData,
  house: {
    title: 'Holiday House',
    description: 'This is a project which is to holiday house.',
    shortDescription: '',
    link: '/holiday-house',
    iconType: 'house',
    finished: false,
    data: {}
  }
};

export default ProjectsData;
