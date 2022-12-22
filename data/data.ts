import { TIconType } from '@components/ProjectIcon';
import MagazineProjectData from './magazineData';
import WebsiteProjectData from './websiteData';

type TProjects = 'magazine' | 'website';

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
  website: WebsiteProjectData
};

export default ProjectsData;
