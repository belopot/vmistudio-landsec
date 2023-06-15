import useMeasure from 'react-use-measure';
import { styled } from 'styled-components';
import { Mousewheel } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image1 from '../../assets/pictures/story-1.jpg';
import Image2 from '../../assets/pictures/story-2.jpg';
import Image3 from '../../assets/pictures/story-3.svg';

export default function Story() {
  const [ref, { width, height }] = useMeasure();

  return (
    <Holder ref={ref}>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={0}
        mousewheel={true}
        modules={[Mousewheel]}
      >
        <SwiperSlide>
          <Section h={height}>
            <Pic1 src={Image1} alt="pic1" />
            <Label1>
              We build and invest in buildings, spaces and partnerships to create
              sustainable places, connect communities and realise potential. We are one of
              the largest real estate companies in Europe, with a portfolio of retail,
              leisure, workspace and residential hubs.
            </Label1>
            <Label2>
              We strive to connect communities, realise potential and deliver sustainable
              places.
            </Label2>
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section h={height} className="flex">
            <div className="flex-1 p-8 flex flex-column justify-content-between">
              <div>
                <ValueForm>
                  <span>£10.2</span> <span>portfolio value</span>
                  <p>billion</p>
                </ValueForm>
                <ValueForm className="mt-8">
                  <span>24.6</span> <span>portfolio sq ft</span>
                  <p>Million</p>
                </ValueForm>
              </div>
              <div className="w-full flex justify-content-end">
                <Label3 className="text-right">
                  We’re shaping a better future by leading our industry on environmental
                  and social sustainability while delivering value for our shareholders,
                  great experiences for our guests and positive change for our
                  communities.
                </Label3>
              </div>
            </div>
            <Pic2 src={Image2} alt="pic2" />
          </Section>
        </SwiperSlide>
        <SwiperSlide>
          <Section h={height} className="flex">
            <div className="flex-1 p-8 flex flex-column gap-8">
              <div>
                <Label4>our strategy</Label4>
                <Label5>
                  We drive business growth by focusing on our areas of competitive
                  advantage, underpinned by our purpose and our balance sheet strength.
                </Label5>
              </div>
              <div>
                <Label4>Our Purpose</Label4>
                <Label5>
                  sustainable places. Connecting communities. Realising potential.
                </Label5>
              </div>
              <div>
                <Label4>our places</Label4>
                <Label5>
                  We own and manage some of the most memorable real estate in the UK. Our
                  £10.2 billion portfolio spans 23.4 million sq ft (as at 31 March 2023)
                  of well-connected retail, leisure, workspace and residential hubs.
                </Label5>
              </div>
              <div>
                <Label4>central london</Label4>
                <Label5>
                  In central London, we develop, own and manage offices that offer a
                  variety of propositions to meet the evolving needs of occupiers, who
                  range from global corporates to small, fast-growing businesses.
                </Label5>
              </div>
            </div>
            <Pic1 src={Image3} alt="pic3" />
          </Section>
        </SwiperSlide>
      </Swiper>
    </Holder>
  );
}

const Holder = styled.div`
  width: 100%;
  height: 100%;
  background-color: #94a3b5;
`;

interface SectionProps {
  h?: number;
}

const Section = styled.section<SectionProps>`
  position: relative;
  height: ${(props) => props.h}px;
  /* background-color: aliceblue; */
  overflow: hidden;
`;

// Section1
const Pic1 = styled.img`
  margin: 5em 0 0 5em;
  height: 90vh;
`;

const Label1 = styled.div`
  position: absolute;
  top: 8%;
  left: 70%;
  width: 20em;
  font-size: 1.5em;
`;

const Label2 = styled.div`
  position: absolute;
  bottom: 5%;
  right: 1em;
  width: 15em;
  font-size: 3em;
  color: #d7a691;
  text-transform: uppercase;
  text-align: right;
`;

// Section2
const Pic2 = styled.img`
  margin: 0;
  height: 100%;
`;

const ValueForm = styled.div`
  > span:nth-child(1) {
    font-size: 5em;
    color: #d6a393;
  }
  > span:nth-child(2) {
    font-size: 1.5em;
    color: #354c5e;
    text-transform: uppercase;
    padding-left: 1.5em;
    font-weight: 400;
  }
  > p {
    font-size: 5em;
    color: #354c5e;
    text-transform: uppercase;
    font-weight: 400;
    letter-spacing: 0.2em;
  }
`;

const Label3 = styled.div`
  width: 20em;
  font-size: 1.5em;
  color: #607b91;
`;

// Section3
const Label4 = styled.div`
  font-size: 3em;
  color: #354c5e;
  text-transform: uppercase;
`;

const Label5 = styled.div`
  width: 30em;
  font-size: 1.5em;
  color: #354c5e;
  text-transform: uppercase;
  line-height: 1.5;
  padding-top: 0.5em;
`;
