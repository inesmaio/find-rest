import styled from "styled-components";

export const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: normal;
  margin: 20px;
  width: 20vw;
`;

export const Form_DropDown = styled.select`
  margin: 15px;
  padding: 15px;

  font-size: 15px;

  resize: none;

  border-radius: 8px;
  appearance: none;
  border: 0px ;
  background: #ffffff;
  box-shadow: inset 7px 7px 14px #c2c2c2,
              inset -7px -7px 14px #ffffff;

  &::placeholder {
    color: brown;
  }

  &:focus {
    outline: 0;
  }
`

export const Form_Lables = styled.label`
  font-size: 20px;
  color: #b28706;
  margin: 15px 0 0 15px;
  
`

export const Form_Inputs = styled.input`
  margin: 15px;
  padding: 15px;

  font-size: 15px;

  border-radius: 8px;
  border: 0px;
  appearance: none;
  background: #ffffff;
  box-shadow: inset 7px 7px 14px #c2c2c2,
              inset -7px -7px 14px #ffffff;
              
  &::placeholder {
    color: #283044;
  }

  &:focus {
    outline: 0;
  }
`;