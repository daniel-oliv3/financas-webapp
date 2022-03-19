import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors};
`;
export default function Home() {
  return <Title>Olá, Mundo!</Title>
}

