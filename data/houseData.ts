import { IProjectData } from './data';
import { IPostData } from './websiteData';

const HouseData: IProjectData<IPostData> = {
  title: 'House',
  description: 'The Project to build and make it with real material.',
  shortDescription: 'The Project to build 3D and make it with real material.',
  link: '/house/second',
  iconType: 'house',
  finished: true,
  data: {
    introduction: {
      title: 'Why version 2?',
      shortDescription: 'Why does the version 2 exist?',
      datas: [
        {
          content:
            'The reason why version 2 of the house project exists is that I pretended the workflow of this design class. I thought the Holiday House Project that is uploaded in the first version would be marked, but it was just for fun to celebrate Christmas, and the model was not for that, but for this project. Since that model was based on snack town, I had to build a new one with the right goal. Unfortunately, when I asked Mr. Gunn if I could overwrite the document one more, he answered that I have to make version 2 of it. So that is why version 2 exists.'
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
            'This model is what I made after the holiday house model. While the holiday house model was for snacks, this model is for cardboard and glue. It means that I could make a model undoable with the snacks. So, as you can see, it is floating! The general theme is `The House In Nature.`'
        },
        {
          sectionTitle: 'What I wanted',
          content:
            "I wanted to make a house that I want to live in. In my case, I want to live in a simple-designed house that has one master room in nature like the holiday house project. So, I make the all walls and dorrs white. The reason why is that it looks likejust a white box. For more detailed informatio, Let's go"
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
            explaination: 'This is a model without a ceiling.'
          }
        },
        {
          sectionTitle: 'What I have focused',
          content:
            'As you can see from this model, I did not focus on the appearance of outsiders in this house, since I do not think that it is important. However, as much as I believe that the inside of it is important, I focused on that and made changes a lot on the inside.'
        },
        {
          sectionTitle: 'Stair',
          content:
            'It has no doors for entering. So, in this house, you have to use the other method to get into the house. (Tes, it is weird. Because it is not for someone else whom I do not know, but just me.) Considering that I often do not go outside, the area for entering and coming does not need to exist. What I choose for it was `stair.` After you park your car, you have to use the stair that is placed at the bottom of this house. If you come to the house, you will be able to see...'
        },
        {
          sectionTitle: 'Living Rooms',
          content:
            "I do not know what it is claled properly, but I decided to say it living room since it is big enough to be called the living room. The living room(s) are placed at the side of this house. I did not put anything on them, because it is a model literally. I think that model is just for showing the structure, not the details. I agree with that model can be shown the detailed, but at this time, it is not for that. Anyway, you can put a television or sofa on the left side of it, or books on the shelves. There is no reaon why there are 2 livng rooms, but it appears when I put the stair on it to make a difference to the other students' house"
        },
        {
          sectionTitle: 'Hallways',
          content:
            'As soon as the master room was made, the two hallways were made between the room and the walls beside it. As much as I do not like cooking something, the kitchen part ended up with an area for it (a table) at the front of the room.'
        },
        {
          sectionTitle: 'Washroom',
          content:
            'Right backward of the stair. there is a washroom. That is the thing that I added lastly after making whole parts of the model, since I totally forgot about the existence of the washroom that everyone, including me, needs.'
        },
        {
          sectionTitle: 'Master Room',
          content:
            'MASTER ROOM! This room is the most important, interesting and indentifying part of this house. The benefit of this room exists is that it can make many routes to get somewhere from somewhere in this house. For example, if I want to enter that master room, I can enter from the kitchen or the other side. In the same way, I can go to the washroom from the master room, through the kitchen side or the other side. Like this, the master room can give a diverse experience to the user (who is me). The other benefit of it is that I can focus on one thing without being interrupted. The one thing that this room has is that it does no t have any windows on it. That menas I can focus on something without changing my sight. So, if I live in this house, I would decorate that room with a table and a computer on it, so it can make me focus on one thing. (What I want to say is that I want to make this room as a working room.) It might be helpful for me, since my focusing skill is pretty bad.'
        },
        {
          sectionTitle: 'Mistake',
          content:
            "I have made many mistakes. At all first, I did not make any windows to my model. How does it make sense without any windows in there? And how did I never think about it? I found this mistake after finishin building the physical model, and I laughed. I was able to edit the model with windows, but I did not do that, since I thought that the model that I made and the model that I built musthave no changes. The second mistake that I made is that it has no beauty outside of it. For example, the other student's model is a church or a mini house in clouds. But mine is just a white rectangle house with no colour or organic structure. That is what I focused on, simple and inside of it, but I think it might be weird for the people who are watching this model."
        }
      ]
    }
  }
};

export default HouseData;
