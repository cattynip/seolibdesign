import { IProjectData } from './data';

export interface IWebsiteData {
  title: string;
  shortDescription: string;
  datas: {
    sectionTitle?: string;
    content?: string;
    image?: {
      src: string;
      explaination: string;
    };
  }[];
}

const WebsiteProjectData: IProjectData<IWebsiteData> = {
  title: 'Website',
  description:
    'This project is to build and develop a beautiful website to show what I have done in Design 8B class. Unlike others, I did not build this website based on the platform called "Weebly" which Mr. Gunn recommended. Let\'s go to know why I did.',
  shortDescription:
    'The project to design and develop the magazine for the client.',
  link: '/website',
  iconType: 'website',
  finished: true,
  data: {
    introduction: {
      title: 'Introduction',
      shortDescription: 'What is it?',
      datas: [
        {
          content:
            'This website project is to build and develop a place for introducing and showing what I have done in Design 8D class and my thoughts.'
        }
      ]
    },
    reason: {
      title: 'Reason',
      shortDescription: 'Why did I build it?',
      datas: [
        {
          content:
            'At the first time when I had to create a website based on the platform called "Weebly" since it was my assignment, I thought a website that was created by Weebly has no difference from just a document page. The reason why I thought like that is that the websites which were created by Weebly do not have any animations or characteristics that most websites should have generally. Additionally, that platform is too hard to control the HTML DOM Elements organically. So, I decided to build a website to make differences to the other student\'s websites and asked to to build a website indiviually for my design class teacher.'
        }
      ]
    },
    trust: {
      title: 'Trust',
      shortDescription: 'Can you trust me?',
      datas: [
        {
          content:
            'So many people, including even my mom and dad, always say that I have been using templates when they see the websites that I have built. Whenever I heard like that I was sad because they ignore my effort to my results in a short time without trying to evaluate them. That is the same why as why I add the "GitHub" link, commit, make a branch and merge the result whenever I am done with something. Mr. Gunn, please trust me. This website is made from my fingertips.'
        }
      ]
    },
    develop: {
      title: 'Development',
      shortDescription: 'Deep information',
      datas: [
        {
          sectionTitle: 'Framework',
          content:
            "The framework that this website is based on is Next.js which was designed by Vercel. The reason that I choose Next.js as a framework is that I have wanted to build this website very systemically, since it is a 'framework', not a 'library'. Additionally, I also wanted to add a lot of animations and high-quality designs to it as much as the reason that I decided not to use Weebly was cuased by its lack of animation. And it has many kinds of libraries because Next.js is based on React.js that has a huge community of libraries."
        },
        {
          sectionTitle: 'Style Managment Framework',
          content:
            'In the case of Style Management Framework, I choose Tailwind CSS for the first time as much as most Next.js projects are using Tailwind CSS as a style management framework. Hoewever, every time I added styles, it has some disadvantages, such as reading the class name is too hard, and technical glitches. Hence, I changed from Tailwind CSS to Chakar UI, with my thinking of wanting to use and study the other style management framework.'
        },
        {
          sectionTitle: 'Additional Libraries',
          content:
            'As you can see in the previous paragraphs, I wanted to add many animations, deisgns, and things that the other student can not do with Weebly. Therefore, I plugged the libraries, such as Framer Motion or Three.js for the performanceses of this website. Framer Motion is the library that allows me to use the animations. As you know, when you enter any page, you would be able to recognize that the sections come from bottom to top with the animation, including their opacity. These features can be worked, thanks to Framer Motion. In Holiday House Project, that page is using 3D model renderer, since the project was to render a 3D house model and make it with real snacks. At this part that is to render the model, it uses the Three.js that allows me to build, render, and make 3D models.'
        }
      ]
    }
  }
};

export default WebsiteProjectData;
