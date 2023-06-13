import { styled } from 'styled-components';

export default function Home() {
  return (
    <Holder>
      <Title>Home</Title>
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
  background-color: #4b5e35;
`;

const Title = styled.div`
  font-size: 5em;
  color: white;
`;
