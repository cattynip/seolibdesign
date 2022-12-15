import { IProjectData } from './data';

export type TMagazineArea = 'all' | 'cover' | 'middle' | 'back';
export const MagazineAreasArray: TMagazineArea[] = [
  'all',
  'cover',
  'middle',
  'back'
];
export type TMagazinePart =
  | 'description'
  | 'initial'
  | 'intermediate'
  | 'final';
export const MagazinePartsArray: TMagazinePart[] = [
  'description',
  'initial',
  'intermediate',
  'final'
];
export interface IMagazinePart {
  explaination: string;
  imageUrls: string[] | string[][];
}

interface IMagazineData {
  name: string;
  kind: TMagazineArea;
  description: string;
  initial: IMagazinePart;
  intermediate: IMagazinePart;
  final: IMagazinePart;
}

export const MagazineDataCover: IMagazineData = {
  kind: 'cover',
  name: 'Cover Page',
  description:
    'This section is about the Cover Page of the magazine. The cover page has just one page. Because people can see this part at the first time befor reading them, it is pretty important to hook them and this is also why many cover page of magazines in the market are exaggerated.',
  initial: {
    explaination:
      'When I was creating the 3 initial drafts first, I created structure and added the elements, watching the other magazines from the platforms that I can be inspired such as Google, Pinterest and etc. Because I did not know how to create the design of the magazine properly and what I should make these drafts based on. I created 3 initial drafts, focusing on the part of title  "INTERACTING". And all of the magazine drafts, there is the same cover picture of a family eating a meal together which the client wanted. In the first one, I added the word "INTERACTING" with the orange line. This word will be extra bold with max text size. On the line, I added the small word "FAMILY". This word will be a little bit thin in text size. The reason that I added the difference in text size of the parts of the title is that I judged that the word "INTERACTING" is more important than "FAMILY"  In the second one, I added a shadow under the title for making the audience see the titles and pictures individually. All of the texts are white, and the word "INTERACTING" is extra bold with max text size. And the word "FAMILY" is middle text size and a little bit thin. The two orange lines are between the titles and below the title. The first time, I did not add the line, but it become cooler after adding the lines. In the third one, I added a box on the top with the word "FAMILY" and a shadow box on the bottom with the word "INTERACTING" like the previous draft. The shadow box has a gradient shadow from black to transparent(the direction is from bottom to top).',
    imageUrls: ['/cover/1-1.jpeg', '/cover/1-2.jpeg', '/cover/1-3.jpeg']
  },
  intermediate: {
    explaination:
      'Fortunately, I was able to create the 2 intermediate drafts easily after receiving feedback from my client. He evaluated and liked the first draft and the structure of the titles, and the lines. And he gave me a solution which is to make this magazine to include pictures which a family eating the meal together, making a good memory. In the first one, it is almost same as the first one among the 3 initial drafts of Cover page. This is because, as you can see, he said that the first draft of Cover Page is quite good. So, I just added a small box on the word "FAMILY" which is a part of the title in the first draft for recommending the other design and developing the specification of the design. Except it, all of that is same. In the second one, it is combine of the first and the second draft of the initial drafts. I added the word "FAMILY" on the top with some shadow like the second one of the initial draft, and the word "INTERACTING" on the bottom with a box like last initial drafts. And, I added a box which shows to readers the topics that this magazine will be treating on top of the word "INTERACTING".',
    imageUrls: ['/cover/2-1.jpeg', '/cover/2-2.jpeg']
  },
  final: {
    explaination:
      'This is the FINAL DRAFT of the COVER PAGE. It is the same as the first draft of intermediate drafts. By the way, the shaded part is the place where the picture which my client wanted will be The reason that I created is that he explained that he liked the structures of the titles and the line which is placed between the titles. So, I removed the shadow section and added a box on the word "FAMILY" for checking whether he liked it or not. Fortunately, he liked it, and I decided on this final draft. And in case of the image, I showed the 5 images that I found in the google image result that was searched by the sentence "eating family images", and make him pick one image for the Cover page. And as a result, this image that you can see in below was decided by my client well.',
    imageUrls: ['/cover/3.jpeg']
  }
};

