import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
  background: #b0cfc5;
  color: #385f71;
`;

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
  background: #b0cfc5;
  color: #385f71;
`
export const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  background: #b0cfc5;
  color: #385f71;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: normal;
  margin: 20px;
  width: 20vw;
`;

export const Title = styled.h1`
  font-size: 40px;
  text-shadow: 5px 5px 10px #F2F7F6;
  text-align: center;
  color: #a95a4c;
`