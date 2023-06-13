import { styled } from 'styled-components';

export default function Splash() {
  return (
    <Holder>
      <Title>Splash</Title>
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
`;

const Title = styled.div`
  font-size: 5em;
  color: white;
`;
