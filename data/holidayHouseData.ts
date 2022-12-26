import { IProjectData } from './data';
import { IPostData } from './websiteData';

const HolidayHouseData: IProjectData<IPostData> = {
  title: 'Holiday House',
  description:
    '`Holiday House Project` is to render a 3D model and make the model with real snacks. Unfortunately, I did not do well since I thought and planned with ignoring the concept of this project.',
  shortDescription:
    'The project to render a 3D model and make it with real snacks.',
  link: '/house',
  iconType: 'house',
  finished: true,
  data: {
    threeD: {
      title: '3D Model',
      shortDescription: 'How does 3D Model look like?',
      datas: [
        {
          threeD: {
            src: {
              mtlSrc: '/holiday-house/obj.mtl',
              objSrc: '/holiday-house/tinker.obj'
            },
            explaination: 'This is the 3D holiday house model.'
          }
        }
      ]
    },
    intention: {
      title: 'My Intention',
      shortDescription: 'What was my intention for this?',
      datas: [
        {
          sectionTitle: 'Garden',
          content:
            'The garden, we can divide it into three parts, two sides of the groud, and the grey road. On the two side grouds, they are light pink but they also have white things on it. That is `snow`. The reason why I added the existence of snow was because the theme of this project that I decided on was `winter`. Additionally, to let visitors know who owns this house, I wrote the sentence `Seol GB House`, using the feature of writing that Tinkercad has been providing. Look at the road. As you can guess, the road is for people to be able to come and open the door.'
        },
        {
          sectionTitle: 'The Door',
          content:
            'Unlikely the other houses that we can see easily, this house has a little bit of different and unique door. Most doors have a hinge on the left side or right side, but this door has its hinge in the middle of it. So, when someone enters this room, he/she can enter with two methods, left or right side.'
        },
        {
          sectionTitle: 'Living Room',
          content:
            'The room that you can see inside of it though the blue transparent windows is the biggest room in this house. Basically, it has 3 pretty big windows for each side that the living room. Many people might be able to wonder why I made the windows too big, for answering, I could say that I wanted to make living people can interact with outside since I set the outside nature that is good and nice to see and interact with. I know that it has lack of security, but you do not need to worry about that, because the place of this house is in nature and that is why the master room exists.'
        },
        {
          sectionTitle: 'The Master Room',
          content:
            'In this house, it has a master room that you can not see the inside of it unless you zoom it very large. At that place, you can do something that you can not do in the living room since it has no windows except a back side small window. The means it has enough security.'
        },
        {
          sectionTitle: 'Behind of the House',
          content:
            'If you wait just for 5 seconds, you would be able to see the behind of this house, through the provided model. Behind of it, there is a small and tiny garden with `snow`. In effect, it does not need to be, but the reason was that I wanted to make a place for making two rooms which are the Living room and the master room can interact with each other. For this, the two rooms need someplace not to make them too close. That is also why there are two windows there, facing each other.'
        }
      ]
    },
    snack: {
      title: 'Snack House',
      shortDescription: 'How does real house look like?',
      datas: [
        {
          gallery: {
            src: [
              '/snack-house/front.jpeg',
              '/snack-house/back.jpeg',
              '/snack-house/right.jpeg',
              '/snack-house/left.jpeg',
              '/snack-house/top.jpeg',
              '/snack-house/earthquake.jpeg',
              '/snack-house/trash.jpeg'
            ],
            explaination: 'This is a snack house.'
          }
        }
      ]
    },
    different: {
      title: 'Differences',
      shortDescription: 'Why is it different to the model?',
      datas: [
        {
          content:
            'You might be able to say it is good and I built this house well. However, as you can compare the model, it was too different from the model that I made. The biggest factor that I can only build the house like this was that there was not enough time to build with the specific snacks that I did not think about and think what I should do. Secondly, the model can not be built with the snacks that I received. BUT! it was delicious and it was a good experience for me since I have never tried to do it, and I am sure that I will never do it.'
        }
      ]
    }
  }
};

export default HolidayHouseData;
