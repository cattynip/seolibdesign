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

/* eslint-disable @typescript-eslint/no-explicit-any */
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
  house: HolidayHouseData
};

export default ProjectsData;
