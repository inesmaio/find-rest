import styled from "styled-components";

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`
export const ContainerRow = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`
export const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 20px;
`
export const ListItems = styled.li`
  width: 250px;
  height: 250px;
  margin: 30px;
  padding: 15px 40px;

  border-radius: 8px;
  appearance: none;
  border: 0px ;
  background: linear-gradient(145deg, #d7f8ef, #b5d1c9);
  box-shadow:  7px 7px 40px #a5beb7,
               -7px -7px 40px #edffff;

  cursor: pointer;
  &:active{
    background: linear-gradient(145deg, #b5d1c9, #d7f8ef);
    box-shadow:  7px 7px 40px #a5beb7,
                 -7px -7px 40px #edffff;
  }
`
export const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #b28706
`
export const Flags = styled.img`
    margin: 4px;
    box-shadow: 2px 2px 4px;
    border-radius: 4px;
`
