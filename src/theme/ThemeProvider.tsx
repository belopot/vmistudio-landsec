//Load lazy image
import 'react-lazy-load-image-component/src/effects/blur.css';

import { ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import Div100vh from 'react-div-100vh';
import styled, {
  createGlobalStyle,
  ThemeProvider as StyledComponentsThemeProvider,
} from 'styled-components';

import { device } from './device';
import theme from './theme';

const GlobalStyle = createGlobalStyle`

  body {
    color: #212121;
    font-Size: 16px;
    font-family: "century-gothic";
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    touch-action: pan-x pan-y;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    //user-select: none;
  }

  *::-webkit-scrollbar {
    width: 12px;
  }

  *::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #6b8fa3;
    border-radius: 10px;
    border: 3px solid #f1f1f1;
  }

  a {
    text-decoration: none;
  }
`;

const MobileContainer = styled(Div100vh)`
  width: 100vw;
  font-size: 0.9em;
  position: relative;
`;

const DesktopContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-size: 1em;
  position: relative;
  overflow-x: hidden;
  @media ${device.laptop} {
    font-size: 1.2vw;
  }
  @media ${device.pad} {
    font-size: 0.9em;
  }

  @media (max-width: 768px) {
    height: auto;
  }
`;

type Props = {
  children: ReactNode;
};

export default function ThemeProvider(props: Props) {
  const { children } = props;
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyle />
      {isMobile ? (
        <MobileContainer> {children} </MobileContainer>
      ) : (
        <DesktopContainer> {children} </DesktopContainer>
      )}
    </StyledComponentsThemeProvider>
  );
}
