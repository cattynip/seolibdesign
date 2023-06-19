import { NextPage } from 'next';
import Separator from '@components/Separator';
import Section from '@components/Section';
import Anchor from '@components/Anchor';
import { motion } from 'framer-motion';

const Home: NextPage = () => {
  return (
    <div>
      <Section delay={0.2}>
        <h1 className={'text-3xl font-extrabold pb-3'}>
          Seol IB Design Website
        </h1>
        <p>
          This is a website that is introducing about my Design Works on&nbsp;
          <Anchor href="https://www.bodwell.edu/" target="_blank" colored>
            Bodwell
          </Anchor>
        </p>
      </Section>

      <Separator />

      <Section delay={0.4} title="About Me">
        <div className="w-full flex flex-col-reverse justify-between items-center sm:items-start md:items-center md:flex-row">
          <p className="text-left md:text-left sm:text-center w-full">
            Hello, I am Seol SO from South Korea. I have been attending&nbsp;
            <Anchor href="https://www.bodwell.edu/" target="_blank" colored>
              Bodwell
            </Anchor>
            , Canada Private High School since September 1, 2022, as a student
            who loves to write Codes and Build Services. In the Design 8B class,
            which has been led by Mr. Gunn, I have been doing a lot of projects,
            such as the Magazine Project, and the GB House Project. And I am and
            will be working hard on the Design assignments and projects to be
            improved much better as a level of design.
          </p>
          <div className="m-auto">
            <motion.img
              initial={{
                scale: 1,
                zIndex: 0,
                y: 0
              }}
              whileHover={{
                scale: [1, 0.9, 1.3, 1.25],
                zIndex: [0, 0, 0, 10],
                y: [0, -40, -30, -35],
                transition: {
                  type: 'spring',
                  bounce: 0.6,
                  duration: 0.4
                }
              }}
              src="/me.jpeg"
              className="shadow-2xl rounded-full mb-7 md:mb-0 mx-auto w-auto md:w-auto sm:w-2/5"
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;
