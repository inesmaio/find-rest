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
  justify-content: center;
  line-height: 20px;
`
export const ListItems = styled.li`
  width: 220px;
  height: 220px;
  margin: 20px;
  padding: 15px 40px;

  border-radius: 8px;
  appearance: none;
  border: 0px ;
  background: linear-gradient(145deg, #ffffff, #e6e6e6);
  box-shadow:  7px 7px 40px #bfbfbf,
               -7px -7px 40px #ffffff;

  cursor: pointer;
  &:hover{
    background: linear-gradient(145deg, #e6e6e6, #ffffff);
    box-shadow:  7px 7px 14px #c2c2c2,
                -7px -7px 14px #ffffff;
  }
  &:active{
    background: #ffffff;
    box-shadow: inset 7px 7px 14px #c2c2c2,
                inset -7px -7px 14px #ffffff;
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
