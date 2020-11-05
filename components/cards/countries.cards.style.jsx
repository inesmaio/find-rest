import styled from "styled-components";

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  background: #b0cfc5;
  color: #385f71;
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
  width: 300px;
  height: 300px;
  margin: 30px;
  padding: 15px 40px;

  border-radius: 8px;
  appearance: none;
  border: 0px ;
  background: #b0cfc5;
  box-shadow:  9px 9px 25px #97b2a9, 
               -9px -9px 25px #c9ece1;
`
export const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #b28706
`
export const Flags = styled.img`
    margin: 4px;
`
