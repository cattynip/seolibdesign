import { IProjectData } from './data';
import { IPostData } from './websiteData';

const HouseData: IProjectData<IPostData> = {
  title: 'House',
  description: 'The Project to build and make it with real meterail',
  shortDescription: 'The Project to build 3D and make it with real material.',
  link: '/house/v2',
  iconType: 'house',
  finished: true,
  data: {
    threeD: {
      title: '3D Model',
      shortDescription: 'How does 3D model look like?',
      datas: [
        {
          content: 'Helo'
        },
        {
          threeD: {
            src: {
              mtlSrc: '/house/obj.mtl',
              objSrc: '/house/tinker.obj'
            },
            explaination: 'This is the 3D model of the hosue.'
          }
        }
      ]
    }
  }
};

export default HouseData;
