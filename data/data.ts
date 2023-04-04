import { TIconType } from '@components/ProjectIcon';
import HolidayData from './holidayHouseData';
import MagazineProjectData from './magazineData';
import WebsiteProjectData from './websiteData';
import PerspectivesData from './perspectivesData';

export type TGrades = 8 | 9;
export type TProjects8 = 'magazine' | 'website' | 'holiday';
export type TProjects9 = 'perspectives';

type IProject8 = {
  [key in TProjects8]: IProjectData;
};

type IProject9 = {
  [key in TProjects9]: IProjectData;
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

const ProjectData8: IProject8 = {
  magazine: MagazineProjectData,
  website: WebsiteProjectData,
  holiday: HolidayData
};

const ProjectData9: IProject9 = {
  perspectives: PerspectivesData
};

const ProjectData = {
  ProjectData8,
  ProjectData9
};

export default ProjectData;
