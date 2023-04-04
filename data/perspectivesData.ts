import { IProjectData } from './data';
import { IPostData } from './websiteData';

const PerspectivesData: IProjectData<IPostData> = {
  title: 'Perspectives',
  description:
    'This is a project which is to understand what different type of perspectives are and learn how to make distance and depth betwwen objects with perspective, lastly be able to tell a story with them.',
  shortDescription:
    'The Project to understand what the perspectives are and make perspectives to make distance and depth between the objects.',
  link: '/9/perspectives',
  iconType: 'perspectives',
  finished: true,
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
