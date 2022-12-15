import MagazineProjectData from './magazineData';

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
  iconType: string;
  finished: boolean;
  data: IProjectDataEnum<T>;
}

const ProjectsData: IProject = {
  magazine: MagazineProjectData,
  website: {
    title: 'Website',
    description: 'This is a project which is to build a website.',
    shortDescription:
      'The project to build and deploy the website to show the results.',
    link: '/website',
    iconType: 'website',
    finished: false,
    data: {}
  },
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
