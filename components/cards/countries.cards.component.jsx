import React from "react";
import styled from "styled-components";

const ContainerColumn = styled.section`
  display: flex;
  flex-direction: column;
  background: #b0cfc5;
  color: #385f71;
  padding: 0 20px;

`
const List = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  line-height: 20px;
`
const ListItems = styled.li`
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
const SubTitle = styled.h2`
  font-size: 20px;
  text-align: center;
  color: #b28706
`
const Flags = styled.img`
    margin: 4px;
`

//----------- Logic --------------

const CountryCard = ({
    countriesArray,
    funcGetFlag
}) => {
    return (
        <ContainerColumn>
            <List>
                {countriesArray.map((country) => <ListItems key={country.name}>
                    <SubTitle><strong>{country.name}</strong></SubTitle><br />
                    <strong>Country Capital</strong> {country.capital}<br />
                    <strong>Region</strong> {country.region}<br />
                    <strong>Population</strong> {country.population}<br />
                    <strong>Currency</strong> {country.currencies} {country.currenciesSymbol}<br />
                    <strong>Borders</strong><br /> {funcGetFlag(country.borders).map((linkToFlag, i) => <Flags src={linkToFlag} key={linkToFlag} width="30px" height="20px" />)}
                </ListItems>)
                }
            </List>
        </ContainerColumn>
    )
}

export default CountryCard