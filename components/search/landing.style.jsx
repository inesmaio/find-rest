import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 100vw;
  min-height: 100vh;
`;

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  width: 80vw;
`
export const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
`
export const Title = styled.h1`
  font-size: 40px;
  text-shadow: 5px 5px 10px #F2F7F6;
  text-align: center;
  color: #a95a4c;
`
export const PopUpCointainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(176, 207, 197, 0.6);
  position: absolute;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`