import { IProjectData } from './data';
import { IPostData } from './websiteData';

const PerspectivesData: IProjectData<IPostData> = {
  title: 'Perspectives',
  description: 'The Project to build and make it with real material.',
  shortDescription: 'The Project to build 3D and make it with real material.',
  link: '/perspectives',
  iconType: 'perspectives',
  finished: false,
  data: {
    images: {
      title: 'Images',
      shortDescription: "This is just for the teacher's request.",
      datas: [
        {
          image: {
            src: '/perspectives/first.png',
            explaination: 'First'
          }
        },
        {
          image: {
            src: '/perspectives/second.png',
            explaination: 'Second'
          }
        },
        {
          image: {
            src: '/perspectives/third.png',
            explaination: 'Third'
          }
        },
        {
          image: {
            src: '/perspectives/fourth.png',
            explaination: 'Fourth'
          }
        },
        {
          image: {
            src: '/perspectives/fifth.png',
            explaination: 'Fifth'
          }
        }
      ]
    }
  }
};

export default PerspectivesData;
