import Description from '@components/Description';
import PostElement from '@components/PostElement';
import PostImage from '@components/PostImage';
import Section from '@components/Section';
import Separator from '@components/Separator';
import Gallery from '@components/Gallery';
import ThreeDModel from '@components/ThreeDModel';
import { IPostData } from '@data/websiteData';

interface IPostLayout {
  datas: IPostData[];
}

const PostLayout = ({ datas }: IPostLayout) => {
  return (
    <>
      <Section delay={0.4}>
        <div className="w-full pt-3">
          {datas.map((value, index) => (
            <div className="w-full" key={index}>
              <Section delay={0.6}>
                <div className="w-full flex items-center justify-between">
                  <h2 className="text-xl">{value.title}</h2>
                  <Description description={value.shortDescription} />
                </div>
              </Section>
              <div className="flex flex-col items-start justify-center">
                {value.datas.map((content, idx) => (
                  <Section delay={0.8} key={idx}>
                    <div className="py-3">
                      {content.sectionTitle ? (
                        <h3 className="text-lg pb-3">{content.sectionTitle}</h3>
                      ) : null}
                      {content.content ? (
                        <PostElement>{content.content}</PostElement>
                      ) : content.image ? (
                        <PostImage
                          url={content.image.src}
                          explaination={content.image.explaination}
                          key={idx}
                          width={'50%'}
                        />
                      ) : content.threeD ? (
                        <PostElement description={content.threeD.explaination}>
                          <div className="aspect-video">
                            <ThreeDModel src={content.threeD.src} />
                          </div>
                        </PostElement>
                      ) : content.gallery ? (
                        <PostElement description={content.gallery.explaination}>
                          <Gallery images={content.gallery.src} />
                        </PostElement>
                      ) : null}
                    </div>
                  </Section>
                ))}
              </div>
              <Separator />
            </div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default PostLayout;
