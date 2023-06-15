import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

import ArrowImage from '../../assets/arrow-down.svg';
import LogoImage from '../../assets/logo.svg';
import BgImage from '../../assets/splash-bg.svg';
import { device } from '../../theme/device';

export default function Splash() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const navigate = useNavigate();
  return (
    <Holder ref={ref}>
      <Logo src={LogoImage} alt="logo" />
      <Title
        onClick={() => {
          navigate('/story');
        }}
      >
        Explore our portfolio
      </Title>
      <Arrow
        animate={{
          y: [0, -50, 0],
        }}
        transition={{
          ease: 'easeOut',
          duration: 1.5,
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        <ArrowIcon src={ArrowImage} alt="arrow" />
      </Arrow>
    </Holder>
  );
}

const Holder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #354c5e;
  background-image: url(${BgImage});
  background-repeat: no-repeat;
  background-position: right;
  background-size: auto 100%;
`;

const Logo = styled.img`
  width: 25em;
  @media ${device.pad} {
    width: 15em;
  }
  @media ${device.mobileL} {
    width: 10em;
  }
`;

const Title = styled.div`
  font-size: 1.3em;
  color: white;
  margin-top: 1em;
  text-transform: uppercase;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  @media ${device.pad} {
    font-size: 1.5em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
`;

const Arrow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 7em;
  height: 7em;
  padding: 0.5em;
  margin-top: 5em;
`;

const ArrowIcon = styled.img`
  height: 100%;
`;
