import { styled } from 'styled-components';

import ArrowImage from '../../assets/arrow-down.svg';
import LogoImage from '../../assets/logo.svg';
import BgImage from '../../assets/splash-bg.svg';
import IconButton from '../../components/IconButton';
import { device } from '../../theme/device';

export default function Splash() {
  return (
    <Holder>
      <Logo src={LogoImage} alt="logo" />
      <Title>Explore our portfolio</Title>
      <ArrowButton
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
      </ArrowButton>
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
  @media ${device.pad} {
    font-size: 1.5em;
  }
  @media ${device.mobileL} {
    font-size: 1.3em;
  }
`;

const ArrowButton = styled(IconButton)`
  width: 7em;
  height: 7em;
  padding: 0.5em;
  margin-top: 5em;
`;

const ArrowIcon = styled.img`
  height: 100%;
`;
