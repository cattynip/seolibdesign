import { TIconType } from '@components/ProjectIcon';
import HolidayData from './holidayHouseData';
import MagazineProjectData from './magazineData';
import PerspectivesData from './perspectivesData';
import WebsiteProjectData from './websiteData';

type TProjects = 'magazine' | 'website' | 'holiday' | 'perspectives';

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
  holiday: HolidayData,
  perspectives: PerspectivesData
};

export default ProjectsData;
