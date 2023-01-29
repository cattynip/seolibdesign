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
    introduction: {
      title: 'Why version 2?',
      shortDescription: 'Why does the version 2 exist?',
      datas: [
        {
          content:
            'The reason why the version 2 of the house project exists is because I actually pretened the workflow of this design class. I thought the Holiday House Project that is uploaded in the first version would be marked, but it was just for fun to celebrate Christmas, and the model was not for that, but this project. Since that model was based on snack town, I had to build a new one with a right goal. Unfortunately, when I asked to Mr. Gunn if I can over write the document one more, he answered that I have to make the version 2 of it. So, that is why the version 2 exists.'
        }
      ]
    },
    result: {
      title: '3D Model',
      shortDescription: 'How does the 3D model look like?',
      datas: [
        {
          threeD: {
            src: {
              mtlSrc: '/house/obj.mtl',
              objSrc: '/house/tinker.obj'
            },
            explaination: 'This is the 3D model that I made.'
          }
        }
      ]
    },
    explaination: {
      title: 'Explaination',
      shortDescription: 'Let me explain what it is!',
      datas: [
        {
          content:
            'This model is what I made after the holiday house model. While the holiday houe model was for snacks, this model is for cardboard and glue. It means that I could make a model undoable with the snacks. So, as you can see, it is floating! The general theme is `The House In Nature.`'
        },
        {
          sectionTitle: 'What I wanted',
          content:
            "I wanted to make a house that I want to live in. In my case, I want to live on a simple-designed house that has one master room in nature like the holiday house project. So, I make the all walls and doors white. The reason why is because it looks like just a white box. For more detailed information, Let's go"
        }
      ]
    },
    detailed: {
      title: 'Detailed',
      shortDescription: 'More Details',
      datas: [
        {
          threeD: {
            src: {
              mtlSrc: '/house-without-ceiling/obj.mtl',
              objSrc: '/house-without-ceiling/tinker.obj'
            },
            explaination: 'This is a model without ceiling.'
          }
        },
        {
          sectionTitle: 'What I have focused',
          content:
            'As you can see from this model, I did not focus the appearance of outsider of this hosue, since I do not think that it is important. However, as much as I believe that inside of it is important, I actually focused on that, and made changes a lot on the inside.'
        },
        {
          sectionTitle: 'Stair',
          content:
            'It has no doors for entering. So, in this house, you have to use the other method to get into the house. (Yes, it is weird. Because it is not for someone else who I do not know, but just me.) Considering that I often do not go outside, the area for entering and comming does not need to exist. What I choose for it was `stair`. After you park your car, you have to use stair that is placed at the bottom of this house. If you come to the house, you would be able to see...'
        },
        {
          sectionTitle: 'Living Rooms',
          content:
            "I do not know what it is called properly, but I decided to say it living room, since it is big enough to be called living room. The living room(s) are placed at the side of this house. I did not put anything on it, because it is a model literally. I think that model is jsust for showing the structure, not the detailed. I agree with that model can showing the detailed, but in this time, it is not for that. Anyway, you can put a television or sofa at the left side of it, or books inside of shelves. There is no reason why there are 2 living rooms, but it appears when I put the stair on it to make a differences to the other students'house."
        },
        {
          sectionTitle: 'Halways',
          content: ''
        },
        {
          sectionTitle: 'Washroom',
          content: ''
        },
        {
          sectionTitle: 'Master Room',
          content: ''
        },
        {
          sectionTitle: 'Mistake',
          content:
            "I have made many mistakes. At all first, I did not make any windows to my model. How does it make sense without any windwos in there? And how did I never think about it? I found this mistake after finishing building the model, and I laughed. I was able to edit the model with windows, but I did not do that, since I thought that the model that I made and the model that I built must have no changes. The second mistake that I made is that it has no beautify outside of it. For example, the other student's model is a church, or a mini house in clouds. But mine is just white retengle house with no colour or organic structure. That is what I focused, simple and inside of it, but I think it might be weird."
        }
      ]
    }
  }
};

export default HouseData;