export const MagazineDataMiddle: IMagazineData = {
  kind: 'middle',
  name: 'Middle Pages',
  description:
    'This section is about the Middle Page of the magazine. In the middle part, it is treating what the reporter, writer and creator want to convey. They usually convey using many texts and well-organized paragraphs, sometimes pictures and photographs which are good tools to convey and make the reader keep reading this magazine.',
  initial: {
    explaination:
      'These are the 3 initial drafts. I added elements, and structures in the middle pages and organized them suitably, thinking about how I should add these things in the middle pages and how the reader can read this magazine more easily. And, I merged the 2 sections, "How to have more interact" and "How to void fight". Because there were treating about similar and there is a small place to treat all of them in the middle page. But, the mount of the content will not be changed. I separated each section for organizing and filling the texts and pictures half and half. I added 1 image for each section. In the first one, I added a universal part of a magazine. And I added the title "FAMILY INTERACTING" in the first of the middle pages. In the second one, I added separated titles on both sides of the middle pages. And I changed from the check box for each section to the number of the list of sections. And I moved the title of the fourth section from right to left, but my client explained me that is bad. In the last one, I maintain all of the organization and just added `abstract` part at the under of the title which is placed at left.',
    imageUrls: [
      ['/middle/1-1-1.jpeg', '/middle/1-1-2.jpeg'],
      ['/middle/1-2-1.jpeg', '/middle/1-2-2.jpeg'],
      ['/middle/1-3-1.jpeg', '/middle/1-3-2.jpeg']
    ]
  },
  intermediate: {
    explaination:
      'These are the 2 intermediate drafts. I think that this part is the most successful draft I have made. (Especially, the last one.) In the first one, I changed 2 parts. One is the capitalization of the titles of the sections. The reason that I developed like this is that the titles of the previous version did not fit. (More further, it did not look like the title. I want to make it say `I AM TITLE!`) The other one is the organization of the last section because I have not known the contents of the magazine, but it looked like a section for comparing about two topics, Family and Friends. In the last one, I developed new structures. As you can see, I put the pictures in the middle and the text on the sides. And I merged the third and the fourth section into the section titled "TWO ADVICES". This is because when I put the pictures in the middle, the short sections were a little bit complicated. So, I merged them, and put the two pictures about the two topics under the sections.',
    imageUrls: [
      ['/middle/2-1-1.jpeg', '/middle/2-1-2.jpeg'],
      ['/middle/2-2-1.jpeg', '/middle/2-2-2.jpeg']
    ]
  },
  final: {
    explaination:
      'This is the FINAL DRAFT of the COVER PAGE. My client wanted to add the first page of the first draft drafts and the second page of the second draft of the 2 intermediate drafts into the middle page. So, I constructed what my client wanted. So, as you can see, these drafts are pretty similar to 2 intermediate drafts. I showed the All of the images (Family eating dinner(5), fighting(5), taking care of their parents(6) and etc.) and make him pick one.',
    imageUrls: [['/middle/3-1.jpeg', '/middle/3-2.jpeg']]
  }
};

export const MagazineDataBack: IMagazineData = {
  kind: 'back',
  name: 'Back Page',
  description:
    'This section is about the Back Page of the magazine. As much as it is end part and the readers can read this part at the end of reading, it usually contains conclusion or resources of the whole magazine. Since it contains conclusions and has chance to hook them, it is as important as the cover page.',
  initial: {
    explaination:
      'These are the 3 initial drafts. Overall, I added Sources that this magazine used in all of the 3 initial drafts. Because I thought that the best place that Sources are is the Back pages. In the first one, I created it same as the one of the drafts about the Cover page. As you can see drafts on the Cover page, I added Shadows in the titles, and image with full-size. And in the bottom, I added Sources of Paragraphs and Images that this magazine used. In the second one, I developed the Conclusion box in the middle of the Back page. One thing that I regret about is I did not develop the title like "Conclusion". If I added the title, it will be more easy to watch. In the Conclusion box, there will be filled with the contents that the author(maybe or the client) want to convey or could not convey in the middle pages. In the third one, I developed a different way to conclude. It is like a Chatting Application, this section is treating about the topics that this magazine treated by chatting the reader and someone. Considering the readers that the client expected are young, I believe that this decision was good.',
    imageUrls: ['/back/1-1.jpeg', '/back/1-2.jpeg', '/back/1-3.jpeg']
  },
  intermediate: {
    explaination:
      'These are the 2 intermediate drafts. I moved the Source Section from the bottom to the top in the first one. I thought it will make the magazine cooler, but after moving the position of the box, I need to develop more. The Conclusion box and the background image are the same as the previous ones. In the second one, I removed the Back page title and background images. This is because the Conclusion box is for making a conclusion, so I need to make it simple to make readers easy to see. Instead of removing the background image, I added thank image or the image that the client want to attach.',
    imageUrls: ['/back/2-1.jpeg', '/back/2-2.jpeg']
  },
  final: {
    explaination:
      'This is the FINAL DRAFT of the COVER PAGE. The response of my client about 2 intermediate drafts is to include a background image of the first draft and the structures of the second draft. So, I just combined and designed them. I felt that this part that I created as the final draft of the back page is the easiest part. I think that the reason that I created this well is the response of my client was easy to solve and apply.',
    imageUrls: ['back/3.jpeg']
  }
};

const MagazineProjectData: IProjectData<IMagazineData> = {
  title: 'Magazine',
  description:
    'This is a project which is to develop and design the perfect magazine what my client want to make. For this, I had made 3 initial, 2 intermediate and last one final drafts for each sections which are Cover, Middle(Main) and Back pages.',
  shortDescription:
    'The project to design and develop the magazine for the client.',
  link: '/magazine',
  iconType: 'magazine',
  finished: true,
  data: {
    cover: MagazineDataCover,
    middle: MagazineDataMiddle,
    back: MagazineDataBack
  }
};

export default MagazineProjectData;
